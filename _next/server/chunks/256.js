"use strict";
exports.id = 256;
exports.ids = [256];
exports.modules = {

/***/ 312:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DZ": () => (/* binding */ usersPageAtom),
/* harmony export */   "Qw": () => (/* binding */ adminPageAtom),
/* harmony export */   "Wk": () => (/* binding */ usersDataAtom),
/* harmony export */   "t2": () => (/* binding */ adminsDataAtom)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var jotai_tanstack_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5148);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9470);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, jotai__WEBPACK_IMPORTED_MODULE_1__, jotai_tanstack_query__WEBPACK_IMPORTED_MODULE_2__, _services__WEBPACK_IMPORTED_MODULE_3__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, jotai__WEBPACK_IMPORTED_MODULE_1__, jotai_tanstack_query__WEBPACK_IMPORTED_MODULE_2__, _services__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const usersPageAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(0);
const adminPageAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(0);
const [, usersDataAtom] = (0,jotai_tanstack_query__WEBPACK_IMPORTED_MODULE_2__.atomsWithInfiniteQuery)((get)=>({
        queryKey: [
            ..._utils__WEBPACK_IMPORTED_MODULE_4__/* .usersKey */ .y,
            get(usersPageAtom)
        ],
        queryFn: ({ queryKey: [, page]  })=>_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.isServer ? undefined : (0,_services__WEBPACK_IMPORTED_MODULE_3__/* .getUsers */ .Rf)(page)
    }));
