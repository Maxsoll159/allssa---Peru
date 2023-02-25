"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9531);
/* harmony import */ var _server_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9768);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2451);
/* harmony import */ var _app_modules_shared_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3976);
/* harmony import */ var _app_modules_informationOrders_views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6658);
/* harmony import */ var _app_modules_shared_layouts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8125);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_4__, _app_modules_shared_atoms__WEBPACK_IMPORTED_MODULE_5__, _app_modules_informationOrders_views__WEBPACK_IMPORTED_MODULE_6__, _app_modules_shared_layouts__WEBPACK_IMPORTED_MODULE_7__]);
([iron_session_next__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_4__, _app_modules_shared_atoms__WEBPACK_IMPORTED_MODULE_5__, _app_modules_informationOrders_views__WEBPACK_IMPORTED_MODULE_6__, _app_modules_shared_layouts__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Home() {
    const user = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtomValue)(_app_modules_shared_atoms__WEBPACK_IMPORTED_MODULE_5__/* .simpleUserAtom */ .C);
    if (!user) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_modules_shared_layouts__WEBPACK_IMPORTED_MODULE_7__/* .MainLayout */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_modules_informationOrders_views__WEBPACK_IMPORTED_MODULE_6__/* .InformationOrderView */ .P, {})
    });
}
const getServerSideProps = (0,iron_session_next__WEBPACK_IMPORTED_MODULE_1__/* .withIronSessionSsr */ .c)(async function getServerSideProps({ req , res  }) {
    const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();
    const user = req.session.user;
    if (user === undefined) {
        res.setHeader("location", "/auth/signin");
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
            dehydratedState: (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.dehydrate)(queryClient)
        }
    };
}, _server_lib__WEBPACK_IMPORTED_MODULE_2__/* .authSessionOption */ .t);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ informationOrderDataAtom),
/* harmony export */   "w": () => (/* binding */ informationOrderPageAtom)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var jotai_tanstack_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5148);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7822);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3066);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, jotai__WEBPACK_IMPORTED_MODULE_1__, jotai_tanstack_query__WEBPACK_IMPORTED_MODULE_2__, _services__WEBPACK_IMPORTED_MODULE_3__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, jotai__WEBPACK_IMPORTED_MODULE_1__, jotai_tanstack_query__WEBPACK_IMPORTED_MODULE_2__, _services__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const informationOrderPageAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(0);
const [, informationOrderDataAtom] = (0,jotai_tanstack_query__WEBPACK_IMPORTED_MODULE_2__.atomsWithInfiniteQuery)((get)=>({
        queryKey: [
            ..._utils__WEBPACK_IMPORTED_MODULE_4__/* .informationsOrderKeys.MAIN */ .G9.MAIN,
            get(informationOrderPageAtom)
        ],
        queryFn: ({ queryKey: [, page]  })=>_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.isServer ? undefined : (0,_services__WEBPACK_IMPORTED_MODULE_3__/* .getInformationOrders */ .Xr)(page)
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ ChooseFileInput)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-dropzone"
const external_react_dropzone_namespaceObject = require("react-dropzone");
;// CONCATENATED MODULE: ./src/modules/informationOrders/components/ChooseFileInput.tsx




const ChooseFileInput = (props)=>{
    const [canOpenPath, setCanOpenPath] = (0,external_react_.useState)(true);
    const [name, setName] = (0,external_react_.useState)(props.name);
    const onDrop = (0,external_react_.useCallback)((acceptedFiles)=>{
        setName(acceptedFiles[0].name);
        setCanOpenPath(false);
        props?.onChange?.(acceptedFiles);
    }, [
        setName
    ]);
    (0,external_react_.useEffect)(()=>{
        setName(props.name);
        setCanOpenPath(true);
    }, [
        props.name
    ]);
    const { getRootProps , getInputProps , isDragActive , open  } = (0,external_react_dropzone_namespaceObject.useDropzone)({
        onDrop,
        multiple: false,
        noClick: true
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                w: "full",
                p: "4",
                borderRadius: "12",
                border: "2px dashed",
                borderColor: isDragActive ? "green" : "gray.300",
                transition: "border 300ms",
                ...getRootProps(),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        size: "sm",
                        onClick: ()=>open(),
                        children: "Seleccionar archivo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        color: "gray.600",
                        textDecor: "underline",
                        cursor: "pointer",
                        onClick: ()=>{
                            if (canOpenPath) {
                                window.open(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.path}`);
                            }
                        },
                        children: name
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                ...getInputProps(),
                accept: props.accept
            })
        ]
    });
};


/***/ }),

/***/ 4989:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ ModalCompleteInfoOrder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _ChooseFileInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1412);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7822);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9752);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3066);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _services__WEBPACK_IMPORTED_MODULE_5__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_8__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _services__WEBPACK_IMPORTED_MODULE_5__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const SimpleInformationForm = (props)=>{
    const { infoOrders  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                        children: "Nombre o Raz\xf3n social"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                        as: "h2",
                        size: "md",
                        color: "text.dark",
                        children: infoOrders?.name
                    })
                ]
            }),
            infoOrders?.BulkFile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                        children: "Archivo excel subido por el usuario"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        color: "gray.700",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: infoOrders.BulkFile.path,
                            download: infoOrders.BulkFile.name,
                            style: {
                                textDecoration: "underline"
                            },
                            children: [
                                "Descargar archivo (",
                                infoOrders.BulkFile.name,
                                ")"
                            ]
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                spacing: "6",
                w: "full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                children: "Tipo de persona"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                children: infoOrders?.personType
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                children: "Documento"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                children: [
                                    infoOrders?.documentType,
                                    " ",
                                    infoOrders?.documentNumber
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                        children: infoOrders?.BulkFile ? "Observaciones" : "Informaci\xf3n requerida"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        children: infoOrders?.requestInformation
                    })
                ]
            })
        ]
    });
};
const ModalCompleteInfoOrder = (props)=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQueryClient)();
    const { informationOrders: infoOrders  } = props;
    const { handleSubmit , reset , control , watch  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        mode: "onBlur"
    });
    const pdfInput = watch("pdf");
    const [isCompleting, setIsCompleting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isSaving, setIsSaving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onSubmit = async (data)=>{
        setIsCompleting(true);
        data.id = infoOrders?.id;
        try {
            await (0,_services__WEBPACK_IMPORTED_MODULE_5__/* .completeInformationOrder */ .lO)(data);
            await queryClient.invalidateQueries(_utils__WEBPACK_IMPORTED_MODULE_7__/* .informationsOrderKeys.MAIN */ .G9.MAIN);
            props.onClose();
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("\xa1Petici\xf3n completada!");
            reset();
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Hubo un error al crear la petici\xf3n");
            throw error;
        } finally{
            setIsCompleting(false);
        }
    };
    const handleSave = async (data)=>{
        setIsSaving(true);
        data.id = infoOrders?.id;
        try {
            await (0,_services__WEBPACK_IMPORTED_MODULE_5__/* .saveInformationOrder */ .$H)(data);
            await queryClient.invalidateQueries(_utils__WEBPACK_IMPORTED_MODULE_7__/* .informationsOrderKeys.MAIN */ .G9.MAIN);
            props.onClose();
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("\xa1Petici\xf3n completada!");
            reset();
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Hubo un error al crear la petici\xf3n");
            throw error;
        } finally{
            setIsSaving(false);
        }
    };
    const handleClose = ()=>{
        if (!isSaving || !isCompleting) {
            props.onClose();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        onClose: handleClose,
        isOpen: !!props.isOpen,
        isCentered: true,
        closeOnOverlayClick: false,
        closeOnEsc: false,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                onSubmit: handleSubmit(onSubmit),
                autoComplete: "off",
                encType: "multipart/form-data",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {
                    minW: "40rem",
                    maxH: "calc(100vh - 2rem)",
                    m: "0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
                            color: "text.dark",
                            borderBottom: "solid 1px",
                            borderColor: "gray.200",
                            children: "Completar petici\xf3n"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {
                            top: "0.9rem"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
                            maxH: "100%",
                            overflow: "auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
                                spacing: "6",
                                w: "full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SimpleInformationForm, {
                                        infoOrders: infoOrders
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                                children: "Archivo PDF"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                                                name: "pdf",
                                                control: control,
                                                rules: {
                                                    required: false
                                                },
                                                render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChooseFileInput__WEBPACK_IMPORTED_MODULE_4__/* .ChooseFileInput */ .w, {
                                                        accept: ".pdf",
                                                        onChange: (files)=>{
                                                            field.onChange(files[0]);
                                                        },
                                                        name: infoOrders?.PDF?.name,
                                                        path: infoOrders?.PDF?.path
                                                    })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                                        as: "h2",
                                        size: "sm",
                                        color: "text.dark",
                                        w: "full",
                                        children: "Informaci\xf3n del solicitante"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                                        w: "full",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                                        children: "Nombre"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                        children: infoOrders?.User?.companyName
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                                        children: "RUC"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                        children: infoOrders?.User?.ruc
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                                        w: "full",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                                        children: "Correo"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                        children: infoOrders?.User?.email ?? "--"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                                        children: "Telefono"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                        children: infoOrders?.User?.phone
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {
                            borderTop: "solid 1px",
                            borderColor: "gray.200",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    mr: "1rem",
                                    colorScheme: "gray",
                                    onClick: handleClose,
                                    disabled: isSaving || isCompleting,
                                    children: "Cancelar"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    mr: "1rem",
                                    colorScheme: "gray",
                                    isLoading: isSaving,
                                    disabled: isCompleting || !!!pdfInput && !!!infoOrders?.pdfId,
                                    onClick: handleSubmit(handleSave),
                                    children: "Guardar"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    isLoading: isCompleting,
                                    disabled: isSaving || !!!pdfInput && !!!infoOrders?.pdfId,
                                    type: "submit",
                                    children: "Completar"
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

/***/ 5730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ ModalCreateBulkInfoOrder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9752);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7822);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3066);
/* harmony import */ var _ChooseFileInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1412);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_5__, _services__WEBPACK_IMPORTED_MODULE_6__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_5__, _services__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ModalCreateBulkInfoOrder = (props)=>{
    const { register , handleSubmit , reset , control  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
        mode: "onBlur"
    });
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    const [isCreating, setIsCreating] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const onSubmit = async (data)=>{
        setIsCreating(true);
        try {
            await (0,_services__WEBPACK_IMPORTED_MODULE_6__/* .createInformationOrders */ .U4)(data);
            await queryClient.invalidateQueries(_utils__WEBPACK_IMPORTED_MODULE_7__/* .informationsOrderKeys.MAIN */ .G9.MAIN);
            setIsCreating(false);
            props.onClose();
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success("\xa1Petici\xf3n creada!");
            reset();
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error("Hubo un error al crear la petici\xf3n");
            throw error;
        }
    };
    const handleClose = ()=>{
        if (!isCreating) {
            reset();
            props.onClose();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
        onClose: handleClose,
        isOpen: !!props.isOpen,
        isCentered: true,
        closeOnOverlayClick: false,
        closeOnEsc: false,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalOverlay, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                onSubmit: handleSubmit(onSubmit),
                autoComplete: "off",
                encType: "multipart/form-data",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalContent, {
                    minW: "40rem",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalHeader, {
                            color: "text.dark",
                            children: "Agregar Lote"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalCloseButton, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalBody, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                                w: "full",
                                spacing: "6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        color: "text.dark",
                                        children: "En este modal puedes subir un archivo excel con las personas que quieres solicitar"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                                children: "Nombre de petici\xf3n"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                ...register("name")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                                children: "Archivo Excel"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_4__.Controller, {
                                                name: "bulkFile",
                                                control: control,
                                                rules: {
                                                    required: true
                                                },
                                                render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChooseFileInput__WEBPACK_IMPORTED_MODULE_8__/* .ChooseFileInput */ .w, {
                                                        accept: ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
                                                        onChange: (files)=>{
                                                            field.onChange(files[0]);
                                                        }
                                                    })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                                children: "Observaciones generales"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Textarea, {
                                                ...register("requestInformation")
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    mr: "1rem",
                                    colorScheme: "gray",
                                    onClick: handleClose,
                                    disabled: isCreating,
                                    children: "Cancelar"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
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

/***/ 5039:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ ModalCreateInfoOrder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5641);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7822);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3066);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_6__, _services__WEBPACK_IMPORTED_MODULE_7__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_6__, _services__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ModalCreateInfoOrder = (props)=>{
    const { register , handleSubmit , reset , control , watch  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
        mode: "onBlur"
    });
    const documentType = watch("documentType")?.value;
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
    const [isCreating, setIsCreating] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const onSubmit = async (data)=>{
        data.documentType = data.documentType.value;
        data.personType = data.personType.value;
        setIsCreating(true);
        try {
            await (0,_services__WEBPACK_IMPORTED_MODULE_7__/* .createInformationOrders */ .U4)(data);
            await queryClient.invalidateQueries(_utils__WEBPACK_IMPORTED_MODULE_8__/* .informationsOrderKeys.MAIN */ .G9.MAIN);
            setIsCreating(false);
            props.onClose();
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success("\xa1Petici\xf3n creada!");
            reset();
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Hubo un error al crear la petici\xf3n");
            throw error;
        }
    };
    const handleClose = ()=>{
        if (!isCreating) {
            reset();
            props.onClose();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
        onClose: handleClose,
        isOpen: !!props.isOpen,
        isCentered: true,
        closeOnOverlayClick: false,
        closeOnEsc: false,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalOverlay, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                onSubmit: handleSubmit(onSubmit),
                autoComplete: "off",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalContent, {
                    minW: "40rem",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalHeader, {
                            color: "text.dark",
                            children: "Agregar petici\xf3n"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalCloseButton, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalBody, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                                w: "full",
                                spacing: "6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                        w: "full",
                                        spacing: "6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                                        children: "Tipo de persona"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, {
                                                        name: "personType",
                                                        control: control,
                                                        defaultValue: _utils__WEBPACK_IMPORTED_MODULE_8__/* .personTypeOptions[0] */ .kr[0],
                                                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                ...field,
                                                                options: _utils__WEBPACK_IMPORTED_MODULE_8__/* .personTypeOptions */ .kr
                                                            })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                                        children: "Nombre o Raz\xf3n social"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                        ...register("name"),
                                                        required: true,
                                                        placeholder: "Nombres"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                        w: "full",
                                        spacing: "6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                                        children: "Tipo de documento"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, {
                                                        name: "documentType",
                                                        control: control,
                                                        defaultValue: _utils__WEBPACK_IMPORTED_MODULE_8__/* .documentTypeOptions[0] */ .Zs[0],
                                                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                ...field,
                                                                options: _utils__WEBPACK_IMPORTED_MODULE_8__/* .documentTypeOptions */ .Zs
                                                            })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                                        children: "Numero de DNI o RUC"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                        ...register("documentNumber"),
                                                        onInput: (e)=>{
                                                            if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength);
                                                        },
                                                        maxLength: documentType === "DNI" ? 8 : 11,
                                                        required: true,
                                                        type: "number",
                                                        placeholder: "12345678"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                                children: "Observaciones"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Textarea, {
                                                isRequired: true,
                                                maxLength: 200,
                                                placeholder: "Solo puede escribir 200 caracteres...",
                                                ...register("requestInformation")
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    mr: "1rem",
                                    colorScheme: "gray",
                                    onClick: handleClose,
                                    disabled: isCreating,
                                    children: "Cancelar"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
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

/***/ 5437:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ TableInformationOrder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7822);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2451);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4208);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_4__, _atoms__WEBPACK_IMPORTED_MODULE_5__]);
([_services__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_4__, _atoms__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const UserHeader = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                pl: "0",
                color: "gray.500",
                children: "T. Persona"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                color: "gray.500",
                children: "T. Documento"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                color: "gray.500",
                children: "Nro. Documento"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                color: "gray.500",
                children: "Nombre"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                color: "gray.500",
                children: "Fecha Recepcion"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                color: "gray.500",
                children: "Fecha de Entrega"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                color: "gray.500",
                children: "Estado"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                pr: "0",
                color: "gray.500",
                children: "PDF"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                pr: "0",
                color: "gray.500",
                children: "Acciones"
            })
        ]
    });
const UserBody = (props)=>{
    const { data: informationOrdersPages , isLoading , isFetching , refetch  } = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtomValue)(_atoms__WEBPACK_IMPORTED_MODULE_5__/* .informationOrderDataAtom */ .m);
    const { informationOrders  } = props;
    const eliminar = async (id)=>{
        try {
            const datos = await (0,_services__WEBPACK_IMPORTED_MODULE_2__/* .deleteInfo */ .VK)(id);
            refetch();
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("\xa1Informacion Eliminada!");
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error("Hubo un error al crear la petici\xf3n");
            throw error;
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: informationOrders.map((info, index)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {
                fontSize: "sm",
                color: "text.dark",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                        pl: "0",
                        fontWeight: "bold",
                        children: info.personType ?? "--"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                        fontWeight: "bold",
                        children: info.documentType ?? "--"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                        children: info.documentNumber ?? "--"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                        children: info.name ?? "--"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                        children: info.createdAt.toString() ?? "--"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                        children: info.PDF?.createdAt.toString() ?? "--"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                        fontWeight: "bold",
                        color: info.isComplete ? "green" : "yellow.600",
                        children: info.isComplete ? "Completado" : "Pendiente"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                        pr: "0",
                        textDecor: "underline",
                        color: !!info.PDF ? undefined : "gray.200",
                        cursor: !!info.PDF ? "pointer" : "default",
                        onClick: ()=>props.onOpenPdf?.(info.PDF),
                        children: "Ver PDF"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            onClick: ()=>eliminar(info.id),
                            colorScheme: "red",
                            children: "Eliminar"
                        })
                    })
                ]
            }, `informationOrderTableItem-${index}`);
        })
    });
};
const AdminHeader = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                pl: "0",
                color: "gray.500",
                children: "T. Persona"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                color: "gray.500",
                children: "T. Documento"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                color: "gray.500",
                children: "Nro. Documento"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                color: "gray.500",
                children: "Nombre"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                color: "gray.500",
                children: "Estado"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                pr: "0",
                color: "gray.500",
                children: "PDF"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                pr: "0",
                color: "gray.500",
                children: "Actualizar"
            })
        ]
    });
const AdminBody = (props)=>{
    const { informationOrders  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: informationOrders.map((info, index)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {
                fontSize: "sm",
                color: "text.dark",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                        pl: "0",
                        fontWeight: "bold",
                        children: info.personType
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                        fontWeight: "bold",
                        children: info.documentType
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                        children: info.documentNumber
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                        children: info.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                        fontWeight: "bold",
                        color: info.isComplete ? "green" : "yellow.600",
                        children: info.isComplete ? "Completado" : "Pendiente"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                        pr: "0",
                        color: !!info.PDF ? undefined : "gray.200",
                        cursor: !!info.PDF ? "pointer" : "default",
                        textDecor: "underline",
                        onClick: ()=>props.onOpenPdf?.(info.PDF),
                        children: "Ver PDF"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            size: "sm",
                            colorScheme: info.isComplete ? "gray" : "primary",
                            left: "50%",
                            transform: "translateX(-50%)",
                            onClick: ()=>props.onClick?.(index),
                            children: info.isComplete ? "Editar" : "Completar"
                        })
                    })
                ]
            }, `informationOrderTableItem-${index}`);
        })
    });
};
const TableInformationOrder = ({ informationOrders =[] , isAdmin , isLoading , onClickEdit  })=>{
    const handlerOpenPDF = (pdf)=>{
        if (!pdf) {
            return;
        }
        window.open(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${pdf.path?.replace("public/", "")}`);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.TableContainer, {
        h: "full",
        overflowY: "auto",
        w: "full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table, {
            variant: "simple",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.TableCaption, {
                    hidden: isLoading || informationOrders.length > 0,
                    children: "A\xfan no hay peticiones"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.TableCaption, {
                    hidden: !isLoading,
                    children: "Cargando..."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Thead, {
                    position: "sticky",
                    top: "0",
                    bg: "white",
                    zIndex: "1",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {
                        children: isAdmin ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdminHeader, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserHeader, {})
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tbody, {
                    children: isAdmin ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdminBody, {
                        informationOrders: informationOrders,
                        onClick: onClickEdit,
                        onOpenPdf: handlerOpenPDF
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserBody, {
                        informationOrders: informationOrders,
                        onOpenPdf: handlerOpenPDF
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3980:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bv": () => (/* reexport safe */ _ModalCompleteInfoOrder__WEBPACK_IMPORTED_MODULE_3__.B),
/* harmony export */   "JM": () => (/* reexport safe */ _ModalCreateBulkInfoOrder__WEBPACK_IMPORTED_MODULE_2__.J),
/* harmony export */   "MB": () => (/* reexport safe */ _TableInformationOrder__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   "b$": () => (/* reexport safe */ _ModalCreateInfoOrder__WEBPACK_IMPORTED_MODULE_1__.b)
/* harmony export */ });
/* harmony import */ var _TableInformationOrder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5437);
/* harmony import */ var _ModalCreateInfoOrder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5039);
/* harmony import */ var _ModalCreateBulkInfoOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5730);
/* harmony import */ var _ModalCompleteInfoOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4989);
/* harmony import */ var _ChooseFileInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1412);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TableInformationOrder__WEBPACK_IMPORTED_MODULE_0__, _ModalCreateInfoOrder__WEBPACK_IMPORTED_MODULE_1__, _ModalCreateBulkInfoOrder__WEBPACK_IMPORTED_MODULE_2__, _ModalCompleteInfoOrder__WEBPACK_IMPORTED_MODULE_3__]);
([_TableInformationOrder__WEBPACK_IMPORTED_MODULE_0__, _ModalCreateInfoOrder__WEBPACK_IMPORTED_MODULE_1__, _ModalCreateBulkInfoOrder__WEBPACK_IMPORTED_MODULE_2__, _ModalCompleteInfoOrder__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6904:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$H": () => (/* binding */ saveInformationOrder),
/* harmony export */   "U4": () => (/* binding */ createInformationOrders),
/* harmony export */   "VK": () => (/* binding */ deleteInfo),
/* harmony export */   "Xr": () => (/* binding */ getInformationOrders),
/* harmony export */   "lO": () => (/* binding */ completeInformationOrder)
/* harmony export */ });
/* harmony import */ var _app_modules_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7796);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_modules_shared__WEBPACK_IMPORTED_MODULE_0__]);
_app_modules_shared__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getInformationOrders = (page)=>_app_modules_shared__WEBPACK_IMPORTED_MODULE_0__/* .axios.get */ .o.get("/api/information-orders?page=" + page).then((data)=>data.data);
const createInformationOrders = (requestData)=>_app_modules_shared__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/api/information-orders", requestData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((data)=>data.data);
const completeInformationOrder = (requestData)=>_app_modules_shared__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/api/information-orders/process", requestData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((data)=>data.data);
const saveInformationOrder = (requestData)=>_app_modules_shared__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/api/information-orders/save", requestData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((data)=>data.data);
const deleteInfo = (id)=>_app_modules_shared__WEBPACK_IMPORTED_MODULE_0__/* .axios.get */ .o.get("/api/information-orders/delete/" + id).then((data)=>data.data);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7822:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$H": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.$H),
/* harmony export */   "U4": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.U4),
/* harmony export */   "VK": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.VK),
/* harmony export */   "Xr": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.Xr),
/* harmony export */   "lO": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.lO)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6904);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);
_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Zs": () => (/* reexport */ documentTypeOptions),
  "G9": () => (/* reexport */ informationsOrderKeys),
  "kr": () => (/* reexport */ personTypeOptions)
});

