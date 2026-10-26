# Euro Truck Service

Landing page built from the Figma frame (1440px wide, 1110px content column).

## Run

```
bun install
bun dev
bun run build
```

## Structure

```
src/
  main.tsx            entry, loads Inter + Tailwind
  App.tsx             page composition
  index.css           Tailwind v4 theme tokens (colors, font, shadow)
  data.ts             copy, nav, services, brand logo positions
  assets/             images extracted from the design
  components/
    Header.tsx        top bar + nav
    Hero.tsx          headline, CTA, trucks image
    Services.tsx      4 service cards
    About.tsx         copy + brand logos
    Location.tsx      copy + map
    Gallery.tsx       photo + dots
    ContactForm.tsx   photo background + form card
    Footer.tsx        columns, divider, copyright
    Icons.tsx         inline SVG icons
```

## Notes

- Tokens live in `src/index.css` under `@theme` (brand `#4762ff`, ink `#333`, body `#5b5b5c`, card `#f4f6fa`, section `#f4f4f4`, field `#f1f3ff`, footer `#191919`).
- Image positions were matched against the full-resolution design, so offsets in the cards and brand logos are exact.
- Layout is desktop-first and fixed to the 1440px design (`min-width: 1440px`).
- `@/` maps to `src/`.
