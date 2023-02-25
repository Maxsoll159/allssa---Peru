"use strict";
exports.id = 991;
exports.ids = [991];
exports.modules = {

/***/ 9768:
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

/***/ 6113:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ simpleUserAtom),
/* harmony export */   "I": () => (/* binding */ userIsAdminAtom)
/* harmony export */ });
/* harmony import */ var _app_modules_auth_atoms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7974);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_modules_auth_atoms__WEBPACK_IMPORTED_MODULE_0__, jotai__WEBPACK_IMPORTED_MODULE_1__]);
([_app_modules_auth_atoms__WEBPACK_IMPORTED_MODULE_0__, jotai__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const simpleUserAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)((get)=>{
    return get(_app_modules_auth_atoms__WEBPACK_IMPORTED_MODULE_0__/* .userInfoAtom */ .w).data?.user;
});
const userIsAdminAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)((get)=>get(_app_modules_auth_atoms__WEBPACK_IMPORTED_MODULE_0__/* .userInfoAtom */ .w).data?.user?.isAdmin);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3976:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* reexport safe */ _authAtoms__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   "I": () => (/* reexport safe */ _authAtoms__WEBPACK_IMPORTED_MODULE_0__.I)
/* harmony export */ });
/* harmony import */ var _authAtoms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6113);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_authAtoms__WEBPACK_IMPORTED_MODULE_0__]);
_authAtoms__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": () => (/* reexport */ Pagination),
  "Z": () => (/* reexport */ SimpleContainerView)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./src/modules/shared/components/SimpleContainerView.tsx


const SimpleContainerView = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
        w: "full",
        h: "full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                justifyContent: "space-between",
                w: "full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                        alignItems: "flex-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                as: "h2",
                                size: "md",
                                color: "text.dark",
                                children: props.title
                            }),
                            props.subTitle && /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                color: "gray.500",
                                children: props.subTitle
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        children: props.rightRenderHeader
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                mt: "1rem",
                flex: "1",
                h: "0",
                w: "full",
                children: props.children
            })
        ]
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/modules/shared/components/Pagination.tsx



const Pagination = (props)=>{
    let { currentPage , totalPages , onChange  } = props;
    const [lastTotalPages, setLastTotalPages] = (0,external_react_.useState)(totalPages);
    (0,external_react_.useEffect)(()=>{
        if (totalPages !== 0) {
            setLastTotalPages(totalPages);
        }
    }, [
        totalPages,
        setLastTotalPages
    ]);
    const limit = 4;
    let pagesArray = [];
    for(let i = 0; i < Math.min(7, lastTotalPages); i++){
        if (currentPage <= limit) {
            pagesArray[i] = i;
        } else {
            const diff = Math.max(currentPage + limit - 1, lastTotalPages) - lastTotalPages;
            pagesArray[i] = i + currentPage - limit - diff;
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
        w: "full",
        h: "full",
        justifyContent: "flex-end",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                size: "sm",
                colorScheme: "gray",
                disabled: currentPage === 0,
                onClick: ()=>onChange(currentPage - 1),
                children: "<"
            }),
            pagesArray.map((value, index)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                    colorScheme: value === currentPage ? "primary" : "gray",
                    size: "sm",
                    onClick: ()=>onChange(value),
                    children: value + 1
                }, "button-" + index)),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                size: "sm",
                colorScheme: "gray",
                disabled: currentPage === lastTotalPages - 1,
                onClick: ()=>onChange(currentPage + 1),
                children: ">"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/modules/shared/components/index.ts




/***/ }),

/***/ 2722:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3976);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8976);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_2__, _atoms__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_5__, _axios__WEBPACK_IMPORTED_MODULE_6__]);
([jotai__WEBPACK_IMPORTED_MODULE_2__, _atoms__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_5__, _axios__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const headerStyle = (isActive)=>({
        position: "relative",
        h: "full",
        justifyContent: "center",
        px: "1rem",
        color: "text.dark",
        cursor: "pointer",
        userSelect: "none",
        _hover: {
            _before: {
                transform: "translateY(0px)"
            }
        },
        _before: {
            content: "' '",
            position: "absolute",
            transform: `translateY(${isActive ? "0" : "-4px"})`,
            transition: "transform 400ms",
            top: 0,
            left: 0,
            borderRadius: "8",
            w: "full",
            h: "4px",
            bg: "primary.500"
        }
    });
const MainLayout = (props)=>{
    const isAdmin = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtomValue)(_atoms__WEBPACK_IMPORTED_MODULE_3__/* .userIsAdminAtom */ .I);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const handleSignout = async ()=>{
        try {
            await _axios__WEBPACK_IMPORTED_MODULE_6__/* .axios.post */ .o.post("/api/auth/signout");
            window.location.pathname = "/auth/signin";
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error("Error al cerrar sesi\xf3n");
            throw error;
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        "Dataverifica - ",
                        isAdmin ? "Administrador" : "Cliente"
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                w: "100vw",
                h: "100vh",
                bg: "primary.200",
                position: "relative",
                spacing: "0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                        w: "full",
                        h: "3.5rem",
                        bg: "white",
                        px: "6",
                        spacing: "12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    src: "/logo.jpg",
                                    alt: "logo",
                                    height: 64,
                                    width: 64
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                flex: "1",
                                h: "full",
                                children: isAdmin && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                            sx: headerStyle(router.pathname === "/"),
                                            onClick: ()=>{
                                                router.push("/");
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                children: "Peticiones"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                            sx: headerStyle(router.pathname === "/users"),
                                            onClick: ()=>{
                                                router.push("/users");
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                children: "Usuarios"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                            sx: headerStyle(router.pathname === "/admins"),
                                            onClick: ()=>{
                                                router.push("/admins");
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                children: "Administradores"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    colorScheme: "red",
                                    size: "sm",
                                    rounded: "full",
                                    onClick: handleSignout,
                                    children: "Cerrar sesi\xf3n"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        flex: "1",
                        height: "0",
                        px: "6",
                        py: "4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            alignItems: "start-flex",
                            bg: "white",
                            borderRadius: "12",
                            p: "6",
                            shadow: "lg",
                            w: "full",
                            h: "full",
                            overflow: "hidden",
                            children: props.children
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _MainLayout__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2722);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainLayout__WEBPACK_IMPORTED_MODULE_0__]);
_MainLayout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;