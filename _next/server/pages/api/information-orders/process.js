"use strict";
(() => {
var exports = {};
exports.id = 75;
exports.ids = [75];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 1738:
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 8561:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2652);
/* harmony import */ var _server_middlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8960);
/* harmony import */ var _server_modules_shared_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1669);
/* harmony import */ var _server_utils_defaultRouterHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1713);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5616);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1738);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_middlewares__WEBPACK_IMPORTED_MODULE_1__, next_connect__WEBPACK_IMPORTED_MODULE_4__]);
([_server_middlewares__WEBPACK_IMPORTED_MODULE_1__, next_connect__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const router = (0,next_connect__WEBPACK_IMPORTED_MODULE_4__.createRouter)();
const upload = multer__WEBPACK_IMPORTED_MODULE_5___default()({
    storage: multer__WEBPACK_IMPORTED_MODULE_5___default().diskStorage({
        destination: "./files/pdf",
        filename: function(_req, file, cb) {
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
            const extSplit = file.originalname.split(".");
            const ext = extSplit[extSplit.length - 1];
            cb(null, file.fieldname + "-" + uniqueSuffix + "." + ext);
        }
    })
});
router.use((0,_server_middlewares__WEBPACK_IMPORTED_MODULE_1__/* .ironMiddleware */ .d)(_server_lib__WEBPACK_IMPORTED_MODULE_0__/* .authSessionOption */ .t));
router.use(upload.single("pdf"));
router.post(async (req, res)=>{
    const user = req.session.user;
    if (!user || !user.isAdmin) {
        res.status(401).json({
            error: "You do not have access to this resource"
        });
        return;
    }
    const file = req.file;
    let pdf;
    if (file) {
        pdf = await _server_modules_shared_db__WEBPACK_IMPORTED_MODULE_2__/* .prisma.pDF.create */ ._.pDF.create({
            data: {
                path: file.path,
                name: file.originalname
            }
        });
    }
    let informationOrderId = req.body?.id;
    if (!informationOrderId) {
        res.status(403).json({
            error: "id property is required"
        });
        return;
    }
    const informationOrderUpdated = await _server_modules_shared_db__WEBPACK_IMPORTED_MODULE_2__/* .prisma.informationOrder.update */ ._.informationOrder.update({
        data: {
            pdfId: pdf?.id,
            isComplete: true
        },
        where: {
            id: parseInt(informationOrderId)
        }
    });
    if (!informationOrderUpdated) {
        res.status(403).json({
            error: "Information order not found"
        });
        return;
    }
    res.status(200).json(informationOrderUpdated);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.handler(_server_utils_defaultRouterHandler__WEBPACK_IMPORTED_MODULE_3__/* .defaultRouterHandler */ .O));
const config = {
    api: {
        bodyParser: false
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [863], () => (__webpack_exec__(8561)));
module.exports = __webpack_exports__;

})();