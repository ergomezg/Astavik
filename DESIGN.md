---
name: Astāvik Performance Lab
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2b2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#cac6c3'
  on-tertiary: '#32302f'
  tertiary-container: '#0b0a09'
  on-tertiary-container: '#7c7977'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e6e1df'
  tertiary-fixed-dim: '#cac6c3'
  on-tertiary-fixed: '#1d1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display-hero:
    fontFamily: Montserrat
    fontSize: 80px
    fontWeight: '900'
    lineHeight: 88px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  data-display:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '900'
    lineHeight: 32px
    letterSpacing: -0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 80px
  container-padding: 24px
  grid-gutter: 24px
  stack-sm: 4px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered for high-performance cycling, blending the raw energy of sports marketing with the refined precision of premium engineering. The aesthetic is **High-Contrast / Bold**, drawing heavily from high-impact editorial layouts and modern streaming platforms. 

The visual narrative focuses on "Velocity and Precision." This is achieved through massive typography, aggressive use of negative space, and a restricted but explosive color palette. The UI should feel immediate, aspirational, and technologically superior, evoking the same emotional response as a high-end carbon fiber racing frame.

- **Minimalism:** Layouts are stripped of decorative clutter to prioritize performance metrics and cinematic imagery.
- **Vibrancy:** Accents are used as functional signals for action and achievement.
- **Energy:** Diagonals and oversized type create a sense of forward motion.

## Colors

The palette is anchored in a "Void Black" base to allow imagery and data to punch through with maximum luminosity.

- **Primary & Background:** #0A0A0A provides a high-end, stealth-performance foundation.
- **On-Primary:** #FFFFFF for maximum legibility and stark contrast.
- **Vibrant Orange (#FF4D00):** Used for primary calls to action (CTAs), active states, and high-intensity performance markers.
- **Saturated Magenta (#E91E63):** Used for secondary accents, trend lines, and recovery-related metrics.
- **Surface Neutrals:** #1A1A1A (Surface Low), #262626 (Surface Medium), and #404040 (Surface High) define depth without compromising the dark-mode aesthetic.

All color combinations must maintain WCAG AA compliance, specifically ensuring that Magenta and Orange text on Black backgrounds remain legible for critical data.

## Typography

The typography system uses a dual-font approach to balance impact with utility.

- **Montserrat (Headlines/Display):** Used in heavy weights (700-900) to create an authoritative, geometric look. Display sizes should utilize tight letter spacing to feel "compressed" and high-speed.
- **Inter (Body/Data):** Used for all functional text, UI labels, and long-form descriptions. Its high x-height ensures readability during high-intensity activity.
- **Data Display:** Specialized styling for metrics (Watts, RPM, Speed) uses heavy Montserrat to ensure critical numbers are the most prominent elements on the screen.

## Layout & Spacing

This design system employs a **Fluid Grid** with fixed maximum widths for desktop (1440px) to maintain the intensity of the layout.

- **Grid Model:** 12-column grid for desktop, 8-column for tablet, 4-column for mobile.
- **Margins:** 24px mobile margins increasing to 64px on ultra-wide displays to maintain a focused "cockpit" feel.
- **Vertical Rhythm:** Sections are separated by large 80px-120px gaps to allow the high-impact typography to breathe and create an editorial pacing.
- **Density:** High density for data dashboards, low density for marketing/product value propositions.

## Elevation & Depth

To maintain the high-performance minimalist aesthetic, the system avoids traditional soft shadows. Depth is communicated through:

- **Tonal Layering:** Objects closer to the user are lighter in the dark theme (#1A1A1A for the base background, #262626 for card surfaces).
- **Hard Strokes:** 1px solid borders in #404040 are used to define boundaries on interactive elements.
- **High-Intensity Glows:** Subtle, saturated blurs behind key data points (using Accent Orange or Magenta) can be used to indicate "Peak Performance" or "Active" states.
- **Glassmorphism:** Reserved exclusively for sticky headers and navigation overlays, using a 20px background blur with a 10% white tint to maintain context of the content behind.

## Shapes

The shape language is "Precision-Softened." 

- **Primary Radius:** 4px (Soft) for most components to maintain a technical, engineered appearance.
- **Card Radius:** 8px for larger containers to differentiate between "interface" and "content."
- **Interactive Elements:** Buttons and input fields use a consistent 4px radius. 
- **Exceptions:** Circular shapes are used exclusively for user avatars and status indicators (Online/Offline) to contrast against the otherwise rectangular, grid-locked layout.

## Components

### Buttons
- **Primary:** Background: #FF4D00, Text: #0A0A0A, Weight: 700. On hover, the color darkens to #E64500 and the element lifts slightly (+2px Y-offset).
- **Secondary:** Outline 2px #FFFFFF, Text: #FFFFFF. On hover, background becomes #FFFFFF with #0A0A0A text.
- **Ghost:** Text: #FFFFFF, no border. Used for tertiary actions.

### Cards
- **Product Cards:** Dark #1A1A1A background, 1px border #262626, 32px internal padding. Images should be edge-to-edge or strictly inset with 16px margins.
- **Data Cards:** High-contrast Magenta or Orange top-border (2px) to categorize metrics.

### Input Fields
- Underline-only or subtle dark-fill (#1A1A1A). Focused state uses a 2px Orange bottom border.

### Floating WhatsApp Widget
- Positioned 24px from bottom-right.
- Styling: #25D366 (Brand WhatsApp) but using the design system's elevation (hard border, 4px radius) instead of the default bubble style to maintain aesthetic cohesion.

### Chips & Tags
- Used for categories (e.g., "Aero", "Endurance").
- Small, uppercase Montserrat, 12px, 1px border, 2px radius.