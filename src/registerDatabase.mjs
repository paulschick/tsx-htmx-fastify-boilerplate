import * as path from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import fastifySqlite from 'fastify-sqlite';

export const registerDatabase = (fastify) => {
    const dbDir = path.join(__dirname, '..', 'db');
    const dbFile = path.join(dbDir, 'db.sqlite');

    if (!existsSync(dbDir)) {
        mkdirSync(dbDir);
        writeFileSync(dbFile, '');
    }

    fastify.register(fastifySqlite, {
        dbFile: dbFile,
    });
};

export const createTables = (fastify) => {
    const {sqlite} = fastify;
    sqlite.all(`
        CREATE TABLE IF NOT EXISTS tasks ( 
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            completed INTEGER NOT NULL DEFAULT 0
        );
    `);
};