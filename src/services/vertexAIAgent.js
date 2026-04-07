// Example: src/services/VertexAIAgent.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Define tools the AI can "call" on behalf of the user
const healiaFunctions = {
  checkUserStreak: async ({ walletAddress }) => {
    // Queries your smart contract or local state
    return { data: { streak: 5, eligibleForMint: false } };
  },
  logMealNutrients: async ({ foodItem, protein, carbs, fats }) => {
    // Saves meal to the database and recalculates daily totals
    return { status: "success", multiplierAdded: 1.2 };
  }
};

const tools = [{
  functionDeclarations: [
    {
      name: "checkUserStreak",
      description: "Returns the current consecutive day streak for a user.",
      parameters: {
        type: "OBJECT",
        properties: { walletAddress: { type: "STRING" } },
        required: ["walletAddress"]
      }
    },
    {
      name: "logMealNutrients",
      description: "Saves nutrient data when a user describes their meal.",
      parameters: {
        type: "OBJECT",
        properties: {
          foodItem: { type: "STRING" },
          protein: { type: "NUMBER" },
          carbs: { type: "NUMBER" },
          fats: { type: "NUMBER" }
        },
        required: ["foodItem"]
      }
    }
  ]
}];

export async function askHealiaAgent(prompt, walletAddress) {
  // Use Gemini 2.0 Flash for lightning-fast agent routing
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", tools });
  const chat = model.startChat();
  
  const result = await chat.sendMessage(prompt);
  const call = result.response.functionCalls()?.[0];
  
  if (call) {
    // If the AI decides it needs to use a tool, we execute it locally
    const functionResult = await healiaFunctions[call.name](call.args);
    
    // We hand the tool's result back to Gemini so it can answer the user
    const finalResult = await chat.sendMessage([{
      functionResponse: {
        name: call.name,
        response: functionResult
      }
    }]);
    
    return finalResult.response.text();
  }
  
  return result.response.text();
}
