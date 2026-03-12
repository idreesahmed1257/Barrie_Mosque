import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    // Disable static optimization for pages that use client-side hooks
    experimental: {
        esmExternals: false,
    },
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname, 'src');
        return config;
    },
};

export default nextConfig;
