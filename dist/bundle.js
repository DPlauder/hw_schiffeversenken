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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --cell-size: auto; }\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  margin: 0; }\n\n#app {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%; }\n\n.sideBar {\n  height: 75%;\n  width: 35%;\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid #ccc; }\n\n#boardContainer {\n  margin: 20px;\n  width: 100%;\n  height: 75%;\n  display: flex;\n  flex-direction: row;\n  gap: 10px; }\n\n#boardKi,\n#boardPlayer {\n  height: 400px;\n  width: 400px;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(10, auto);\n  align-items: stretch; }\n  #boardKi .cell,\n  #boardPlayer .cell {\n    width: auto;\n    height: auto;\n    border: 1px solid #ccc;\n    text-align: center;\n    font-size: 16px;\n    cursor: pointer; }\n\n.shipHit {\n  background-color: red; }\n\n.shipMiss {\n  background-color: blue; }\n\n.shipSelector {\n  display: grid;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto; }\n  .shipSelector .shipFrame {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    gap: 1px;\n    height: 80px;\n    border: 1px solid black;\n    grid-auto-flow: column; }\n    .shipSelector .shipFrame #shipDisplay {\n      width: 75%;\n      height: 25%;\n      display: flex;\n      justify-content: space-around;\n      gap: 5px; }\n  .shipSelector .btnContainer {\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10px;\n    width: auto;\n    display: flex;\n    flex-direction: row;\n    gap: 5px; }\n    .shipSelector .btnContainer button {\n      width: 100%; }\n  .shipSelector .shipPart {\n    background-color: black;\n    width: 38px;\n    height: 38px; }\n  .shipSelector .ship1 {\n    display: flex;\n    gap: 5px; }\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _modules_gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameboard.js */ \"./src/modules/gameboard.js\");\n/* harmony import */ var _modules_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/player.js */ \"./src/modules/player.js\");\n/* harmony import */ var _modules_ship_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ship.js */ \"./src/modules/ship.js\");\n/* harmony import */ var _view_gameboardview_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/gameboardview.js */ \"./src/view/gameboardview.js\");\n/* harmony import */ var _view_shipsSelectorUi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/shipsSelectorUi.js */ \"./src/view/shipsSelectorUi.js\");\n/* harmony import */ var _modules_shipSelector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/shipSelector.js */ \"./src/modules/shipSelector.js\");\n// .js Endungen dazu wegen Webpack + use strict\n\n\n\n\n\n\n\n\n\n//let declarations schreibgeschützt\nconst gameboardPlayer = new _modules_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard();\nconst gameboardKI = new _modules_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard();\n\nconst player = new _modules_player_js__WEBPACK_IMPORTED_MODULE_2__.Player(\"Marko\", gameboardKI);\n\n//Testschiffe;\nconst ships = [];\nconst carrier = new _modules_ship_js__WEBPACK_IMPORTED_MODULE_3__.Ship(\"carrier\", 5);\n/* \nconst battleship = new Ship(\"battleship\", 4);\nconst cruiser = new Ship(\"cruiser\", 3);\nconst submarine = new Ship(\"submarine\", 3);\nconst destroyer = new Ship(\"Destroyer\", 2);\n\n//ships.push(carrier, battleship, cruiser, submarine, destroyer);\nships.push(carrier);\n//Schiffe generieren und platzieren\n\ngameboardPlayer.createShipsCPU(ships);\ngameboardPlayer.placeShipsCPU();\n */\n//gameboardKI.createShipsCPU(ships);\n//gameboardKI.placeShipsCPU();\n\n//UI\nconst gameBoardViewPlayer = new _view_gameboardview_js__WEBPACK_IMPORTED_MODULE_4__.GameboardView(\"boardPlayer\");\nconst gameBoardViewKi = new _view_gameboardview_js__WEBPACK_IMPORTED_MODULE_4__.GameboardView(\"boardKi\");\nconst shipSelector = new _modules_shipSelector_js__WEBPACK_IMPORTED_MODULE_6__.ShipSelector();\nconst shipsSelectorUi = new _view_shipsSelectorUi_js__WEBPACK_IMPORTED_MODULE_5__.ShipSelectorUi();\n\ngameBoardViewPlayer.showShips(gameboardPlayer.getGameBoard());\n\n//zum testen geadded <<<<<<<<<<<<===================================\n\nlet x = 11;\nlet y = 11;\nconst setShipPosition = document\n  .getElementById(\"boardPlayer\")\n  .addEventListener(\"click\", (e) => {\n    const key = e.target.id;\n    if (key < 10) {\n      (x = 0), (y = key);\n    } else {\n      (x = key[0]), (y = key[1]);\n    }\n  });\n\nlet shipNumb = 1;\nshipsSelectorUi.createShipFrame(shipNumb);\nconst select = document\n  .getElementById(\"selectorBtnContainer\")\n  .addEventListener(\"click\", (e) => {\n    const key = e.target.textContent;\n    if (key === \">\" && shipNumb < 5) {\n      shipNumb++;\n    }\n    if (key === \"<\" && shipNumb > 1) {\n      shipNumb--;\n    }\n    shipsSelectorUi.createShipFrame(shipNumb);\n    if (key === \"O\") {\n      if (\n        gameboardPlayer.isPlacementValid(\n          x,\n          y,\n          shipSelector.getchosenShip(shipNumb)\n        )\n      ) {\n        shipSelector.addChosenShips(x, y, shipNumb);\n      } else {\n        console.log(\"cant place ship there\");\n      }\n    }\n    if (key === \"Start\") console.log(shipSelector.getChosenShips());\n  });\n\nconst shootBoard = document\n  .getElementById(\"boardKi\")\n  .addEventListener(\"click\", (e) => {\n    const targetCell = e.target.id;\n    if (targetCell < 10) {\n      player.attackEnemy(0, targetCell);\n    } else {\n      player.attackEnemy(targetCell[0], targetCell[1]);\n    }\n    gameBoardViewKi.updateViewBoard(gameboardKI.getGameBoard());\n    if (gameboardKI.checkWin()) console.log(\"Alle Schiffe versenkt\");\n  });\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/modules/ship.js\");\n\n\n\n\nclass Gameboard {\n  constructor() {\n    //gameboard init mit Gameboard\n    this.gameboard = this.createGameboard();\n    this.ships = [];\n    this.counter = 0;\n  }\n\n  createGameboard() {\n    //temporäres Array für Erstellung + return\n    const board = [];\n    let innerArray = [];\n    for (let i = 0; i < 10; i++) {\n      innerArray = [];\n      for (let j = 0; j < 10; j++) {\n        innerArray.push(0);\n      }\n      board.push(innerArray);\n    }\n    return board;\n  }\n  // wird nicht benutzt\n  placeShip(ship, x, y) {\n    /* \n    let z = 1;\n    if (this.gameboard[x][y] !== 0) {\n      console.log(\"Hallo, hier ist ein Schiff! Platziere es bitte wo anders\");\n    } else {\n      for (let i = 0; i < ship.shipLength(); i++) {\n        if ([x + i] > 9) {\n          this.gameboard[x - z][y] = ship.id;\n          z++;\n        } else {\n          this.gameboard[x + i][y] = ship.id;\n        }\n      }\n       */\n    this.ships.push(ship);\n  }\n  // angepasst damit CPU immer die selben Schiffe erstellt wie Player\n  createShipsCPU(ships) {\n    //counter hinzugefügt für ids\n    let idCounter = 1;\n    ships.forEach((ship) => {\n      this.ships.push(\n        new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(\n          ship.name,\n          ship.length,\n          idCounter,\n          Math.random() >= 0.5 ? \"h\" : \"v\"\n        )\n      );\n      idCounter++;\n    });\n    // rausgenommen weil unnötig / doppelt\n    /* \n    const carrier = new Ship(\"carrier\", 5, 5, this.ships);\n    const battleship = new Ship(\"battleship\", 4, 4, this.ships);\n    const cruiser = new Ship(\"cruiser\", 3, 3, this.ships);\n    const submarine = new Ship(\"submarine\", 3, 2, this.ships);\n    const destroyer = new Ship(\"Destroyer\", 2, 1, this.ships);\n     */\n    //this.ships.push(carrier, battleship, cruiser, submarine, destroyer);\n    //console.log(this.ships);\n  }\n  // Funktion ausgelagert von placeShips & geändert damit schiffe horizontal oder vertikal\n  setShipPosition(x, y, ship) {\n    const shiplength = ship.getShipLength();\n    for (let i = 0; i < shiplength; i++) {\n      if (ship.direction == \"h\") this.gameboard[x][y + i] = ship.id;\n      if (ship.direction == \"v\") this.gameboard[x + i][y] = ship.id;\n    }\n  }\n\n  placeShipsCPU() {\n    for (const ship of this.ships) {\n      let x = 0;\n      let y = 0;\n      console.log(\"cpu\", ship);\n      do {\n        x = Math.floor(Math.random() * 10);\n        y = Math.floor(Math.random() * 10);\n      } while (!this.isPlacementValid(x, y, ship));\n      this.setShipPosition(x, y, ship);\n      /* \n      for (let i = 0; i < ship.shipLength(); i++) {\n        if (x + i > 9) {\n          this.gameboard[x - z][y] = ship.id;\n          z++;\n        } else {\n          this.gameboard[x + i][y] = ship.id;\n        }\n      }\n       */\n    }\n  }\n  // Regeln für Horizontale Schiffplatzierung dazu\n  // verallgemeinert damit Abfrage auch für Spielerplatzierung funktioniert\n  isPlacementValid(x, y, ship) {\n    const shipLength = ship.getShipLength();\n    x = parseInt(x);\n    y = parseInt(y);\n    for (let i = 0; i < shipLength; i++) {\n      if (ship.direction === \"v\") {\n        if (x + i > 9) return false;\n        if (this.gameboard[x + i][y] !== 0) return false;\n      }\n      console.log(typeof x);\n      if (ship.direction === \"h\") {\n        if (y + i > 9) return false;\n        if (this.gameboard[x][y + i] !== 0) return false;\n      }\n    }\n    return true;\n  }\n\n  attackShip(x, y) {\n    const currentItem = this.gameboard[x][y];\n    const ship = this.ships.find((ship) => ship.id === currentItem);\n    //Abfrage Feld Doppelschuss\n    if (this.gameboard[x][y] === \"T\" || this.gameboard[x][y] === \"X\") {\n      console.log(\"Auf das Feld wurde schon geschossen\");\n      return false;\n    }\n    if (ship) {\n      ship.timesHit++;\n      //setter Methode als Ersatz\n      //this.gameboard[x][y] = \"Treffer\";\n      this.setGameBoard(x, y, \"T\");\n\n      if (ship.timesHit === ship.getShipLength()) {\n        ship.isSunk = true;\n        console.log(`Du hast ${ship.name} versenkt!`);\n        return \"Versenkt\";\n      } else {\n        console.log(\"Treffer!\");\n        return \"Treffer\";\n      }\n    } else {\n      console.log(\"Verfehlt!\");\n      //setter Ersatz\n      //this.gameboard[x][y] = \"X\";\n      this.setGameBoard(x, y, \"X\");\n\n      return \"Verfehlt\";\n    }\n  }\n  // setter + getter für Gameboardänderungen\n  setGameBoard(x, y, marker) {\n    this.gameboard[x][y] = marker;\n  }\n  getGameBoard() {\n    return this.gameboard;\n  }\n  checkWin() {\n    return this.ships.every((ship) => ship.isSunk === true);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n\n\nclass Player {\n  //erweitert mit enemyGameboard\n  constructor(name, enemyGameboard) {\n    this.name = name;\n    //tausch neues leeres Board mit param Board\n    this.enemyGameboard = enemyGameboard;\n  }\n\n  attackEnemy(x, y) {\n    const result = this.enemyGameboard.attackShip(x, y);\n    //rausgenommen | passiert bereits in gameboard.attackShip\n    /* \n    if (result === \"Treffer\") {\n      console.log(\"Treffer!\");\n    } else if (result === \"X\") {\n      console.log(\"Bereits an dieser Stelle geschossen!\");\n    } else if (result === \"Versenkt\") {\n      console.log(\"Versenkt!\");\n    } else {\n      console.log(\"Verfehlt!\");\n    } */\n  }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\n\n\nclass Ship {\n  constructor(name, length, id, direction) {\n    this.name = name;\n    this.length = length;\n    this.id = id;\n    // zugefügt um schiffe nicht nur vertikal spawnen zu lassen\n    this.direction = direction;\n    this.isSunk = false;\n    this.timesHit = 0;\n    //keine Ahnung was damit geplant war\n    //this.ships = this.ships;\n  }\n\n  getShipLength() {\n    return this.length;\n  }\n\n  hit() {\n    return this.timesHit;\n  }\n\n  checkShipSunk() {\n    this.ships.forEach((ship) => {\n      if (ship.timesHit === ship.shipLength()) {\n        ship.isSunk = true;\n      }\n      if (ship.isSunk) {\n        console.log(\"Du hast \" + ship.name + \" zum sinken gebracht\");\n      }\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

