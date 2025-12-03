/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 11:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popUp_popUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9417);


const setCookie = (name, value) => {
  const updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};path=/;max-age=31536000;`;
  document.cookie = updatedCookie;
};
const getCookie = (name) => {
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1")}=([^;]*)`));
  return matches ? decodeURIComponent(matches[1]) : void 0;
};
const showMessage = () => {
  (0,_popUp_popUp__WEBPACK_IMPORTED_MODULE_0__.summonPopUp)({
    template: "#cookie",
    blockScroll: false,
    overlay: {
      use: false,
      closeOnClick: false
    },
    esc: {
      closeOnEsc: false
    }
  });
  const closeButton = document.querySelector(".cookie__button");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      setCookie("agreeCookie", true);
      (0,_popUp_popUp__WEBPACK_IMPORTED_MODULE_0__.removePopUp)("#cookie");
    });
  }
};
const cookie = () => {
  const result = getCookie("agreeCookie");
  if (result === void 0) {
    showMessage();
  }
};
cookie();


/***/ }),

/***/ 147:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./alert-wrapper/alert-wrapper.js": 3937,
	"./alert/alert.js": 4009,
	"./article/article.js": 1217,
	"./breadcrumbs/breadcrumbs.js": 4073,
	"./bumf-card/bumf-card.js": 6697,
	"./button/button.js": 2271,
	"./card-catalog/card-catalog.js": 8459,
	"./career-card/career-card.js": 2497,
	"./catalog-menu/catalog-menu.js": 4977,
	"./components.js": 2820,
	"./configurator/configurator.js": 4881,
	"./cookie/cookie.js": 11,
	"./field/field.js": 4205,
	"./footer/footer.js": 8413,
	"./gallery/gallery.js": 5377,
	"./header-dropdown/header-dropdown.js": 7025,
	"./header/header.js": 6689,
	"./history-card/history-card.js": 9585,
	"./info-card/info-card.js": 9669,
	"./intro-partner/intro-partner.js": 2537,
	"./intro/intro.js": 4189,
	"./layout-heder/layout-heder.js": 8865,
	"./layout/layout.js": 1995,
	"./mobile-dropdown/mobile-dropdown.js": 7945,
	"./mobile-nav/mobile-nav.js": 9143,
	"./news-card/news-card.js": 5401,
	"./our-history/our-history.js": 6505,
	"./our-mission/our-mission.js": 3977,
	"./participant-card/participant-card.js": 4031,
	"./participants/participants.js": 4855,
	"./popUp/popUp.js": 9417,
	"./pro/pro.js": 4217,
	"./promo-gallery/promo-gallery.js": 445,
	"./promo-news/promo-news.js": 257,
	"./promo-partner/promo-partner.js": 1061,
	"./promo/promo.js": 2945,
	"./reels/reels.js": 8417,
	"./request-catalog/request-catalog.js": 993,
	"./request/request.js": 5745,
	"./slider/slider.js": 5073,
	"./slider4/slider4.js": 209,
	"./socials/socials.js": 4741,
	"./statistics/statistics.js": 1733,
	"./store-map/store-map.js": 7681,
	"./subscribe-tg/subscribe-tg.js": 6671,
	"./tooltip/tooltip.js": 281,
	"./top-bar/top-bar.js": 5945,
	"./training-card/training-card.js": 1921,
	"./training/training.js": 7827,
	"./up/up.js": 5057,
	"./vacancy-card/vacancy-card.js": 7599,
	"./validator/validator.js": 4489,
	"./video/video.js": 2305,
	"./wave-text/wave-text.js": 3057,
	"./widget/widget.js": 2079,
	"./window/window.js": 6919,
	"./wrapper-card/wrapper-card.js": 2231,
	"components/alert-wrapper/alert-wrapper.js": 3937,
	"components/alert/alert.js": 4009,
	"components/article/article.js": 1217,
	"components/breadcrumbs/breadcrumbs.js": 4073,
	"components/bumf-card/bumf-card.js": 6697,
	"components/button/button.js": 2271,
	"components/card-catalog/card-catalog.js": 8459,
	"components/career-card/career-card.js": 2497,
	"components/catalog-menu/catalog-menu.js": 4977,
	"components/components.js": 2820,
	"components/configurator/configurator.js": 4881,
	"components/cookie/cookie.js": 11,
	"components/field/field.js": 4205,
	"components/footer/footer.js": 8413,
	"components/gallery/gallery.js": 5377,
	"components/header-dropdown/header-dropdown.js": 7025,
	"components/header/header.js": 6689,
	"components/history-card/history-card.js": 9585,
	"components/info-card/info-card.js": 9669,
	"components/intro-partner/intro-partner.js": 2537,
	"components/intro/intro.js": 4189,
	"components/layout-heder/layout-heder.js": 8865,
	"components/layout/layout.js": 1995,
	"components/mobile-dropdown/mobile-dropdown.js": 7945,
	"components/mobile-nav/mobile-nav.js": 9143,
	"components/news-card/news-card.js": 5401,
	"components/our-history/our-history.js": 6505,
	"components/our-mission/our-mission.js": 3977,
	"components/participant-card/participant-card.js": 4031,
	"components/participants/participants.js": 4855,
	"components/popUp/popUp.js": 9417,
	"components/pro/pro.js": 4217,
	"components/promo-gallery/promo-gallery.js": 445,
	"components/promo-news/promo-news.js": 257,
	"components/promo-partner/promo-partner.js": 1061,
	"components/promo/promo.js": 2945,
	"components/reels/reels.js": 8417,
	"components/request-catalog/request-catalog.js": 993,
	"components/request/request.js": 5745,
	"components/slider/slider.js": 5073,
	"components/slider4/slider4.js": 209,
	"components/socials/socials.js": 4741,
	"components/statistics/statistics.js": 1733,
	"components/store-map/store-map.js": 7681,
	"components/subscribe-tg/subscribe-tg.js": 6671,
	"components/tooltip/tooltip.js": 281,
	"components/top-bar/top-bar.js": 5945,
	"components/training-card/training-card.js": 1921,
	"components/training/training.js": 7827,
	"components/up/up.js": 5057,
	"components/vacancy-card/vacancy-card.js": 7599,
	"components/validator/validator.js": 4489,
	"components/video/video.js": 2305,
	"components/wave-text/wave-text.js": 3057,
	"components/widget/widget.js": 2079,
	"components/window/window.js": 6919,
	"components/wrapper-card/wrapper-card.js": 2231
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 147;

/***/ }),

/***/ 209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);


const breakpoint = 991;
let swiper = null;
const container = document.querySelector(".slider4__swiper");
if (container) {
  const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
  const enableSlider = () => {
    if (swiper)
      return;
    swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(container, {
      // modules: [Navigation, Pagination],
      slidesPerView: "auto",
      spaceBetween: 0
    });
  };
  const destroySlider = () => {
    if (!swiper)
      return;
    swiper.destroy(true, true);
    swiper = null;
  };
  const check = (matches = mql.matches) => {
    if (matches && !swiper)
      enableSlider();
    if (!matches && swiper)
      destroySlider();
  };
  check();
  mql.addEventListener("change", (e) => check(e.matches));
}


/***/ }),

/***/ 257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9244);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3670);



const tooltips = document.querySelectorAll(".tooltip");
if (tooltips.length > 0) {
  tooltips.forEach((tooltip) => {
    const main = tooltip.querySelector(".tooltip__main");
    if (main) {
      const options = {
        content(reference) {
          const template = `<div class="tooltip__main">${reference.querySelector(".tooltip__main").innerHTML}</div>`;
          return template;
        },
        placement: "bottom-start",
        allowHTML: true,
        animation: "scale",
        arrow: false,
        maxWidth: 280,
        interactive: true,
        appendTo: () => document.body
      };
      const instance = (0,tippy_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)(tooltip, options);
      const getChecker = () => {
        if (window.innerWidth > 767 && !instance.state.isEnabled) {
          instance.enable();
        } else if (window.innerWidth <= 767 && instance.state.isEnabled) {
          instance.disable();
        }
      };
      getChecker();
      window.addEventListener("resize", () => {
        getChecker();
      });
      const bottomSheetInit = () => {
        const openSheetButton = tooltip.querySelector(".tooltip__button");
        const newBottomSheet = tooltip.cloneNode(true);
        const body = document.querySelector("body");
        const bottomSheet = newBottomSheet.querySelector(".tooltip__wrapper");
        const sheetContents = bottomSheet.querySelector(".tooltip__main");
        const draggableArea = bottomSheet.querySelector(".tooltip__drag");
        let height;
        let sheetHeight;
        const animateIn = () => {
          sheetContents.style.height = "";
          sheetContents.removeEventListener("transitionend", animateIn);
        };
        const setSheetHeight = (value) => {
          sheetHeight = Math.max(0, Math.min(100, value));
          sheetContents.style.height = `${sheetHeight}vh`;
          if (sheetHeight === 100) {
            sheetContents.classList.add("tooltip__main--full");
          } else {
            sheetContents.classList.remove("tooltip__main--full");
          }
        };
        const setIsSheetShown = (value) => {
          bottomSheet.setAttribute("aria-hidden", String(!value));
          if (value) {
            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPaddingOnBody */ .rP)();
          } else {
            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPaddingFromBody */ .iW)();
            sheetContents.addEventListener("transitionend", animateIn);
          }
        };
        openSheetButton.addEventListener("click", () => {
          if (window.innerWidth < 768) {
            body.appendChild(newBottomSheet);
            height = sheetContents.offsetHeight / document.documentElement.clientHeight * 100;
            setSheetHeight(Math.min(height, 100));
            setIsSheetShown(true);
          }
        });
        bottomSheet.querySelector(".tooltip__close").addEventListener("click", () => {
          setIsSheetShown(false);
          setTimeout(() => {
            newBottomSheet.remove();
          }, 500);
        });
        bottomSheet.querySelector(".tooltip__overlay").addEventListener("click", () => {
          setIsSheetShown(false);
          setTimeout(() => {
            newBottomSheet.remove();
          }, 500);
        });
        const touchPosition = (event) => event.touches ? event.touches[0] : event;
        let dragPosition;
        const onDragStart = (event) => {
          dragPosition = touchPosition(event).pageY;
          sheetContents.classList.add("not-selectable");
        };
        const onDragMove = (event) => {
          if (dragPosition === void 0)
            return;
          const y = touchPosition(event).pageY;
          const deltaY = dragPosition - y;
          const deltaHeight = deltaY / window.innerHeight * 100;
          setSheetHeight(sheetHeight + deltaHeight);
          dragPosition = y;
        };
        const onDragEnd = () => {
          dragPosition = void 0;
          sheetContents.classList.remove("not-selectable");
          if (sheetHeight < height / 2) {
            setIsSheetShown(false);
          } else if (sheetHeight > height) {
            setSheetHeight(height);
          } else {
            setSheetHeight(height);
          }
        };
        draggableArea.addEventListener("mousedown", onDragStart);
        draggableArea.addEventListener("touchstart", onDragStart);
        window.addEventListener("mousemove", onDragMove);
        window.addEventListener("touchmove", onDragMove);
        window.addEventListener("mouseup", onDragEnd);
        window.addEventListener("touchend", onDragEnd);
      };
      bottomSheetInit();
    }
  });
}


