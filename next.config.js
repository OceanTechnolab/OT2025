const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
          },
        },
      ],
      include: path.resolve(__dirname, 'src'),
    });

    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: path.resolve(__dirname, 'node_modules'),
    });

    return config;
  },
};

// next.config.js
module.exports = {
  output: 'export',
  webpack(config, { isServer }) {
    if (!isServer) {
      // Ensures swiper CSS works on the client-side
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
};
