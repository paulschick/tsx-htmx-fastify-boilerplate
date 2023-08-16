import * as esbuild from 'esbuild';

/**
 * The `index.html` file is served from the server. All jsx will be served from the same server, so I can get away
 * without a client-side bundle.js (as long as no JavaScript is needed on the client, outside HTMX).
 */
await esbuild.build({
    entryPoints: ['src/server.mjs'],
    bundle: true,
    minify: true,
    // packages: 'external', // uncomment to reference node modules instead of bundling them
    outfile: 'dist/server.js',
    platform: 'node',
    target: ['node18.16'], // remove if using packages: 'external'
    external: ['sqlite3']
});