/***/ }),

/***/ 404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-logo",
  "use": "icon-logo-usage",
  "viewBox": "0 0 226 36",
  "content": "<symbol viewBox=\"0 0 226 36\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-logo\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.871 0.0456169C20.4805 0.318736 18.7278 1.23314 17.8754 2.65178C17.4157 3.41703 17.1653 4.64185 17.2841 5.54452C17.4289 6.64471 17.7724 7.34864 18.5011 8.03895C19.0683 8.5762 19.4435 8.7942 20.2417 9.05046C21.2505 9.37434 21.5963 9.43157 24.3386 9.7291C26.4712 9.96039 27.7005 10.1556 28.0246 10.3141C28.6343 10.6126 28.861 11.213 28.6276 11.9119C28.4997 12.2947 27.8847 12.9083 27.3813 13.1553C26.7179 13.4808 26.0533 13.6199 25.0069 13.6524C24.4343 13.6701 23.8803 13.6552 23.549 13.613C22.0358 13.4205 20.0769 12.7115 19.3168 12.0814L18.9993 11.8182L18.933 11.9747C18.8695 12.1246 18.3084 13.3605 17.9177 14.2107L17.7321 14.615L17.898 14.7018C17.9894 14.7496 18.5292 14.9782 19.0977 15.21C21.219 16.0748 22.4826 16.3234 24.7153 16.3153C25.9714 16.3108 27.0425 16.1967 27.8265 15.9841C28.8838 15.6974 29.9832 15.1781 30.5931 14.6772C31.189 14.188 31.8386 13.127 32.0663 12.2708C32.2123 11.7221 32.2008 10.6963 32.0423 10.1286C31.5603 8.40237 30.2557 7.2875 28.1119 6.7699C27.5286 6.62913 27.321 6.60177 24.7153 6.32239C22.6293 6.09875 21.8137 5.97042 21.3537 5.79341C20.2927 5.38504 20.2245 4.2394 21.2141 3.44847C21.6316 3.11476 21.859 3.01263 22.4651 2.88648C24.7046 2.42043 27.332 2.83958 28.9173 3.91575C29.2724 4.15676 29.3046 4.16815 29.3731 4.07674C29.4136 4.02263 29.641 3.58891 29.8782 3.11286C30.1156 2.63682 30.3984 2.08935 30.5069 1.89625C30.704 1.54529 30.704 1.54512 30.5816 1.49805C30.5143 1.47219 30.1858 1.33845 29.8517 1.20086C28.8861 0.803326 28.0305 0.52976 26.9467 0.272165C25.9972 0.0464546 23.8892 -0.0707003 22.871 0.0456169ZM103.031 0.0436067C102.239 0.124409 101.548 0.253681 100.629 0.492626C99.103 0.88921 97.7605 1.65044 96.7031 2.7184C95.8568 3.57316 95.3652 4.33243 94.9158 5.47874C94.3291 6.97534 94.2974 8.93431 94.8336 10.5629C95.5065 12.6068 96.8103 14.0924 98.8698 15.1618C100.502 16.0093 101.981 16.3123 104.495 16.3142C106.882 16.316 107.871 16.1245 109.808 15.2856C110.501 14.9851 112.006 14.2026 112.006 14.1424C112.006 14.1107 111.893 13.9468 111.756 13.7781C111.619 13.6094 111.439 13.3709 111.356 13.2482C111.036 12.7741 110.503 12.0475 110.475 12.0475C110.459 12.0475 110.301 12.1368 110.123 12.2459C109.305 12.7483 107.965 13.2699 106.897 13.5012C106.108 13.6722 104.38 13.7163 103.513 13.5876C102.678 13.4635 102.038 13.2719 101.374 12.9469C100.653 12.594 100.28 12.3333 99.7647 11.8233C99.0938 11.1587 98.6043 10.3072 98.3851 9.42292C98.2277 8.78789 98.2394 7.43028 98.4073 6.83809C98.8999 5.1012 100.116 3.8278 101.948 3.13045C102.765 2.81953 104.55 2.6228 105.666 2.72075C107.29 2.86336 108.265 3.13654 109.587 3.82015C110.059 4.06451 110.43 4.22466 110.456 4.19596C110.482 4.16843 110.828 3.68574 111.226 3.12325L111.95 2.10063L110.832 1.55126C109.542 0.917522 109.236 0.787076 108.486 0.551482C107.232 0.157523 106.448 0.043495 104.798 0.0149043C104.1 0.00278673 103.304 0.0157419 103.031 0.0436067ZM170.494 0.0451702C168.067 0.317173 166.477 1.14496 165.513 2.63821C164.344 4.45048 164.7 6.94078 166.316 8.25751C166.75 8.61116 167.184 8.83642 167.866 9.06224C168.775 9.36328 169.255 9.43632 173.007 9.84435C173.99 9.95129 175.087 10.1304 175.419 10.2385C175.767 10.3516 176.151 10.7026 176.269 11.0154C176.504 11.6377 176.121 12.4328 175.339 12.9455C174.066 13.781 171.772 13.909 169.534 13.2694C168.383 12.9406 167.504 12.5409 166.968 12.1025C166.775 11.9449 166.61 11.8241 166.6 11.8341C166.59 11.844 166.433 12.1913 166.252 12.6059C166.07 13.0205 165.794 13.6333 165.639 13.9678C165.485 14.3022 165.358 14.5929 165.358 14.6136C165.358 14.6344 165.501 14.7099 165.675 14.7812C165.85 14.8526 166.304 15.0431 166.683 15.2044C168.628 16.0308 170.019 16.3107 172.206 16.3163C174.081 16.321 175.201 16.1387 176.538 15.6113C178.002 15.0337 179.109 13.9606 179.493 12.7466C179.914 11.4187 179.823 10.2551 179.205 9.07012C178.66 8.02622 177.413 7.19385 175.763 6.77364C175.348 6.66816 174.158 6.51074 172.372 6.32518C169.955 6.07401 169.263 5.95585 168.789 5.71288C168.14 5.38046 167.953 4.72321 168.307 4.0171C168.743 3.14771 169.961 2.70863 171.93 2.71097C173.776 2.71321 175.154 3.07204 176.506 3.9024C176.699 4.02101 176.878 4.118 176.904 4.118C176.93 4.118 177.085 3.86046 177.249 3.54563C177.413 3.2308 177.714 2.65117 177.92 2.25754C178.125 1.86386 178.284 1.53557 178.273 1.52798C178.233 1.49905 176.637 0.876143 176.321 0.765689C175.758 0.56924 174.362 0.222075 173.753 0.126922C173.059 0.018534 171.158 -0.0291544 170.494 0.0451702ZM196.065 0.0195391C194.829 0.130105 193.273 0.458507 192.387 0.795453C191.912 0.976434 191.23 1.35141 190.595 1.78038C189.446 2.55747 188.329 3.9698 187.854 5.24521C187.116 7.22953 187.102 9.01087 187.811 10.9381C188.06 11.6138 188.34 12.1563 188.657 12.5779C189.202 13.3014 189.391 13.5211 189.714 13.8086C189.912 13.9843 190.151 14.198 190.246 14.2837C190.745 14.7331 191.558 15.1956 192.543 15.5907C193.868 16.1222 195.019 16.309 197.004 16.3153C199.474 16.3232 200.928 16.025 202.61 15.1656C203.232 14.8476 203.338 14.7784 203.88 14.3324C205.471 13.0255 206.504 11.2844 206.811 9.39489C206.922 8.71061 206.894 7.33435 206.754 6.65878C206.418 5.03045 205.721 3.76023 204.526 2.60085C203.114 1.23062 201.464 0.479615 199.076 0.120556C198.541 0.040312 196.572 -0.025804 196.065 0.0195391ZM0 16.1243L15.1606 16.0959L15.1902 13.4998L3.17571 13.4714V9.17163L11.4326 9.14299V6.63158L3.17571 6.60294L3.1466 2.8895H13.8374L14.4852 1.61129C14.8414 0.908252 15.1329 0.317731 15.1329 0.299024C15.1329 0.280262 11.728 0.264961 7.56647 0.264961H0V16.1243ZM32.4862 0.306842C32.9875 1.33957 33.6969 2.74677 33.747 2.8078C33.8042 2.87738 34.2014 2.8895 36.4307 2.8895H39.0474V16.1254L42.7754 16.0959L42.8035 2.89056L48.0586 2.86158L48.6883 1.63307C49.0346 0.957392 49.3184 0.373181 49.319 0.334763C49.3199 0.279201 47.5985 0.264961 40.893 0.264961C36.2581 0.264961 32.475 0.283836 32.4862 0.306842ZM51.7226 16.0959L67.3803 16.1243V13.4998L55.423 13.4714V9.17163L63.6799 9.14299V6.63158L55.423 6.60294L55.3939 2.89006L66.0824 2.86158L66.7068 1.63307C67.0502 0.957392 67.3448 0.373181 67.3616 0.334763C67.3859 0.279089 65.8017 0.264961 59.5434 0.264961H51.6946L51.7226 16.0959ZM69.3777 0.307345C69.3879 0.330686 69.6753 0.921207 70.0165 1.61961L70.6369 2.8895H75.9409V16.1239H79.6413V2.8895H84.9427L85.5782 1.60096C85.9277 0.892225 86.2136 0.301705 86.2136 0.288694C86.2136 0.275627 82.4214 0.264961 77.7865 0.264961C73.1515 0.264961 69.3676 0.284059 69.3777 0.307345ZM88.5056 16.0959L91.6813 16.1256V0.264961H88.4776L88.5056 16.0959ZM120.742 0.446445C120.682 0.546289 120.41 1.06768 120.138 1.60515C119.866 2.14262 119.416 3.0157 119.139 3.54535C118.861 4.07501 118.633 4.52838 118.633 4.55284C118.633 4.5773 118.513 4.80988 118.366 5.06965C118.218 5.32942 117.849 6.03196 117.544 6.63086C117.239 7.22976 116.685 8.31028 116.313 9.03203C115.019 11.5384 114.45 12.6412 113.763 13.974C113.383 14.7111 112.981 15.4796 112.87 15.6818C112.759 15.884 112.685 16.0662 112.705 16.0866C112.726 16.1071 113.529 16.1239 114.491 16.1239H116.24L116.802 15.0446C117.11 14.4509 117.363 13.946 117.363 13.9225C117.363 13.899 117.581 13.4678 117.846 12.9641L118.33 12.0484L126.062 12.0477L126.461 12.7876C126.68 13.1946 127.005 13.8165 127.183 14.1696C127.361 14.5227 127.662 15.1069 127.851 15.4677L128.196 16.1239H130.263C131.4 16.1239 132.33 16.1171 132.33 16.1088C132.33 16.0794 131.434 14.3553 131.089 13.7227C130.757 13.111 129.863 11.4368 129.391 10.5397C128.987 9.77271 128.342 8.56436 128.02 7.97105C127.845 7.64856 127.492 6.98266 127.235 6.49126C126.978 5.99985 126.576 5.246 126.342 4.81602C126.107 4.38604 125.883 3.95584 125.843 3.85996C125.803 3.76414 125.621 3.4249 125.44 3.10611C125.259 2.78736 124.956 2.22499 124.766 1.85644C124.577 1.48788 124.306 0.979114 124.165 0.725819L123.908 0.265352L120.852 0.264961L120.742 0.446445ZM140.283 3.79692C141.251 5.73952 142.641 8.52248 143.371 9.98133C144.102 11.4402 145.09 13.4195 145.567 14.3797L146.434 16.1256L149.414 16.0959L150.543 13.8344C151.895 11.1227 153.916 7.08116 155.865 3.19126C156.651 1.62201 157.294 0.321584 157.294 0.301481C157.294 0.281379 156.443 0.265073 155.403 0.265185L153.511 0.265408L152.476 2.37319C151.908 3.53245 150.862 5.67458 150.154 7.13343C149.445 8.59228 148.677 10.1626 148.447 10.6229L148.029 11.4601L146.075 7.46792C145 5.2723 143.773 2.75436 143.348 1.87257L142.576 0.269317L138.524 0.264961L140.283 3.79692ZM159.034 16.0959H162.182L162.21 0.264961H159.006L159.034 16.0959ZM181.871 16.1256L185.047 16.0959L185.075 0.264961H181.871V16.1256ZM196.342 2.72404C195.745 2.78306 194.897 2.96215 194.544 3.1037C193.814 3.39654 193.039 3.94127 192.445 4.57964C191.93 5.13186 191.697 5.50728 191.446 6.18139C190.986 7.42023 190.979 8.76276 191.425 10.1175C191.65 10.7994 191.924 11.2223 192.578 11.8965C193.366 12.7073 194.156 13.1634 195.33 13.4848C195.84 13.6242 195.945 13.6331 197.087 13.6331C198.224 13.6331 198.336 13.6237 198.834 13.4873C200.065 13.1502 200.708 12.7742 201.594 11.8752C202.161 11.2996 202.263 11.1647 202.488 10.7008C202.627 10.4126 202.81 9.95062 202.893 9.6742C203.033 9.21268 203.046 9.09413 203.049 8.22233C203.052 7.13806 202.986 6.77331 202.631 5.93525C202.369 5.31535 202.108 4.92323 201.641 4.44853C201.024 3.82065 199.948 3.17138 199.21 2.98052C198.322 2.75084 197.139 2.64514 196.342 2.72404ZM122.193 4.34528C122.166 4.38923 121.54 5.64387 120.801 7.13343L119.458 9.84173L120.841 9.85664C121.601 9.86485 122.844 9.86485 123.603 9.85664L124.983 9.84173L123.613 7.05358C122.634 5.06222 122.228 4.28826 122.193 4.34528ZM97.3424 26.2613C97.1297 26.3073 96.6948 26.4734 96.3759 26.6305C95.865 26.8821 95.7367 26.9767 95.2989 27.4252C94.6665 28.0729 94.3737 28.5837 94.147 29.4344C93.993 30.0125 93.9811 30.127 93.9773 31.0614C93.9736 31.9946 93.9847 32.1105 94.1315 32.6808C94.3194 33.4105 94.5174 33.8277 94.9144 34.3308C95.3587 34.8938 95.7928 35.2572 96.3482 35.5311C97.0609 35.8825 97.4649 35.9694 98.3917 35.9711C99.2896 35.9727 99.7327 35.8724 100.518 35.4896C100.903 35.302 101.072 35.1739 101.457 34.7782C102.258 33.9549 102.628 33.1587 102.768 31.9557C102.84 31.3435 102.842 31.1069 102.786 30.4551C102.688 29.304 102.466 28.6799 101.873 27.8836C101.329 27.152 100.684 26.678 99.8369 26.3869C99.378 26.2291 99.2556 26.2112 98.5298 26.1953C97.9687 26.183 97.6133 26.2028 97.3424 26.2613ZM106.829 26.2368C106.609 26.2627 106.236 26.3492 106.001 26.4291C104.73 26.8605 104.053 27.7455 104.053 28.9755C104.053 30.0067 104.584 30.7243 105.656 31.1425C106.138 31.3303 107.374 31.693 108.029 31.839C108.855 32.0229 109.381 32.3232 109.585 32.7272C109.755 33.0648 109.712 33.6256 109.491 33.9488C109.261 34.285 108.759 34.5328 108.138 34.6166C107.337 34.7247 106.374 34.4957 105.891 34.0823C105.665 33.8889 105.396 33.3254 105.349 32.946L105.313 32.6529H103.709L103.748 33.0298C103.799 33.5149 104.006 34.1758 104.207 34.4956C104.584 35.0963 105.399 35.6097 106.345 35.842C107.009 36.0051 108.136 36.0184 108.769 35.8707C109.53 35.6929 110.098 35.4159 110.513 35.0202C111.125 34.4366 111.32 33.878 111.276 32.8402C111.245 32.1233 111.101 31.7951 110.621 31.3458C110.152 30.9071 109.7 30.7142 108.07 30.2573C106.402 29.7901 106.088 29.6783 105.859 29.4709C105.708 29.3349 105.686 29.275 105.665 28.9523C105.653 28.7517 105.672 28.4975 105.708 28.3874C105.777 28.1746 106.103 27.8573 106.396 27.7165C106.895 27.477 107.889 27.4908 108.474 27.7454C108.927 27.9425 109.255 28.389 109.347 28.9342L109.385 29.1628L110.956 29.1938V28.9527C110.956 28.399 110.64 27.6174 110.25 27.2087C109.759 26.6947 108.954 26.3377 108.049 26.2329C107.502 26.1695 107.398 26.1698 106.829 26.2368ZM115.982 26.2105C114.16 26.5661 112.824 27.8683 112.438 29.6654C112.342 30.1104 112.318 30.4051 112.319 31.1172C112.321 32.6127 112.589 33.5378 113.264 34.3881C113.882 35.1659 114.492 35.5812 115.407 35.8458C116.037 36.0283 117.199 36.0281 117.829 35.8455C118.821 35.5586 119.624 34.9577 120.085 34.1592C120.324 33.7441 120.591 32.9411 120.647 32.4699L120.685 32.1473L118.999 32.1782L118.932 32.5412C118.841 33.0412 118.608 33.6028 118.382 33.87C117.737 34.6314 116.292 34.7839 115.299 34.1954C114.731 33.8588 114.227 33.0217 114.038 32.1024C113.908 31.4648 113.925 30.3875 114.074 29.8329C114.363 28.7587 114.977 28.044 115.875 27.7376C116.171 27.6366 116.325 27.6196 116.783 27.637C117.261 27.6552 117.385 27.6815 117.701 27.8318C118.208 28.0725 118.503 28.3592 118.725 28.8262C118.826 29.0403 118.91 29.2476 118.91 29.2869C118.91 29.3416 119.102 29.3582 119.738 29.3582C120.694 29.3582 120.643 29.4011 120.451 28.7638C120.097 27.5867 119.102 26.6546 117.833 26.3105C117.508 26.2224 116.265 26.1552 115.982 26.2105ZM125.155 26.236C123.767 26.5112 122.641 27.4312 122.075 28.7521C121.718 29.5853 121.652 29.9414 121.649 31.0614C121.646 31.9159 121.663 32.1377 121.765 32.5412C121.914 33.132 122.214 33.8034 122.529 34.2492C123.65 35.8388 125.843 36.4316 127.787 35.6711C128.89 35.2397 129.708 34.3727 130.182 33.1312C130.427 32.49 130.518 31.9475 130.521 31.1172C130.525 30.0699 130.379 29.3875 129.968 28.5404C129.225 27.0051 127.836 26.1665 126.062 26.1818C125.697 26.1849 125.289 26.2093 125.155 26.236ZM82.8446 35.78H84.4462L84.4517 32.248C84.4562 29.3023 84.4688 28.7531 84.5275 28.9394C84.5962 29.1575 85.2445 30.9266 86.4103 34.0768C86.7286 34.9368 86.9885 35.6718 86.9879 35.7102C86.9871 35.7623 87.1602 35.78 87.6724 35.78H88.3579L88.4978 35.403C89.0628 33.8807 89.2516 33.3576 89.3593 33.0158C89.4271 32.8008 89.7129 31.9967 89.9946 31.2289C90.2762 30.4611 90.5908 29.5816 90.6935 29.2745L90.8805 28.7161L90.9089 35.78H92.5098V26.3986H90.2169L90.1189 26.6639C90.065 26.8098 89.7749 27.6579 89.4742 28.5485C89.1735 29.4392 88.7681 30.6328 88.5733 31.201C88.3785 31.7692 88.1364 32.4853 88.0351 32.7925C87.7088 33.7823 87.766 33.7755 87.4329 32.864C87.2726 32.4254 87.0593 31.8152 86.959 31.5081C86.8586 31.201 86.6473 30.5979 86.4894 30.1679C86.3315 29.738 86.0338 28.8961 85.8279 28.2972C85.6219 27.6984 85.3855 27.0262 85.3024 26.8035L85.1514 26.3986H82.8446V35.78ZM131.403 27.5839C131.581 28.2373 131.816 29.1363 131.923 29.5816C132.03 30.0269 132.365 31.3061 132.666 32.4243C132.967 33.5425 133.214 34.4974 133.214 34.5463C133.214 34.5952 133.285 34.8865 133.371 35.1936L133.528 35.752L135.242 35.7827L135.395 35.2369C135.48 34.9367 135.58 34.5403 135.619 34.356C135.657 34.1717 135.935 33.1163 136.236 32.0107C136.537 30.905 136.856 29.7051 136.943 29.344C137.031 28.9831 137.12 28.7192 137.141 28.7577C137.188 28.8436 138.004 31.8783 138.053 32.1503C138.09 32.3537 138.863 35.2806 138.964 35.5985L139.022 35.78H140.666L140.729 35.5426C140.764 35.4121 140.977 34.652 141.203 33.8535C141.429 33.0549 141.639 32.2885 141.668 32.1503C141.698 32.0121 141.98 30.9693 142.295 29.8329C142.91 27.6095 143.211 26.4946 143.211 26.4356C143.211 26.4153 142.842 26.3986 142.39 26.3986H141.57L141.065 28.3985C140.788 29.4983 140.536 30.5294 140.506 30.6898C140.447 31.0063 139.909 33.1672 139.849 33.3319C139.815 33.4264 139.663 32.8747 139.042 30.3913C138.934 29.9613 138.735 29.1949 138.598 28.6881C138.462 28.1814 138.273 27.459 138.178 27.0827L138.005 26.3986H136.332L135.985 27.697C134.548 33.0793 134.373 33.677 134.374 33.194C134.375 33.1267 134.099 31.9283 133.763 30.5309C133.426 29.1335 133.068 27.6383 132.968 27.2083L132.786 26.4266L131.077 26.3959L131.403 27.5839ZM97.8118 27.6285C97.3623 27.7234 96.7961 28.0489 96.488 28.3898C95.8864 29.0553 95.5987 29.91 95.5981 31.0335C95.5976 31.8668 95.6993 32.4164 95.9547 32.96C96.4609 34.0374 97.2353 34.5478 98.3679 34.5503C98.9662 34.5516 99.3287 34.463 99.7611 34.2097C100.443 33.8101 100.975 32.879 101.129 31.8141C101.21 31.2579 101.167 30.311 101.041 29.8389C100.762 28.8003 100.146 28.0523 99.3088 27.7353C98.954 27.601 98.1979 27.5471 97.8118 27.6285ZM125.406 27.6561C124.379 27.9195 123.628 28.7713 123.401 29.9321C123.284 30.5297 123.285 31.6427 123.403 32.2294C123.628 33.348 124.26 34.1238 125.206 34.4416C125.692 34.6051 126.616 34.5793 127.099 34.3888C127.981 34.0412 128.561 33.1925 128.781 31.9269C128.994 30.7066 128.666 29.127 128.062 28.4614C127.816 28.1901 127.28 27.8325 126.946 27.7168C126.558 27.5825 125.809 27.5531 125.406 27.6561Z\" />\n<path d=\"M213.185 0.614253L222.214 11.8678H222.647V0.614253H226V16.0823H221.612L212.61 4.82874H212.177V16.0823H208.824V0.614253H213.185Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ }),

