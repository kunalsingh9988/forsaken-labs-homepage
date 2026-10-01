# Forsaken Labs — Homepage

A pixel-faithful, fully responsive marketing homepage for **Forsaken Labs** (Citrus Surge
pre-workout), rebuilt from the reference Figma design with the brand's own imagery, voice,
and palette.

## Stack

- **React 19 + TypeScript + Vite 7**
- **Tailwind CSS v4** (CSS-first theme in `src/index.css`)
- Fonts: Playfair Display (display serif), Inter (UI/body), Mulish (labels/buttons)

## Design

- Layout/section structure mirrors the reference design 1:1 (announcement bar → header →
  hero → benefits marquee → stats → ritual → comparison tabs → video strip → testimonials →
  press → science tabs → steps → flavors → subscribe → value → ingredients → marquee →
  certifications → reviews → founders quote → social grid → FAQ → footer + chat bubble).
- Colors adapted to the brand: ink `#161009`, cream `#fbf5ee`, warm sand tones, signal
  orange `#f5640a`.
- All product imagery lives in `public/images/`; icon assets in `public/assets/icons/`.

## Commands

```bash
npm install        # install deps
npm run dev        # dev server
npm run build      # typecheck + production build
npm run preview    # preview the production build
node scripts/screenshot.mjs [mobile|desktop]  # full-page screenshot crops to /tmp
```