;// CONCATENATED MODULE: ./src/modules/informationOrders/utils/constants.ts
const informationsOrderKeys = {
    MAIN: [
        "informationOrders"
    ]
};
const personTypeOptions = [
    {
        value: "Natural",
        label: "Natural"
    },
    {
        value: "Juridical",
        label: "Jur\xeddica"
    }
];
const documentTypeOptions = [
    {
        value: "DNI",
        label: "DNI"
    },
    {
        value: "RUC",
        label: "RUC"
    }
];

;// CONCATENATED MODULE: ./src/modules/informationOrders/utils/index.ts



/***/ }),

/***/ 4561:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ InformationOrderView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_modules_shared_atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3976);
/* harmony import */ var _app_modules_shared_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5849);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4208);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3980);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_modules_shared_atoms__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_4__, _atoms__WEBPACK_IMPORTED_MODULE_7__, _components__WEBPACK_IMPORTED_MODULE_8__]);
([_app_modules_shared_atoms__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_4__, _atoms__WEBPACK_IMPORTED_MODULE_7__, _components__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const InformationOrderView = ()=>{
    const isAdmin = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtomValue)(_app_modules_shared_atoms__WEBPACK_IMPORTED_MODULE_1__/* .userIsAdminAtom */ .I);
    const [page, setPage] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_atoms__WEBPACK_IMPORTED_MODULE_7__/* .informationOrderPageAtom */ .w);
    const { data: informationOrdersPages , isLoading , isFetching , refetch  } = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtomValue)(_atoms__WEBPACK_IMPORTED_MODULE_7__/* .informationOrderDataAtom */ .m);
    const informationOrders = informationOrdersPages?.pages[0]?.orders;
    const totalPages = informationOrdersPages?.pages[0]?.pages;
    const [createModalOpen, setCreateModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [createBulkModalOpen, setCreateBulkModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [completeModalOpen, setCompleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [infoOrderIndex, setInfoOrderIndex] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);
    const handlerEditClick = (index)=>{
        setInfoOrderIndex(index);
        setCompleteModalOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_modules_shared_components__WEBPACK_IMPORTED_MODULE_2__/* .SimpleContainerView */ .Z, {
        title: "Peticiones",
        subTitle: isAdmin ? "Lista de todas las peticiones realizadas por los usuarios" : "Lista de todas las peticiones que has solicitado",
        rightRenderHeader: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                    colorScheme: "gray",
                    "aria-label": "refresh",
                    isLoading: isFetching,
                    onClick: ()=>refetch(),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                        alt: "refresh svg",
                        src: "/refresh.svg",
                        width: 16,
                        height: 16
                    })
                }),
                !isAdmin && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                            ml: "4",
                            onClick: ()=>setCreateBulkModalOpen(true),
                            children: "+ Agregar por lote"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                            ml: "4",
                            onClick: ()=>setCreateModalOpen(true),
                            children: "+ Agregar nuevo"
                        })
                    ]
                })
            ]
        }),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {
                mt: "1rem",
                h: "full",
                w: "full",
                spacing: "0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        flex: "1",
                        h: "0",
                        w: "full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .TableInformationOrder */ .MB, {
                            isAdmin: isAdmin,
                            isLoading: isLoading,
                            informationOrders: informationOrders,
                            onClickEdit: handlerEditClick
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Divider, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        w: "full",
                        h: "4rem",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_modules_shared_components__WEBPACK_IMPORTED_MODULE_2__/* .Pagination */ .t, {
                            currentPage: page,
                            totalPages: totalPages ?? 0,
                            onChange: setPage
                        })
                    })
                ]
            }),
            isAdmin ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .ModalCompleteInfoOrder */ .Bv, {
                informationOrders: informationOrders?.[infoOrderIndex],
                onClose: ()=>setCompleteModalOpen(false),
                isOpen: completeModalOpen
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .ModalCreateInfoOrder */ .b$, {
                        onClose: ()=>setCreateModalOpen(false),
                        isOpen: createModalOpen
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .ModalCreateBulkInfoOrder */ .JM, {
                        onClose: ()=>setCreateBulkModalOpen(false),
                        isOpen: createBulkModalOpen
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* reexport safe */ _InformationOrderView__WEBPACK_IMPORTED_MODULE_0__.P)
/* harmony export */ });
/* harmony import */ var _InformationOrderView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4561);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_InformationOrderView__WEBPACK_IMPORTED_MODULE_0__]);
_InformationOrderView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


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

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

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
var __webpack_exports__ = __webpack_require__.X(0, [675,531,974,991], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();