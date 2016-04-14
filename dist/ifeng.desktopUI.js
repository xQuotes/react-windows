(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-dom"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react-dom", "react"], factory);
	else if(typeof exports === 'object')
		exports["DesktopUI"] = factory(require("react-dom"), require("react"));
	else
		root["DesktopUI"] = factory(root["ReactDOM"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactDom = __webpack_require__(1);

	var _Desktop = __webpack_require__(2);

	var _Desktop2 = _interopRequireDefault(_Desktop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(React.createElement(_Desktop2.default, null), document.getElementById('react'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Img = __webpack_require__(5);

	var _Img2 = _interopRequireDefault(_Img);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Desktop = function (_Component) {
	  _inherits(Desktop, _Component);

	  function Desktop() {
	    _classCallCheck(this, Desktop);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Desktop).apply(this, arguments));
	  }

	  _createClass(Desktop, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'desktop'
	      );
	    }
	  }]);

	  return Desktop;
	}(_react.Component);

	exports.default = Desktop;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _desktop = __webpack_require__(6);

	var _desktop2 = _interopRequireDefault(_desktop);

	var _ubuntu = __webpack_require__(7);

	var _ubuntu2 = _interopRequireDefault(_ubuntu);

	var _winstart = __webpack_require__(8);

	var _winstart2 = _interopRequireDefault(_winstart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  DesktopIcon: _desktop2.default,
	  BggroudImg: _ubuntu2.default,
	  WinstartIcon: _winstart2.default
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "153d507c3335f7b557c5b972894fdf93.jpg";

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADsQAAA7EAZUrDhsAAAGmSURBVEjHxdW9btNgFMbxnz+SCtJAm9ehVEFVKoYuXAAT4krg2hi4AC4BsTEwwYKgEgMDZUk6O3YH2/kAk7gBiWPZ8vCe//u85zw+Zr+IHLhTvdwuredIEEyc+ewNace0Y0HmkYnMUE8s8ZPtgEQmmHooGBtKxSiVKETKNkCsZyQ489Ghl+7piZXLtN8irUX2BcHUiWBsIHUlMkJpse18FeC5p4KBvqjerVCKlLuLXAHOXciVbRJ3RQwKRVWSfQHt0QkZd1n03wCdbP5nwO4KRKyMFC33azxXIm8M2xIL+UrmhdPaA4XCQmHhUmFSW6ps3X/uqlFw36l8LbmQ6ytlivparD03PFMBnnj2i5UKM5EXtbWt3c2q2DuvG0BFtwEol+ePWjuSVLn/yAftHf9LH3SclhVgzy9xu4KO0KYG8b7lrNr4yZGRY33JbY9UAd774FAmc2IqGEnr7ke7YM1Yz83MfEFqYCz4JvNdtqaqFbWtWbGhTKhVBQcbqMRbr7b/mQpzc1+RGMgED5zXqFS8Pg92xcK1a5dI3JUJxh77sV/fVtXrwQ0RM3pNvjd8eQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0wNy0wNVQyMDo1MjoxNyswODowMCsTCv8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTMtMDctMDVUMjA6NTI6MTcrMDg6MDBaTrJDAAAATXRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjguOC03IFExNiB4ODZfNjQgMjAxNC0wMi0yOCBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZ1mkX38AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADI1NunDRBkAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMjU2ejIURAAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxMzczMDI4NzM3fMeCwgAAABN0RVh0VGh1bWI6OlNpemUAMi4xNEtCQveLJMsAAABidEVYdFRodW1iOjpVUkkAZmlsZTovLy9ob21lL2Z0cC8xNTIwL2Vhc3lpY29uLmNuL2Vhc3lpY29uLmNuL2Nkbi1pbWcuZWFzeWljb24uY24vcG5nLzExMjAyLzExMjAyNDMucG5nqNWa4AAAAABJRU5ErkJggg=="

/***/ }
/******/ ])
});
;