"use strict";
(self["webpackChunkspoolease_docs"] = self["webpackChunkspoolease_docs"] || []).push([[1951],{

/***/ 694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_30_quickstart_10_console_ui_intro_md_c08_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-30-quickstart-10-console-ui-intro-md-c08.json
const site_docs_30_quickstart_10_console_ui_intro_md_c08_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"quickstart/console-ui-intro","title":"Console UI Intro","description":"SpoolEase\'s main user interface consists of three vertically stacked screens, with only one visible at a time.","source":"@site/docs/30-quickstart/10-console-ui-intro.md","sourceDirName":"30-quickstart","slug":"/quickstart/console-ui-intro","permalink":"/docs/quickstart/console-ui-intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Console UI Intro"},"sidebar":"documentationSidebar","previous":{"title":"Quick Start","permalink":"/docs/quickstart/"},"next":{"title":"Scale UI Intro","permalink":"/docs/quickstart/scale-ui-intro"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/30-quickstart/10-console-ui-intro.md


const frontMatter = {
	sidebar_position: 10,
	title: 'Console UI Intro'
};
const contentTitle = 'Intro to SpoolEase Console UI';

const assets = {

};



const toc = [{
  "value": "Screens (from top to bottom):",
  "id": "screens-from-top-to-bottom",
  "level": 3
}, {
  "value": "Multi Printer Selection",
  "id": "multi-printer-selection",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    h1: "h1",
    h3: "h3",
    header: "header",
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
        id: "intro-to-spoolease-console-ui",
        children: "Intro to SpoolEase Console UI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SpoolEase's main user interface consists of three vertically stacked screens, with only one visible at a time.\nYou can navigate between them by swiping up or down on the display.\nIn some cases, such as during an OTA update, navigation may be temporarily disabled."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "screens-from-top-to-bottom",
      children: "Screens (from top to bottom):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Terminal"
        }), " – Displays logs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Main Spools View"
        }), " – The primary interface for managing spools"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Settings"
        }), " – Configuration options", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "The Settings screen has two tabs. Switch between them using the buttons labeled 1 and 2 on the left."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When turned on, the device starts on the terminal screen. Once the boot process completes successfully, it automatically switches to the main spools view."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-printer-selection",
      children: "Multi Printer Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you use a multi-printer setup, you can swipe left to expose a screen on the right for selecting the printer to view."
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