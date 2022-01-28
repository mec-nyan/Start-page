/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hjkl.js":
/*!*********************!*\
  !*** ./src/hjkl.js ***!
  \*********************/
/***/ (() => {

eval("const root = document.querySelector(\"#root\");\n\nconst big = document.createElement(\"div\");\nbig.setAttribute(\"id\", \"big\");\n\nroot.appendChild(big);\n\nconst rects = [[], [], [], [], [], [], [], []];\n\nfor (let i = 0; i < 8; ++i) {\n  for (let j = 0; j < 5; ++j) {\n    const rect = document.createElement(\"div\");\n    rect.setAttribute(\"class\", \"rect\");\n    const img = document.createElement(\"img\");\n    img.src = \"../img/debian.png\";\n    img.alt = \"\";\n    rect.appendChild(img);\n    rects[i].push(rect);\n    big.appendChild(rect);\n  }\n}\n\nconst selector = document.createElement(\"div\");\nselector.setAttribute(\"id\", \"selector\");\nbig.appendChild(selector);\n\nlet row = 0;\nlet col = 0;\nrects[row][col].classList.add(\"selected\");\n\nlet prefix = 1;\nlet command = \"\";\n\nconst select = (key) => {\n  switch (key) {\n    case \"j\":\n      row = row + prefix <= 7 ? row + prefix : 7;\n      prefix = 1;\n      break;\n    case \"k\":\n      row = row - prefix >= 0 ? row - prefix : 0;\n      prefix = 1;\n      break;\n    case \"h\":\n      col = col - prefix >= 0 ? col - prefix : 0;\n      prefix = 1;\n      break;\n    case \"l\":\n      col = col + prefix <= 4 ? col + prefix : 4;\n      prefix = 1;\n      break;\n    case \"0\":\n      col = 0;\n      break;\n    case \"$\":\n      col = 4;\n      break;\n    case \"g\":\n      if (command.length === 0) command = \"g\";\n      else if (command === \"g\") {\n        row = 0;\n        command = \"\";\n      }\n      break;\n    case \"G\":\n      row = 7;\n      break;\n    case \"2\":\n    case \"3\":\n    case \"4\":\n    case \"5\":\n    case \"6\":\n    case \"7\":\n    case \"8\":\n    case \"9\":\n      prefix = parseInt(key);\n      break;\n    default:\n      break;\n  }\n  for (let c = 0; c < 5; ++c) {\n    for (let r = 0; r < 8; ++r) {\n      if (c === col && r === row) {\n        rects[r][c].classList.add(\"selected\");\n      } else {\n        rects[r][c].classList.remove(\"selected\");\n      }\n    }\n  }\n  selector.style.top = `${row * 12.5}%`;\n  selector.style.left = `${col * 20}%`;\n};\n\ndocument.body.onkeydown = (e) => select(e.key);\n\n\n//# sourceURL=webpack://startpage/./src/hjkl.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/hjkl.js"]();
/******/ 	
/******/ })()
;