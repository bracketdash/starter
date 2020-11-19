module.exports = {
  plugins: {
    "postcss-preset-env": { stage: 1 },
    tailwindcss: {
      future: {
        purgeLayersByDefault: true,
      },
      purge: ["./src/**/*.vue"],
      theme: {
        extend: {},
      },
      variants: {},
      plugins: [],
    },
  },
};