/***/ 445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5880);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6575);



gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u);
const initPromoGalleryAnimation = () => {
  const mm = gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.matchMedia();
  const deskstopAnimation = () => {
    const promoGallery = document.querySelector(".promo-gallery");
    if (!promoGallery)
      return;
    const banners = promoGallery.querySelector(".promo-gallery__banners");
    const galleryHeight = banners.offsetHeight;
    const viewportHeight = window.innerHeight;
    const shiftDistance = Math.max(galleryHeight, viewportHeight);
    const galleryST = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u.create({
      trigger: promoGallery,
      start: "top center",
      end: "+=100%",
      scrub: 1,
      pin: true,
      pinSpacing: true,
      animation: gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.fromTo(
        ".promo-gallery__banners",
        {
          y: shiftDistance * 0.2
        },
        {
          y: -shiftDistance * 1.7,
          ease: "none"
        }
      )
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.from(".promo-gallery__post-title", {
      scrollTrigger: {
        trigger: promoGallery,
        start: () => galleryST.end,
        // Старт когда galleryST закончился.
        end: () => galleryST.end + 200,
        scrub: 0.8
      },
      opacity: 0,
      y: 50,
      ease: "none"
    });
  };
  mm.add("(min-width: 992px)", () => {
    deskstopAnimation();
  });
  mm.add("(max-width: 991px)", () => {
    const banners = document.querySelector(".promo-gallery__banners");
    if (banners) {
      banners.style.transform = "";
    }
    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u.getAll().forEach((st) => st.kill());
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initPromoGalleryAnimation);


/***/ }),

/***/ 993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4489);


const form = document.querySelector(".request-catalog__form");
if (form) {
  console.log(form);
  (0,_validator_validator__WEBPACK_IMPORTED_MODULE_0__.validateForm)(".request-catalog__form");
}


/***/ }),

