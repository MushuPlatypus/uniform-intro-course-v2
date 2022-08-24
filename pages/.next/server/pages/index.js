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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaWZvcm0taW50cm8tY291cnNlLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz83MTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfX19fVDdLXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _uniformdev_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uniformdev/canvas */ \"@uniformdev/canvas\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_uniformdev_canvas__WEBPACK_IMPORTED_MODULE_2__]);\n_uniformdev_canvas__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nasync function getStaticProps() {\n    const client = new _uniformdev_canvas__WEBPACK_IMPORTED_MODULE_2__.CanvasClient({\n        apiKey: process.env.UNIFORM_API_KEY,\n        projectId: process.env.UNIFORM_PROJECT_ID\n    });\n    const { composition  } = await client.getCompositionBySlug({\n        slug: \"/\"\n    });\n    return {\n        props: {\n            composition\n        }\n    };\n}\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Uniform Enablement\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\uniform-intro-course\\\\pages\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\uniform-intro-course\\\\pages\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projects\\\\uniform-intro-course\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: \"[header]\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\uniform-intro-course\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                        children: \"[body]\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\uniform-intro-course\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projects\\\\uniform-intro-course\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"[footer]\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projects\\\\uniform-intro-course\\\\pages\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\uniform-intro-course\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projects\\\\uniform-intro-course\\\\pages\\\\index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNrQjtBQUNHO0FBRTNDLGVBQWVHLGNBQWMsR0FBRztJQUNyQyxNQUFNQyxNQUFNLEdBQUcsSUFBSUYsNERBQVksQ0FBQztRQUM5QkcsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZTtRQUNuQ0MsU0FBUyxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csa0JBQWtCO0tBQzFDLENBQUM7SUFDRixNQUFNLEVBQUVDLFdBQVcsR0FBRSxHQUFHLE1BQU1QLE1BQU0sQ0FBQ1Esb0JBQW9CLENBQUM7UUFDeERDLElBQUksRUFBRSxHQUFHO0tBQ1YsQ0FBQztJQUNGLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQ0xILFdBQVc7U0FDWjtLQUNGLENBQUM7Q0FDSDtBQUVjLFNBQVNJLElBQUksR0FBRztJQUM3QixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVoQiwwRUFBZ0I7OzBCQUM5Qiw4REFBQ0Qsa0RBQUk7O2tDQUNILDhEQUFDbUIsT0FBSztrQ0FBQyxvQkFBa0I7Ozs7OzRCQUFRO2tDQUNqQyw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs0QkFBRzs7Ozs7O29CQUNsQzswQkFFUCw4REFBQ0MsTUFBSTtnQkFBQ04sU0FBUyxFQUFFaEIscUVBQVc7O2tDQUMxQiw4REFBQ3VCLElBQUU7d0JBQUNQLFNBQVMsRUFBRWhCLHNFQUFZO2tDQUFFLFVBQVE7Ozs7OzRCQUFLO2tDQUUxQyw4REFBQ3dCLEdBQUM7d0JBQUNSLFNBQVMsRUFBRWhCLDRFQUFrQjtrQ0FBRSxRQUFNOzs7Ozs0QkFBSTs7Ozs7O29CQUN2QzswQkFFUCw4REFBQzBCLFFBQU07Z0JBQUNWLFNBQVMsRUFBRWhCLHVFQUFhOzBCQUM5Qiw0RUFBQ2UsS0FBRzs4QkFBQyxVQUFROzs7Ozt3QkFBTTs7Ozs7b0JBQ1o7Ozs7OztZQUNMLENBQ047Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaWZvcm0taW50cm8tY291cnNlLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBDYW52YXNDbGllbnQgfSBmcm9tIFwiQHVuaWZvcm1kZXYvY2FudmFzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgY2xpZW50ID0gbmV3IENhbnZhc0NsaWVudCh7XG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5VTklGT1JNX0FQSV9LRVksXG4gICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5VTklGT1JNX1BST0pFQ1RfSUQsXG4gIH0pO1xuICBjb25zdCB7IGNvbXBvc2l0aW9uIH0gPSBhd2FpdCBjbGllbnQuZ2V0Q29tcG9zaXRpb25CeVNsdWcoe1xuICAgIHNsdWc6IFwiL1wiLFxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY29tcG9zaXRpb24sXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlVuaWZvcm0gRW5hYmxlbWVudDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+W2hlYWRlcl08L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5bYm9keV08L3A+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGRpdj5bZm9vdGVyXTwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIkNhbnZhc0NsaWVudCIsImdldFN0YXRpY1Byb3BzIiwiY2xpZW50IiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlVOSUZPUk1fQVBJX0tFWSIsInByb2plY3RJZCIsIlVOSUZPUk1fUFJPSkVDVF9JRCIsImNvbXBvc2l0aW9uIiwiZ2V0Q29tcG9zaXRpb25CeVNsdWciLCJzbHVnIiwicHJvcHMiLCJIb21lIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsInAiLCJkZXNjcmlwdGlvbiIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@uniformdev/canvas":
/*!*************************************!*\
  !*** external "@uniformdev/canvas" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@uniformdev/canvas");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();