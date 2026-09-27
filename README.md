<div align="center">
  <h1><em><strong>STRIKE</strong></em></h1>
  <p><strong>The ultimate, all-in-one ecosystem for elite tech preparation.</strong></p>
  <p>
    <a href="https://strike-sales-mu.vercel.app/"><strong>View Live Website »</strong></a>
  </p>
</div>

<br />

## 💡 The Idea (Project Overview)
STRIKE is an ultra-premium EdTech landing page built for modern developers. It acts as the definitive platform for mastering Data Structures, Algorithms, System Design, and AI. The core idea behind the project was to design a highly-converting sales page with a relentless focus on high-end UX/UI, featuring a custom "Dark Glassmorphism" aesthetic, fluid scroll animations, and a complex, persistent sale engine designed to maximize conversions without sacrificing user experience.

## 🗺️ User Flow
1. **Initial Visit:** The user lands on the Hero section and is greeted by a simulated CodeArena IDE and a pulsing "Unlock All Courses" button in the Navbar alerting them to a site-wide sale.
2. **Exploration:** As the user scrolls down, `framer-motion` animates the course offerings into view, establishing the value of the platform.
3. **The Reveal (Interaction):** The user clicks the "Unlock All Courses" button, triggering a massive, full-screen "Lightning Strike" decryption animation that smooth-scrolls them directly to the hidden Flash Sale.
4. **The Sale:** A 10-day countdown timer and an active coupon code are presented. 
5. **Action:** The user clicks to copy the coupon (triggering a visual green validation flash on the pricing cards) and clicks the checkout CTA. Alternatively, the user can click the 'X' to permanently dismiss the sale, returning the UI to standard pricing.

## ☑️ Feature Checklist
- [x] **Premium UI/UX:** Stunning dark glassmorphic design system utilizing `Orbitron` and `Inter` fonts.
- [x] **User-Centric Control:** Frictionless "dismiss" mechanisms for the sale, putting the user in complete control of their screen.
- [x] **Gamified Reveal:** A highly creative "Lightning Strike" full-screen animation that triggers when unlocking the sale.
- [x] **Persistent Sale Engine:** A robust, `localStorage`-backed 10-day countdown timer system that tracks user sessions across page reloads.
- [x] **Smart Micro-Interactions:** Interactive coupon feedback (cards flashing neon green upon copy).
- [x] **Fluid Animations:** Scroll-based animations powered by `framer-motion`.

## 🏗️ Technical Approach
This project was built following Enterprise React Best Practices to ensure the code remains structured, readable, and maintainable.
- **Custom Hooks for Business Logic:** The complex 10-day timer and `localStorage` syncing logic is completely abstracted into a custom hook (`useSaleLogic.js`). This keeps the UI components purely focused on rendering.
- **Highly Modular Architecture:** The application is broken down into small, single-responsibility components (e.g., `CountdownTimer.jsx`, `CouponCode.jsx`, `SalePlanCard.jsx`), enabling high reusability and easy debugging.
- **Data-Driven UI:** Pricing, features, and course data are completely separated from the presentation layer and stored in `src/data/`. This allows non-developers to update pricing instantly without touching JSX.
- **Event-Driven Communication:** Utilizing custom window events (e.g., `strike_sale_trigger_reveal`) to allow disconnected components (like the top banner and the bottom membership section) to communicate instantly without heavy global state managers like Redux.

## ⚠️ Known Limitations
- **Frontend-Focused Prototype:** Because this project is heavily focused on frontend UI/UX and visual interactions, not all generic buttons (e.g., standard navigation links) are fully functional or routed.
- **No Backend Database:** Currently, the checkout buttons redirect to an external mockup link rather than a fully integrated payment gateway (e.g., Stripe).
- **Client-Side Expiration:** The sale timer relies on `localStorage`. A technically savvy user could clear their browser cache to reset the 10-day timer. In a full production environment, the expiration timestamp would be verified by a backend server.

## 🛠️ Built With
- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## 💻 Project Setup (Getting Started)

### Prerequisites
You need to have Node.js installed on your machine.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/krushang15THECODER/Strike_sales.git
   ```
2. Navigate to the project directory
   ```sh
   cd strike
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm run dev
   ```

## 📬 Contact
**Krushang**  
Email: [krushang1503@gmail.com](mailto:krushang1503@gmail.com)  
Live Project Link: [https://strike-sales-mu.vercel.app/](https://strike-sales-mu.vercel.app/)
