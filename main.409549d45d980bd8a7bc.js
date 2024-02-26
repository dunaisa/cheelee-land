/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/popupMenu.js":
/*!*****************************!*\
  !*** ./src/js/popupMenu.js ***!
  \*****************************/
/***/ (function() {

var menuBtn = document.querySelector('.menu__btn');
var menuLineBtn = document.querySelector('.menu__btn-line');
var popupMenu = document.querySelector('.popup-menu');
var popupList = document.querySelector('.popup-menu__list');
menuBtn.addEventListener('click', function (event) {
  event.preventDefault();
  menuLineBtn.classList.toggle('menu__btn-line_type_active');
  popupMenu.classList.toggle('popup-menu_type_active');
  popupList.classList.toggle('popup-menu__list_type_active');
});

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cheel-icon.png */ "./src/images/cheel-icon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/lee-icon.png */ "./src/images/lee-icon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/audit-by.png */ "./src/images/audit-by.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/google-play-icon.svg */ "./src/images/google-play-icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/discord-icon.svg */ "./src/images/discord-icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tg-icon.svg */ "./src/images/tg-icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/twitter-icon.svg */ "./src/images/twitter-icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/facebook-icon.svg */ "./src/images/facebook-icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/insta-icon.svg */ "./src/images/insta-icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/casino-icon.svg */ "./src/images/casino-icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./images/box.png */ "./src/images/box.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link href=\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap\" rel=\"stylesheet\">    \n  <title>Cheelee</title>\n</head>\n<body class=\"page\">\n  <header class=\"header\">\n    <div class=\"header__container container\">\n      <a href=\"#\" class=\"header__link\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Логотип\" class=\"header__logo\">\n      </a>\n      <div class=\"menu\">\n        <button class=\"menu__btn\">\n          <span class=\"menu__btn-line\"></span>\n        </button>\n        <span class=\"menu__btn-text\">MENU</span>\n      </div>\n\n      <div class=\"popup-menu\">        \n        \n        <div class=\"popup-menu__wrapper\">\n          <nav class=\"popup-menu__nav\">\n            <ul class=\"popup-menu__list\">\n              <li class=\"popup-menu__list-item\">\n                <a href=\"#\" class=\"popup-menu__link text\">\n                  <span class=\"text__letter\">a</span>\n                  <span class=\"text__letter\">b</span>\n                  <span class=\"text__letter\">o</span>\n                  <span class=\"text__letter\">u</span>\n                  <span class=\"text__letter\">t</span>&ensp;\n                  <span class=\"text__letter\">u</span>\n                  <span class=\"text__letter\">s</span>\n                  <!-- About us -->\n                </a>\n              </li>\n              <li class=\"popup-menu__list-item\">\n                <a href=\"#\" class=\"popup-menu__link text\">\n                  <span class=\"text__letter\">r</span>\n                  <span class=\"text__letter\">o</span>\n                  <span class=\"text__letter\">a</span>\n                  <span class=\"text__letter\">d</span>\n                  <span class=\"text__letter\">m</span>\n                  <span class=\"text__letter\">a</span>\n                  <span class=\"text__letter\">p</span>\n                  <!-- Roadmap -->\n                </a>\n              </li>\n              <li class=\"popup-menu__list-item\">\n                <a href=\"#\" class=\"popup-menu__link text\">\n                  <span class=\"text__letter\">d</span>\n                  <span class=\"text__letter\">o</span>\n                  <span class=\"text__letter\">c</span>\n                  <span class=\"text__letter\">u</span>\n                  <span class=\"text__letter\">m</span>\n                  <span class=\"text__letter\">e</span>\n                  <span class=\"text__letter\">n</span>\n                  <span class=\"text__letter\">t</span>\n                  <span class=\"text__letter\">s</span>\n                  <!-- Documents -->\n                </a>\n              </li>\n              <li class=\"popup-menu__list-item\">\n                <a href=\"#\" class=\"popup-menu__link text\">\n                  <span class=\"text__letter\">f</span>\n                  <span class=\"text__letter\">.</span>\n                  <span class=\"text__letter\">a</span>\n                  <span class=\"text__letter\">.</span>\n                  <span class=\"text__letter\">q</span>\n                  <span class=\"text__letter\">.</span>\n                  <!-- F.A.Q. -->\n                </a>\n              </li>\n              <li class=\"popup-menu__list-item\">\n                <a href=\"#\" class=\"popup-menu__link popup-menu__link_type_active text\">\n                  <span class=\"text__letter\">b</span>\n                  <span class=\"text__letter\">u</span>\n                  <span class=\"text__letter\">y</span>&ensp;\n                  <span class=\"text__letter\">n</span>\n                  <span class=\"text__letter\">f</span>\n                  <span class=\"text__letter\">t</span>&ensp;\n                  <span class=\"text__letter\">g</span>\n                  <span class=\"text__letter\">l</span>\n                  <span class=\"text__letter\">a</span>\n                  <span class=\"text__letter\">s</span>\n                  <span class=\"text__letter\">s</span>\n                  <span class=\"text__letter\">e</span>\n                  <span class=\"text__letter\">s</span>\n                  <!-- Buy NFT glasses -->\n                </a>\n              </li>\n            </ul>\n          </nav>\n\n        </div>\n      </div>      \n\n      <nav class=\"header__nav\">\n        <ul class=\"header__list\">\n          <li class=\"header__list-item\">\n            <a href=\"#\" class=\"header__link\">\n              About us\n            </a>\n          </li>\n          <li class=\"header__list-item\">\n            <a href=\"#\" class=\"header__link\">\n              Roadmap\n            </a>\n          </li>\n          <li class=\"header__list-item\">\n            <a href=\"#\" class=\"header__link\">\n              Documents\n            </a>\n          </li>\n          <li class=\"header__list-item\">\n            <a href=\"#\" class=\"header__link\">\n              F.A.Q.\n            </a>\n          </li>\n          <li class=\"header__list-item\">\n            <a href=\"#\" class=\"header__link header__link_type_active\">\n              Buy NFT glasses\n            </a>\n          </li>\n        </ul>\n      </nav>\n\n      <div class=\"container__right-col\">\n        <div class=\"currency\">\n          <div class=\"rate\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"cheel\" class=\"rate__icon\">\n            <div class=\"rate__container\">\n              <span class=\"rate__name\">cheel</span>\n              <span class=\"rate__value\">$8,00</span>\n            </div>\n          </div>\n          <div class=\"rate\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"cheel\" class=\"rate__icon\">\n            <div class=\"rate__container\">\n              <span class=\"rate__name\">lee</span>\n              <span class=\"rate__value\">$8,00</span>\n            </div>\n          </div>\n        </div>\n        <a href=\"\" class=\"header__link\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"audit-by\" class=\"header__audit-by-img\">\n        </a>\n        <div class=\"lang-select\">\n          <button\n            class=\"lang-select__btn\"\n            role=\"combobox\"\n            aria-haspopup=\"listbox\"\n            aria-expanded=\"false\"\n            aria-controls=\"select-dropdown\"\n          >\n            <span>EN</span>\n          </button>\n          <ul class=\"lang\" role=\"listbox\" id=\"select-dropdown\">\n\n            <!--BLOCK FOR OPTION SELECT -->\n\n            <!-- <li id=\"ru\" class=\"lang__ru\" role=\"option\">RU</li> -->\n          </ul>\n        </div>\n      </div>\n\n    </div>\n  </header>\n\n  <main class=\"main\">      \n\n      <section class=\"promo section\">\n        <div class=\"promo__container\">     \n\n          <div class=\"promo__left-col\">\n            <div class=\"promo__text-container\">\n              <h1 class=\"promo__title\">\n                GameFi\n                short video\n                <span class=\"promo__title promo__title_type_accent\">platform</span>\n              </h1>\n              <span class=\"promo__subtitle\">\n                Watch. Play. Earn\n              </span>\n            </div>\n\n            <div class=\"promo__app\">\n              <a href=\"#\" class=\"promo__link\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Google play app\" class=\"promo__app-img\">\n              </a>\n              <span class=\"promo__text\">Pre-registration in Google Play</span>\n            </div>\n          </div>\n\n          <div class=\"promo__right-col\">\n            <ul class=\"promo__list-app\">\n              <li class=\"promo__list-item\">\n                <a href=\"#\" class=\"promo__link\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Discord icon\" class=\"promo__app-img\">\n                </a>\n              </li>\n              <li class=\"promo__list-item\">\n                <a href=\"#\" class=\"promo__link\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Telegram icon\" class=\"promo__app-img\">\n                </a>\n              </li>\n              <li class=\"promo__list-item\">\n                <a href=\"#\" class=\"promo__link\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Twitter icon\" class=\"promo__app-img\">\n                </a>\n              </li>\n              <li class=\"promo__list-item\">\n                <a href=\"#\" class=\"promo__link\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Facebook icon\" class=\"promo__app-img\">\n                </a>\n              </li>\n              <li class=\"promo__list-item\">\n                <a href=\"#\" class=\"promo__link\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Intagram icon\" class=\"promo__app-img\">\n                </a>\n              </li>\n              <li class=\"promo__list-item\">\n                <a href=\"#\" class=\"promo__link\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Casino icon\" class=\"promo__app-img\">\n                </a>\n              </li>            \n            </ul>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"mission section\">\n        <div class=\"section__container\">\n\n          <h2 class=\"mission__heading\">\n            <span class=\"mission__heading mission__heading_type_accent\">Cheelee’s</span> mission\n          </h2>\n\n          <div class=\"mission__text-wrapper section__text-wrapper\">\n            <p class=\"mission__description section__description\">\n              Users spend an average of 2.5 hours daily on social networks and get nothing fоr it. We believe that this is unfair\n            </p>\n            <p class=\"mission__description section__description\">\n              <b>Our mission</b> is to provide everyone with the opportunity to monetize time in social networks\n            </p>\n          </div>\n        </div>\n\n      </section>\n\n      <section class=\"benefit section\">\n\n        <div class=\"section__container\">\n          <h3 class=\"benefit__heading\">\n            <span class=\"benefit__heading benefit__heading_type_accent\">Cheelee</span> works within the \"Attention Economy\" framework\n          </h3>\n\n          <div class=\"benefit__text-wrapper section__text-wrapper\">\n            <p class=\"benefit__description section__description\">\n              Other social media consider a user as an information and advertising influence target, <b>but a Cheelee user is a full system member, partner and beneficiary</b>\n            </p>\n            <p class=\"benefit__description section__description\">\n              The main idea is that attention is converted into income with digital platforms. You pay your attention to what you want, and get paid for it. Your attention has a certain cost.\n            </p>\n            <p class=\"benefit__description section__description\">\n              <b>The Attention Economy</b> sees human attention as a scarce commodity making it a new oil! The founder of this concept is the Nobel laureate Herbert Simon\n            </p>\n            <p class=\"benefit__description section__description\">\n              Through the GameFi mechanics, Cheelee’s users earn together with the platform by converting their attention into money\n            </p>\n          </div>\n        </div>\n\n      </section>\n\n      <div class=\"steps section\">\n        <div class=\"section__container\">\n          <ul class=\"steps__list\">\n            <li class=\"steps__item\">\n              <span class=\"steps__number\">1</span>\n              <span class=\"steps__description\">Sign-up and get your&nbsp;<span class=\"steps__description steps__description_type_accent\">free NFT glasses</span></span>\n            </li>\n            <li class=\"steps__item\">\n              <span class=\"steps__number\">2</span>\n              <span class=\"steps__description\">Watch the feed and&nbsp;get&nbsp;the&nbsp;boxes <span class=\"steps__description steps__description_type_accent\">with&nbsp;LEE&nbsp;tokens</span></span>\n            </li>\n            <li class=\"steps__item\">\n              <span class=\"steps__number\">3</span>\n              \n              <span class=\"steps__description\">Buy your NFT glasses and <span class=\"steps__description steps__description_type_accent\">with&nbsp;LEE&nbsp;tokens</span> directly when watching&nbsp;the&nbsp;feed</span>\n              <span class=\"steps__subdescription\">The higher the rarity of&nbsp;your NFT glasses, the&nbsp;more points you get when leveling them<br> up&nbsp;– the more tokens <br>you can earn</span>\n            </li>\n\n            <li class=\"steps__item\">\n              <span class=\"steps__number\">4</span>\n              <span class=\"steps__description\">Upgrade your <span class=\"steps__description steps__description_type_accent\">NFT&nbsp;glasses</span></span>\n            </li>\n            <li class=\"steps__item\">\n              <span class=\"steps__number\">5</span>\n              <span class=\"steps__description steps__description_type_accent\">Buy additional<br>NFT glasses</span>\n              \n              <span class=\"steps__description\">\n                to increase the&nbsp;amount\n                of&nbsp;Attention\n                and rewarded time\n                of&nbsp;watching the&nbsp;feed\n              </span>\n\n              <span class=\"steps__subdescription\">\n                1 Attention = <b>10 minutes</b><br>\n                of rewarded feed viewing\n              </span>\n            </li>\n          </ul>\n        </div>\n\n      </div>\n\n      <div class=\"box section\">\n        <div class=\"box__wrapper\">\n          <div class=\"box__description-wrapper\">\n            <p class=\"box__description\">\n              Watch the videos and&nbsp;<span class=\"box__description box__description_type_accent\">get the boxes</span>\n            </p>\n            <p class=\"box__subdescription\">\n              While watching the feed you can get boxes with&nbsp;NFT or LEE tokens\n            </p>\n          </div>            \n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Cube image\" class=\"box__image\">\n        </div>\n      </div>\n\n      <div class=\"presale section\">\n        <div class=\"presale__border\">\n          <div class=\"presale__border-arrow arrow-top\">\n            <div class=\"arrow-top__first\"></div>\n            <div class=\"arrow-top__second\"></div>\n            <div class=\"arrow-top__third\"></div>\n          </div>\n          <div class=\"presale__border-arrow arrow-bottom\">\n            <div class=\"arrow-bottom__first\"></div>\n            <div class=\"arrow-bottom__second\"></div>\n            <div class=\"arrow-bottom__third\"></div>\n          </div>\n          <div class=\"presale__content\">\n            <span class=\"presale__text\">Don’t miss the <span class=\"presale__text presale__text_type_accent\">Presale</span></span>\n            <button class=\"presale__btn\">Buy NFT glasses</button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"product\">\n        <div class=\"product__wrapper\">\n          <h3 class=\"product__heading\">Cheelee team has <span class=\"product__heading product__heading_type_accent\">already launched product</span></h3>\n          <span class=\"product__descripton\">The project is based on the already launched in 2021 short video platform&nbsp;– NUTSon (1.5M users, 33% engagement rate and 15K videos created daily)</span>\n        </div>                     \n      </div>\n    </main>\n</body>\n</html>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/audit-by.png":
/*!*********************************!*\
  !*** ./src/images/audit-by.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "3fe5b277e5ba3e618799.png";

/***/ }),

