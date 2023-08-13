# esbuild HTMX Tailwind

## Using Tailwind with esbuild

Resource: [Using tailwind with esbuild](https://stackoverflow.com/questions/70716940/using-tailwind-css-with-esbuild-the-process)

This suggests using the tailwind CLI. This looks like a good option, provided that the production build server will
have access to `npx`, which it should (it does on Vercel). I don't have to include Tailwind in the esbuild build script,
I can run a script from the `package.json` file.
Additionally, I'll just use css because I'm going to be primarily using tailwind classes. I will need to write some custom
css, so I should just be able to include this in the index.css file.

If I want access to modern CSS which I can transpile, I can use the `postcss` plugin for esbuild. This will allow me to
use the latest CSS features, and then transpile them to a format that is supported by all browsers.

I am pretty certain that I can get the CLI to work without much trouble, so I might just try the postcss plugin.
