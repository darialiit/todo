/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! inbox.png */ \"./src/inbox.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! today.png */ \"./src/today.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! checked1.png */ \"./src/checked1.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! starred.png */ \"./src/starred.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! folder.png */ \"./src/folder.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --btn-back: #ad7be9;\n  --btn-back2: #bfdce5;\n  --back-border: #eeeeee;\n  --back-nav: #f9f9f9;\n  --section: #9ba4b4;\n  --main: #14274e;\n\n  --btn-back-hov: #cfcfcf;\n}\n\n* {\n  font-family: 'Poppins';\n  font-size: 18px;\n  margin: 0;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 7fr 60px;\n  height: 100vh;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--main);\n}\n\nh1 {\n  font-size: 34px;\n  color: white;\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #555555;\n  border-top: 1px solid var(--back-border);\n  font-size: 14px;\n}\n\na {\n  color: #555555;\n  margin-left: 5px;\n  font-size: 14px;\n}\n\n/* Navigation */\n.main {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n\n.nav {\n  border-right: 1px solid var(--back-border);\n  background-color: var(--back-nav);\n  padding: 50px 40px;\n}\n\n.folder {\n  border-radius: 5px;\n  padding: 6px 10px;\n}\n\n.folder:hover {\n  cursor: pointer;\n  background-color: var(--back-border);\n}\n\n.folder::before {\n  content: '';\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-right: 12px;\n  background-size: cover;\n}\n\n#all::before {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n#today::before {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n#finished::before {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n\n#starred::before {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n}\n\n.folders {\n  height: 30%;\n  border-bottom: 1px solid var(--back-border);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding-bottom: 20px;\n}\n\n.projectsTitle {\n  font-size: 16px;\n  color: var(--section);\n  margin-top: 10px;\n}\n\n.projects {\n  margin-top: 15px;\n}\n\n.project {\n  padding: 6px 10px;\n  margin-top: 4px;\n  display: grid;\n  grid-template-columns: 1fr 10fr 1fr;\n}\n\n.project::before {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n  content: '';\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-right: 12px;\n  background-size: cover;\n  /* align-self: center; */\n}\n\n.project:hover {\n  border-radius: 5px;\n  background-color: var(--back-border);\n  cursor: pointer;\n}\n\n.imgMore,\n.star {\n  width: 30px;\n  height: 30px;\n}\n\n#add-project {\n  margin-top: 20px;\n  width: 140px;\n  border-radius: 5px;\n  background-color: var(--btn-back);\n  color: white;\n  cursor: pointer;\n  padding: 6px 4px;\n  display: flex;\n  justify-content: center;\n}\n\n/* Form to add and edit a new project */\n#addProjectForm {\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  margin-top: 5px;\n}\n\n.buttons button {\n  font-size: 18px;\n  font-family: 'Poppins';\n  padding: 4px 6px;\n  min-width: 80px;\n  border-radius: 5px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.buttons {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n#addProjectBtn,\n#editProjectBtn,\n#addTaskBtn {\n  background-color: var(--btn-back);\n  color: white;\n  border: none;\n}\n\n#cancelProjectBtn,\n#cancelEditProjectBtn,\n#cancelTaskBtn {\n  background-color: var(--btn-back2);\n  color: white;\n  border: none;\n}\n\n#addProjectForm input,\n#editProjectForm input {\n  border: 2px solid var(--main);\n  border-radius: 5px;\n  padding: 2px 6px;\n}\n\n#folderImg {\n  width: 20px;\n  height: 20px;\n  margin-right: 12px;\n  margin-left: 5px;\n}\n\n.wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.formholder,\n.formholderEdit {\n  /* background-color: var(--btn-back); */\n  border-radius: 5px;\n  padding: 4px 6px;\n}\n\n/* Hidden Elements */\n.hidden {\n  display: none !important;\n}\n\n/* Edit and Delete Projects element */\n.projectMore button,\n.taskMore button {\n  border: none;\n  background-color: var(--btn-back);\n  border-radius: 5px;\n}\n\n.projectMore button:hover,\n.taskMore button:hover {\n  border: none;\n  background-color: var(--btn-back-hov);\n}\n\n.projectMore,\n.taskMore {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 70px;\n  background-color: var(--btn-back);\n  padding: 4px 6px;\n  border: 1px solid var(--btn-bord);\n  border-radius: 5px;\n  position: absolute;\n}\n\n/* Content page */\n\n.container {\n  margin: 0 60px;\n}\n\n.projectHeader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 30px 70px;\n  /* border: 2px solid var(--btn-back); */\n  /* border-radius: 5px; */\n  margin-bottom: 30px;\n  border-bottom: 1px solid var(--back-border);\n}\n\n.projectNameDisplayed {\n  font-size: 28px;\n  font-weight: 700;\n}\n\n#addTask {\n  background-color: var(--btn-back);\n  border: none;\n  color: white;\n  padding: 6px 16px;\n  border-radius: 5px;\n}\n\n/* Tasks stylying */\n.tasksContainer {\n  margin-right: 100px;\n  /* TODO: do it prettier later */\n}\n\n.task {\n  display: grid;\n  grid-template-columns: 20px 1fr 30px 110px 30px;\n  gap: 40px;\n  align-items: center;\n  padding: 8px 10px;\n  background-color: #eeeeee;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.taskNameDisplay {\n  font-size: 18px;\n}\n\n.taskDescriptionDisplay {\n  font-size: 16px;\n  color: var(--section);\n}\n\n.wrapperName {\n  display: flex;\n  flex-direction: column;\n}\n\n.star:hover,\n.imgMore:hover {\n  cursor: pointer;\n}\n\n.check {\n  appearance: none;\n  position: relative;\n  width: 1.2em;\n  height: 1.2em;\n  border: 1px solid var(--main);\n  border-radius: 2px;\n  margin-left: 10px;\n}\n\n.check::before {\n  content: '✔';\n  position: absolute;\n  font-size: 1.2em;\n  right: -1px;\n  top: -0.3em;\n  visibility: hidden;\n}\n\n.check:checked::before {\n  visibility: visible;\n}\n\n.check:hover {\n  cursor: pointer;\n}\n\n/* Form to add a new task */\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 9999;\n}\n\n#addTaskForm {\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  text-align: center;\n  border-radius: 10px;\n  padding: 50px 40px;\n  width: 500px;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 40px 3fr 1fr;\n  gap: 10px;\n}\n\n#taskDescription,\n#addTaskForm .buttons {\n  grid-column: span 2;\n}\n\n#addTaskForm input {\n  border-radius: 5px;\n  border: 1px solid rgb(218, 218, 218);\n  padding: 6px 10px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteElement: () => (/* binding */ deleteElement),\n/* harmony export */   hideElement: () => (/* binding */ hideElement),\n/* harmony export */   switchVisability: () => (/* binding */ switchVisability)\n/* harmony export */ });\nfunction switchVisability(element) {\n  if (element.classList.contains('hidden')) {\n    element.classList.remove('hidden');\n  } else {\n    element.classList.add('hidden');\n  }\n}\n\nfunction hideElement(element) {\n  if (!element.classList.contains('hidden')) {\n    element.classList.add('hidden');\n  }\n}\n\nfunction deleteElement(toDelete) {\n  toDelete.parentNode.removeChild(toDelete);\n}\n\n\n//# sourceURL=webpack:///./src/common.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\n\n\n(0,_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_tasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectLogic)\n/* harmony export */ });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/common.js\");\n\n\nfunction ProjectLogic() {\n  class Project {\n    constructor(name) {\n      this.name = name;\n    }\n  }\n\n  const projectsDiv = document.querySelector('.projects');\n  const btnAdd = document.querySelector('#add-project');\n  const formholder = document.querySelector('.formholder');\n  const formholderEdit = document.querySelector('.formholderEdit');\n  const submitAddProject = document.querySelector('#addProjectBtn');\n  const formAddProject = document.querySelector('#addProjectForm');\n  const formEditProject = document.querySelector('#editProjectForm');\n  const cancelAddProject = document.querySelector('#cancelProjectBtn');\n\n  function renderProject(project) {\n    const newDiv = document.createElement('div');\n    newDiv.classList.add('project');\n    newDiv.textContent = project.name;\n    const imgMore = document.createElement('img');\n    imgMore.classList.add('imgMore');\n    imgMore.src = '/home/darialaia/repos/todo/src/more.png';\n    newDiv.appendChild(imgMore);\n    projectsDiv.appendChild(newDiv);\n  }\n\n  function createProject(name) {\n    const newProject = new Project(name);\n    renderProject(newProject);\n  }\n\n  // Open the form to add a new project\n  btnAdd.addEventListener('click', () => {\n    (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(formholder);\n    (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(btnAdd);\n  });\n\n  // Add a new project to the list\n  submitAddProject.addEventListener('click', (e) => {\n    e.preventDefault();\n    const answer = document.querySelector('#projectName');\n    const newProjectName = answer.value;\n    createProject(newProjectName);\n    (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(formholder);\n    (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(btnAdd);\n    formAddProject.reset();\n  });\n\n  // cancel adding a new project\n  cancelAddProject.addEventListener('click', (e) => {\n    e.preventDefault();\n    (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(formholder);\n    (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(btnAdd);\n  });\n\n  const projectMoreDiv = document.querySelector('.projectMore');\n  const nav = document.querySelector('.nav');\n\n  function getPDivPosition(project) {\n    const yAxis = project.getBoundingClientRect().y;\n    const xAxis = project.getBoundingClientRect().right;\n    projectMoreDiv.style.top = `${yAxis + window.scrollY}px`;\n    projectMoreDiv.style.left = `${xAxis + window.scrollX}px`;\n  }\n\n  function removePreviousMarks() {\n    const allMarked = document.querySelectorAll('.projectMarker');\n\n    allMarked.forEach((mark) => {\n      mark.classList.remove('projectMarker');\n    });\n  }\n\n  function addProjectMarker(project) {\n    if (project.classList.contains('projectMarker')) {\n      project.classList.remove('projectMarker');\n    } else {\n      project.classList.add('projectMarker');\n    }\n  }\n\n  function editElement(toEdit) {\n    (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(formholderEdit);\n    (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(toEdit);\n    const toEditContent = toEdit.firstChild.textContent;\n    const projectNameEdit = document.querySelector('#projectNameEdit');\n    toEdit.parentNode.insertBefore(formholderEdit, toEdit.nextSibling);\n    projectNameEdit.placeholder = toEditContent;\n  }\n\n  function displayProjectName(chosenProject) {\n    const display = document.querySelector('.projectNameDisplayed');\n    const chosenName = chosenProject.firstChild.textContent;\n    display.textContent = chosenName;\n  }\n\n  window.addEventListener('click', (e) => {\n    if (e.target.id === 'projectDeleteBtn') {\n      const elementToDelete = document.querySelector('.projectMarker');\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.deleteElement)(elementToDelete);\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(projectMoreDiv);\n    } else if (e.target.id === 'projectEditBtn') {\n      e.preventDefault();\n      const elementToEdit = document.querySelector('.projectMarker');\n      editElement(elementToEdit);\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(projectMoreDiv);\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(btnAdd);\n    } else if (e.target.classList.value !== 'imgMore') {\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.hideElement)(projectMoreDiv);\n      // removePreviousMarks();\n    }\n  });\n\n  nav.addEventListener('click', (e) => {\n    if (e.target.classList.contains('imgMore')) {\n      getPDivPosition(e.target.parentNode);\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(projectMoreDiv);\n      removePreviousMarks();\n      addProjectMarker(e.target.parentNode);\n    }\n    if (e.target.id === 'editProjectBtn') {\n      e.preventDefault();\n      const currentDiv = document.querySelector('.projectMarker');\n      const newName = document.querySelector('#projectNameEdit').value;\n      currentDiv.firstChild.textContent = newName;\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(currentDiv);\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(formholderEdit);\n      formEditProject.reset();\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(btnAdd);\n    }\n    if (e.target.id === 'cancelEditProjectBtn') {\n      e.preventDefault();\n      const currentDiv = document.querySelector('.projectMarker');\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(currentDiv);\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(formholderEdit);\n      formEditProject.reset();\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(btnAdd);\n    }\n    if (e.target.classList.contains('project')) {\n      displayProjectName(e.target);\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskLogic)\n/* harmony export */ });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/common.js\");\n\n\nfunction TaskLogic() {\n  class Task {\n    constructor(name, date, description) {\n      this.name = name;\n      this.date = date;\n      this.description = description;\n      this.project = 'default';\n    }\n  }\n\n  const firstTask = new Task('First', '01/02/2024', 'Need to do things');\n  const tasksContainer = document.querySelector('.tasksContainer');\n\n  function renderTask(task) {\n    const divMain = document.createElement('div');\n    divMain.classList.add('task');\n\n    const input = document.createElement('input');\n    input.classList.add('check');\n    input.type = 'checkbox';\n\n    const divWrapper = document.createElement('div');\n    divWrapper.classList.add('wrapperName');\n    const taskName = document.createElement('p');\n    taskName.classList.add('taskNameDisplay');\n    taskName.textContent = task.name;\n    const taskDesc = document.createElement('p');\n    taskDesc.classList.add('taskDescriptionDisplay');\n    taskDesc.textContent = task.description;\n    divWrapper.appendChild(taskName);\n    divWrapper.appendChild(taskDesc);\n\n    const imgStar = document.createElement('img');\n    imgStar.classList.add('star');\n    imgStar.src = '/home/darialaia/repos/todo/src/star.png';\n    imgStar.alt = 'not filled star';\n\n    const date = document.createElement('div');\n    date.classList.add('dateDisplay');\n    date.textContent = task.date;\n\n    const imgMore = document.createElement('img');\n    imgMore.classList.add('imgMore');\n    imgMore.src = '/home/darialaia/repos/todo/src/more.png';\n    imgMore.alt = 'three dots meaning addicional information';\n\n    divMain.appendChild(input);\n    divMain.appendChild(divWrapper);\n    divMain.appendChild(imgStar);\n    divMain.appendChild(date);\n    divMain.appendChild(imgMore);\n\n    tasksContainer.appendChild(divMain);\n  }\n\n  function createTask(name, date, description) {\n    const newTask = new Task(name, date, description);\n    renderTask(newTask);\n  }\n\n  const container = document.querySelector('.container');\n  const addTastOverlay = document.querySelector('.overlay');\n  const formTaskEdit = document.querySelector('.formTaskEdit');\n\n  function switchImportant(star) {\n    if (star.classList.contains('starred')) {\n      star.classList.remove('starred');\n      star.src = '/home/darialaia/repos/todo/src/star.png';\n    } else {\n      star.classList.add('starred');\n      star.src = '/home/darialaia/repos/todo/src/starred.png';\n    }\n  }\n\n  function switchComplete(task) {\n    if (task.classList.contains('checked')) {\n      task.classList.remove('checked');\n    } else {\n      task.classList.add('checked');\n    }\n  }\n\n  function addTaskMarker(task) {\n    if (task.classList.contains('taskMarker')) {\n      task.classList.remove('taskMarker');\n    } else {\n      task.classList.add('taskMarker');\n    }\n  }\n\n  function removePreviousTMarks() {\n    const allMarked = document.querySelectorAll('.taskMarker');\n\n    allMarked.forEach((mark) => {\n      mark.classList.remove('taskMarker');\n    });\n  }\n\n  const taskMoreDiv = document.querySelector('.taskMore');\n  const editTaskForm = document.querySelector('#editTaskForm');\n  const addTaskForm = document.querySelector('#addTaskForm');\n\n  function getTDivPosition(task) {\n    const yAxis = task.getBoundingClientRect().y;\n    const xAxis = task.getBoundingClientRect().right;\n    taskMoreDiv.style.top = `${yAxis + window.scrollY}px`;\n    taskMoreDiv.style.left = `${xAxis + window.scrollX}px`;\n  }\n\n  function editElement(toEdit) {\n    (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(formTaskEdit);\n    (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(toEdit);\n    const toEditContent = toEdit.firstChild.textContent;\n    const projectNameEdit = document.querySelector('#taskNameEdit');\n    toEdit.parentNode.insertBefore(formTaskEdit, toEdit.nextSibling);\n    projectNameEdit.placeholder = toEditContent;\n  }\n\n  function renderEditedTask(currentDiv) {\n    const currentName = currentDiv.querySelector('.taskNameDisplay');\n    const currentDate = currentDiv.querySelector('.dateDisplay');\n    const currentDesc = currentDiv.querySelector('.taskDescriptionDisplay');\n\n    const newName = document.querySelector('#taskNameEdit').value;\n    const newDate = document.querySelector('#taskDateEdit').value;\n    const newDesc = document.querySelector('#taskDescriptionEdit').value;\n\n    currentName.textContent = newName;\n    currentDate.textContent = newDate;\n    currentDesc.textContent = newDesc;\n  }\n\n  container.addEventListener('click', (e) => {\n    if (e.target.id === 'addTask') {\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(addTastOverlay);\n    }\n    if (e.target.classList.contains('star')) {\n      switchImportant(e.target);\n    }\n    if (e.target.classList.contains('imgMore')) {\n      getTDivPosition(e.target.parentNode);\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(taskMoreDiv);\n      removePreviousTMarks();\n      addTaskMarker(e.target.parentNode);\n    } else if (e.target.classList.value !== 'imgMore') {\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.hideElement)(taskMoreDiv);\n      // removePreviousMarks();\n    }\n    if (e.target.id === 'addTaskBtn') {\n      e.preventDefault();\n      const namePassed = document.querySelector('#taskName').value;\n      const datePassed = document.querySelector('#taskDate').value;\n      const descPassed = document.querySelector('#taskDescription').value;\n      createTask(namePassed, datePassed, descPassed);\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(addTastOverlay);\n      addTaskForm.reset();\n    }\n    if (e.target.id === 'cancelTaskBtn') {\n      e.preventDefault();\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(addTastOverlay);\n      addTaskForm.reset();\n    }\n    if (e.target.id === 'taskDeleteBtn') {\n      const elementToDelete = document.querySelector('.taskMarker');\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.deleteElement)(elementToDelete);\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.hideElement)(taskMoreDiv);\n    }\n    if (e.target.id === 'taskEditBtn') {\n      e.preventDefault();\n      const elementToEdit = document.querySelector('.taskMarker');\n      editElement(elementToEdit);\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.hideElement)(taskMoreDiv);\n    }\n    if (e.target.id === 'editTaskBtn') {\n      e.preventDefault();\n      const currentDiv = document.querySelector('.taskMarker');\n      renderEditedTask(currentDiv);\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(currentDiv);\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.hideElement)(formTaskEdit);\n      editTaskForm.reset();\n    }\n    if (e.target.id === 'cancelEditTaskBtn') {\n      e.preventDefault();\n      const currentDiv = document.querySelector('.taskMarker');\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(currentDiv);\n      (0,_common__WEBPACK_IMPORTED_MODULE_0__.switchVisability)(formTaskEdit);\n      editTaskForm.reset();\n    }\n    if (e.target.classList.contains('check')) {\n      switchComplete(e.target.parentNode);\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./src/tasks.js?");

/***/ }),

/***/ "./src/checked1.png":
/*!**************************!*\
  !*** ./src/checked1.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f298cca57a5a8b36055.png\";\n\n//# sourceURL=webpack:///./src/checked1.png?");

/***/ }),

/***/ "./src/folder.png":
/*!************************!*\
  !*** ./src/folder.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0d0badff89498eddaeb4.png\";\n\n//# sourceURL=webpack:///./src/folder.png?");

/***/ }),

/***/ "./src/inbox.png":
/*!***********************!*\
  !*** ./src/inbox.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5614a82432c4176fe8f0.png\";\n\n//# sourceURL=webpack:///./src/inbox.png?");

/***/ }),

/***/ "./src/starred.png":
/*!*************************!*\
  !*** ./src/starred.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d0cbd94e0a4a62fc2bf4.png\";\n\n//# sourceURL=webpack:///./src/starred.png?");

/***/ }),

/***/ "./src/today.png":
/*!***********************!*\
  !*** ./src/today.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9010c46470697eb997f0.png\";\n\n//# sourceURL=webpack:///./src/today.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;