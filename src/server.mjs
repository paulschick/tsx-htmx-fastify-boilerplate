import { HelloWorld } from './HelloWorld';
import ReactDOMServer from 'react-dom/server';
import Fastify from 'fastify';
import * as path from 'path';
import { createTables, registerDatabase } from './registerDatabase.mjs';

async function main() {
    const fastify = Fastify({
        logger: true,
    });

    const root = path.join(__dirname, '..', 'public');

    fastify.register(require('@fastify/static'), {
        root: root,
    });

    registerDatabase(fastify);

    fastify.get('/', (req, res) => {
        res.sendFile('index.html');
    });

    fastify.get('/hello', async (req, res) => {
        return ReactDOMServer.renderToString(HelloWorld());
    });

    await fastify.ready();

    createTables(fastify);

    fastify.listen({port: 3000}, (err, address) => {
        fastify.log.info(`server listening on ${ address }`);
        if (err) {
            fastify.log.error(err);
            process.exit(1);
        }
    });
}

main().catch();