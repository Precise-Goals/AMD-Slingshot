# Healia 🍃⛓️

> **Eat Healthy. Earn Crypto.** — A decentralized, AI-powered web application that incentivizes healthy eating habits through Web3 tokenomics.

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](LICENSE)
[![Built with React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Powered by Gemini](https://img.shields.io/badge/AI-Google%20Gemini-4285F4?logo=google)](https://deepmind.google/gemini/)
[![Deployed on Cloud Run](https://img.shields.io/badge/Hosting-Cloud%20Run-4285F4?logo=google-cloud)](https://cloud.google.com/run)

---

## 🧬 What is Healia?

**Healia** is a decentralized health platform that combines **contextual AI guidance**, **personalized meal planning**, and **Web3 gamification** to reward users for maintaining consistent healthy eating habits.

**Core Problem Solved:** Individuals struggle to build and sustain healthy eating habits due to lack of motivation, personalization, and accountability.

**Healia's Solution:** Users earn **1 HLIA token** (ERC-20 on the Sepolia Ethereum testnet) by logging 7 consecutive days of healthy meals — verified and guided by Google Vertex AI (Gemini). Authentication is exclusively via MetaMask — no passwords, no PII stored.

---

## ✨ Core Features

| Feature | Description |
|---|---|
| 🤖 **AI Assistant** | Google Gemini-powered chat for recipes, nutrition advice, and meal verification |
| 📅 **Streak Planner** | 7-day healthy meal tracker with AI suggestions per meal |
| 🪙 **HLIA Token Rewards** | Mint 1 Healia token on Sepolia after a 7-day verified streak |
| 🔐 **MetaMask Auth** | Web3-only authentication — no email, no passwords |
| 🎨 **Claymorphic UI** | Tactile, pillowy design system with Antigravity floating animations |

---

## 🧱 Technology Stack

### Frontend
- **Framework:** Vite + React 19 (SPA with React Router v6)
- **Styling:** Vanilla CSS + Claymorphic design system (custom box-shadows)
- **Fonts:** Manrope · Inter · Plus Jakarta Sans (Google Fonts)
- **Icons:** Material Symbols Outlined

### Web3
- **Wallet:** MetaMask (via `window.ethereum` — Web3-only auth)
- **Network:** Sepolia Ethereum Testnet (Chain ID: 11155111)
- **Token:** HLIA — ERC-20 smart contract on Sepolia
- **Integration:** Native `window.ethereum` provider (no web3 library dependency)

### AI / Backend
- **AI Model:** Google Vertex AI — Gemini 2.0 Flash
- **API:** `generativelanguage.googleapis.com` REST endpoint
- **Fallback:** Realistic mock responses (no key required for dev)

### Cloud / DevOps
- **Hosting:** Google Cloud Run (serverless, auto-scaling)
- **CI/CD:** Google Cloud Build → triggered on push to `main`
- **Container:** Docker (multi-stage build, Node 20 Alpine)
- **Secrets:** Google Cloud Secret Manager for `VITE_GEMINI_API_KEY`
- **Monitoring:** Google Cloud Logging

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js 18+ or Bun
- MetaMask browser extension (for Web3 features)
- (Optional) Google Gemini API key

### 1. Clone & Install
```bash
git clone https://github.com/Precise-Goals/AMD-Slingshot.git
cd AMD-Slingshot
npm install
```

### 2. Environment Variables
Create `.env.local` in the project root:
```env
# Optional: Enable real Gemini AI responses
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```
> Without an API key, the assistant uses realistic mock responses for development.

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 4. Build for Production
```bash
npm run build
npm run preview  # Preview production build locally
```

---

## 🐳 Docker

```bash
# Build image
docker build -t healia .

# Run container
docker run -p 8080:8080 -e VITE_GEMINI_API_KEY=your_key healia
```

---

## ☁️ Google Cloud Run Deployment

### Via Cloud Build CI/CD (Recommended)
1. Connect this repository to **Google Cloud Build**
2. Cloud Build automatically triggers on push to `main`
3. Uses `cloudbuild.yaml` → builds Docker image → deploys to Cloud Run

### Manual Deploy
```bash
# Authenticate
gcloud auth login
gcloud config set project YOUR_PROJECT_ID

# Build & push to Artifact Registry
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/healia

# Deploy to Cloud Run
gcloud run deploy healia \
  --image gcr.io/YOUR_PROJECT_ID/healia \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-secrets VITE_GEMINI_API_KEY=gemini-api-key:latest
```

---

## 🔐 Security

- **No PII Database:** User identity is derived from their wallet address. No names, emails, or passwords are stored.
- **Client-side Auth:** MetaMask signs are processed locally; no server-side session tokens.
- **Secret Management:** All API keys stored in Google Cloud Secret Manager.
- **Content Security Policy:** CSP headers enforced via Cloud Run.
- **Input Sanitization:** AI prompts are sanitized before being sent to Gemini.

---

## 🌐 Application Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero section, Bento stats, How It Works, Reviews |
| `/about` | **About** | Mission, Privacy-First architecture, Team, FAQ |
| `/planner` | **Planner** | 7-day streak tracker, meal logging, token minting |
| `/assistant` | **Assistant** | Gemini AI chat interface with health context |

---

## ⚕️ Medical Disclaimer

Healia is an AI-powered health optimization tool and is **not** a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider before making dietary changes.

---

## 📄 License

MIT © 2025 Healia Network
