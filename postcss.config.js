module.exports = (context) => ({
  map: context.options.map,
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({ stage: 1 }),
    require("autoprefixer"),
  ],
});
