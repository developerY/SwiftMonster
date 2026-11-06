---
name: Prismatic Hydrodynamics
colors:
  surface: '#f9f9ff'
  surface-dim: '#c8dbff'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dfe8ff'
  surface-container-highest: '#d6e3ff'
  on-surface: '#061c37'
  on-surface-variant: '#3c4949'
  inverse-surface: '#1e314e'
  inverse-on-surface: '#ecf0ff'
  outline: '#6c7a79'
  outline-variant: '#bbc9c8'
  surface-tint: '#006a68'
  primary: '#006a68'
  on-primary: '#ffffff'
  primary-container: '#12b8b6'
  on-primary-container: '#004342'
  inverse-primary: '#4edad8'
  secondary: '#5f3bdc'
  on-secondary: '#ffffff'
  secondary-container: '#7858f6'
  on-secondary-container: '#fffbff'
  tertiary: '#a93349'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff7d8e'
  on-tertiary-container: '#780a28'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#70f7f4'
  primary-fixed-dim: '#4edad8'
  on-primary-fixed: '#00201f'
  on-primary-fixed-variant: '#00504f'
  secondary-fixed: '#e6deff'
  secondary-fixed-dim: '#cabeff'
  on-secondary-fixed: '#1d0061'
  on-secondary-fixed-variant: '#491ac6'
  tertiary-fixed: '#ffdadc'
  tertiary-fixed-dim: '#ffb2b9'
  on-tertiary-fixed: '#400010'
  on-tertiary-fixed-variant: '#891933'
  background: '#f9f9ff'
  on-background: '#061c37'
  surface-variant: '#d6e3ff'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Space Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 3rem
  margin-sm: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
This design system embodies the exhilarating intersection of elite hydrofoil engineering and ethereal marine optics. It captures the sensation of carving across glassy, open water at high speeds: pure fluid dynamics, optical dispersion, and cutting-edge aerodynamic precision. 

The aesthetic is luminous, technical, and atmospheric. It merges translucent glassmorphism with crisp mathematical layout, balancing soft spectral reflections against deep maritime ink tones. The interface should feel buoyant and weightless—reminiscent of hydrofoils lifting completely out of surface drag into frictionless flight—while conveying absolute scientific control and structural integrity.

## Colors
The color architecture reflects sunlight diffracting through ocean spray and clear turquoise shallows. 

- **Primary (`#12B8B6` - Aquamarine Wave):** Represents dynamic flow, foiling velocity, and active water states. Used for core interactive focal points, primary actions, and primary telemetry data.
- **Secondary (`#7A5AF8` - Prismatic Lilac / Oceanic Azure):** Captures high-altitude sky glare and deep spectral shifts. Used for auxiliary statuses, data visualizations, and secondary interactions.
- **Tertiary (`#FB7185` - Sunset Blush Coral):** Evokes sunset spray, thermal dynamics, and performance alerts. Used for accents, highlights, and warning cues.
- **Neutral (`#091E3A` - Deep Abyssal Navy):** Grounding color for all structural borders, primary body copy, and dense data points to maintain uncompromised contrast against luminous backdrops.
- **Surface Accents:**
  - **Seafoam Veil:** `#E6FAF5` (soft positive states / low-tier surface containers).
  - **Sunset Peach Glow:** `#FFF1EB` (tertiary surface tints / badge highlights).
  - **Iridescent Foam White:** `#F8FCFD` (base canvas surface).

Color layering must prioritize high contrast: pale iridescent pastel gradients remain strictly in environmental or non-textual canvas roles, layered under crisp Abyssal Navy strokes and typography.

## Typography
Space Grotesk is leveraged globally across all typographic roles. Its technical geometric anatomy, distinctive ink traps, and aerodynamic proportions bridge high-performance hydrodynamics with clean editorial discipline.

- **Headlines & Display:** Tightly tracked with generous line heights to prevent glyph collision while maintaining athletic presence.
- **Body:** Open, relaxed spacing for immediate readability during active motion or outdoor glare scenarios.
- **Labels & Metrics:** High-weight, slightly expanded letter spacing across smaller scales ensures instant scannability for numeric telemetry, wind speed, foil angles, and hydro stats.

## Layout & Spacing
The layout follows a fluid 12-column grid system on desktop (`min-width: 1024px`), an 8-column layout on tablet (`min-width: 640px`), and a 4-column layout on mobile.

