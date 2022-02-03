import { terser } from "rollup-plugin-terser";

const rollupConfig = [
  {
    input: "www/js/main.js",
    output: [
      {
        file: "www/js/script.js",
        format: "iife",
      },
      {
        file: "www/js/script.min.js",
        format: "iife",
        name: "version",
        plugins: [terser()],
      },
    ],
  },

  {
    input: "www/js/week03/07-friday-project-a.js",
    output: [
      {
        file: "www/js/time.js",
        format: "iife",
        name: "Time",
      },
      {
        file: "www/js/time.min.js",
        format: "iife",
        name: "Time",
        plugins: [terser()],
      },
    ],
  },
];

export default rollupConfig;

/* --- Example with formats, banner, and so on --- */
// import pkg from "./package.json";

// const banner = `/* -- ${pkg.title} v${pkg.version} | ${
//   pkg.description
// } | Copyright ${new Date().getFullYear()} -- */`;
// const formats = ["iife", "es", "cjs"];

// const rollupConfig = formats.map((format) => {
//   return {
//     input: "www/js/week03/07-friday-project-a.js",
//     output: {
//       file: `www/js/time-${format}.js`,
//       name: pkg.title,
//       banner: banner,
//       format: format,
//       exports: "auto",
//     },
//   };
// });

// export default rollupConfig;
