import { useState, useCallback, useRef } from 'react';

const MOCK_RESPONSES = [
  "Based on your current streak, I recommend a high-protein breakfast to maintain your energy levels. Try **Smoked Salmon Avocado Toast** — 28g protein, 340 kcal, and rich in Omega-3s.",
  "Great question! For maintaining a 7-day streak, focus on consistency over perfection. Even a nutritious smoothie counts as a healthy meal. Your **Protein Goal** is currently at 75% — you're doing great!",
  "I've analyzed your meal plan for today. You're on track with macros! For dinner, consider **Grass-Fed Steak with Roasted Asparagus** — it will help you hit your daily protein target of 150g.",
  "The Mediterranean diet is scientifically backed for longevity. Foods rich in antioxidants like blueberries, olives, and leafy greens can reduce inflammation markers. Would you like a full weekly Mediterranean meal plan?",
  "Your hydration is currently at 60% of your daily goal. Aim for 800ml more before 6 PM to maintain metabolic efficiency. Hydration directly impacts your HRV and recovery scores on-chain.",
  "For a high-protein, low-carb snack, try **Organic Almonds + Blueberries (20g portion)** — 210 kcal with 6g of protein and essential healthy fats. This fits perfectly in your current caloric window.",
  "Excellent progress on your streak! You're **5 days in** — just 2 more to earn your **1 HLIA token** reward. Stay consistent with verified healthy meals and it will be minted directly to your Sepolia wallet.",
];

let mockIndex = 0;

export function useChat() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      role: 'ai',
      content: "Hello! I'm your Healia AI Assistant powered by Google Gemini. I've analyzed your health profile and current streak. I can help with meal planning, recipe suggestions, and nutritional advice. What would you like to explore today?",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const abortRef = useRef(null);

  const sendMessage = useCallback(async (text) => {
    if (!text.trim() || isLoading) return;

    const userMsg = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Try the Gemini API endpoint (requires VITE_GEMINI_API_KEY in env)
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      if (apiKey) {
        const controller = new AbortController();
        abortRef.current = controller;

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            signal: controller.signal,
            body: JSON.stringify({
              contents: [
                {
                  role: 'user',
                  parts: [{
                    text: `You are Healia AI, a health and nutrition expert assistant for the Healia Web3 health platform. Users earn blockchain tokens for healthy eating streaks. Be helpful, concise, and health-focused. User message: ${text}`,
                  }],
                },
              ],
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 400,
              },
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text
            || "I'm having trouble connecting right now. Please try again.";

          setMessages(prev => [...prev, {
            id: (Date.now() + 1).toString(),
            role: 'ai',
            content: aiText,
            timestamp: new Date(),
          }]);
          return;
        }
      }

      // Fallback: realistic mock response with simulated typing delay
      await new Promise(resolve => setTimeout(resolve, 1200 + Math.random() * 800));

      const mockResponse = MOCK_RESPONSES[mockIndex % MOCK_RESPONSES.length];
      mockIndex++;

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: mockResponse,
        timestamp: new Date(),
      }]);

    } catch (err) {
      if (err.name !== 'AbortError') {
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          role: 'ai',
          content: "I encountered an issue processing your request. Please try again.",
          timestamp: new Date(),
        }]);
      }
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const clearChat = useCallback(() => {
    setMessages([{
      id: '1',
      role: 'ai',
      content: "Hello! I'm your Healia AI Assistant. How can I help with your health journey today?",
      timestamp: new Date(),
    }]);
  }, []);

  return { messages, isLoading, input, setInput, sendMessage, clearChat };
}