const [, adminsDataAtom] = (0,jotai_tanstack_query__WEBPACK_IMPORTED_MODULE_2__.atomsWithInfiniteQuery)((get)=>({
        queryKey: [
            ..._utils__WEBPACK_IMPORTED_MODULE_4__/* .adminsKey */ .p,
            get(adminPageAtom)
        ],
        queryFn: ({ queryKey: [, page]  })=>_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.isServer ? undefined : (0,_services__WEBPACK_IMPORTED_MODULE_3__/* .getAdmins */ .v5)(page)
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7753:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ ModalCreateUser)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9752);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6534);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9470);
/* harmony import */ var crypto_hash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7129);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_4__, _services__WEBPACK_IMPORTED_MODULE_6__, crypto_hash__WEBPACK_IMPORTED_MODULE_7__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_4__, _services__WEBPACK_IMPORTED_MODULE_6__, crypto_hash__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ModalCreateUser = (props)=>{
    const { register , handleSubmit , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        mode: "onBlur"
    });
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    const [isCreating, setIsCreating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onSubmit = async (data)=>{
        setIsCreating(true);
        data.isAdmin = props.isAdmin;
        data.password = await (0,crypto_hash__WEBPACK_IMPORTED_MODULE_7__.sha256)(data.password);
        try {
            await (0,_services__WEBPACK_IMPORTED_MODULE_6__/* .createUser */ .r4)(data);
            await queryClient.invalidateQueries(props.isAdmin ? _utils__WEBPACK_IMPORTED_MODULE_8__/* .adminsKey */ .p : _utils__WEBPACK_IMPORTED_MODULE_8__/* .usersKey */ .y);
            props.onClose();
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success("\xa1Usuario creado!");
            reset();
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("Hubo un error al crear al usuario");
            throw error;
        } finally{
            setIsCreating(false);
        }
    };
    const handleClose = ()=>{
        if (!isCreating) {
            reset();
            props.onClose();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Modal, {
        onClose: handleClose,
        isOpen: !!props.isOpen,
        isCentered: true,
        closeOnOverlayClick: false,
        closeOnEsc: false,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalOverlay, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                onSubmit: handleSubmit(onSubmit),
                autoComplete: "off",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalContent, {
                    minW: "40rem",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalHeader, {
                            color: "text.dark",
                            children: "Agregar usuario"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalCloseButton, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalBody, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                w: "full",
                                spacing: "6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {
                                        w: "full",
                                        spacing: "6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {
                                                        children: "Usuario"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                                        ...register("username"),
                                                        required: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {
                                                        children: "Contrase\xf1a"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                                        ...register("password"),
                                                        required: true,
                                                        type: "password"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {
                                        w: "full",
                                        spacing: "6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {
                                                        children: "Nombre"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                                        ...register("companyName")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {
                                                        children: "RUC / DNI"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                                        ...register("ruc")
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {
                                        w: "full",
                                        spacing: "6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {
                                                        children: "Tel\xe9fono"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                                        ...register("phone")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {
                                                        children: "Correo"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                                        ...register("email")
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalFooter, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                    mr: "1rem",
                                    colorScheme: "gray",
                                    onClick: handleClose,
                                    disabled: isCreating,
                                    children: "Cancelar"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                    isLoading: isCreating,
                                    type: "submit",
                                    children: "Crear"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ ModalDeleteUser)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const ModalDeleteUser = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
        onClose: props.onClose,
        isOpen: !!props.isOpen,
        isCentered: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalContent, {
                minW: "40rem",
                maxH: "calc(100vh - 2rem)",
                m: "0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalHeader, {
                        color: "text.dark",
                        children: "Eliminar Usuario"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalCloseButton, {
                        top: "0.9rem"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalBody, {
                        maxH: "100%",
                        overflow: "auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                            as: "h2",
                            size: "sm",
                            color: "text.dark",
                            children: "\xbfEst\xe1s seguro de que deseas eliminar este usuario?"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                mr: "1rem",
                                colorScheme: "gray",
                                onClick: ()=>props.onClose(),
                                children: "Cancelar"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                colorScheme: "red",
                                onClick: ()=>props.onDelete(),
                                isLoading: props.isLoading,
                                children: "Eliminar"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 5311:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ ModalUpdateUser)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9752);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6534);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9470);
/* harmony import */ var crypto_hash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7129);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_4__, _services__WEBPACK_IMPORTED_MODULE_6__, crypto_hash__WEBPACK_IMPORTED_MODULE_7__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_4__, _services__WEBPACK_IMPORTED_MODULE_6__, crypto_hash__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ModalUpdateUser = (props)=>{
    const { register , handleSubmit , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        mode: "onBlur"
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.user) {
            const user = props.user;
            Object.keys(user).forEach((key)=>{
                setValue(key, user?.[key]);
            });
        }
    }, [
        props.user
    ]);
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    const [isCreating, setIsCreating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onSubmit = async (data)=>{
        setIsCreating(true);
        data.id = props.user?.id;
        if (!!!data.password) {
            data.password = undefined;
        }
        if (data.password) {
            data.password = await (0,crypto_hash__WEBPACK_IMPORTED_MODULE_7__.sha256)(data.password);
        }
        try {
            await (0,_services__WEBPACK_IMPORTED_MODULE_6__/* .updateUser */ .Nq)(data);
            await queryClient.invalidateQueries(props.isAdmin ? _utils__WEBPACK_IMPORTED_MODULE_8__/* .adminsKey */ .p : _utils__WEBPACK_IMPORTED_MODULE_8__/* .usersKey */ .y);
            setIsCreating(false);
            props.onClose();
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success("\xa1Usuario actualizado!");
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("Hubo un error al actualizar al usuario");
            throw error;
        }
    };
    const handleClose = ()=>{
        if (!isCreating) {
            props.onClose();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Modal, {
        onClose: handleClose,
        isOpen: !!props.isOpen,
        isCentered: true,
        closeOnOverlayClick: false,
        closeOnEsc: false,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalOverlay, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                onSubmit: handleSubmit(onSubmit),
                autoComplete: "off",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalContent, {
                    minW: "40rem",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalHeader, {
                            color: "text.dark",
                            children: "Actualizar usuario"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalCloseButton, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalBody, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                w: "full",
                                spacing: "6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {
                                        w: "full",
                                        spacing: "6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {
                                                        children: "Usuario"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                                        ...register("username"),
                                                        required: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {
                                                        children: "Contrase\xf1a"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                                        ...register("password"),
                                                        type: "password"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {
                                        w: "full",
                                        spacing: "6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {
                                                        children: "Nombre"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                                        ...register("companyName")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {
                                                        children: "RUC / DNI"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                                        ...register("ruc")
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {
                                        w: "full",
                                        spacing: "6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {
                                                        children: "Tel\xe9fono"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                                        ...register("phone")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {
                                                        children: "Correo"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                                        ...register("email")
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalFooter, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                    mr: "1rem",
                                    colorScheme: "gray",
                                    onClick: handleClose,
                                    disabled: isCreating,
                                    children: "Cancelar"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                    isLoading: isCreating,
                                    type: "submit",
                                    children: "Actualizar"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ TableUser)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const TableUser = ({ users =[] , isLoading , onClickEdit , onDelete  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.TableContainer, {
        h: "full",
        overflowY: "auto",
        w: "full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table, {
            variant: "simple",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.TableCaption, {
                    hidden: isLoading || users.length > 0,
                    children: "A\xfan no hay usuarios"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.TableCaption, {
                    hidden: !isLoading,
                    children: "Cargando..."
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Thead, {
                    position: "sticky",
                    top: "0",
                    bg: "white",
                    zIndex: "1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                            pl: "0",
                            color: "gray.500",
                            children: "Usuario"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                            color: "gray.500",
                            children: "Nombre"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                            color: "gray.500",
                            children: "RUC / DNI"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                            color: "gray.500",
                            children: "Tel\xe9fono"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                            color: "gray.500",
                            children: "Correo"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                            color: "gray.500",
                            children: "Actualizar"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tbody, {
                    children: users.map((info, index)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {
                            fontSize: "sm",
                            color: "text.dark",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                                    pl: "0",
                                    fontWeight: "bold",
                                    children: info.username ?? "--"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                                    fontWeight: "bold",
                                    children: info.companyName
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                                    children: info.ruc ?? "--"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                                    children: info.phone ?? "--"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                                    children: info.email ?? "--"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                                    w: "0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                            size: "sm",
                                            colorScheme: "gray",
                                            onClick: ()=>onClickEdit?.(index),
                                            children: "Editar"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                            ml: "4",
                                            size: "sm",
                                            colorScheme: "red",
                                            onClick: ()=>onDelete?.(index),
                                            children: "Eliminar"
                                        })
                                    ]
                                })
                            ]
                        }, `userItem-${index}`);
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 5358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K2": () => (/* reexport safe */ _TableUsers__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   "b2": () => (/* reexport safe */ _ModalUpdateUser__WEBPACK_IMPORTED_MODULE_2__.b),
/* harmony export */   "hX": () => (/* reexport safe */ _ModalDeleteUser__WEBPACK_IMPORTED_MODULE_3__.h),
/* harmony export */   "zl": () => (/* reexport safe */ _ModalCreateUser__WEBPACK_IMPORTED_MODULE_1__.z)
/* harmony export */ });
/* harmony import */ var _TableUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9175);
/* harmony import */ var _ModalCreateUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7753);
/* harmony import */ var _ModalUpdateUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5311);
/* harmony import */ var _ModalDeleteUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1906);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ModalCreateUser__WEBPACK_IMPORTED_MODULE_1__, _ModalUpdateUser__WEBPACK_IMPORTED_MODULE_2__]);
([_ModalCreateUser__WEBPACK_IMPORTED_MODULE_1__, _ModalUpdateUser__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9470:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nq": () => (/* reexport safe */ _usersApi__WEBPACK_IMPORTED_MODULE_0__.Nq),
/* harmony export */   "Rf": () => (/* reexport safe */ _usersApi__WEBPACK_IMPORTED_MODULE_0__.Rf),
/* harmony export */   "h8": () => (/* reexport safe */ _usersApi__WEBPACK_IMPORTED_MODULE_0__.h8),
/* harmony export */   "r4": () => (/* reexport safe */ _usersApi__WEBPACK_IMPORTED_MODULE_0__.r4),
/* harmony export */   "v5": () => (/* reexport safe */ _usersApi__WEBPACK_IMPORTED_MODULE_0__.v5)
/* harmony export */ });
/* harmony import */ var _usersApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6981);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_usersApi__WEBPACK_IMPORTED_MODULE_0__]);
_usersApi__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6981:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nq": () => (/* binding */ updateUser),
/* harmony export */   "Rf": () => (/* binding */ getUsers),
/* harmony export */   "h8": () => (/* binding */ deleteUser),
/* harmony export */   "r4": () => (/* binding */ createUser),
/* harmony export */   "v5": () => (/* binding */ getAdmins)
/* harmony export */ });
/* harmony import */ var _app_modules_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7796);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_modules_shared__WEBPACK_IMPORTED_MODULE_0__]);
_app_modules_shared__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getUsers = (page)=>_app_modules_shared__WEBPACK_IMPORTED_MODULE_0__/* .axios.get */ .o.get("/api/users?page=" + page).then((res)=>res.data);
const getAdmins = (page)=>_app_modules_shared__WEBPACK_IMPORTED_MODULE_0__/* .axios.get */ .o.get("/api/admins?page=" + page).then((res)=>res.data);
const createUser = (data)=>_app_modules_shared__WEBPACK_IMPORTED_MODULE_0__/* .axios.put */ .o.put("/api/users", data);
const updateUser = (data)=>_app_modules_shared__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/api/users", data);
// TODO: user token expired if delete
const deleteUser = (id)=>_app_modules_shared__WEBPACK_IMPORTED_MODULE_0__/* .axios["delete"] */ .o["delete"]("/api/users?id=" + id);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ adminsKey),
/* harmony export */   "y": () => (/* binding */ usersKey)
/* harmony export */ });
const usersKey = [
    "users"
];
const adminsKey = [
    "admins"
];