/***/ 1061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 1217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 1733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 1995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

const widget = document.querySelector(".widget");
if (widget) {
  const widgetClose = widget.querySelector(".widget__close");
  const widgetOverlay = widget.querySelector(".widget__overlay");
  const body = document.querySelector("body");
  const getWidgetWork = () => {
    const isActive = widget.classList.contains("widget--active");
    if (!isActive) {
      widget.classList.add("widget--active");
      widgetClose.classList.add("widget__close--active");
      body.classList.add("fixed");
    } else {
      widget.classList.remove("widget--active");
      widgetClose.classList.remove("widget__close--active");
      body.classList.remove("fixed");
    }
  };
  widgetClose.addEventListener("click", () => {
    getWidgetWork();
  });
  widgetOverlay.addEventListener("click", () => {
    getWidgetWork();
  });
  const currentPage = window.location.pathname.split("/").pop();
  const links = widget.querySelectorAll("li a");
  links.forEach((link) => {
    const page = link.href.split("/").pop();
    if (page === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}


/***/ }),

/***/ 2231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const generateURL = (id) => {
  const query = "?rel=0&showinfo=0&autoplay=1";
  return `https://www.youtube.com/embed/${id}${query}`;
};
const createIframe = (id) => {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("src", generateURL(id));
  iframe.classList.add("video__media");
  return iframe;
};
const parseMediaURL = (video) => {
  const regexp = /https:\/\/youtu\.be\/([a-zA-Z0-9_-]+)/i;
  const url = video.href;
  const match = url.match(regexp);
  return match[1];
};
const setupVideo = (video) => {
  const link = video.querySelector(".video__link");
  const button = video.querySelector(".video__button");
  const source = video.querySelector("source");
  const media = video.querySelector(".video__media");
  const id = parseMediaURL(link);
  source.setAttribute("srcset", `https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`);
  media.setAttribute("src", `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
  video.addEventListener("click", () => {
    const iframe = createIframe(id);
    link.remove();
    button.remove();
    video.appendChild(iframe);
  });
  link.removeAttribute("href");
  video.classList.add("video--enabled");
};
const findVideos = () => {
  document.querySelectorAll(".video__wrapper").forEach((el) => {
    setupVideo(el);
  });
};
findVideos();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findVideos);


/***/ }),

/***/ 2497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-5corners",
  "use": "icon-5corners-usage",
  "viewBox": "0 0 17 17",
  "content": "<symbol viewBox=\"0 0 17 17\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-5corners\">\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.80933 13.6926L6.83265 13.7384L7.74211 16.5366L13.9685 11.4678L13.9918 11.4449H17L14.0151 4.03667L14.9479 1.23852L6.85744 1.74301L8.83845 3.1642L13.9221 4.03575L13.9921 4.05868H14.0154L13.2459 6.32931L13.8988 10.7559L13.9921 11.4439H13.9688H12.4297L11.5435 11.421L6.83296 13.7146V13.6687L6.08674 11.421L2.42556 7.72838L2.51884 7.65957L4.40772 6.30637L6.24997 2.86603L6.85628 1.76512V1.74309L6.85597 1.74311L4.43073 0L2.42524 7.70636L0 9.44947L6.80933 13.6926Z\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ }),

/***/ 2820:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function importAll(r) {
  const keys = r.keys();
  const firstFile = "./window/window.js";
  const filteredKeys = keys.filter((key) => key !== firstFile).sort();
  if (keys.includes(firstFile)) {
    r(firstFile);
  }
  filteredKeys.forEach(r);
}
importAll(__webpack_require__(147));


/***/ }),

/***/ 2945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5880);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6575);



gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u);
const initPromoAnimation = () => {
  const mm = gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.matchMedia();
  const deskstopAnimation = () => {
    const promos = document.querySelectorAll(".promo");
    promos.forEach((promo) => {
      const leftVideo = promo.querySelector(".promo__video--left");
      const rightVideo = promo.querySelector(".promo__video--right");
      const centerVideo = promo.querySelector(".promo__video--center");
      const wrapper = promo.querySelector(".promo__wrapper");
      const blackOverlay = document.createElement("div");
      blackOverlay.className = "promo__black-overlay";
      wrapper.appendChild(blackOverlay);
      gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.timeline({
        scrollTrigger: {
          trigger: promo,
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: true,
          // Фиксируем блок на экране пока идет анимация.
          pinSpacing: true
        }
      }).from(leftVideo, {
        x: "-50vw",
        duration: 3
      }).from(rightVideo, {
        x: "50vw",
        duration: 3
      }, "<").to(leftVideo, {
        duration: 1
      }).to(rightVideo, {
        duration: 1
      }, "<").to(blackOverlay, {
        opacity: 1,
        duration: 2
      }).to(centerVideo, {
        opacity: 1
      }).to(centerVideo, {
        duration: 1
      });
    });
  };
  mm.add("(min-width: 992px)", () => {
    deskstopAnimation();
  });
  mm.add("(max-width: 991px)", () => {
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initPromoAnimation);


/***/ }),

/***/ 3057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5880);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6575);
/* harmony import */ var gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9373);



gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u, gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__/* .SplitText */ .A);
const initScrollRevealRandomWords = (selector) => {
  document.querySelectorAll(selector).forEach((title) => {
    const split = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__/* .SplitText */ .A(title, { type: "words" });
    const words = split.words;
    words.forEach((word) => {
      word.style.display = "inline-block";
      word.style.transform = "translateZ(0)";
      word.style.backfaceVisibility = "hidden";
      word.style.willChange = "transform, opacity";
    });
    const shuffledWords = gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.utils.shuffle([...words]);
    gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.from(shuffledWords, {
      y: 50,
      // Смещение снизу.
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: {
        each: 0.2,
        from: "random"
        // Случайный порядок появления.
      },
      scrollTrigger: {
        trigger: title,
        start: "top bottom",
        once: true
        // Анимация срабатывает только один раз.
      }
    });
  });
};
initScrollRevealRandomWords(".wave-text");


/***/ }),

/***/ 3670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $W: () => (/* binding */ createFormData),
/* harmony export */   Bs: () => (/* binding */ setTextareaAutoHeight),
/* harmony export */   Dl: () => (/* binding */ updateButtonState),
/* harmony export */   Ip: () => (/* binding */ startTimer),
/* harmony export */   Lx: () => (/* binding */ setStatus),
/* harmony export */   Qs: () => (/* binding */ activateRequestButtons),
/* harmony export */   XJ: () => (/* binding */ getScrollbarWidth),
/* harmony export */   iW: () => (/* binding */ getPaddingFromBody),
/* harmony export */   rP: () => (/* binding */ getPaddingOnBody),
/* harmony export */   sg: () => (/* binding */ debounce)
/* harmony export */ });
/* unused harmony exports shuffle, numberSplitter, PHONE_REG_EXP, INN_REG_EXP, BIRTHDAY_REG_EXP, TOKEN, scrollToErrorField */
/* harmony import */ var _components_alert_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4009);
/* harmony import */ var _components_popUp_popUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9417);
/* harmony import */ var _components_validator_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4489);
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};





const PHONE_REG_EXP = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;
const BIRTHDAY_REG_EXP = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;
const INN_REG_EXP = /^(([0 - 9]{12})| ([0 - 9]{10}))?$/;
const TOKEN = "d11e752ae788e61213f01ae6952bdbd85ceaa025";
const body = document.querySelector("body");
const header = document.querySelector(".header__fixed");
const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
let checker = false;
const getPaddingOnBody = () => {
  const modal = document.querySelector(".Modal");
  const popUps = document.querySelectorAll(".popUp");
  const alertWrapper = document.querySelector(".alert-wrapper");
  if (!checker) {
    body.style.paddingRight = `${getScrollbarWidth()}px`;
    if (header) {
      header.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (modal) {
      modal.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (popUps) {
      popUps.forEach((popUp) => {
        popUp.style.paddingRight = `${getScrollbarWidth()}px`;
      });
    }
    if (alertWrapper) {
      alertWrapper.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    body.classList.add("static");
    checker = true;
  }
};
const getPaddingFromBody = () => {
  const modal = document.querySelector(".Modal");
  const popUps = document.querySelectorAll(".popUp");
  const alertWrapper = document.querySelector(".alert-wrapper");
  if (checker) {
    body.style.paddingRight = "";
    if (header) {
      header.style.paddingRight = "";
    }
    if (modal) {
      modal.style.paddingRight = "";
    }
    if (popUps) {
      popUps.forEach((popUp) => {
        popUp.style.paddingRight = "";
      });
    }
    if (alertWrapper) {
      alertWrapper.style.paddingRight = "";
    }
    body.classList.remove("static");
    checker = false;
  }
};
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const numberSplitter = (num) => {
  const n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1 ");
};
function OnInput() {
  this.style.height = "auto";
  this.style.height = `${this.scrollHeight}px`;
}
const setTextareaAutoHeight = (area) => {
  const textareas = document.querySelectorAll(`${area}`);
  textareas.forEach((element) => {
    element.setAttribute("style", `height:${element.scrollHeight}px; overflow-y: hidden;`);
    element.addEventListener("input", OnInput);
  });
};
const isObject = (object) => {
  const type = typeof object;
  return type === "function" || type === "object";
};
const createFormData = (values) => {
  const data = new FormData();
  for (const key in values) {
    if (isObject(values[key])) {
      values[key].forEach((file, index) => {
        data.append(`${key}-${index}`, file);
      });
    } else {
      data.append(key, values[key]);
    }
  }
  return data;
};
const startTimer = (container, btn, tm) => {
  const button = btn;
  let time = tm;
  const timer = setInterval(() => {
    if (time < 1) {
      button.removeAttribute("disabled");
      container.style.display = "none";
      clearInterval(timer);
    } else {
      time -= 1;
      container.style.display = "";
      container.querySelector("b").textContent = `00:${String(time).padStart(2, "0")}`;
    }
  }, 1e3);
  return timer;
};
const debounce = (cb, delay = 500) => {
  let timeoutId;
  return function(...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cb.apply(context, args);
    }, delay);
  };
};
const scrollToErrorField = (form) => {
  form.addEventListener("bouncerFormInvalid", () => {
    const firstError = form.querySelector(".validator__input--error");
    const scrollToFirstError = (error) => {
      error.style.scrollMarginTop = "140px";
      error.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
      });
    };
    setTimeout(() => {
      scrollToFirstError(firstError);
    }, 100);
  });
};
const setStatus = (status) => {
  switch (status) {
    case "success":
      return "alert--blue";
    case "exclam":
      return "alert--star";
    case "error":
      return "alert--red";
    default:
      return "";
  }
};
const updateButtonState = (name) => {
  const checkbox = document.querySelector(`input[name="${name}"]`);
  const button = document.querySelector(`button[data-checkbox-name="${name}"]`);
  if (checkbox && button) {
    button.disabled = !checkbox.checked;
  }
};
const activateRequestButtons = (func) => {
  const buttons = document.querySelectorAll(".button-request:not(.button-request--js)");
  buttons.forEach((button) => {
    button.classList.add("button-request--js");
    button.addEventListener("click", (evt) => {
      evt.preventDefault();
      const _a = button.dataset, { type } = _a, info = __objRest(_a, ["type"]);
      if (!type) {
        console.warn("\u0423 \u043A\u043D\u043E\u043F\u043A\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D data-type, \u043C\u043E\u0434\u0430\u043B\u043A\u0430 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0432\u044B\u0437\u0432\u0430\u043D\u0430");
        return;
      }
      const modalSelector = `#modal--${type}`;
      const modalClass = `.modal--${type}`;
      (0,_components_popUp_popUp__WEBPACK_IMPORTED_MODULE_1__.summonPopUp)(modalSelector, true);
      const modal = document.querySelector(modalClass);
      if (!modal) {
        console.log(`\u041C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E ${modalSelector} \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E`);
        return;
      }
      setTextareaAutoHeight(`${modalClass} textarea`);
      const buttonForCheckbox = modal.querySelector("button[data-checkbox-name]");
      if (buttonForCheckbox) {
        const name = buttonForCheckbox.dataset.checkboxName;
        const checkbox = document.querySelector(`input[name="${name}"]`);
        updateButtonState(name);
        if (checkbox) {
          checkbox.addEventListener("change", () => updateButtonState(name));
        }
      }
      const form = modal.querySelector("form");
      if (form) {
        Object.entries(info).forEach(([key, value]) => {
          form.insertAdjacentHTML("beforeend", `<input type="hidden" name="${key}" value="${value}">`);
        });
        const validatedForm = (0,_components_validator_validator__WEBPACK_IMPORTED_MODULE_2__.validateForm)(`${modalClass} form`);
        (0,_components_validator_validator__WEBPACK_IMPORTED_MODULE_2__.maskPhone)(modalClass, 'input[type="tel"]');
        form.addEventListener("bouncerFormValid", debounce(() => {
          if (!func)
            return;
          const answer = func(form);
          if (answer && answer.responseJSON && answer.responseJSON.status === "success") {
            validatedForm.destroy();
            (0,_components_popUp_popUp__WEBPACK_IMPORTED_MODULE_1__.removePopUp)(modalClass, true);
            (0,_components_alert_alert__WEBPACK_IMPORTED_MODULE_0__.summonAlert)({
              template: "#alert--blue",
              text: answer.responseJSON.text
            });
          }
        }));
      }
    });
  });
};
const blurHandler = (event) => {
  if (!event.target.form)
    return;
  const field = event.target;
  const cuttedSpacesValue = field.value.replace(/\s\s+/g, " ");
  const trimmedValue = cuttedSpacesValue.trim();
  field.value = trimmedValue;
};
document.addEventListener("blur", blurHandler, true);



