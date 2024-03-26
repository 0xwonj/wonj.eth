/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,

  compiler: {
    styledComponents: true,
  },

  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },

  webpack(config) {
    config.optimization.minimize = true;
    config.optimization.minimizer.forEach(plugin => {
      if (plugin.constructor.name === 'TerserPlugin') {
        plugin.options.terserOptions.compress.drop_console = true;
      }
    });

    config.optimization.splitChunks = {
      chunks: 'all',
      minSize: 20000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    };

    config.optimization.concatenateModules = true;

    return config;
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
