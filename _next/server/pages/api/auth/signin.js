"use strict";
(() => {
var exports = {};
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 2121:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2652);
/* harmony import */ var _server_modules_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1573);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5616);
/* harmony import */ var _server_middlewares__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8960);
/* harmony import */ var _server_utils_defaultRouterHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1713);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_2__, _server_middlewares__WEBPACK_IMPORTED_MODULE_3__]);
([next_connect__WEBPACK_IMPORTED_MODULE_2__, _server_middlewares__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const router = (0,next_connect__WEBPACK_IMPORTED_MODULE_2__.createRouter)();
router.use((0,_server_middlewares__WEBPACK_IMPORTED_MODULE_3__/* .ironMiddleware */ .d)(_server_lib__WEBPACK_IMPORTED_MODULE_0__/* .authSessionOption */ .t));
router.post(async (req, res)=>{
    const { username , password: passwordHash  } = req.body;
    if (!username || !passwordHash) {
        return res.status(401).json({
            error: "username and password properties are required"
        });
    }
    const signinValidationApplication = new _server_modules_auth__WEBPACK_IMPORTED_MODULE_1__/* .SigninApplication */ .o();
    const userValidForCredentials = await signinValidationApplication.execute({
        username,
        passwordHash
    });
    if (!userValidForCredentials) {
        return res.status(403).json({
            error: "username or passowrd invalid"
        });
    }
    req.session.user = {
        id: userValidForCredentials.id,
        isAdmin: userValidForCredentials.isAdmin
    };
    await req.session.save();
    res.status(200).end();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.handler(_server_utils_defaultRouterHandler__WEBPACK_IMPORTED_MODULE_4__/* .defaultRouterHandler */ .O));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* reexport */ SigninApplication)
});

// EXTERNAL MODULE: ./server/modules/shared/db.ts
var db = __webpack_require__(1669);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(7096);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
;// CONCATENATED MODULE: ./server/modules/auth/utils/crypt.ts

const verifyHash = (text, hash)=>{
    return external_bcrypt_default().compare(text, hash);
};

;// CONCATENATED MODULE: ./server/modules/auth/utils/index.ts


;// CONCATENATED MODULE: ./server/modules/auth/SigninApplication.ts


class SigninApplication {
    async execute(dto) {
        const user = await db/* prisma.user.findFirst */._.user.findFirst({
            where: {
                username: dto.username,
                deleteAt: null
            }
        });
        if (!user) {
            return;
        }
        const validCredentials = await verifyHash(dto.passwordHash, user.password);
        if (!validCredentials) {
            return;
        }
        return user;
    }
}

;// CONCATENATED MODULE: ./server/modules/auth/index.ts



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [814], () => (__webpack_exec__(2121)));
module.exports = __webpack_exports__;

})();