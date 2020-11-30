module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false, // Optimization caused bugs with some of my SVGs
          },
        },
      ],
    });
    return config;
  },
  env: {
    github: process.env.github,
  }
};