/***/ }),

/***/ 3937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeAlert: () => (/* binding */ removeAlert),
/* harmony export */   summonAlert: () => (/* binding */ summonAlert)
/* harmony export */ });

const body = document.querySelector(".alert-wrapper");
const removeAlert = ({
  template
}) => {
  const templateContent = document.querySelector(`${template}`);
  templateContent.remove();
};
const summonAlert = (input) => {
  let template;
  let text;
  if (typeof input === "string") {
    template = input;
  } else if (typeof input === "object" && input !== null) {
    template = input.template;
    text = input.text;
  } else {
    console.log("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0442\u0438\u043F \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F summonAlert. \u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F \u0441\u0442\u0440\u043E\u043A\u0430 (template) \u0438\u043B\u0438 \u043E\u0431\u044A\u0435\u043A\u0442 { template, text }.");
    return;
  }
  if (typeof template !== "string" || !template.startsWith("#")) {
    console.log('\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D. \u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F \u0441\u0442\u0440\u043E\u043A\u0430, \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0430\u044F\u0441\u044F \u0441 "#", \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 "#alert--request".');
    return;
  }
  const alertName = template.slice(1);
  const alertTemplate = document.querySelector(`#${alertName}`);
  if (!alertTemplate) {
    console.log(`#${alertName} \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.`);
    return;
  }
  const oldAlert = document.querySelector(`.${alertName}`);
  if (oldAlert) {
    oldAlert.remove();
  }
  const templateContent = alertTemplate.content.cloneNode(true);
  const alert = templateContent.querySelector(`.${alertName}`);
  if (!alert) {
    console.log(`\u0412 \u0448\u0430\u0431\u043B\u043E\u043D\u0435 #${alertName} \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u043E\u0440\u043D\u0435\u0432\u043E\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 .${alertName}`);
    return;
  }
  const close = alert.querySelector(".alert__close");
  const textContainer = alert.querySelector(".alert__container");
  if (text && textContainer) {
    textContainer.innerHTML = text;
  }
  const closeAlert = () => {
    alert.remove();
  };
  if (close) {
    close.addEventListener("click", closeAlert);
  }
  body.append(templateContent);
  alert.classList.add("alert--bounce");
};



/***/ }),

/***/ 4031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4078:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./icon-5corners.svg": 2640,
	"./icon-logo.svg": 404,
	"./icon-phone.svg": 5547,
	"assets/icons/icon-5corners.svg": 2640,
	"assets/icons/icon-logo.svg": 404,
	"assets/icons/icon-phone.svg": 5547
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4078;

/***/ }),

/***/ 4189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

const initIntroAnimation = () => {
  const intro = document.querySelector(".intro");
  const reels = document.querySelector(".reels");
  if (!intro || !reels)
    return;
  const loader = intro.querySelector(".intro__loading");
  const video = intro.querySelector(".intro__media video");
  const reelsItems = reels.querySelectorAll(".reels__item");
  const reelsNumbers = reels.querySelectorAll(".reels__numbers");
  const reelsProgress = reels.querySelector(".reels__progress-value");
  let animationStarted = false;
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && !animationStarted) {
      animationStarted = true;
      reelsItems.forEach((item) => item.style.animationPlayState = "running");
      reelsNumbers.forEach((num) => num.style.animationPlayState = "running");
      reelsProgress.style.animationPlayState = "running";
      const onProgressEnd = () => {
        loader.classList.add("intro__loading--hidden");
        video.play();
        reelsProgress.removeEventListener("animationend", onProgressEnd);
      };
      reelsProgress.addEventListener("animationend", onProgressEnd);
      loader.addEventListener("transitionend", () => {
        intro.classList.add("intro--show");
      });
    }
  }, {
    threshold: 0.3
    // Блок должен быть хотя бы на 30% виден.
  });
  observer.observe(intro);
};
window.addEventListener("load", () => {
  initIntroAnimation();
});


/***/ }),

/***/ 4205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

