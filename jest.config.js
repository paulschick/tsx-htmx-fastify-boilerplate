module.exports = {
    transform: {
        "^.+\\.tsx?$": [
            'esbuild-jest',
            {
                sourcemap: true,
                loaders: {
                    '.spec.ts': 'tsx',
                }
            }
        ],
    }
};