/***/ "./src/images/box.png":
/*!****************************!*\
  !*** ./src/images/box.png ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "73a9f83da27050964ab3.png";

/***/ }),

/***/ "./src/images/casino-icon.svg":
/*!************************************!*\
  !*** ./src/images/casino-icon.svg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "8786ebccfe870ab26a85.svg";

/***/ }),

/***/ "./src/images/cheel-icon.png":
/*!***********************************!*\
  !*** ./src/images/cheel-icon.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "82a135096dfdba76b1c5.png";

/***/ }),

/***/ "./src/images/discord-icon.svg":
/*!*************************************!*\
  !*** ./src/images/discord-icon.svg ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "fecf9dc1687628de45cb.svg";

/***/ }),

/***/ "./src/images/facebook-icon.svg":
/*!**************************************!*\
  !*** ./src/images/facebook-icon.svg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "bb792fa7db8bc34c56a5.svg";

/***/ }),

/***/ "./src/images/google-play-icon.svg":
/*!*****************************************!*\
  !*** ./src/images/google-play-icon.svg ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "37a13637e6d7aadb644d.svg";

/***/ }),

/***/ "./src/images/insta-icon.svg":
/*!***********************************!*\
  !*** ./src/images/insta-icon.svg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "15ae250f01b3fdbf2791.svg";

/***/ }),

/***/ "./src/images/lee-icon.png":
/*!*********************************!*\
  !*** ./src/images/lee-icon.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "7573b2b7bc1d7057ad45.png";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "f2707119ba10e8a2177d.png";

/***/ }),

/***/ "./src/images/tg-icon.svg":
/*!********************************!*\
  !*** ./src/images/tg-icon.svg ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "cac48852a553edda203e.svg";

/***/ }),

/***/ "./src/images/twitter-icon.svg":
/*!*************************************!*\
  !*** ./src/images/twitter-icon.svg ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "a5cb990b12261c046d20.svg";

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
/******/ 			// no module.id needed
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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
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
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _js_popupMenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/popupMenu.js */ "./src/js/popupMenu.js");
/* harmony import */ var _js_popupMenu_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_popupMenu_js__WEBPACK_IMPORTED_MODULE_3__);




}();
/******/ })()
;
//# sourceMappingURL=main.409549d45d980bd8a7bc.js.map