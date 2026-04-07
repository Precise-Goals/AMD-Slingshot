# Product Requirements Document (PRD): Healia
**Document Version:** 1.2  
**Product Name:** Healia  
**Platform:** Web Application (Responsive)  
**Deployment:** Google Cloud Run (via GitHub CI/CD)  

## 1. Executive Summary
**Healia** is a decentralized, AI-powered web application designed to help individuals make better food choices and build healthier eating habits. By combining contextual AI guidance, personalized meal planning, and Web3 gamification, Healia incentivizes healthy living. Users earn "Healia" tokens on the Sepolia blockchain for maintaining consistent healthy eating streaks, securely authenticating via MetaMask. 

**Core Problem Statement:** Design a smart solution that helps individuals make better food choices and build healthier eating habits by leveraging available data, user behavior, or contextual inputs.

## 2. Goals & Success Metrics
This project is engineered to achieve high standards across the requested evaluation criteria:
* **Code Quality:** Modular, well-documented, strictly typed (TypeScript), following industry best practices.
* **Security:** Secure Web3 wallet authentication, sanitized AI inputs, and secure environment variables using Google Cloud Secret Manager.
* **Efficiency:** Highly optimized builds, server-side rendering (SSR) where applicable, and auto-scaling via Google Cloud Run.
* **Testing:** Comprehensive unit (Jest/Vitest), integration, and end-to-end testing (Cypress/Playwright).
* **Accessibility (a11y):** WCAG 2.1 AA compliant, screen-reader friendly, semantic HTML, and proper keyboard navigation.
* **Google Services:** Deep integration with Google Cloud Run, Cloud Build, Vertex AI/Gemini API, and Cloud Logging.

## 3. Product Scope & Features

### 3.1. Authentication & Web3 Integration
* **MetaMask Login:** Users authenticate exclusively via MetaMask. No traditional email/password databases are required for core login.
* **Tokenomics (Sepolia Testnet):** A smart contract deployed on the Sepolia Ethereum testnet. Users who log 7 consecutive days of healthy eating are minted and awarded 1 Healia token.

### 3.2. Application Architecture (Multi-page)
* **Home Page:** * **Hero Section:** High-conversion copy with "antigravity" floating elements utilizing the claymorphic design style.
  * **About Snippet:** Brief introduction to the Healia ecosystem.
  * **Mock Reviews:** Testimonial cards featuring soft, claymorphic drop-shadows.
* **About Page:** Detailed explanation of the mission, how the Sepolia token rewards work, and the AI privacy policy.
* **Planner Page:** * Displays AI-generated daily/weekly meal plans based on user dietary inputs.
  * Tracks the 7-day consistency streak required for the token reward.
* **Assistant Page:** * Dedicated AI Chat interface powered by Google Vertex AI (Gemini).
  * Users can ask for recipes, verify if a food fits their plan, or get contextual advice based on their current eating habits.
* **Global Footer:** * Consistent across all pages.
  * **Links:** Quick navigation to Home, About, Planner, and Assistant.
  * **Legal & Disclaimer:** Medical disclaimer stating Healia is an AI tool and not a substitute for professional medical advice, alongside Terms of Service and Privacy Policy links.
  * **Socials:** Soft, claymorphic icons for social media and community links (e.g., Discord/Twitter for Web3 community).
* **Global SEO & Meta Data:**
  * Implement comprehensive HTML meta tags for standard Google Search Console compatibility and Open Graph (OG) integration.
  * Ensure full Twitter Card support utilizing `twitter:card` set to `summary_large_image`.
  * The `og:image` and `twitter:image` tags must strictly use the official high-resolution logo link: `https://i.ibb.co/jvZrcG19/logo.png`.

## 4. UI/UX & Design Specifications
* **Design System:** Strict adherence to the `src/designs` provided by Stitch AI.
* **Theme:** **Claymorphism**. The UI will feature soft, embossed, and debossed elements with pillowy shadows to make the interface feel tactile, friendly, and modern.
* **Color Palette:**
  * **Primary:** Soft Crimson/Red (for energy and alerts)
  * **Secondary:** Vibrant Pink (for highlights and healthy streak accents)
  * **Backgrounds:** Off-white/White (to maintain readability and support the claymorphic shadows)
* **CSS Framework:** TailwindCSS will be used for rapid, utility-first styling, extended with custom configuration for claymorphic box-shadows.
* **Animations:** Implement the "Antigravity" concept using CSS keyframes to create smooth, continuous floating effects on hero images and Web3 token icons.

## 5. Technical Architecture

* **Frontend/Backend:** Next.js (App Router) or Nuxt.js, providing a robust Fullstack framework within a single repository.
* **Styling:** TailwindCSS.
* **Web3:** `ethers.js` or `viem` & `wagmi` for MetaMask integration and interacting with the Sepolia smart contract.
* **AI Integration:** Google Vertex AI (Gemini API) for the Assistant Page and Planner generation.
* **Version Control & Deployment:** * **Repository:** GitHub.
  * **Hosting:** Google Cloud Run. 
  * **CI/CD:** Google Cloud Build connected directly to the GitHub repository. Pushing to the `main` branch will automatically trigger a container build and deploy a new, serverless revision to Cloud Run.
* **Documentation (`README.md`):**
  * A comprehensive `README.md` must be created at the root of the project.
  * It must specifically and clearly explain what the application does, its core features (AI tracking + Web3 tokenomics), the problem statement it solves, the technology stack, and clear setup instructions for other developers.

## 6. Evaluation Criteria Fulfillment Strategy

| Criteria | Implementation Strategy |
| :--- | :--- |
| **Code Quality** | Enforce ESLint, Prettier, and strict TypeScript rules. Utilize a component-driven architecture matching `src/designs`. |
| **Security** | Implement Content Security Policy (CSP) headers. Handle all minting logic securely on the server side using Google Secret Manager. |
| **Efficiency** | Utilize Google Cloud Run's containerized auto-scaling. Lazy-load Web3 libraries and Antigravity animations to keep the initial bundle small. |
| **Testing** | GitHub Actions pipeline will require robust test coverage before allowing a merge to `main`. |
| **Accessibility** | Enforce `eslint-plugin-jsx-a11y`. Ensure the Claymorphic color palette maintains high contrast ratios. All interactive elements will be keyboard navigable. |
| **Google Services** | Cloud Run (Hosting), Artifact Registry (Container storage), Cloud Build (CI/CD), Vertex AI (Chat Assistant), Cloud Logging (Monitoring). |

## 7. Development Phases
1. **Phase 1: Foundation & Design Integration:** Set up the repository, configure TailwindCSS for claymorphism, and integrate Stitch AI designs (`src/designs`). Set up the root `README.md`.
2. **Phase 2: Web3 & Authentication:** Develop the Sepolia smart contract (ERC-20 for Healia token), deploy it to the testnet, and integrate the MetaMask login flow.
3. **Phase 3: AI & Application Logic:** Integrate Google Vertex AI. Build out the Assistant chat interface and the Planner streak-tracking logic.
4. **Phase 4: Cloud Run Deployment & SEO:** Dockerize the application. Inject global meta tags/Open Graph images. Connect the GitHub repository to Google Cloud Build and deploy to Cloud Run.
5. **Phase 5: Audit & Refinement:** Run accessibility audits, execute testing suites, and optimize performance to ensure compliance with the evaluation criteria.