/***/ }),

/***/ 5094:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ UserManagerView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_modules_shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5849);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(312);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2451);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5358);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9470);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6534);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9752);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_atoms__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_6__, _components__WEBPACK_IMPORTED_MODULE_7__, _services__WEBPACK_IMPORTED_MODULE_8__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__, react_toastify__WEBPACK_IMPORTED_MODULE_10__]);
([_atoms__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_6__, _components__WEBPACK_IMPORTED_MODULE_7__, _services__WEBPACK_IMPORTED_MODULE_8__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__, react_toastify__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const UserManagerView = (props)=>{
    const { isAdmin  } = props;
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useQueryClient)();
    const [page, setPage] = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(isAdmin ? _atoms__WEBPACK_IMPORTED_MODULE_5__/* .adminPageAtom */ .Qw : _atoms__WEBPACK_IMPORTED_MODULE_5__/* .usersPageAtom */ .DZ);
    const { data: usersPages , isLoading , isFetching , refetch  } = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtomValue)(isAdmin ? _atoms__WEBPACK_IMPORTED_MODULE_5__/* .adminsDataAtom */ .t2 : _atoms__WEBPACK_IMPORTED_MODULE_5__/* .usersDataAtom */ .Wk);
    const users = usersPages?.pages[0]?.data;
    const totalPages = usersPages?.pages[0]?.pages;
    const [isCreateModalOpen, setIsCreateModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isDeleting, setIsDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentEditIndex, setCurrentEditIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const handleDelete = async ()=>{
        if (!users) {
            return;
        }
        setIsDeleting(true);
        try {
            await (0,_services__WEBPACK_IMPORTED_MODULE_8__/* .deleteUser */ .h8)(users[currentEditIndex].id);
            await queryClient.invalidateQueries(isAdmin ? _utils__WEBPACK_IMPORTED_MODULE_11__/* .adminsKey */ .p : _utils__WEBPACK_IMPORTED_MODULE_11__/* .usersKey */ .y);
            setIsDeleteModalOpen(false);
            react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success("\xa1Usuario eliminado!");
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error("Hubo un error al eliminar al usuario");
            throw error;
        } finally{
            setIsDeleting(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_modules_shared_components__WEBPACK_IMPORTED_MODULE_3__/* .SimpleContainerView */ .Z, {
        title: isAdmin ? "Administradores" : "Usuarios (Clientes)",
        subTitle: isAdmin ? "Lista de todos los administradores" : "Lista de todos los usuarios",
        rightRenderHeader: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                    colorScheme: "gray",
                    "aria-label": "refresh",
                    isLoading: isFetching,
                    onClick: ()=>refetch(),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        alt: "refresh svg",
                        src: "/refresh.svg",
                        width: 16,
                        height: 16
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    ml: "4",
                    onClick: ()=>setIsCreateModalOpen(true),
                    children: "+ Agregar nuevo"
                })
            ]
        }),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
                mt: "1rem",
                h: "full",
                w: "full",
                spacing: "0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        flex: "1",
                        h: "0",
                        w: "full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .TableUser */ .K2, {
                            isLoading: isLoading,
                            users: users,
                            onClickEdit: (index)=>{
                                setCurrentEditIndex(index);
                                setIsUpdateModalOpen(true);
                            },
                            onDelete: (index)=>{
                                setCurrentEditIndex(index);
                                setIsDeleteModalOpen(true);
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        w: "full",
                        h: "4rem",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_modules_shared_components__WEBPACK_IMPORTED_MODULE_3__/* .Pagination */ .t, {
                            currentPage: page,
                            totalPages: totalPages ?? 0,
                            onChange: setPage
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .ModalCreateUser */ .zl, {
                isAdmin: isAdmin,
                isOpen: isCreateModalOpen,
                onClose: ()=>setIsCreateModalOpen(false)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .ModalUpdateUser */ .b2, {
                isAdmin: isAdmin,
                user: users?.[currentEditIndex],
                isOpen: isUpdateModalOpen,
                onClose: ()=>setIsUpdateModalOpen(false)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .ModalDeleteUser */ .hX, {
                isOpen: isDeleteModalOpen,
                onClose: ()=>setIsDeleteModalOpen(false),
                isLoading: isDeleting,
                onDelete: handleDelete
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6256:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* reexport safe */ _UserManagerView__WEBPACK_IMPORTED_MODULE_0__.h)
/* harmony export */ });
/* harmony import */ var _UserManagerView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5094);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UserManagerView__WEBPACK_IMPORTED_MODULE_0__]);
_UserManagerView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;