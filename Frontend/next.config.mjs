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
};

export default nextConfig;
