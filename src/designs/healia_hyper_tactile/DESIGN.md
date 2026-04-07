# Design System Strategy: The Tactile Health Ecosystem

## 1. Overview & Creative North Star
**Creative North Star: The Living Lab**
This design system moves away from the sterile, cold aesthetics of traditional healthcare and the chaotic energy of Web3. Instead, it embraces "The Living Lab"—a philosophy where data feels physical, organic, and approachable. By utilizing **Claymorphism**, we transform complex health metrics into "pillowy" tangible objects that users want to touch.

The "Professional Webflow" aesthetic is achieved by breaking the rigid grid through **intentional asymmetry**. While the layout follows a Bento Grid structure, elements will "leak" out of their containers—antigravity 3D icons float over borders, and gradient glows break the container edges. We are building a dense, high-utility dashboard that remains readable through tonal depth rather than excessive whitespace.

## 2. Colors & Surface Philosophy
The palette is rooted in high-contrast vitality. We use the "Soft Crimson" and "Vibrant Pink" not just as accents, but as heatmaps for the user's health journey.

*   **The "No-Line" Rule:** Explicitly prohibit 1px solid borders for sectioning. Divisions are created through **Surface Hierarchy**. Use `surface_container_low` for the base grid and `surface_container_lowest` for the interactive cards.
*   **Claymorphic Layering:** To achieve the "pillowy" effect, cards must use a dual-tonal approach. Use a `surface_container_lowest` background for the card body, but apply a subtle radial gradient of `primary_fixed` (at 5% opacity) in the top-left corner to simulate light hitting a curved surface.
*   **Signature Textures:** Main CTAs must utilize a linear gradient from `primary` (#b7102a) to `secondary` (#b7004d) at a 135-degree angle. This "pulse" gradient signifies active health tracking and premium Web3 status.
*   **Glass & Glow:** Use `surface_variant` at 40% opacity with a `24px` backdrop blur for floating navigation elements. This ensures the dense Bento Grid remains visible beneath active overlays, maintaining the "comprehensive" feel.

## 3. Typography: Editorial Authority
We pair the geometric precision of **Manrope** with the high-readability of **Inter** to balance professional medical data with modern tech aesthetics.

*   **Display & Headlines (Manrope):** Use `display-md` for token balances and primary health scores. The tight kerning and bold weights of Manrope convey a "Webflow Editorial" vibe—authoritative and modern.
*   **Body & Data (Inter):** All medical metrics and truncated wallet addresses use `body-md`. Inter’s tall x-height ensures readability even within the dense, low-whitespace Bento cells.
*   **Labels (Plus Jakarta Sans):** Used for micro-copy and tags. The wider stance of Plus Jakarta Sans provides a distinct visual break from the body text, helping users categorize data at a glance.

## 4. Elevation & Depth: The Tactile Grid
Claymorphism requires a departure from flat material design. Depth is the primary communicator of interactivity.

*   **The Layering Principle:** 
    *   **Level 0 (Background):** `surface` (#f9f9f9).
    *   **Level 1 (Bento Cells):** `surface_container_low`.
    *   **Level 2 (Active Cards):** `surface_container_lowest` with the "Pillowy" shadow.
*   **Ambient Shadows (The Clay Effect):** 
    *   **Embossed (Raised):** `box-shadow: 8px 8px 16px rgba(0,0,0,0.04), -8px -8px 16px rgba(255,255,255,0.8);`
    *   **Debossed (Inset/Pressed):** `box-shadow: inset 6px 6px 12px rgba(0,0,0,0.05), inset -6px -6px 12px rgba(255,255,255,0.8);`
*   **Antigravity Elements:** 3D icons and 3D health shapes must float above the grid. Use a tinted shadow (`surface_tint` at 10% opacity) with a `32px` blur and `20px` Y-offset to create a sense of significant vertical distance from the page.

## 5. Components

### Wallet Connect & Token Balance
*   **Visual Priority:** The high-visibility anchor of the UI.
*   **Style:** A `surface_container_highest` pill with a `secondary_container` glow. The truncated address should be styled in `label-md` using `on_surface_variant` for a "code-like" aesthetic.
*   **Interaction:** On hover, the container transitions from embossed to debossed to simulate a physical button press.

### Bento Grid Cards
*   **Constraint:** Forbid divider lines.
*   **Structure:** Use `1.5rem` (md) internal padding. Content is separated by shifts from `surface_container_lowest` to `surface_container`. 
*   **Feature Tinting:** For specific metrics (e.g., Heart Rate), apply a 5% `primary` tint to the card background to categorize it visually without adding borders.

### Primary Buttons
*   **Style:** `xl` (3rem) roundedness. Use the Signature Pulse Gradient.
*   **Shadow:** A `primary_container` tinted shadow to make the button appear as if it is emitting light onto the clay surface.

### Antigravity Icons
*   **Definition:** 3D rendered assets (e.g., a floating DNA helix or a 3D heart).
*   **Placement:** These should overlap the edges of two Bento grid cells, breaking the grid and adding a layer of high-end custom "Webflow" polish.

### Input Fields
*   **Style:** Debossed (inset) shadow on a `surface_container_low` background. 
*   **State:** On focus, the "Ghost Border" (outline-variant at 20%) becomes visible with a `primary` glow.

## 6. Do’s and Don’ts

### Do:
*   **Do** use variable font weights to create hierarchy instead of changing colors.
*   **Do** allow 3D icons to sit "outside" of their containers to create depth.
*   **Do** use `primary_fixed_dim` for background accents in dense data areas to reduce eye strain.
*   **Do** ensure the wallet balance is always the most tactile-looking element on the screen.

### Don’t:
*   **Don’t** use pure black (#000000) for text; always use `on_surface` or `on_surface_variant` for a high-end, softer contrast.
*   **Don’t** use a shadow on every element. If everything is "pillowy," nothing is important. Reserve deep claymorphic shadows for interactive cards.
*   **Don’t** use hard 90-degree corners. Everything must adhere to the Roundedness Scale (default `1rem`).
*   **Don’t** use 1px dividers. If a separation is needed, use a `24px` vertical gap or a subtle shift in surface tier.