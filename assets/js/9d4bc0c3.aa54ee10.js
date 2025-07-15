"use strict";
(self["webpackChunkspoolease_docs"] = self["webpackChunkspoolease_docs"] || []).push([[8573],{

/***/ 1143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/console-build-complete-8392e1f30953044dc25e691b5c4af54b.jpg");

/***/ }),

/***/ 1889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/console-wiring-7c2ed41b1756ae58dfecbab8d891d28a.png");

/***/ }),

/***/ 7634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_20_build_setup_console_build_md_9d4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-20-build-setup-console-build-md-9d4.json
const site_docs_20_build_setup_console_build_md_9d4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"build-setup/console-build","title":"Console Build","description":"This guide provides step-by-step instructions for connecting the WT32-SC01-Plus board to a PN532 NFC module.","source":"@site/docs/20-build-setup/console-build.md","sourceDirName":"20-build-setup","slug":"/build-setup/console-build","permalink":"/docs/build-setup/console-build","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Console Build"},"sidebar":"documentationSidebar","previous":{"title":"Build & Setup","permalink":"/docs/build-setup/"},"next":{"title":"Console Setup","permalink":"/docs/build-setup/console-setup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/20-build-setup/console-build.md


const frontMatter = {
	sidebar_position: 10,
	title: 'Console Build'
};
const contentTitle = 'SpoolEase Console Build Guide';

const assets = {

};



const toc = [{
  "value": "Connector Placement",
  "id": "connector-placement",
  "level": 3
}, {
  "value": "Wire Preparation",
  "id": "wire-preparation",
  "level": 3
}, {
  "value": "Wiring Instructions",
  "id": "wiring-instructions",
  "level": 3
}, {
  "value": "Configuring the PN532",
  "id": "configuring-the-pn532",
  "level": 3
}, {
  "value": "Tips/Recommendations",
  "id": "tipsrecommendations",
  "level": 2
}, {
  "value": "Reference Image",
  "id": "reference-image",
  "level": 3
}, {
  "value": "Installing the Case",
  "id": "installing-the-case",
  "level": 3
}, {
  "value": "Congratulations! Build is Done",
  "id": "congratulations-build-is-done",
  "level": 2
}, {
  "value": "You are the proud owner of SpoolEse Console",
  "id": "you-are-the-proud-owner-of-spoolese-console",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "spoolease-console-build-guide",
        children: "SpoolEase Console Build Guide"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guide provides step-by-step instructions for connecting the WT32-SC01-Plus board to a PN532 NFC module."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once wiring is done, print the 3D Model of SpoolEase Console and fit the WT32-SC01-Plus into its location, the PN532 to its location with the Antenna facing outwards, use screws wherever required and close the case. Make sure that the wiring don't interfere with the NFC reception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build is done."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "connector-placement",
      children: "Connector Placement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The WT32-SC01-Plus has two connectors:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "7-pin"
        }), " connector"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "8-pin"
        }), " connector"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To ensure proper operation, insert the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "7-wire cable into the 8-pin connector"
      }), ", leaving one pin free. Align the cable so that it covers the first 7 pins, beginning from the pin marked with a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "'+'"
      }), " symbol."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wire-preparation",
      children: "Wire Preparation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The provided 7-wire cable has connectors on both ends. However, since the PN532 module requires soldering, follow these steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cut off one connector from the 7-wire cable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strip the insulation to expose the wire ends for soldering."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wiring-instructions",
      children: "Wiring Instructions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: The wiring follows the pin number on the display and the signal name on the PN532. Some devices may come with wire colors in a different order (e.g., green and yellow reversed). Always connect by pin number and signal name, not by wire color."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Wire #"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Color"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WT32-SC01-Plus Pin"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PN532 Connection"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["🟥 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Red"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VCC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["⬛ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Black"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GND"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["🟩 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Green"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "SS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["🟨 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yellow"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOSI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["🟦 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blue"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "MISO"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["⚪ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "White"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["🟧 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Orange"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "IRQ"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuring-the-pn532",
      children: "Configuring the PN532"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The PN532 has two small dip switches that must be set to SPI mode.\nWith the board oriented so that the dip switches are at the bottom right, set the left switch down and the right switch up."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tipsrecommendations",
      children: "Tips/Recommendations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solder the wires to pass on the opposite side of the antenna to prevent interference with NFC reception. The antenna is the thick white line around the board (note that the photo does not follow this guideline)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep the wires to the necessary length. Consider the required length to assemble everything (including the ability to remove the display with the PN532 inside), how to route them within the case to avoid interfering with the WiFi antenna, and other factors. Excessively long wires can cause electrical interference."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reference-image",
      children: "Reference Image"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add the wiring diagram image here:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "WT32-SC01-Plus to PN532 Wiring Diagram",
        src: (__webpack_require__(1889)/* ["default"] */ .A) + "",
        width: "1959",
        height: "1779"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installing-the-case",
      children: "Installing the Case"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Print the 3D model from ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://makerworld.com/en/models/1138678",
          children: "this link"
        }), ".", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["While printing, feel free to boost the model ", "😄"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Optionally, glue the small pieces forming the antenna icon on the side, indicating where to place the tag. Ensure correct orientation before gluing, so check for fit first."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optionally insert the microSD card into the slot in the WT32-SC01-Plus just below the USB connector. You should feel it click into place. To remove it, press it again and it will pop out."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Place the WT32-SC01-Plus and PN532 in the positions shown in the image below.", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make sure the antenna faces outward from the case."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "There is a hidden slot on the opposite side of the visible slot where the other end of the PN532 module fits."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Arrange the wires to avoid interfering with the PN532 antenna or the WT32-SC01-Plus board (to minimize Wi-Fi interference)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Secure the WT32-SC01-Plus with M2x10 screws. If you don’t have them, the board remains stable without screws."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Carefully place the cover so the PN532 slides into the slots on the cover."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fit the USB cable into the slot of the WT32-SC01-Plus. Depending on the stiffness of your cable, it may be tricky due to the board design. If it’s difficult to connect while the board is in place, try connecting the cable before placing the board."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Components Placement inside Case",
        src: (__webpack_require__(9997)/* ["default"] */ .A) + "",
        width: "4032",
        height: "3024"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "congratulations-build-is-done",
      children: "Congratulations! Build is Done"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "you-are-the-proud-owner-of-spoolese-console",
      children: "You are the proud owner of SpoolEse Console"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Continue to complete the setup using the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/build-setup/console-setup",
        children: "Console Setup Guide"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "SpoolEase Fully Built",
        src: (__webpack_require__(1143)/* ["default"] */ .A) + "",
        width: "2038",
        height: "1500"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 9997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/console-components-placement-ed8fbb52df8ec96636320211724504fc.jpg");

/***/ })

}]);