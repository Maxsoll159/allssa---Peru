"use strict";
(() => {
var exports = {};
exports.id = 607;
exports.ids = [607];
exports.modules = {

/***/ 2409:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_modules_shared_atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3976);
/* harmony import */ var _app_modules_shared_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8125);
/* harmony import */ var _app_modules_usersManager_views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6256);
/* harmony import */ var _server_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9768);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9752);
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9531);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_modules_shared_atoms__WEBPACK_IMPORTED_MODULE_1__, _app_modules_shared_layouts__WEBPACK_IMPORTED_MODULE_2__, _app_modules_usersManager_views__WEBPACK_IMPORTED_MODULE_3__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, iron_session_next__WEBPACK_IMPORTED_MODULE_6__, jotai__WEBPACK_IMPORTED_MODULE_7__]);
([_app_modules_shared_atoms__WEBPACK_IMPORTED_MODULE_1__, _app_modules_shared_layouts__WEBPACK_IMPORTED_MODULE_2__, _app_modules_usersManager_views__WEBPACK_IMPORTED_MODULE_3__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, iron_session_next__WEBPACK_IMPORTED_MODULE_6__, jotai__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Home() {
    const user = (0,jotai__WEBPACK_IMPORTED_MODULE_7__.useAtomValue)(_app_modules_shared_atoms__WEBPACK_IMPORTED_MODULE_1__/* .simpleUserAtom */ .C);
    if (!user || !user.isAdmin) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_modules_shared_layouts__WEBPACK_IMPORTED_MODULE_2__/* .MainLayout */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_modules_usersManager_views__WEBPACK_IMPORTED_MODULE_3__/* .UserManagerView */ .h, {
            isAdmin: true
        })
    });
}
const getServerSideProps = (0,iron_session_next__WEBPACK_IMPORTED_MODULE_6__/* .withIronSessionSsr */ .c)(async function getServerSideProps({ req , res  }) {
    const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();
    const user = req.session.user;
    if (user === undefined) {
        res.setHeader("location", "/auth/signin");
        res.statusCode = 302;
        res.end();
        return {
            props: {}
        };
    }
    if (!user.isAdmin) {
        res.setHeader("location", "/");
        res.statusCode = 302;
        res.end();
        return {
            props: {}
        };
    }
    queryClient.setQueryData([
        "user"
    ], {
        user: user,
        isLoggedIn: true
    });
    return {
        props: {
            dehydratedState: (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.dehydrate)(queryClient)
        }
    };
}, _server_lib__WEBPACK_IMPORTED_MODULE_4__/* .authSessionOption */ .t);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 7129:
/***/ ((module) => {

module.exports = import("crypto-hash");;

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 2451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ }),

/***/ 5148:
/***/ ((module) => {

module.exports = import("jotai-tanstack-query");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,531,974,991,256], () => (__webpack_exec__(2409)));
module.exports = __webpack_exports__;

})();