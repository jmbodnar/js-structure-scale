const rollupConfig = [
  {
    input: "www/js/main.js",
    output: {
      file: "www/js/script.js",
      format: "iife",
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

// const rollupConfig = {
//   input: "www/js/week03/07-friday-project-a.js",
//   output: {
//     file: "www/js/time.js",
//     format: "iife",
//     name: "Time",
//   },
// };

// export default rollupConfig;
