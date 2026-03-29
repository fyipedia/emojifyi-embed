# emojifyi-embed

[![npm](https://img.shields.io/npm/v/emojifyi-embed)](https://www.npmjs.com/package/emojifyi-embed)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/emojifyi-embed)
[![Size](https://img.shields.io/badge/size-~11--21KB_gzipped-green)](https://bundlephobia.com/package/emojifyi-embed)

Embed **EmojiFYI** widgets — emojis, glossary terms, interactive tools, and inline elements — on any website. **9 widget types**, zero dependencies, Shadow DOM style isolation, 4 built-in themes (light, dark, sepia, auto), 2 styles (modern, minimal), and live data from the [EmojiFYI](https://emojifyi.com) database.

Every widget includes a "Powered by EmojiFYI" backlink directing readers to the full reference.

> **Try the interactive widget builder at [widget.emojifyi.com](https://widget.emojifyi.com)**

## Quick Start

```html
<!-- Place widget div where you want it to appear -->
<div data-emojifyi="entity" data-slug="emojis" data-theme="light"></div>

<!-- Load the embed script once, anywhere on the page -->
<script src="https://cdn.jsdelivr.net/npm/emojifyi-embed@1/dist/embed.min.js"></script>
```

That's it. The widget fetches data from the EmojiFYI API and renders with full style isolation.

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `entity` | `<div data-emojifyi="entity" data-slug="..."></div>` | Entity detail card — color, font, emoji, symbol, or character |
| `glossary` | `<div data-emojifyi="glossary" data-slug="..."></div>` | Glossary term definition with cross-references |
| `guide` | `<div data-emojifyi="guide" data-slug="..."></div>` | Guide summary card with key takeaways |
| `compare` | `<div data-emojifyi="compare" data-slug="..."></div>` | Side-by-side entity comparison |
| `search` | `<div data-emojifyi="search" data-slug="..."></div>` | Search box linking to the full database |
| `encoder` | `<div data-emojifyi="encoder" data-slug="..."></div>` | Emoji encoder — 8 formats (UTF-8, HTML, CSS, JS, Python, Java) |
| `picker` | `<div data-emojifyi="picker" data-slug="..."></div>` | Emoji picker grid — searchable by category |
| `emoji-inline` | `<div data-emojifyi="emoji-inline" data-slug="..."></div>` | Inline emoji with name and codepoint |
| `tooltip` | `<div data-emojifyi="tooltip" data-slug="..."></div>` | Glossary tooltip — hover/click shows term definition inline |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-emojifyi` | entity, compare, glossary, guide, search, tooltip, [tools] | required | Widget type |
| `data-slug` | e.g. "emojis" | — | Entity slug from the EmojiFYI database |
| `data-theme` | light, dark, sepia, auto | light | Visual theme (`auto` follows OS preference) |
| `data-styleVariant` | modern, minimal | modern | Widget design style |
| `data-size` | default, compact, large | default | Widget size |
| `data-placeholder` | any string | "Search Emojis..." | Search box placeholder |

## Themes

```html
<!-- Light (default) -->
<div data-emojifyi="entity" data-slug="emojis" data-theme="light"></div>

<!-- Dark -->
<div data-emojifyi="entity" data-slug="emojis" data-theme="dark"></div>

<!-- Sepia -->
<div data-emojifyi="entity" data-slug="emojis" data-theme="sepia"></div>

<!-- Auto — follows OS dark/light preference -->
<div data-emojifyi="entity" data-slug="emojis" data-theme="auto"></div>
```

## Styles

```html
<!-- Modern (default) — clean lines, rounded corners, accent gradients -->
<div data-emojifyi="entity" data-slug="emojis" data-styleVariant="modern"></div>

<!-- Minimal — subtle borders, flat design, no gradients -->
<div data-emojifyi="entity" data-slug="emojis" data-styleVariant="minimal"></div>
```

## Web Components (Custom Elements)

As an alternative to `data-*` attributes, you can use native HTML custom elements:

```html
<!-- Custom element form -->
<emojifyi-entity slug="emojis" theme="light"></emojifyi-entity>
<emojifyi-compare slugs="emojis,other-slug"></emojifyi-compare>
<emojifyi-search placeholder="Search Emojis..."></emojifyi-search>

<script src="https://cdn.jsdelivr.net/npm/emojifyi-embed@1/dist/embed.min.js"></script>
```

Use `style-variant` (not `style`) to avoid conflicts with the HTML reserved `style` attribute.

## Examples

### Entity Card

```html
<div data-emojifyi="entity" data-slug="emojis" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/emojifyi-embed@1/dist/embed.min.js"></script>
```

### Side-by-Side Comparison

```html
<div data-emojifyi="compare" data-slugs="emojis,other-slug"></div>
<script src="https://cdn.jsdelivr.net/npm/emojifyi-embed@1/dist/embed.min.js"></script>
```

### Search Box

```html
<div data-emojifyi="search" data-placeholder="Search Emojis..."></div>
<script src="https://cdn.jsdelivr.net/npm/emojifyi-embed@1/dist/embed.min.js"></script>
```

### Glossary Term

```html
<div data-emojifyi="glossary" data-slug="example-term" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/emojifyi-embed@1/dist/embed.min.js"></script>
```

## CDN Options

### jsDelivr (recommended — global CDN, auto-updates with npm)

```html
<script src="https://cdn.jsdelivr.net/npm/emojifyi-embed@1/dist/embed.min.js"></script>
```

### Specific version (production stability)

```html
<script src="https://cdn.jsdelivr.net/npm/emojifyi-embed@1.0.0/dist/embed.min.js"></script>
```

### npm (for bundlers)

```bash
npm install emojifyi-embed
```

```javascript
import 'emojifyi-embed';
```

## Technical Details

- **Shadow DOM**: Complete style isolation — no CSS conflicts with your site
- **Zero dependencies**: No jQuery, React, or any external library
- **2 styles**: Modern (accent gradients) and Minimal (flat design)
- **4 themes**: Light, Dark, Sepia, Auto (OS preference detection)
- **CORS**: EmojiFYI API has CORS enabled for all origins
- **MutationObserver**: Works with dynamically added elements (SPAs)
- **IntersectionObserver**: Lazy loading — widgets only fetch when entering viewport (200px margin)
- **Rich Snippets**: DefinedTerm JSON-LD injected for glossary widgets
- **Bundle size**: ~11-21KB gzipped (per-site build — only includes tools available on EmojiFYI)

## Learn More About Emojis

Visit [emojifyi.com](https://emojifyi.com) — EmojiFYI is a comprehensive emojis reference with interactive tools, guides, and developer resources.

- **API docs**: [emojifyi.com/developers/](https://emojifyi.com/developers/)
- **Widget builder**: [widget.emojifyi.com](https://widget.emojifyi.com)
- **npm package**: [npmjs.com/package/emojifyi-embed](https://www.npmjs.com/package/emojifyi-embed)
- **GitHub**: [github.com/fyipedia/emojifyi-embed](https://github.com/fyipedia/emojifyi-embed)

## Creative FYI Family

Part of [FYIPedia](https://fyipedia.com) — open-source developer tools ecosystem. Creative FYI covers design, typography, characters, and visual encoding.

| Site | Domain | Focus | Package |
|------|--------|-------|---------|
| ColorFYI | [colorfyi.com](https://colorfyi.com) | Color conversion, WCAG contrast, harmonies — 16.7M hex colors | [npm](https://www.npmjs.com/package/colorfyi-embed) |
| FontFYI | [fontfyi.com](https://fontfyi.com) | Google Fonts metadata, CSS generation, font pairings | [npm](https://www.npmjs.com/package/fontfyi-embed) |
| **EmojiFYI** | [emojifyi.com](https://emojifyi.com) | 3,781 emojis, Unicode Emoji 16.0, 8 encodings | **[npm](https://www.npmjs.com/package/emojifyi-embed)** |
| SymbolFYI | [symbolfyi.com](https://symbolfyi.com) | Symbol encoding in 11 formats, Unicode properties | [npm](https://www.npmjs.com/package/symbolfyi-embed) |
| UnicodeFYI | [unicodefyi.com](https://unicodefyi.com) | Unicode characters, 17 encodings, text analysis | [npm](https://www.npmjs.com/package/unicodefyi-embed) |

## Embed Widget

Embed [EmojiFYI](https://emojifyi.com) widgets on any website with [emojifyi-embed](https://widget.emojifyi.com):

```html
<script src="https://cdn.jsdelivr.net/npm/emojifyi-embed@1/dist/embed.min.js"></script>
<div data-emojifyi="entity" data-slug="example"></div>
```

Zero dependencies · Shadow DOM · 4 themes (light/dark/sepia/auto) · [Widget docs](https://widget.emojifyi.com)

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [FYIPedia](https://fyipedia.com).
