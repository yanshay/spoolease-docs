"use strict";
(self["webpackChunkspoolease_docs"] = self["webpackChunkspoolease_docs"] || []).push([[5107],{

/***/ 6304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_60_troubleshooting_usage_md_f28_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-60-troubleshooting-usage-md-f28.json
const site_docs_60_troubleshooting_usage_md_f28_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"troubleshooting/usage","title":"Usage Troubleshooting","description":"Scanning Babmbulab filaments doesn\'t work","source":"@site/docs/60-troubleshooting/usage.md","sourceDirName":"60-troubleshooting","slug":"/troubleshooting/usage","permalink":"/docs/troubleshooting/usage","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"sidebar_position":20},"sidebar":"documentationSidebar","previous":{"title":"Setup Troubleshooting","permalink":"/docs/troubleshooting/setup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/60-troubleshooting/usage.md


const frontMatter = {
	sidebar_position: 20
};
const contentTitle = 'Usage Troubleshooting';

const assets = {

};



const toc = [{
  "value": "Scanning Babmbulab filaments doesn&#39;t work",
  "id": "scanning-babmbulab-filaments-doesnt-work",
  "level": 4
}, {
  "value": "Unreliable encoding",
  "id": "unreliable-encoding",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h4: "h4",
    header: "header",
    li: "li",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "usage-troubleshooting",
        children: "Usage Troubleshooting"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "scanning-babmbulab-filaments-doesnt-work",
      children: "Scanning Babmbulab filaments doesn't work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bambulab spools RFID is currently not supported. AMS supports them built in, no need for SpoolEase with those filaments. They don't include the Pressure Advance though."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "unreliable-encoding",
      children: "Unreliable encoding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a high-quality, stable and strong enough USB power adapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Try a different USB cable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don’t place the tag directly on the PN532 — keep it about 1 cm away for reliable encoding."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure you’re using a compatible tag: NTAG215 only. Mifare, FeliCa, and the default tag shipped with the PN532 are not supported."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Upgrade to 0.3.0 (still beta at time of writing)"
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