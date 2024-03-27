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
      minSize: 0,
      maxSize: 20000,
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
        frequentlyUpdated: {
          name: 'frequently-updated',
          test: /[\\/]src[\\/](components|hooks)[\\/]/,
          priority: -9,
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

  experimental: {
    outputFileTracingExcludes: {
      'blog/': ['.next/cache/webpack'],
      'blog/[slug]': ['.next/cache/webpack'],
      'academia/': ['.next/cache/webpack'],
      'academia/[slug]': ['.next/cache/webpack'],
    },
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
