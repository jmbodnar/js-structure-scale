// For minification
import { terser } from "rollup-plugin-terser";
// Look into buble, too.

const rollupConfig = [
  {
    input: "www/js/main.js",
    output: {
      file: "www/js/script.js",
      format: "iife",
    },
  },
  {
    input: "www/js/main.js",
    output: {
      file: "www/js/script.min.js",
      format: "iife",
      name: "version",
      plugins: [terser()],
    },
  },
  {
    input: "www/js/week03/07-friday-project-a.js",
    output: {
      file: "www/js/time.js",
      format: "iife",
      name: "Time",
    },
  },
];

export default rollupConfig;
