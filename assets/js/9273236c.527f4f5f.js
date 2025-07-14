"use strict";
(self["webpackChunkspoolease_docs"] = self["webpackChunkspoolease_docs"] || []).push([[4908],{

/***/ 1796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_10_components_console_md_927_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-10-components-console-md-927.json
const site_docs_10_components_console_md_927_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/console","title":"Console Components","description":"- WT32-SC01 Plus (make sure to pick the board and not accessories)","source":"@site/docs/10-components/console.md","sourceDirName":"10-components","slug":"/components/console","permalink":"/docs/components/console","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Console Components"},"sidebar":"documentationSidebar","previous":{"title":"Required Components","permalink":"/docs/components/"},"next":{"title":"Scale Components","permalink":"/docs/components/scale"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/10-components/console.md


const frontMatter = {
	sidebar_position: 10,
	title: 'Console Components'
};
const contentTitle = 'SpoolEase Console Components';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "spoolease-console-components",
        children: "SpoolEase Console Components"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.aliexpress.com/item/3256805864064800.html",
          children: "WT32-SC01 Plus"
        }), " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "make sure to pick the board and not accessories"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "7 wire cable with JST 1.25mm connector (I received one in the box together with WT32-SC01-Plus)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.aliexpress.com/item/3256806852006648.html",
          children: "PN532 NFC reader module"
        }), " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "make sure to pick the module and not accessories"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.aliexpress.com/item/1005007079265201.html",
          children: "8-wire cable with JST 1.25mm connector"
        }), " - Optional but recommended in case of cable fault/soldering/different WT32-SC01 Plus packaging, instead of the 7-wire that's supposed to come with the WT32-SC01 Plus (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "make sure to pick the 1.25mm connector size and 8 pins"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "microSD Card – FAT-formatted (classic 8.3 filenames; can be formatted directly on Bambulab printers)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["3D Model of SpoolEase case - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://makerworld.com/en/models/1138678",
          children: "https://makerworld.com/en/models/1138678"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Four M2x10 screws to securely hold the display in place (not mandatory)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Soldering tools"
      }), "\n"]
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


/***/ })

}]);