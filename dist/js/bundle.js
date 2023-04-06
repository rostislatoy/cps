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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_adaptive_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/adaptive.scss */ "./src/scss/adaptive.scss");
/* harmony import */ var _scss_adaptive_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_adaptive_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_main_brands_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/main-brands.scss */ "./src/scss/main-brands.scss");
/* harmony import */ var _scss_main_brands_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_main_brands_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_colorize_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/colorize.scss */ "./src/scss/colorize.scss");
/* harmony import */ var _scss_colorize_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_colorize_scss__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var header = document.querySelector('header');
var burgerBtn = document.querySelector('#burger-btn');
var menu = document.getElementById('menu');
var body = document.querySelector('body');
var menuBtnBack = document.getElementById('back-burger-btn');
var main = document.querySelector('main');
var menuPadding = document.querySelector('.padding-menu-box');
var messageBtn = document.querySelector('.message');
var messageBtnHeader = document.querySelector('.header-navbar-btn-message');
var phoneBtn = document.querySelector('.phone');
var phoneBtnHeader = document.querySelector('.header-navbar-btn-phone');
var feedbackMenu = document.querySelector('.feedback-menu');
var requestCallMenu = document.querySelector('.request-call');
var cancelFeedbackMenu = document.querySelector('.feedback-menu-btn');
var cancelRequestCallMenu = document.querySelector('#cancelRequestCallMenu');
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var readMore = document.getElementById('read-more');
var hidden = document.getElementById('hidden');
var readMoreBrands = document.getElementById('read-more-brands');
var hiddenBrands = document.getElementById('hidden-brands');
var slides = document.querySelectorAll('.brands-cards');
var swiperDiv = document.querySelector('#swiper');
var swiperDivVariety = document.querySelector('#swiper-variety');
var readMoreBrandsVariety = document.getElementById('read-more-brands-variety');
var hiddenBrandsVariety = document.getElementById('hidden-brands-variety');
burgerBtn.addEventListener('click', function () {
  menu.classList.add('active');
  header.classList.add('active');
  main.classList.add('active');
  body.classList.add('modal-open');
});
menuBtnBack.addEventListener('click', function () {
  menu.classList.remove('active');
  header.classList.remove('active');
  main.classList.remove('active');
  body.classList.remove('modal-open');
});
main.addEventListener('click', function (e) {
  if (!menuPadding.classList.contains(e.target)) {
    menu.classList.remove('active');
    header.classList.remove('active');
    main.classList.remove('active');
    body.classList.remove('modal-open');
  }

  if (!menuPadding.classList.contains(e.target)) {
    feedbackMenu.classList.remove('active');
    header.classList.remove('active');
    main.classList.remove('active');
    body.classList.remove('modal-open');
  }

  if (!menuPadding.classList.contains(e.target)) {
    requestCallMenu.classList.remove('active');
    header.classList.remove('active');
    main.classList.remove('active');
    body.classList.remove('modal-open');
  }
});
messageBtn.addEventListener('click', function () {
  header.classList.add('active');
  main.classList.add('active');
  body.classList.add('modal-open');

  if (requestCallMenu.classList.contains('active') === false) {
    feedbackMenu.classList.add('active');
  }

  if (requestCallMenu.classList.contains('active') === true) {
    requestCallMenu.classList.remove('active');
    feedbackMenu.classList.add('active');
  }
});
cancelFeedbackMenu.addEventListener('click', function () {
  feedbackMenu.classList.remove('active');
  header.classList.remove('active');
  main.classList.remove('active');
  body.classList.remove('modal-open');
});
messageBtnHeader.addEventListener('click', function () {
  body.classList.add('modal-open');
  header.classList.add('active');
  main.classList.add('active');

  if (requestCallMenu.classList.contains('active') === false) {
    feedbackMenu.classList.add('active');
  }

  if (requestCallMenu.classList.contains('active') === true) {
    requestCallMenu.classList.remove('active');
    feedbackMenu.classList.add('active');
  }
});
cancelRequestCallMenu.addEventListener('click', function () {
  requestCallMenu.classList.remove('active');
  header.classList.remove('active');
  main.classList.remove('active');
  body.classList.remove('modal-open');
});
phoneBtnHeader.addEventListener('click', function () {
  header.classList.add('active');
  main.classList.add('active');
  body.classList.add('modal-open');

  if (feedbackMenu.classList.contains('active') === false) {
    requestCallMenu.classList.add('active');
  }

  if (feedbackMenu.classList.contains('active') === true) {
    feedbackMenu.classList.remove('active');
    requestCallMenu.classList.add('active');
  }
});
phoneBtn.addEventListener('click', function () {
  header.classList.add('active');
  main.classList.add('active');
  body.classList.add('modal-open');

  if (feedbackMenu.classList.contains('active') === false) {
    requestCallMenu.classList.add('active');
  }

  if (feedbackMenu.classList.contains('active') === true) {
    feedbackMenu.classList.remove('active');
    requestCallMenu.classList.add('active');
  }
});

if (readMore.classList.contains('active') === false) {
  hidden.classList.add('active');
}

readMore.onclick = function () {
  readMore.classList.add('active');
  moreText.classList.add('active');
  hidden.classList.remove('active');
};

hidden.onclick = function () {
  hidden.classList.add('active');
  moreText.classList.remove('active');
  readMore.classList.remove('active');
};

var newSwiper = new Swiper('.swiper', {
  direction: 'horizontal',
  spaceBetween: 15,
  slidesPerView: 'auto',
  breakpoints: _defineProperty({
    700: {
      slidesPerView: 1.5
    }
  }, "700", {
    lidesPerView: 4,
    spaceBetween: 10,
    enabled: false
  }),
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
hiddenBrands.style.display = 'none';

readMoreBrands.onclick = function () {
  swiperDiv.style.height = 'auto';
  readMoreBrands.style.display = 'none';
  hiddenBrands.style.display = 'inline-flex';
};

hiddenBrands.onclick = function () {
  swiperDiv.style.height = 200 + 'px';
  hiddenBrands.style.display = 'none';
  readMoreBrands.style.display = 'inline-flex';
};

hiddenBrandsVariety.style.display = 'none';

readMoreBrandsVariety.onclick = function () {
  swiperDivVariety.style.height = 'auto';
  readMoreBrandsVariety.style.display = 'none';
  hiddenBrandsVariety.style.display = 'inline-flex';
};

hiddenBrandsVariety.onclick = function () {
  swiperDivVariety.style.height = 200 + 'px';
  hiddenBrandsVariety.style.display = 'none';
  readMoreBrandsVariety.style.display = 'inline-flex';
};

/***/ }),

/***/ "./src/scss/adaptive.scss":
/*!********************************!*\
  !*** ./src/scss/adaptive.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/colorize.scss":
/*!********************************!*\
  !*** ./src/scss/colorize.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/main-brands.scss":
/*!***********************************!*\
  !*** ./src/scss/main-brands.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map