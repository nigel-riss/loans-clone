/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/city.js":
/*!********************************!*\
  !*** ./src/js/modules/city.js ***!
  \********************************/
/*! exports provided: CitySelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitySelector", function() { return CitySelector; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CitySelector = /*#__PURE__*/function () {
  function CitySelector() {
    var _this$_cityButton,
        _this = this,
        _this$_closeButton,
        _this$_okButton,
        _this$_overlay;

    _classCallCheck(this, CitySelector);

    this._cityButton = document.querySelector("#city-button");
    this._closeButton = document.querySelector("#city-close");
    this._okButton = document.querySelector("#city-ok");
    this._overlay = document.querySelector(".city-select__overlay");
    this._citySelector = document.querySelector(".city-select");
    (_this$_cityButton = this._cityButton) === null || _this$_cityButton === void 0 ? void 0 : _this$_cityButton.addEventListener("click", function (evt) {
      _this._toggleSelector();
    });
    (_this$_closeButton = this._closeButton) === null || _this$_closeButton === void 0 ? void 0 : _this$_closeButton.addEventListener("click", function () {
      _this._closeSelector();
    });
    (_this$_okButton = this._okButton) === null || _this$_okButton === void 0 ? void 0 : _this$_okButton.addEventListener("click", function () {
      _this._closeSelector();
    });
    (_this$_overlay = this._overlay) === null || _this$_overlay === void 0 ? void 0 : _this$_overlay.addEventListener("click", function () {
      _this._closeSelector();
    });
  }

  _createClass(CitySelector, [{
    key: "_toggleSelector",
    value: function _toggleSelector() {
      var _this$_citySelector;

      (_this$_citySelector = this._citySelector) === null || _this$_citySelector === void 0 ? void 0 : _this$_citySelector.classList.toggle("open");
    }
  }, {
    key: "_closeSelector",
    value: function _closeSelector() {
      var _this$_citySelector2;

      (_this$_citySelector2 = this._citySelector) === null || _this$_citySelector2 === void 0 ? void 0 : _this$_citySelector2.classList.remove("open");
    }
  }]);

  return CitySelector;
}();

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu = /*#__PURE__*/function () {
  function Menu() {
    var _this = this;

    _classCallCheck(this, Menu);

    this._menuButton = document.querySelector("#menu-button");
    this._closeButton = document.querySelector("#close-button");
    this._mainNav = document.querySelector(".header__logo-n-nav");

    if (this._menuButton && this._closeButton) {
      this._menuButton.addEventListener("click", function () {
        _this._toggleMenu();
      });

      this._closeButton.addEventListener("click", function () {
        _this._toggleMenu();
      });
    }

    if (this._mainNav) {
      this._mainNav.addEventListener("click", function (evt) {
        if (evt.target.classList.contains("main-nav__link")) {
          _this._closeMenu();
        }
      });
    }
  }

  _createClass(Menu, [{
    key: "_toggleMenu",
    value: function _toggleMenu() {
      var _this$_mainNav;

      (_this$_mainNav = this._mainNav) === null || _this$_mainNav === void 0 ? void 0 : _this$_mainNav.classList.toggle("open");
    }
  }, {
    key: "_closeMenu",
    value: function _closeMenu() {
      var _this$_mainNav2;

      (_this$_mainNav2 = this._mainNav) === null || _this$_mainNav2 === void 0 ? void 0 : _this$_mainNav2.classList.remove("open");
    }
  }]);

  return Menu;
}();

/***/ }),

/***/ "./src/js/modules/up.js":
/*!******************************!*\
  !*** ./src/js/modules/up.js ***!
  \******************************/
/*! exports provided: UpButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpButton", function() { return UpButton; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UpButton = function UpButton() {
  var _this = this;

  _classCallCheck(this, UpButton);

  this._upButton = document.querySelector("#up-button");
  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight) {
      var _this$_upButton;

      (_this$_upButton = _this._upButton) === null || _this$_upButton === void 0 ? void 0 : _this$_upButton.classList.add("shown");
    } else {
      var _this$_upButton2;

      (_this$_upButton2 = _this._upButton) === null || _this$_upButton2 === void 0 ? void 0 : _this$_upButton2.classList.remove("shown");
    }
  });
};

/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu.js */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_up_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/up.js */ "./src/js/modules/up.js");
/* harmony import */ var _modules_city_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/city.js */ "./src/js/modules/city.js");




var _menu = new _modules_menu_js__WEBPACK_IMPORTED_MODULE_0__["Menu"]();

var _up = new _modules_up_js__WEBPACK_IMPORTED_MODULE_1__["UpButton"]();

var _city = new _modules_city_js__WEBPACK_IMPORTED_MODULE_2__["CitySelector"]();

/***/ })

/******/ });
//# sourceMappingURL=scripts.js.map