"use strict";
exports.id = 814;
exports.ids = [814,863];
exports.modules = {

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

/***/ 1669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ prisma)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();


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