- **Canvas Margins:** Wide gutters and margins simulate expansive ocean horizon space. Mobile tightens to `1.25rem` (`margin-sm`), while desktop expands to `3rem` (`margin`).
- **Rhythm & Gaps:** Component spacing strictly adheres to an 8pt grid baseline. Vertical whitespace between cards and telemetry modules mirrors aerodynamic wake channels—wide, deliberate, and uncluttered.
- **Dynamic Adaptations:** Heavy data panels stack vertically on smaller viewports while real-time hydrofoil metrics dock to a sticky lower-screen surface container.

## Elevation & Depth
Elevation mimics refractive underwater optics and frictionless aerodynamic layering rather than standard dropshadows:

1. **Surface 0 (Ocean Canvas):** Iridescent foam white (`#F8FCFD`) overlaid with gentle, non-static radial gradients blending seafoam (`#E6FAF5`) and peach (`#FFF1EB`) at 40% opacity.
2. **Surface 1 (Card & Panel Tier):** Translucent glass panels (`rgba(255, 255, 255, 0.75)`) backed by a `16px` backdrop-blur filter. Outlines feature a dual-stroke illusion: a top inner highlight of pure white (`rgba(255, 255, 255, 0.8)`) and an exterior hairline stroke of deep navy (`rgba(9, 30, 58, 0.08)`).
3. **Surface 2 (Floating Controls / Modals):** Elevated glass (`rgba(255, 255, 255, 0.9)`) with a multi-layered prismatic glow: `0 12px 32px -4px rgba(18, 184, 182, 0.12), 0 4px 16px -2px rgba(122, 90, 248, 0.08)`.
4. **Surface 3 (Active Flight / Tooltips):** Sharp Abyssal Navy surfaces (`#091E3A`) with bright aquamarine edges, projecting crisp high-contrast silhouettes.

## Shapes
A disciplined 8px border radius (`roundedness: 2`) governs all structural elements—including cards, telemetry blocks, inputs, and container frames. 

This specific radius provides the exact balance of fluid hydrofoil curves (the foil leading edge) and structural engineering precision. Interactive pills (such as quick tags and real-time status indicators) retain fully rounded ends, but all primary structural and informational panels adhere strictly to the 8px baseline.

## Components

### Buttons
- **Primary:** Gradient fill transition from Aquamarine (`#12B8B6`) to Oceanic Azure (`#7A5AF8`), text in pure white (`#FFFFFF`), with an inset top sheen (`1px solid rgba(255, 255, 255, 0.35)`). Active state applies a subtle -1px downward transform.
- **Secondary:** Iridescent glass fill (`rgba(255, 255, 255, 0.85)`), navy text (`#091E3A`), framed by a crisp border (`1.5px solid rgba(9, 30, 58, 0.15)`). Hover elevates the border to pure Aquamarine.
- **Tertiary / Ghost:** Transparent background, Abyssal Navy typography with an iridescent underline on hover.

### Chips & Telemetry Badges
- Pill-shaped or 8px rounded badges with translucent pastel backgrounds (`rgba(18, 184, 182, 0.1)` for Aquamarine, `rgba(251, 113, 133, 0.1)` for Coral).
- Text rendered in full-weight Navy or dark-tinted primary colors.
- Preceded by a pulsating 6px glowing indicator dot for live GPS, wind, or ride-tracking status.

### Cards & Panels
- Backed with translucent frosted glass (`rgba(255, 255, 255, 0.7)`), 8px border radius, and a crisp hairline boundary (`1px solid rgba(9, 30, 58, 0.08)`).
- Padding scales from `1rem` on mobile to `1.5rem` on desktop.
- Hover states trigger an ambient rainbow perimeter highlight via subtle CSS box-shadow shifts.

### Input Fields
- Grounded white surface (`#FFFFFF`) with a recessed border (`1.5px solid rgba(9, 30, 58, 0.12)`).
- Focused state transitions to a glowing Aquamarine boundary (`#12B8B6`) paired with a soft lilac focus ring (`0 0 0 3px rgba(122, 90, 248, 0.15)`).
- Placeholder text in muted Abyssal Navy at 45% opacity; active text at 100% opacity.

### Checkboxes & Radio Buttons
- Custom 8px rounded squares (checkboxes) and circles (radios) with a 1.5px Abyssal Navy border.
- Checked state fills with the primary gradient (`#12B8B6` to `#7A5AF8`) displaying a sharp, pure-white micro checkmark.

### Domain-Specific Components (Hydrodynamics)
- **Foil Angle Gauge:** High-contrast radial arc featuring a spectral gradient needle, overlaying live pitch and roll data in bold Space Grotesk.
- **Cavitation & Speed Strip:** Segmented progress bar using iridescent foam white background rails and illuminated aquamarine segments that tint toward sunset blush coral as maximum velocity thresholds approach.