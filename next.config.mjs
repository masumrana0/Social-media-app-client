// next.config.mjs
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "avatars.githubusercontent.com",
      "www.gravatar.com",
      "i.ibb.co",
    ],
  },
  webpack: (config, { isServer }) => {
    // Add loader for MP3 files
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/_next/static/sounds/",
          outputPath: "static/sounds/",
        },
      },
    });

    return config;
  },
};

export default nextConfig;
