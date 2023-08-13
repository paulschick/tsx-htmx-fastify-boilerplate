import * as esbuild from 'esbuild';

/**
 * Currently, the index.html file and all TSX is going to be served via server.js. In my previous project, I created
 * an additional typescript file just for the client-side. I don't need to do that. I linked to the htmx javascript
 * file in index.html, and I'm able to make HTTP requests directly from this file without a proxy. I'm able to do this
 * because the HTML is being served on the server, along with all requests from HTMX. Previously I was running
 * two servers: one for the client, and one for the server.
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
