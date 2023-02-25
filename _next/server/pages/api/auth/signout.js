"use strict";
(() => {
var exports = {};
exports.id = 255;
exports.ids = [255];
exports.modules = {

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 5164:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2652);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5616);
/* harmony import */ var _server_middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8960);
/* harmony import */ var _server_utils_defaultRouterHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1713);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__, _server_middlewares__WEBPACK_IMPORTED_MODULE_2__]);
([next_connect__WEBPACK_IMPORTED_MODULE_1__, _server_middlewares__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const router = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__.createRouter)();
router.use((0,_server_middlewares__WEBPACK_IMPORTED_MODULE_2__/* .ironMiddleware */ .d)(_server_lib__WEBPACK_IMPORTED_MODULE_0__/* .authSessionOption */ .t));
router.post(async (req, res)=>{
    req.session.destroy();
    res.status(200).end();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.handler(_server_utils_defaultRouterHandler__WEBPACK_IMPORTED_MODULE_3__/* .defaultRouterHandler */ .O));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": () => (/* reexport */ authSessionOption)
});

;// CONCATENATED MODULE: ./server/lib/ironOptions.ts
const authSessionOption = {
    cookieName: "dataverifica_auth_session",
    password: "zSjiDxylk3SH7lC7Vlvr9WAPMSlAsfW9",
    cookieOptions: {
        secure: "production" === "production"
    }
};

;// CONCATENATED MODULE: ./server/lib/index.ts



/***/ }),

/***/ 8960:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* reexport safe */ _ironMiddleware__WEBPACK_IMPORTED_MODULE_0__.d)
/* harmony export */ });
/* harmony import */ var _ironMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(631);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ironMiddleware__WEBPACK_IMPORTED_MODULE_0__]);
_ironMiddleware__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 631:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ ironMiddleware)
/* harmony export */ });
/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4014);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__]);
iron_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function ironMiddleware(ironConfigs) {
    return async (req, res, next)=>{
        const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, ironConfigs);
        req.session = session;
        next();
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ defaultRouterHandler)
/* harmony export */ });
const defaultRouterHandler = {
    onError: (err, _req, res)=>{
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (_req, res)=>{
        res.status(404).end("Page is not found");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5164));
module.exports = __webpack_exports__;

})();