const phoneMask = new Inputmask("+[9 (999) 999 99 99]", {
  autoUnmask: true,
  showMaskOnHover: false,
  showMaskOnFocus: false,
  placeholder: ""
});
const inputs = document.querySelectorAll(".field__input--tel");
inputs.forEach((phone) => {
  phoneMask.mask(phone);
});


/***/ }),

/***/ 4217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focusFirstInput: () => (/* binding */ focusFirstInput),
/* harmony export */   initAgreeCheckbox: () => (/* binding */ initAgreeCheckbox),
/* harmony export */   initChoicesValidation: () => (/* binding */ initChoicesValidation),
/* harmony export */   initFileLoadInput: () => (/* binding */ initFileLoadInput),
/* harmony export */   initPasswordEye: () => (/* binding */ initPasswordEye),
/* harmony export */   initSelectValidation: () => (/* binding */ initSelectValidation),
/* harmony export */   maskNumber: () => (/* binding */ maskNumber),
/* harmony export */   maskPhone: () => (/* binding */ maskPhone),
/* harmony export */   validateForm: () => (/* binding */ validateForm)
/* harmony export */ });
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1660);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4891);
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formbouncerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8019);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_2__);




const getDescription = (field, deep = false) => {
  var _a, _b, _c, _d;
  if (deep) {
    return ((_c = (_b = (_a = field.parentElement) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.parentElement) == null ? void 0 : _c.querySelector(".validator__description")) || null;
  }
  return ((_d = field.parentElement) == null ? void 0 : _d.querySelector(".validator__description")) || null;
};
const setState = (field, isValid, description = null) => {
  field.classList.toggle("validator__input--valid", isValid);
  field.classList.toggle("validator__input--error", !isValid);
  if (description) {
    description.classList.toggle("validator__description--valid", isValid);
    description.classList.toggle("validator__description--error", !isValid);
  }
  field.setAttribute("aria-invalid", String(!isValid));
  return !isValid;
};
const patterns = {
  text: /^([a-zA-ZА-Яа-яЁё.-]+\s?)*$/,
  textarea: /^([\wА-Яа-яЁё\s-!$%^&*()_+|~=`{}\[\]:;<>?",.@#№'"«»\\/]+)*$/,
  email: /^[a-zA-ZА-Яа-я0-9._-]+@[a-zA-ZА-Яа-я-]+\.[a-zA-ZА-Яа-я]{2,}$/,
  password: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,64}$/
};
const validators = {
  required(field) {
    if (!field.classList.contains("validator__required"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    return setState(field, field.value.trim() !== "", description);
  },
  text(field) {
    if (!field.classList.contains("validator__text"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    const isValid = patterns.text.test(field.value) && field.value.length >= 2 && field.value.length <= 225;
    return setState(field, isValid, description);
  },
  textarea(field) {
    if (!field.classList.contains("validator__textarea"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    const isValid = patterns.textarea.test(field.value) && field.value.length >= 4 && field.value.length <= 225;
    return setState(field, isValid, description);
  },
  number(field) {
    if (!field.classList.contains("validator__number"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    const isValid = field.value.length >= 1 && field.value.length <= 225;
    return setState(field, isValid, description);
  },
  minmax(field) {
    if (!field.classList.contains("validator__minmax"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    const min = parseInt(field.getAttribute("minlength"), 10) || 0;
    const max = parseInt(field.getAttribute("maxlength"), 10) || Infinity;
    const isValid = field.value.length >= min && field.value.length <= max;
    return setState(field, isValid, description);
  },
  email(field) {
    if (!field.classList.contains("validator__mail"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    return setState(field, patterns.email.test(field.value), description);
  },
  ruPhone(field) {
    if (!field.classList.contains("validator__phone"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    console.log(field.value.length);
    return setState(field, field.value.length === 11, description);
  },
  intPhone(field) {
    var _a;
    if (!field.classList.contains("validator__country-phone"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    const maskLength = ((_a = field.getAttribute("data-mask")) == null ? void 0 : _a.length) || 0;
    return setState(field, field.value.length === maskLength, description);
  },
  password(field) {
    if (!field.classList.contains("validator__password"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    return setState(field, patterns.password.test(field.value), description);
  },
  passwordMatch(field) {
    const selector = field.getAttribute("data-bouncer-match");
    if (!selector)
      return false;
    if (field.disabled)
      return false;
    const otherField = field.form.querySelector(selector);
    if (!otherField)
      return false;
    return setState(field, otherField.value === field.value, getDescription(field));
  },
  select(field) {
    var _a;
    if (!field.classList.contains("validator__select"))
      return false;
    if (field.disabled)
      return false;
    const isValid = ((_a = field.options[field.selectedIndex]) == null ? void 0 : _a.value) !== "";
    return setState(field.parentElement, isValid);
  },
  choices(field) {
    if (!field.classList.contains("validator__choices"))
      return false;
    if (field.disabled)
      return false;
    const wrapper = field.parentElement;
    const description = getDescription(field);
    field.addEventListener("change", () => {
      wrapper.classList.remove("validator__input--error");
      if (description)
        description.classList.remove("validator__description--error");
    });
    const isValid = field.hasAttribute("multiple") ? field.selectedIndex !== -1 : field.options[field.selectedIndex].value !== "";
    wrapper.classList.toggle("validator__input--valid", isValid);
    wrapper.classList.toggle("validator__input--error", !isValid);
    if (description) {
      description.classList.toggle("validator__description--valid", isValid);
      description.classList.toggle("validator__description--error", !isValid);
    }
    return !isValid;
  },
  checkbox(field) {
    if (!field.classList.contains("validator__checkbox"))
      return false;
    if (field.disabled)
      return false;
    const { name } = field.dataset;
    const list = document.querySelectorAll(`.validator__checkbox[data-name="${name}"]`);
    const isValid = Array.from(list).some((el) => el.checked);
    list.forEach((el) => {
      el.classList.toggle("validator__input--valid", isValid);
      el.classList.toggle("validator__input--error", !isValid);
    });
    return !isValid;
  }
};
const validateForm = (formSelector) => {
  const formEl = document.querySelector(formSelector);
  let validator = new (formbouncerjs__WEBPACK_IMPORTED_MODULE_1___default())(formSelector, {
    fieldClass: "validator__input--error",
    errorClass: "validator__error",
    disableSubmit: true,
    emitEvents: true,
    patterns: {
      email: /^[a-zA-ZА-Яа-я0-9._-]+@[a-zA-ZА-Яа-я-]+\.[a-zA-ZА-Яа-я]{2,}$/
    },
    customValidations: validators,
    // подключаем объект кастомных валидаторов
    messages: {
      missingValue: {
        default: "\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F!",
        file: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u0444\u0430\u0439\u043B!",
        tel: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D!"
      },
      patternMismatch: {
        default: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F \u043D\u0435 \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u044F\u0435\u0442 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C!"
      },
      wrongLength: {
        over: "wrongLength over",
        under: "wrongLength under"
      },
      outOfRange: {
        over: "outOfRange over",
        under: "outOfRange under"
      },
      text: "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E!",
      textarea: "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E!",
      number: "\u0414\u043E\u043F\u0443\u0441\u043A\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B!",
      ruPhone: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D!",
      intPhone: "\u0412\u044B\u0431\u0435\u0440\u0438 \u0438 \u0432\u0432\u0435\u0434\u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D!",
      password: "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0434\u043B\u0438\u043D\u043E\u0439 \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u0443 \u0446\u0438\u0444\u0440\u0443, \u0441\u0442\u0440\u043E\u0447\u043D\u0443\u044E \u0438 \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u0443\u044E \u043B\u0430\u0442\u0438\u043D\u0441\u043A\u0443\u044E \u0431\u0443\u043A\u0432\u0443, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B.",
      passwordMatch: "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442.",
      required: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u0435!"
    }
  });
  const oldValidate = validator.validate;
  validator.validate = (field, options) => {
    var _a;
    if ((_a = field.closest("fieldset")) == null ? void 0 : _a.disabled)
      return false;
    return oldValidate(field, options);
  };
  formEl.addEventListener("reset", () => {
    validator.destroy();
    validator = validateForm(formSelector);
    formEl.querySelectorAll(".validator__description").forEach((desc) => {
      desc.classList.remove("validator__description--error", "validator__description--valid");
    });
    formEl.querySelectorAll(".validator__input--valid, .validator__input--error").forEach((input) => {
      input.classList.remove("validator__input--valid", "validator__input--error");
    });
    formEl.querySelectorAll("textarea").forEach((textarea) => {
      textarea.style.overflowY = "hidden";
    });
  });
  return validator;
};
const maskNumber = (formSelector, maxNumber) => {
  const numberMask = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())(`9{0,${maxNumber}}`, {
    autoUnmask: true,
    showMaskOnHover: false,
    showMaskOnFocus: false,
    placeholder: ""
  });
  const inputs = document.querySelectorAll(`${formSelector} .validator__number`);
  inputs.forEach((field) => numberMask.mask(field));
};
const maskPhone = (formSelector, phoneClass) => {
  const phoneMask = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())("+[9 (999) 999 99 99]", {
    autoUnmask: true,
    showMaskOnHover: false,
    showMaskOnFocus: false,
    placeholder: ""
  });
  const inputs = document.querySelectorAll(`${formSelector} ${phoneClass}`);
  inputs.forEach((phone) => phoneMask.mask(phone));
};
const initPasswordEye = (formSelector) => {
  document.querySelectorAll(formSelector).forEach((container) => {
    container.querySelectorAll(".validator__eye").forEach((eye) => {
      var _a;
      const input = ((_a = eye.closest("label, .validator__password-wrapper")) == null ? void 0 : _a.querySelector('input[type="password"]')) || eye.parentElement.querySelector('input[type="password"]');
      if (!input)
        return;
      eye.addEventListener("click", () => {
        eye.classList.toggle("validator__eye--open");
        input.type = input.type === "password" ? "text" : "password";
      });
    });
  });
};
const initFileLoadInput = (form, template) => {
  const FILE_TYPES = ["jpg", "jpeg", "gif", "png"];
  const filesForm = document.querySelector(`${form}`);
  const filesContainer = filesForm.querySelector(".validator__file-container");
  const loadInput = filesContainer.querySelector(".validator__file-input");
  const sizeWarning = filesContainer.querySelector(".validator__size-warning");
  const loadedFilesContainer = filesForm.querySelector(".validator__loaded-files");
  const cleaner = filesForm.querySelector(".validator__cleaner");
  const submitButton = filesForm.querySelector('button[type="submit"]');
  cleaner.style.display = "none";
  filesForm.addEventListener("reset", () => {
    filesContainer.innerHTML = "";
    filesContainer.innerHTML = template;
    loadedFilesContainer.innerHTML = "";
    initFileLoadInput(`${form}`, template);
  }, { once: true });
  cleaner.addEventListener("click", () => {
    filesContainer.innerHTML = "";
    filesContainer.innerHTML = template;
    loadedFilesContainer.innerHTML = "";
    initFileLoadInput(`${form}`, template);
    submitButton.classList.remove("validator__submit--disabled");
    submitButton.disabled = false;
  });
  loadInput.addEventListener("change", () => {
    const files = Object.values(loadInput.files);
    loadedFilesContainer.innerHTML = "";
    let totalSize = 0;
    files.forEach((file) => {
      totalSize += file.size;
    });
    if (totalSize > 0) {
      cleaner.style.display = "grid";
    } else {
      cleaner.style.display = "none";
    }
    for (let i = 0; i < files.length; i += 1) {
      const fileName = files[i].name.toLowerCase();
      if (!FILE_TYPES.some((type) => fileName.endsWith(type))) {
        submitButton.classList.add("validator__submit--disabled");
        submitButton.disabled = true;
        sizeWarning.classList.add("validator__size-warning--exeeded");
        sizeWarning.textContent = "\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0442\u0438\u043F \u0444\u0430\u0439\u043B\u043E\u0432!";
        return;
      }
    }
    if (totalSize < 10485760 && files.length <= 3) {
      sizeWarning.classList.remove("validator__size-warning--exeeded");
      sizeWarning.textContent = "\u0414\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 3-\u0445 \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 .jpeg, .gif, .png. \u0420\u0430\u0437\u043C\u0435\u0440 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 10 MB.";
      files.forEach((file) => {
        let str = file.size;
        str = str.toString();
        str = Math.ceil(str / 1024);
        const fileTemplate = `
          <div class="validator__file">
            <p class="validator__file-name">${file.name}</p>
            <p class='validator__size'>${str}&nbsp;\u041A\u0411</p>
          </div>
          `;
        loadedFilesContainer.insertAdjacentHTML("beforeend", fileTemplate);
      });
      submitButton.classList.remove("validator__submit--disabled");
      submitButton.disabled = false;
    } else if (totalSize > 10241440) {
      submitButton.classList.add("validator__submit--disabled");
      submitButton.disabled = true;
      sizeWarning.classList.add("validator__size-warning--exeeded");
      sizeWarning.textContent = "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u043E\u0432 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C 10 \u041C\u0411!";
    } else if (files.length > 3) {
      submitButton.classList.add("validator__submit--disabled");
      submitButton.disabled = true;
      sizeWarning.classList.add("validator__size-warning--exeeded");
      sizeWarning.textContent = "\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D \u043B\u0438\u043C\u0438\u0442 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0444\u0430\u0439\u043B\u043E\u0432!";
    }
  });
};
const initSelectValidation = (formSelector) => {
  const formContainer = document.querySelector(formSelector);
  if (!formContainer)
    return;
  formContainer.querySelectorAll(".validator__select").forEach((select) => {
    const parent = select.parentElement;
    if (!parent)
      return;
    select.addEventListener("change", () => {
      parent.classList.remove("validator__input--error");
    });
  });
};
const initChoicesValidation = (formSelector) => {
  const formContainer = document.querySelector(formSelector);
  if (!formContainer)
    return;
  formContainer.querySelectorAll(".validator__choices").forEach((select) => {
    var _a, _b;
    const field = select.closest(".validator__field") || ((_b = (_a = select.parentElement) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.parentElement);
    if (!field)
      return;
    const description = field.querySelector(".validator__description");
    const customSelect = field.querySelector(".choices__inner");
    if (!customSelect)
      return;
    select.addEventListener("change", () => {
      customSelect.classList.remove("validator__input--error");
      description == null ? void 0 : description.classList.remove("validator__description--error");
    });
  });
};
const focusFirstInput = (form) => {
  const formContainer = document.querySelector(`${form}`);
  const input = formContainer.querySelector("input");
  input.focus();
};
const initAgreeCheckbox = (form) => {
  const checkboxContainer = document.querySelector(`${form}`);
  const checkboxLabel = checkboxContainer.querySelector(".validator__legal");
  const checkbox = checkboxContainer.querySelector(".validator__agree");
  const submitButton = checkboxContainer.querySelector('button[type="submit"]');
  checkboxLabel.addEventListener("click", () => {
    const isExeeded = checkboxContainer.querySelector(".validator__size-warning--exeeded");
    if (isExeeded) {
      submitButton.classList.add("validator__submit--disabled");
      submitButton.disabled = true;
      if (checkbox.checked === true) {
        checkbox.checked = false;
      } else {
        checkbox.checked = true;
      }
    } else if (checkbox.checked === true) {
      submitButton.classList.add("validator__submit--disabled");
      submitButton.disabled = true;
      checkbox.setAttribute("checked", false);
    } else {
      submitButton.classList.remove("validator__submit--disabled");
      submitButton.disabled = false;
      checkbox.setAttribute("checked", true);
    }
  });
};



/***/ }),

/***/ 4741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5880);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6575);



gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u);
const initParticipantsAnimation = () => {
  const section = document.querySelector(".participants");
  if (!section)
    return;
  const items = gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.utils.toArray(".participants__item");
  if (items.length < 2)
    return;
  const first = items[0];
  const rest = items.slice(1);
  const createTimeline = () => {
    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u.getAll().forEach((st) => {
      if (st.trigger === section || st.animation && st.animation._targets && st.animation._targets.length && st.animation._targets.some((t) => section.contains(t))) {
        st.kill();
      }
    });
    const firstRect = first.getBoundingClientRect();
    const offsets = items.map((item) => {
      const r = item.getBoundingClientRect();
      const yMove = firstRect.top - r.top;
      return yMove;
    });
    const totalSteps = rest.length;
    const stepHeight = 220;
    const totalScroll = totalSteps * stepHeight;
    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.timeline({
      scrollTrigger: {
        trigger: section,
        start: "center center",
        end: "+=" + totalScroll,
        scrub: true,
        pin: true,
        pinSpacing: true
        //markers: true,
      }
    });
    rest.forEach((card, i) => {
      const stepLabel = `step${i}`;
      tl.addLabel(stepLabel);
      const targetY = (i + 1) * -95;
      console.log(targetY);
      tl.to(card, {
        yPercent: targetY,
        duration: 1,
        ease: "none"
      }, stepLabel);
      for (let j = 0; j <= i; j++) {
        const prev = items[j];
        const stepScale = 0.04;
        const scaleTarget = Math.max(0.7, 1 - stepScale * (i - j + 1));
        tl.to(prev, {
          scale: scaleTarget,
          transformOrigin: "top center",
          duration: 1,
          ease: "none"
        }, stepLabel);
      }
    });
    return tl;
  };
  let tlInstance = createTimeline();
  let resizeTimer;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u.refresh(true);
      tlInstance = createTimeline();
    }, 150);
  };
  window.addEventListener("resize", onResize);
  return () => {
    window.removeEventListener("resize", onResize);
    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u.getAll().forEach((st) => {
      if (st.trigger === section || st.animation && st.animation._targets && st.animation._targets.length && st.animation._targets.some((t) => section.contains(t))) {
        st.kill();
      }
    });
    if (tlInstance)
      tlInstance.kill();
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initParticipantsAnimation);


/***/ }),

/***/ 4881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

const configurator = document.querySelector(".configurator");
if (configurator) {
  const form = configurator.querySelector(".configurator__form");
  const images = configurator.querySelectorAll(".configurator__result img");
  const updateFurnitureImage = () => {
    const selectedFilters = {};
    const formData = new FormData(form);
    formData.forEach((value, key) => {
      selectedFilters[key] = value;
    });
    images.forEach((img) => {
      let match = true;
      for (const [key, value] of Object.entries(selectedFilters)) {
        const dataValue = img.dataset[key];
        if (dataValue !== value) {
          match = false;
          break;
        }
      }
      img.classList.toggle("active", match);
    });
  };
  form.addEventListener("change", updateFurnitureImage);
  updateFurnitureImage();
}


/***/ }),

/***/ 4977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 5057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

const up = document.querySelector(".up");
const scrollableHeight = 300;
if (up) {
  let scrollPosition = 0;
  up.addEventListener("click", () => {
    window.scroll(0, 0);
  });
  window.addEventListener("scroll", () => {
    if (window.pageYOffset <= scrollPosition && window.pageYOffset >= scrollableHeight) {
      up.classList.add("up--visible");
      scrollPosition = window.pageYOffset;
    } else {
      up.classList.remove("up--visible");
      scrollPosition = window.pageYOffset;
    }
  });
}


/***/ }),

/***/ 5073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1708);



const sliderInit = (container) => {
  const slider = container;
  if (!slider)
    return;
  const swiper = slider.querySelector(".swiper");
  const buttonPrev = slider.querySelector(".slider__button--prev");
  const buttonNext = slider.querySelector(".slider__button--next");
  new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(swiper, {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .Vx, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Pagination */ .dK],
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: false,
    // Navigation arrows
    navigation: {
      prevEl: buttonPrev,
      nextEl: buttonNext,
      disabledClass: "slider__button--disabled"
    },
    // Pagination
    pagination: {
      el: ".slider__pagination",
      progressbarFillClass: "slider__pagination-fill",
      clickable: true,
      type: "progressbar"
    },
    // Responsive breakpoints
    breakpoints: {}
  });
};
const sliders = document.querySelectorAll(".slider");
sliders.forEach((el) => {
  sliderInit(el);
});


/***/ }),

/***/ 5377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1708);



const galleryInit = (container) => {
  const gallery = container;
  if (!gallery)
    return;
  const swiper = gallery.querySelector(".swiper");
  new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(swiper, {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .Vx, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Pagination */ .dK],
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: false,
    // Responsive breakpoints
    breakpoints: {}
  });
};
const gallerys = document.querySelectorAll(".gallery");
gallerys.forEach((el) => {
  galleryInit(el);
});


/***/ }),

/***/ 5401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 5547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-phone",
  "use": "icon-phone-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-phone\">\n<path d=\"M18.9975 20C10.4659 20.0121 3.99088 13.4595 4.00001 5.00251C4.00001 4.45023 4.44773 4 5.00001 4H7.63937C8.13494 4 8.55593 4.36413 8.6287 4.85433C8.80311 6.0292 9.14517 7.17297 9.64448 8.2507L9.74725 8.4725C9.89013 8.78091 9.79328 9.14734 9.51668 9.34487C8.6993 9.92859 8.38692 11.1036 9.0237 12.0204C9.82278 13.1708 10.8301 14.1779 11.9803 14.9766C12.897 15.6132 14.0718 15.3009 14.6555 14.4836C14.8532 14.2069 15.2198 14.11 15.5284 14.2529L15.7492 14.3552C16.827 14.8545 17.9708 15.1966 19.1458 15.371C19.636 15.4437 20 15.8647 20 16.3603V19C20 19.5523 19.5512 20 18.9989 20L18.9975 20Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ }),

/***/ 5745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4489);


const form = document.querySelector(".request__form");
if (form) {
  console.log(form);
  (0,_validator_validator__WEBPACK_IMPORTED_MODULE_0__.validateForm)(".request__form");
}


/***/ }),

/***/ 5945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 6153:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3670);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4947);
/* harmony import */ var tippy_js_animations_scale_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6730);
/* harmony import */ var tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(814);
/* harmony import */ var tippy_js_animations_scale_extreme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5309);
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2820);
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_components_js__WEBPACK_IMPORTED_MODULE_5__);
const import_meta = {};
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(__webpack_require__(4078));











let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

if (import_meta.webpackHot) {
  import_meta.webpackHot.accept();
}


/***/ }),

/***/ 6505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1708);



const clubCardsNew = document.querySelector(".our-history");
if (clubCardsNew) {
  const nav = clubCardsNew.querySelector(".our-history__nav");
  const main = clubCardsNew.querySelector(".our-history__main");
  let swiperMainDesktop;
  let swiperNav;
  const swiperNavInit = () => {
    console.log("swiperNavInit");
    swiperNav = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(nav, {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .FreeMode */ .U1],
      spaceBetween: 0,
      slidesPerView: "auto",
      watchSlidesProgress: true,
      freeMode: {
        enabled: true,
        minimumVelocity: 0.2,
        momentum: false,
        sticky: true
      }
    });
  };
  const swiperMainDesktopInit = () => {
    console.log("swiperMainDesktopInit");
    swiperMainDesktop = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(main, {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Thumbs */ .WO, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .EffectFade */ ._R],
      allowTouchMove: true,
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      watchSlidesProgress: true,
      thumbs: {
        swiper: swiperNav,
        slideThumbActiveClass: "our-history__nav-item--active"
      },
      breakpoints: {
        992: {
          allowTouchMove: false
        }
      },
      on: {
        init: () => {
          swiperNav.update();
        }
      }
    });
  };
  swiperNavInit();
  swiperMainDesktopInit();
}


/***/ }),

/***/ 6671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 6689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3670);


const body = document.querySelector("body");
const header = document.querySelector("header");
if (header) {
  const burger = header.querySelector(".header__burger");
  const menuOff = () => {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
    header.classList.remove("header--dropdown");
    header.querySelectorAll(".mobile-nav__item--sub").forEach((el) => {
      el.classList.remove("mobile-nav__item--sub");
    });
    header.querySelectorAll(".mobile-dropdown__sub--active").forEach((el) => {
      el.classList.remove("mobile-dropdown__sub--active");
      el.style.maxHeight = null;
    });
  };
  if (burger) {
    burger.addEventListener("click", () => {
      if (header.classList.contains("header--dropdown")) {
        menuOff();
      } else {
        header.classList.add("header--dropdown");
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingOnBody */ .rP)();
      }
    });
  }
}


/***/ }),

/***/ 6697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 6919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4489);
/* harmony import */ var _popUp_popUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9417);
/* harmony import */ var _video_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2305);
/* harmony import */ var _alert_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4009);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3670);
/* harmony import */ var _promo_gallery_promo_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(445);
/* harmony import */ var _promo_promo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2945);
/* harmony import */ var _participants_participants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4855);








window.Corners5ProjectLayout = {
  validation: {
    validateForm: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.validateForm,
    maskNumber: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.maskNumber,
    maskPhone: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.maskPhone,
    initPasswordEye: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.initPasswordEye,
    initFileLoadInput: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.initFileLoadInput,
    initSelectValidation: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.initSelectValidation,
    initChoicesValidation: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.initChoicesValidation
  },
  summonPopUp: _popUp_popUp__WEBPACK_IMPORTED_MODULE_1__.summonPopUp,
  removePopUp: _popUp_popUp__WEBPACK_IMPORTED_MODULE_1__.removePopUp,
  findVideos: _video_video__WEBPACK_IMPORTED_MODULE_2__["default"],
  summonAlert: _alert_alert__WEBPACK_IMPORTED_MODULE_3__.summonAlert,
  removeAlert: _alert_alert__WEBPACK_IMPORTED_MODULE_3__.removeAlert,
  getPaddingOnBody: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .getPaddingOnBody */ .rP,
  getPaddingFromBody: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .getPaddingFromBody */ .iW,
  getScrollbarWidth: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .getScrollbarWidth */ .XJ,
  createFormData: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .createFormData */ .$W,
  setTextareaAutoHeight: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .setTextareaAutoHeight */ .Bs,
  setStatus: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .setStatus */ .Lx,
  startTimer: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .startTimer */ .Ip,
  debounce: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .debounce */ .sg,
  activateRequestButtons: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .activateRequestButtons */ .Qs,
  updateButtonState: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .updateButtonState */ .Dl,
  initPromoGalleryAnimation: _promo_gallery_promo_gallery__WEBPACK_IMPORTED_MODULE_5__["default"],
  initPromoAnimation: _promo_promo__WEBPACK_IMPORTED_MODULE_6__["default"],
  initParticipantsAnimation: _participants_participants__WEBPACK_IMPORTED_MODULE_7__["default"]
};


/***/ }),

/***/ 7025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

const buttons = document.querySelectorAll(".mobile-dropdown__sub-in");
buttons.forEach((button) => {
  const parent = button.parentElement;
  const container = parent.querySelector(".mobile-dropdown__sub");
  button.addEventListener("click", () => {
    if (container && !container.classList.contains("mobile-dropdown__sub--active")) {
      container.classList.add("mobile-dropdown__sub--active");
      container.style.maxHeight = `${container.scrollHeight}px`;
    } else {
      container.classList.remove("mobile-dropdown__sub--active");
      container.style.maxHeight = null;
    }
  });
});
const subOut = document.querySelector(".mobile-dropdown__sub-out");
if (subOut) {
  subOut.addEventListener("click", () => {
    document.querySelectorAll(".mobile-nav__item--sub").forEach((el) => {
      el.classList.remove("mobile-nav__item--sub");
    });
    document.querySelectorAll(".mobile-dropdown__sub--active").forEach((el) => {
      el.classList.remove("mobile-dropdown__sub--active");
      el.style.maxHeight = null;
    });
  });
}


/***/ }),

/***/ 8413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 9143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

const mobileNav = document.querySelector(".mobile-nav");
if (mobileNav) {
  const items = mobileNav.querySelectorAll(".mobile-nav__item");
  items.forEach((item) => {
    const sub = item.querySelector(".mobile-nav__sub");
    const openButton = item.querySelector(".mobile-nav__sub-in");
    if (sub && openButton) {
      openButton.addEventListener("click", () => {
        item.classList.add("mobile-nav__item--sub");
      });
    }
  });
}


/***/ }),

/***/ 9417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removePopUp: () => (/* binding */ removePopUp),
/* harmony export */   summonPopUp: () => (/* binding */ summonPopUp)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3670);


const body = document.querySelector("body");
const openPopup = (options) => {
  const {
    template,
    blockScroll = true,
    redirect,
    overlay = {
      use: true,
      closeOnClick: true
    },
    esc = {
      closeOnEsc: true
    }
  } = options;
  const popUpName = template.replace(/^#/, "");
  const templateElement = document.querySelector(`#${popUpName}`);
  if (!templateElement) {
    console.warn(`#${popUpName} \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.`);
    return;
  }
  if (document.querySelector(`.${popUpName}`)) {
    console.warn(`\u041C\u043E\u0434\u0430\u043B\u043A\u0430 ${popUpName} \u0443\u0436\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u0430.`);
    return;
  }
  const templateContent = templateElement.content.cloneNode(true);
  const popup = templateContent.querySelector(`.${popUpName}`);
  if (!popup) {
    console.error(`\u0412 \u0448\u0430\u0431\u043B\u043E\u043D\u0435 #${popUpName} \u043D\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0441 \u043A\u043B\u0430\u0441\u0441\u043E\u043C .${popUpName}`);
    return;
  }
  body.append(popup);
  const overlayEl = popup.querySelector(".popUp__overlay");
  const closes = popup.querySelectorAll(".popUp__close");
  function removePopup() {
    popup.remove();
    if (blockScroll && !document.querySelector(".popUp")) {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
    }
    document.removeEventListener("keydown", onPopupEscPress);
    if (redirect) {
      setTimeout(() => {
        window.location.href = redirect;
      }, 300);
    }
  }
  function onPopupEscPress(evt) {
    if (!esc.closeOnEsc)
      return;
    if (evt.code !== "Escape")
      return;
    evt.preventDefault();
    removePopup();
  }
  if (blockScroll)
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingOnBody */ .rP)();
  if (overlayEl) {
    if (overlay.use && overlay.closeOnClick) {
      overlayEl.addEventListener("click", removePopup);
    } else if (!overlay.use) {
      overlayEl.remove();
    }
  }
  closes.forEach((close) => close.addEventListener("click", removePopup));
  if (esc.closeOnEsc) {
    document.addEventListener("keydown", onPopupEscPress);
  }
};
const summonPopUp = (arg1, arg2, arg3) => {
  if (typeof arg1 === "object" && arg1 !== null) {
    const {
      template,
      blockScroll = true,
      redirect,
      overlay = {
        use: true,
        closeOnClick: true
      },
      esc = {
        closeOnEsc: true
      }
    } = arg1;
    if (!template) {
      console.warn("\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D template \u0434\u043B\u044F \u043C\u043E\u0434\u0430\u043B\u043A\u0438");
      return;
    }
    openPopup({
      template,
      blockScroll,
      redirect,
      overlay,
      esc
    });
  } else if (typeof arg1 === "string") {
    const template = arg1;
    const blockScroll = arg2 !== void 0 ? arg2 : true;
    const redirect = arg3;
    openPopup({
      template,
      blockScroll,
      redirect,
      overlay: {
        use: true,
        closeOnClick: true
      },
      esc: {
        closeOnEsc: true
      }
    });
  } else {
    console.warn("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F summonPopUp");
  }
};
const removePopUp = (arg) => {
  const findPopup = (name) => {
    if (name.startsWith("#"))
      return document.querySelector(`.${name.slice(1)}`);
    const cls = name.startsWith(".") ? name : `.${name}`;
    return document.querySelector(cls);
  };
  let popup = null;
  if (typeof arg === "string") {
    popup = findPopup(arg);
  } else if (typeof arg === "object" && arg !== null) {
    popup = findPopup(arg.template);
  }
  if (!popup)
    return;
  popup.remove();
  if (!document.querySelector(".popUp__overlay"))
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
};



/***/ }),

/***/ 9585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 9669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			23: 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_pug_esbuild_starter"] = self["webpackChunkwebpack_pug_esbuild_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [96], () => (__webpack_require__(6153)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;