/***/ }),

/***/ "./src/modules/shipSelector.js":
/*!*************************************!*\
  !*** ./src/modules/shipSelector.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ShipSelector: () => (/* binding */ ShipSelector)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\n\nclass ShipSelector {\n  constructor() {\n    this.ships = [\n      { name: \"ship1\", length: 2, direction: \"h\" },\n      { name: \"ship2\", length: 3, direction: \"h\" },\n      { name: \"ship3\", length: 4, direction: \"h\" },\n      { name: \"ship4\", length: 5, direction: \"h\" },\n      { name: \"ship5\", length: 7, direction: \"h\" },\n    ];\n    this.shipsObjects = [];\n    this.chosenShips = [];\n    this.initiateShips();\n  }\n  initiateShips() {\n    this.ships.forEach((ship) => {\n      const newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(ship.name, ship.length, null, ship.direction);\n      this.shipsObjects.push(newShip);\n    });\n  }\n\n  getchosenShip(x, y, shipsSelector) {\n    const ship = this.shipsObjects[shipsSelector - 1];\n\n    console.log(ship);\n    return ship;\n  }\n  getChosenShips() {\n    return this.chosenShips;\n  }\n  //TODO Coordinaten müssen zugefügt werden für erstellung\n  addChosenShips(shipsSelector) {\n    //ship.x = x;\n    //ship.y = y;\n    this.chosenShips.push(this.ships[shipsSelector - 1]);\n  }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/shipSelector.js?");

/***/ }),

/***/ "./src/view/gameboardview.js":
/*!***********************************!*\
  !*** ./src/view/gameboardview.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameboardView: () => (/* binding */ GameboardView)\n/* harmony export */ });\nclass GameboardView {\n  constructor(boardName) {\n    this.parent = document.getElementById(boardName);\n    this.createGameboardView();\n    this.createSidebar();\n  }\n\n  createSidebar = () => {\n    const sideBar = document.getElementById(\"sideBar\");\n    sideBar.classList.add(\"sideBar\");\n  };\n  createGameboardView = () => {\n    //const container = document.getElementById(`${this.parent}`);\n    for (let i = 0; i < 100; i++) {\n      let cell = document.createElement(\"div\");\n      cell.id = `${i}`;\n      cell.classList.add(\"cell\");\n      this.parent.appendChild(cell);\n    }\n    return;\n  };\n  showShips = (gameboard) => {\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        if (gameboard[i][j] > 0) {\n          let combined = parseInt(i.toString() + j.toString());\n          const cell = this.parent.children[combined];\n          cell.classList.add(\"ship\");\n        }\n      }\n    }\n  };\n  updateViewBoard = (gameboard) => {\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        const combined = parseInt(i.toString() + j.toString());\n        const cell = this.parent.children[combined];\n        if (gameboard[i][j] === \"T\") {\n          cell.classList.add(\"shipHit\");\n        }\n        if (gameboard[i][j] === \"X\") {\n          cell.classList.add(\"shipMiss\");\n        }\n      }\n    }\n  };\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/view/gameboardview.js?");

/***/ }),

