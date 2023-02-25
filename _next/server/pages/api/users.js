"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
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

/***/ 3950:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2652);
/* harmony import */ var _server_middlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8960);
/* harmony import */ var _server_modules_shared_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1669);
/* harmony import */ var _server_utils_defaultRouterHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1713);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5616);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _server_modules_shared_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2484);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_middlewares__WEBPACK_IMPORTED_MODULE_1__, next_connect__WEBPACK_IMPORTED_MODULE_4__]);
([_server_middlewares__WEBPACK_IMPORTED_MODULE_1__, next_connect__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const router = (0,next_connect__WEBPACK_IMPORTED_MODULE_4__.createRouter)();
router.use((0,_server_middlewares__WEBPACK_IMPORTED_MODULE_1__/* .ironMiddleware */ .d)(_server_lib__WEBPACK_IMPORTED_MODULE_0__/* .authSessionOption */ .t));
router.get(async (req, res)=>{
    const user = req.session.user;
    if (!user || !user.isAdmin) {
        return res.status(401).json({
            error: "You do not have access to this resource"
        });
    }
    let page = 0;
    const { page: pageString  } = req.query;
    if (typeof pageString === "string") {
        page = parseInt(pageString);
    }
    const itemsByPage = 10;
    const usersResponse = await _server_modules_shared_db__WEBPACK_IMPORTED_MODULE_2__/* .prisma.user.findMany */ ._.user.findMany({
        where: {
            isAdmin: false,
            deleteAt: null
        },
        select: {
            id: true,
            companyName: true,
            username: true,
            ruc: true,
            email: true,
            phone: true
        },
        skip: page * itemsByPage,
        take: itemsByPage
    });
    const totalPages = await _server_modules_shared_db__WEBPACK_IMPORTED_MODULE_2__/* .prisma.user.count */ ._.user.count({
        where: {
            isAdmin: false,
            deleteAt: null
        }
    });
    res.status(200).json({
        data: usersResponse,
        pages: Math.ceil(totalPages / itemsByPage)
    });
});
router.put(async (req, res)=>{
    const user = req.session.user;
    if (!user || !user.isAdmin) {
        return res.status(401).json({
            error: "You do not have access to this resource"
        });
    }
    try {
        req.body.password = await bcrypt__WEBPACK_IMPORTED_MODULE_5___default().hash(req.body.password, _server_modules_shared_utils_constants__WEBPACK_IMPORTED_MODULE_6__/* .saltRounds */ .X);
        const order = await _server_modules_shared_db__WEBPACK_IMPORTED_MODULE_2__/* .prisma.user.create */ ._.user.create({
            data: req.body
        });
        return res.status(200).json({
            ...order
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});
router.post(async (req, res)=>{
    const user = req.session.user;
    if (!user || !user.isAdmin) {
        return res.status(401).json({
            error: "You do not have access to this resource"
        });
    }
    try {
        const id = req.body.id;
        delete req.body.id;
        if (req.body.password) {
            req.body.password = await bcrypt__WEBPACK_IMPORTED_MODULE_5___default().hash(req.body.password, _server_modules_shared_utils_constants__WEBPACK_IMPORTED_MODULE_6__/* .saltRounds */ .X);
        }
        const order = await _server_modules_shared_db__WEBPACK_IMPORTED_MODULE_2__/* .prisma.user.update */ ._.user.update({
            data: req.body,
            where: {
                id
            }
        });
        return res.status(200).json(order);
    } catch (error) {
        throw res.status(500).json({
            error: error.message
        });
    }
});
router.delete(async (req, res)=>{
    const user = req.session.user;
    if (!user || !user.isAdmin) {
        return res.status(401).json({
            error: "You do not have access to this resource"
        });
    }
    let id;
    const { id: idString  } = req.query;
    if (typeof idString === "string") {
        id = parseInt(idString);
    }
    if (!id) {
        return res.status(401).json({
            error: "ID not found"
        });
    }
    const nowDate = new Date();
    try {
        const order = await _server_modules_shared_db__WEBPACK_IMPORTED_MODULE_2__/* .prisma.user.update */ ._.user.update({
            data: {
                deleteAt: nowDate
            },
            where: {
                id
            }
        });
        return res.status(200).json(order);
    } catch (error) {
        throw res.status(500).json({
            error: error.message
        });
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.handler(_server_utils_defaultRouterHandler__WEBPACK_IMPORTED_MODULE_3__/* .defaultRouterHandler */ .O));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ saltRounds)
/* harmony export */ });
const saltRounds = 10;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [814], () => (__webpack_exec__(3950)));
module.exports = __webpack_exports__;

})();