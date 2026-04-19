# Plan: Complete "playBOI" Music App Interface

The goal is to finalize the "playBOI" interface, aligning it with the modern, high-tech, and dark-themed aesthetic of the Soundcore music app. This involves unifying the theme, expanding navigation, and refining existing components for a premium feel.

## Objective
*   Unify the application's visual theme (Deep Black + Red accents).
*   Expand navigation to include the "Devices" and "Soundscapes" features.
*   Refine the Home page, Player, and Sidebars for a more professional look.
*   Ensure consistency across all pages.

## Key Files & Context
*   `app/page.tsx`: Home page content and layout.
*   `components/Sidebar.tsx`: Main left-side navigation.
*   `components/Player.tsx`: Bottom playback and volume controls.
*   `components/RightSidebar.tsx`: Right-side queue and album art.
*   `app/devices/page.tsx`: Device management page (reference for theme).
*   `app/soundscapes/page.tsx`: Ambient mixer page (reference for theme).
*   `app/layout.tsx`: Root layout and global styling.

## Implementation Steps

### 1. Global Theme Unification
*   Set a consistent deep black background (`bg-[#09090b]` or `bg-black`) for all main containers.
*   Standardize the accent color to Red (`#dc2626` / `text-red-600` / `bg-red-600`).
*   Replace any remaining slate-based backgrounds with the new deep dark theme.

### 2. Sidebar Navigation Update (`components/Sidebar.tsx`)
*   Add **"Devices"** (Icon: `Smartphone`) and **"Soundscapes"** (Icon: `Wind` or `Waves`) to the `navItems` array.
*   Update the sidebar background to match the new deep black theme.
*   Refine the logo and navigation item hover states for better feedback.

### 3. Home Page Refinement (`app/page.tsx`)
*   **Header:** Improve the search bar styling with a cleaner border and focus state.
*   **Featured Section:**
    *   Add better gradients and glassmorphism effects to the featured cards.
    *   Improve typography for titles and artist names.
*   **Track Lists:**
    *   Enhance the hover state for tracks in the "Popular Folk Tracks" section (e.g., show a play icon, change text color to red).
    *   Add more metadata or interactivity (e.g., duration, like button on hover).
*   **Artists:** Refine the circular artist cards with subtle borders and better hover scaling.

### 4. Player Component Refinement (`components/Player.tsx`)
*   Change the Spotify-style green accent (`#1ed760`) to the "playBOI" red accent (`#dc2626`).
*   Update the progress bar and volume bar colors.
*   Refine the play button and control icons for a more "techy" look.

### 5. Right Sidebar Alignment (`components/RightSidebar.tsx`)
*   Change the background from the current dark blue (`#002233`) to the global deep black.
*   Update the queue item styling to match the new theme (border-l-2 color, text colors).
*   Ensure the album art section looks premium.

### 6. Layout Tweaks (`app/layout.tsx` & `components/TopHeader.tsx`)
*   Ensure the main content area has a smooth transition and consistent padding.
*   Check if `TopHeader.tsx` is being used correctly and refine it if necessary.

## Verification & Testing
*   Navigate through all links in the sidebar to ensure they lead to the correct pages.
*   Verify that the "playBOI" red accent is consistently applied.
*   Test responsiveness: ensure the sidebars collapse or hide correctly on smaller screens.
*   Visually inspect the home page to ensure it matches the "Soundcore" aesthetic (clean, modern, dark).
