"use strict";
exports.id = 974;
exports.ids = [974];
exports.modules = {

/***/ 7974:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ userInfoAtom)
/* harmony export */ });
/* harmony import */ var jotai_tanstack_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5148);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7796);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai_tanstack_query__WEBPACK_IMPORTED_MODULE_0__, _shared__WEBPACK_IMPORTED_MODULE_1__]);
([jotai_tanstack_query__WEBPACK_IMPORTED_MODULE_0__, _shared__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const isServer = "undefined" === "undefined";
const [, userInfoAtom] = (0,jotai_tanstack_query__WEBPACK_IMPORTED_MODULE_0__.atomsWithQuery)((get)=>({
        queryKey: [
            "user"
        ],
        queryFn: ()=>isServer ? null : _shared__WEBPACK_IMPORTED_MODULE_1__/* .axios.get */ .o.get("/api/user").then((data)=>data.data).catch(async ()=>{
                await _shared__WEBPACK_IMPORTED_MODULE_1__/* .axios.post */ .o.post("/api/auth/signout");
                window.location.pathname = "/auth/signin";
            })
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8976:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ axios)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const axios = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7796:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* reexport safe */ _axios__WEBPACK_IMPORTED_MODULE_0__.o)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8976);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_0__]);
_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;