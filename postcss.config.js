module.exports = {
  plugins: {
    "postcss-preset-env": { stage: 1 },
    tailwindcss: {
      future: {
        purgeLayersByDefault: true,
      },
      purge: ["./src/components/*.vue", "./src/components/**/*.vue"],
      theme: {
        extend: {},
      },
      variants: {},
      plugins: [],
    },
  },
};
