"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/data";
exports.ids = ["pages/api/data"];
exports.modules = {

/***/ "papaparse":
/*!****************************!*\
  !*** external "papaparse" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("papaparse");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/data.js":
/*!***************************!*\
  !*** ./pages/api/data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! papaparse */ \"papaparse\");\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction handler(req, res) {\n    const csvPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"public\", \"students_synthetic.csv\");\n    const csv = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(csvPath, \"utf8\");\n    const { data } = papaparse__WEBPACK_IMPORTED_MODULE_2___default().parse(csv, {\n        header: true,\n        dynamicTyping: true\n    });\n    res.status(200).json(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGF0YS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1CO0FBQ0k7QUFDSztBQUViLFNBQVNHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUN0QyxNQUFNQyxVQUFVTCxnREFBUyxDQUFDTyxRQUFRQyxHQUFHLElBQUksVUFBVTtJQUNuRCxNQUFNQyxNQUFNVixzREFBZSxDQUFDTSxTQUFTO0lBQ3JDLE1BQU0sRUFBRU0sSUFBSSxFQUFFLEdBQUdWLHNEQUFVLENBQUNRLEtBQUs7UUFBRUksUUFBUTtRQUFNQyxlQUFlO0lBQUs7SUFDckVWLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNMO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWdlYnJhLWRhc2hib2FyZC8uL3BhZ2VzL2FwaS9kYXRhLmpzPzY3ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBQYXBhIGZyb20gJ3BhcGFwYXJzZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBjc3ZQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMnLCAnc3R1ZGVudHNfc3ludGhldGljLmNzdicpXG4gIGNvbnN0IGNzdiA9IGZzLnJlYWRGaWxlU3luYyhjc3ZQYXRoLCAndXRmOCcpXG4gIGNvbnN0IHsgZGF0YSB9ID0gUGFwYS5wYXJzZShjc3YsIHsgaGVhZGVyOiB0cnVlLCBkeW5hbWljVHlwaW5nOiB0cnVlIH0pXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpXG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiUGFwYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjc3ZQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJjc3YiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwicGFyc2UiLCJoZWFkZXIiLCJkeW5hbWljVHlwaW5nIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/data.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/data.js"));
module.exports = __webpack_exports__;

})();