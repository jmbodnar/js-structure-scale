// import { terser } from "rollup-plugin-terser";

// const rollupConfig = [
//   {
//     input: "www/js/main.js",
//     output: [
//       {
//         file: "www/js/script.js",
//         format: "iife",
//       },
//       {
//         file: "www/js/script.min.js",
//         format: "iife",
//         name: "version",
//         plugins: [terser()],
//       },
//     ],
//   },

//   {
//     input: "www/js/week03/07-friday-project-a.js",
//     output: [
//       {
//         file: "www/js/time.js",
//         format: "iife",
//         name: "Time",
//       },
//       {
//         file: "www/js/time.min.js",
//         format: "iife",
//         name: "Time",
//         plugins: [terser()],
//       },
//     ],
//   },
// ];

// export default rollupConfig;

import pkg from "./package.json";

const banner = `/* -- ${pkg.name} v${pkg.version} | ${
  pkg.description
} | Copyright ${new Date().getFullYear()} -- */`;
const formats = ["iife", "es", "cjs"];

const rollupConfig = formats.map((format) => {
  return {
    input: "www/js/week03/07-friday-project-a.js",
    output: {
      file: `www/js/time-${format}.js`,
      name: pkg.name,
      banner: banner,
    },
  };
});

export default rollupConfig;
