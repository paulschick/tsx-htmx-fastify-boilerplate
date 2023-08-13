import * as esbuild from 'esbuild';

/**
 * NOTE: index.html is served via server.js. There really isn't client-side code...
 * If I'm able to add the Tailwind CSS and HTMX stuff in the server configuration, then I don't need two projects.
 * The "client" portion is just the index.html, index.css, and index.ts files. The only reason for the index.ts
 * on the client-side was originally to load in the scss file for the index.html file. This was due to the compilation
 * and bundling methods used (Webpack + Babel). I may not need to do that with esbuild.
 *
 * So hang tight. This prototype might be transformed in the next iteration to a single project.
 */
await esbuild.build({
    entryPoints: ['src/server/server.mjs'],
    bundle: true,
    minify: true,
    // packages: 'external', // uncomment to reference node modules instead of bundling them
    outfile: 'dist/server.js',
    platform: 'node',
    target: ['node18.16'], // remove if using packages: 'external'
});
