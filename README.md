# TypeScript, TSX, esbuild, htmx, Tailwind, PostCSS Boilerplate

This is a boilerplate project for using HTMX with the following technologies:

- TypeScript
- TSX
- esbuild
- Tailwind
- PostCSS

React is used on the server to compile the TSX files to HTML. This is done by using `react-dom/server` to render the
TSX into HTML strings. Since the project is based on HTMX, the API returns HTML instead of JSON.
Client-side JavaScript/TypeScript can be added, but is not included in this template.

Note - I had trouble integrating postcss with esbuild with the currently available plugins and versions.
I opted to use the postcss cli instead.

## Modification for your project

- **esbuild target**: Currently set to `18.16`. Change this in `build.mjs` to your desired target.