/***/ "./src/view/shipsSelectorUi.js":
/*!*************************************!*\
  !*** ./src/view/shipsSelectorUi.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ShipSelectorUi: () => (/* binding */ ShipSelectorUi)\n/* harmony export */ });\nclass ShipSelectorUi {\n  constructor() {\n    this.createShipselectorUi();\n  }\n\n  createShipselectorUi() {\n    const container = document.getElementById(\"sideBar\");\n\n    const selector = document.createElement(\"div\");\n    selector.classList.add(\"shipSelector\");\n    container.appendChild(selector);\n\n    const shipFrame = document.createElement(\"div\");\n    shipFrame.classList.add(\"shipFrame\");\n    selector.appendChild(shipFrame);\n\n    const shipDisplay = document.createElement(\"div\");\n    shipDisplay.classList.add(\"shipDisplay\");\n    shipDisplay.id = \"shipDisplay\";\n    shipFrame.appendChild(shipDisplay);\n\n    const btnContainer = document.createElement(\"div\");\n    btnContainer.classList.add(\"btnContainer\");\n    btnContainer.id = \"selectorBtnContainer\";\n    selector.appendChild(btnContainer);\n\n    const sliderBtnLeft = document.createElement(\"button\");\n    sliderBtnLeft.classList.add(\"sliderBtnLeft\");\n    btnContainer.appendChild(sliderBtnLeft);\n    sliderBtnLeft.innerHTML = \"<\";\n\n    const sliderBtnOk = document.createElement(\"button\");\n    sliderBtnOk.classList.add(\"sliderBtnOk\");\n    btnContainer.appendChild(sliderBtnOk);\n    sliderBtnOk.innerHTML = \"O\";\n\n    const sliderBtnRight = document.createElement(\"button\");\n    sliderBtnRight.classList.add(\"sliderBtnRight\");\n    btnContainer.appendChild(sliderBtnRight);\n    sliderBtnRight.innerHTML = \">\";\n\n    const startButton = document.createElement(\"button\");\n    startButton.classList.add(\"startBtn\");\n    startButton.id = \"startBtn\";\n    btnContainer.appendChild(startButton);\n    startButton.innerHTML = \"Start\";\n  }\n\n  createShipFrame(shipNumber) {\n    const container = document.getElementById(\"shipDisplay\");\n    container.innerHTML = \"\";\n    container.className = `ship${shipNumber}`;\n    const template = document.getElementById(`ship${shipNumber}`);\n    const shipClone = template.content.cloneNode(true);\n    container.appendChild(shipClone);\n  }\n}\n\n\n\n//TODO ID's müssen mit +1 da 0 Platzhalter ist\n\n\n//# sourceURL=webpack://battleship/./src/view/shipsSelectorUi.js?");

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