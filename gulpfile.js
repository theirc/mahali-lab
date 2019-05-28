const gulp = require("gulp");
const suite = require("@cloudcannon/suite");

suite.dev(gulp);
// suite.dist(gulp, {
//   "dist": {
//     "baseurl": "p"
//   }
// });
// suite.i18n(gulp);