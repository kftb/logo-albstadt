# Modernization Assessment — logo albstadt

**Branch:** `modernization-assessment`  
**Date:** 2026-06-27  
**Scope:** Bring stack and code up to modern standards without changing look or content.

---

## 1. Stack Upgrades (highest priority)

| Package | Current | Modern | Notes |
|---|---|---|---|
| `gatsby` | v2.26 | v5.x | Three major versions behind. v5 ships React Server Components support, Head API, Slice API, and much faster builds. |
| `react` / `react-dom` | v16.13 | v18.x | Concurrent rendering, `useId`, automatic batching. |
| `bootstrap` | v4.5 | v5.x | No jQuery dependency, new utilities, updated grid. |
| `react-bootstrap` | v1.4 | v2.x | Matches Bootstrap 5, drops jQuery requirement. |
| `node-sass` | v4 | `sass` (Dart Sass) | `node-sass` is officially deprecated and unmaintained. Drop-in replacement. |
| `gatsby-plugin-mdx` | v1 | v5.x | Complete rewrite; v1 has known security issues. |
| `gatsby-plugin-sass` | v2 | v6.x | Must upgrade alongside Gatsby. |
| `gatsby-plugin-sharp` | v2 | v5.x | Significant perf improvements. |
| `gatsby-plugin-image` | v0.3 | v3.x | Stable API, LCP improvements. |
| `gatsby-transformer-sharp` | v2 | v5.x | Upgrade alongside Gatsby/Sharp. |
| `gatsby-plugin-sitemap` | v2 | v5.x | Output format changed in v3+. |
| `netlify-cms-app` | v2 | `decap-cms` | Netlify CMS was rebranded/transferred to Decap CMS; `netlify-cms-app` is no longer maintained. |
| `smooth-scroll` | v16 | **remove** | Replace with one CSS line: `html { scroll-behavior: smooth; }`. Native in all modern browsers. |
| `react-helmet` | v6 | **remove** | Deprecated in Gatsby v5. Use Gatsby's built-in `Head` export API instead — zero config, SSR-safe, no extra component. |

---

## 2. Code Bugs (broken regardless of stack version)

These are valid bugs that need fixing now:

### `src/components/Contactform/Contactform.js`
- `class=` used instead of `className=` on the `<div>` and `<form>` — React silently ignores this in JSX, so the CSS classes are not applied.
- `for=` used instead of `htmlFor=` on all `<label>` elements — same issue, labels are not linked to inputs.
- `type="emailbox"` on the email input — not a valid HTML input type; browser validation won't work. Should be `type="email"`.
- `method="POST"` is listed **twice** on the `<form>` element.
- `onSubmit={this.handleSubmit}` — the handler calls `alert()` but does **not** call `event.preventDefault()`, so the form also triggers a full page navigation on submit.

### `src/components/Actor/Actor.js`
- `classname='actor-text'` (lowercase `n`) — React ignores unknown props; the CSS class is never applied.
- Inline SVG attributes `fill-opacity` and `opacity` are valid HTML attributes but React warns about them — they should be `fillOpacity` (camelCase) in JSX. The SVGs render but generate console warnings.

### `src/components/SEO/SEO.js`
- `<link rel='canonical' content={...} />` — `<link>` uses `href`, not `content`. The canonical URL is being silently dropped by all browsers. Should be `href`.
- `console.log(seo.canonicalUrl)` left in production code — logs on every page render.

### `src/components/Navbar/Navbar.js`
- `<img alt='' ...>` for the logo — the logo image contains the practice name as visual text. An empty alt is appropriate only for decorative images; here a screen reader user gets nothing. Should be `alt="logo albstadt"`.
- All `<Nav.Link>` elements have a hardcoded `href='/#fokus'` regardless of where they actually point. This is a fallback attribute for Gatsby's `<Link>`, but it means right-click → "open in new tab" navigates every link to `/#fokus`.

---

## 3. React Modernization (convert class → function components)

Every component in the project is a class component. None of them use lifecycle methods or local state that would require a class. Rewriting them as functional components is straightforward and removes significant boilerplate:

- `App`, `Layout`, `Hero`, `Navbar`, `Quote`, `Features`, `Subfeature`, `Actor`, `CTA`, `Directions`, `Footer`, `Contactform`, `Impressum`, `SEO`, `SimpleText`, `Principles`, `Process`

Example (Hero):
```jsx
// Before
export default class Hero extends Component {
  render() { return <div>...</div>; }
}

// After
export default function Hero() {
  return <div>...</div>;
}
```

---

## 4. Image Handling

Every image is loaded via `require("../../images/foo.png")`. This bypasses Gatsby's image pipeline entirely — no lazy loading, no WebP conversion, no responsive sizes, no blur-up placeholder.

The fix is to replace `<img src={require(...)} />` with Gatsby's `<StaticImage>` component (already a dependency, just unused):

```jsx
// Before
<img src={require("../../images/vivian.png")} alt="" />

// After
import { StaticImage } from "gatsby-plugin-image";
<StaticImage src="../../images/vivian.png" alt="Vivian Bay" />
```

This gives automatic WebP output, lazy loading, correct `width`/`height` to prevent CLS, and responsive `srcset` — all with no visible change to the user.

---

## 5. Accessibility (a11y)

- **No `lang` attribute** on the HTML element. The content is German; `<html lang="de">` should be set. This can be done via `gatsby-ssr.js` or Gatsby's `Head` API.
- **No `<main>` landmark.** The page content between `<Navbar>` and `<Footer>` has no semantic wrapper. Screen reader users cannot skip to main content.
- **Decorative SVG waves** (in Actor) have no `aria-hidden="true"`, so screen readers will attempt to read them.
- `<Navbar.Toggle>` already has `aria-controls` set — this is correct and can stay.

---

## 6. Minor Cleanup

- `gatsby-plugin-netlify-cms` is in `gatsby-config.js`'s plugin list but the `netlify-cms` admin panel is not configured anywhere — the plugin appears unused and can be removed.
- `@mdx-js/mdx` and `@mdx-js/react` are listed as dependencies but MDX is not used by any component — they can be removed.
- The `gatsby-source-filesystem` entry for `fonts` is configured but the font files are loaded via a plain CSS `@font-face` stylesheet — the filesystem source serves no purpose and can be removed.
- `.env` is committed to the repository. It should be in `.gitignore`.

---

## Recommended Implementation Order

1. **Fix the bugs** (Section 2) — these are active problems today, independent of any stack work.
2. **Replace `node-sass` with `sass`** — two-minute change, unblocks everything else.
3. **Upgrade Gatsby to v5** (with React 18, Bootstrap 5, react-bootstrap 2) — this is the largest lift. Gatsby provides an official migration guide. Expect to update `gatsby-config.js` and fix a handful of import paths.
4. **Convert class components to functions** — mechanical, can be done component-by-component.
5. **Replace `react-helmet` with Gatsby Head API** — required once on Gatsby v5.
6. **Switch images to `<StaticImage>`** — best done after the Gatsby upgrade.
7. **Add accessibility fixes** — `lang`, `<main>`, `aria-hidden` on decorative SVGs.
8. **Remove unused dependencies** — MDX packages, netlify-cms plugin, smooth-scroll, fonts filesystem source.
