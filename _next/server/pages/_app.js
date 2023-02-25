(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var _app_modules_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5478);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2451);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9752);
/* harmony import */ var jotai_tanstack_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5148);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__, jotai__WEBPACK_IMPORTED_MODULE_6__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__, jotai_tanstack_query__WEBPACK_IMPORTED_MODULE_8__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_4__, jotai__WEBPACK_IMPORTED_MODULE_6__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__, jotai_tanstack_query__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function App({ Component , pageProps  }) {
    const [queryClient] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(()=>new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClient());
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {
        theme: _app_modules_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClientProvider, {
            client: queryClient,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.Hydrate, {
                state: pageProps.dehydratedState,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jotai__WEBPACK_IMPORTED_MODULE_6__.Provider, {
                    initialValues: [
                        [
                            jotai_tanstack_query__WEBPACK_IMPORTED_MODULE_8__.queryClientAtom,
                            queryClient
                        ]
                    ],
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {
                            position: "top-center"
                        })
                    ]
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ modules_theme)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: external "@chakra-ui/styled-system"
const styled_system_namespaceObject = require("@chakra-ui/styled-system");
;// CONCATENATED MODULE: ./src/modules/theme/components/button.ts

const buttonTheme = (0,styled_system_namespaceObject.defineStyleConfig)({
    defaultProps: {
        colorScheme: "primary"
    }
});

;// CONCATENATED MODULE: ./src/modules/theme/components/form-label.ts

const baseStyle = (0,styled_system_namespaceObject.defineStyle)({
    fontSize: "sm",
    color: "gray.600"
});
const formLabelTheme = (0,styled_system_namespaceObject.defineStyleConfig)({
    baseStyle
});

;// CONCATENATED MODULE: ./src/modules/theme/components/index.ts


const components = {
    Button: buttonTheme,
    FormLabel: formLabelTheme
};

;// CONCATENATED MODULE: ./src/modules/theme/foundations/colors.ts
const colors = {
    primary: {
        200: "#f3f4ff",
        300: "#a5d3eb",
        400: "#61bdee",
        500: "#3ca9ee",
        600: "#2c85c5"
    },
    white100: "#e2e3e2",
    secondary: {
        300: "#dfa693",
        400: "#dc6e55",
        500: "#e14a32",
        600: "#c33726"
    },
    text: {
        dark: "#485d78"
    }
};

;// CONCATENATED MODULE: ./src/modules/theme/foundations/index.ts

const foundations = {
    colors: colors
};

;// CONCATENATED MODULE: ./src/modules/theme/index.ts



const config = {
    cssVarPrefix: "dataverifica",
    useSystemColorMode: false,
    initialColorMode: "light"
};
const theme = (0,react_.extendTheme)({
    ...config,
    ...foundations,
    components: components
});
/* harmony default export */ const modules_theme = (theme);


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 2451:
/***/ ((module) => {

"use strict";
module.exports = import("jotai");;

/***/ }),

/***/ 5148:
/***/ ((module) => {

"use strict";
module.exports = import("jotai-tanstack-query");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3847));
module.exports = __webpack_exports__;

})();