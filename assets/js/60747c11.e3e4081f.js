"use strict";
(self["webpackChunkspoolease_docs"] = self["webpackChunkspoolease_docs"] || []).push([[7640],{

/***/ 5700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_10_components_scale_md_607_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-10-components-scale-md-607.json
const site_docs_10_components_scale_md_607_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/scale","title":"Scale Components","description":"- ESP32-S3-DevKit N16R8 board","source":"@site/docs/10-components/scale.md","sourceDirName":"10-components","slug":"/components/scale","permalink":"/docs/components/scale","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"sidebar_position":20,"title":"Scale Components"},"sidebar":"documentationSidebar","previous":{"title":"Console Components","permalink":"/docs/components/console"},"next":{"title":"Build & Setup","permalink":"/docs/build-setup/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/10-components/scale.md


const frontMatter = {
	sidebar_position: 20,
	title: 'Scale Components'
};
const contentTitle = 'SpoolEase Scale Components';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "spoolease-scale-components",
        children: "SpoolEase Scale Components"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.aliexpress.com/item/1005005051294262.html",
              children: "ESP32-S3-DevKit N16R8 board"
            })
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Important"
          }), ": Select the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESP32-S3 N16R8 welded version"
          }), ". This specific model is required due to its memory configuration—other variants will not work. The welded version avoids difficult pin soldering, making assembly easier. The 3D case was also designed around this board’s exact dimensions and component layout, including button and LED placement.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "If you’re sourcing the board from a different supplier, double-check that it’s the exact same version. Look closely at the physical layout, available pins, and component positions—similar-looking DevKits exist, but may not be compatible."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.aliexpress.com/item/1005001537354199.html",
              children: "HX711 AD Module + LoadCell"
            })
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Select a LoadCell based on the heaviest spool you plan to measure. Typical 1kg spools usually weigh around 1.25kg. Choose a 2-5kg capacity load cell for optimal accuracy. SpoolEase Scale has been tested with 2kg and 3kg load cells."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.aliexpress.com/item/1005008248101491.html",
              children: "Dupont Wire Cable"
            })
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "These wires connect the the ESP32-S3 to the HX711 and optionally to the PN532 module."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "HX711 connection: 10cm length is sufficient (4 wires required)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "PN532 connection: 20cm length recommended (7 wires required)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "At least one side must be Female to connect to the ESP32-S3 pins"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The other end depends on your preferred connection method:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Solder connectors to the boards (requires Female wire ends)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Solder Dupont Male pins to the boards"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Direct soldering (wire end type irrelevant as it will be cut)"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "2x M5x30 Socket head screws"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "2x M4x30 Socket head screws"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://makerworld.com/en/models/1323092",
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Printed 3D Model parts for the SpoolEase Scale case"
            })
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "While printing the model, feel free to boost it, and Star the GitHub Repo. Thanks!"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Optional: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.aliexpress.com/item/3256806852006648.html",
              children: "PN532 NFC reader module"
            })]
          }), " (ensure you select the module, not accessories)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Currently serves as an extra tag scanning point. Future features may utilize this scanning point differently than the main SpoolEase console."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Additional tools required:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Soldering equipment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Required Components",
        src: (__webpack_require__(7964)/* ["default"] */ .A) + "",
        width: "4032",
        height: "3024"
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

/***/ 7964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/scale-components-5b32749b22dece19e0455775bf588a0e.jpg");

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


/***/ })

}]);