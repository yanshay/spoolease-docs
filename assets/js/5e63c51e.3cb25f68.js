"use strict";
(self["webpackChunkspoolease_docs"] = self["webpackChunkspoolease_docs"] || []).push([[2658],{

/***/ 4845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_40_full_guide_scale_config_md_5e6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-40-full-guide-scale-config-md-5e6.json
const site_docs_40_full_guide_scale_config_md_5e6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"full-guide/scale-config","title":"Scale Configuration","description":"For configuration, SpoolEase Scale offers a web application similar to SpoolEase Console.","source":"@site/docs/40-full-guide/scale-config.md","sourceDirName":"40-full-guide","slug":"/full-guide/scale-config","permalink":"/docs/full-guide/scale-config","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Scale Configuration"},"sidebar":"documentationSidebar","previous":{"title":"multi-printer","permalink":"/docs/full-guide/multi-printer"},"next":{"title":"spool-weight","permalink":"/docs/full-guide/spool-weight"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/40-full-guide/scale-config.md


const frontMatter = {
	title: 'Scale Configuration'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "SpoolEase Scale Web Configuration",
  "id": "spoolease-scale-web-configuration",
  "level": 2
}, {
  "value": "Enabling SpoolEase Scale",
  "id": "enabling-spoolease-scale",
  "level": 2
}, {
  "value": "Recalibrating the Scale",
  "id": "recalibrating-the-scale",
  "level": 2
}, {
  "value": "Finding SpoolEase Scale IP Address",
  "id": "finding-spoolease-scale-ip-address",
  "level": 2
}, {
  "value": "Updating SpoolEase Scale Firmware",
  "id": "updating-spoolease-scale-firmware",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "For configuration, SpoolEase Scale offers a web application similar to SpoolEase Console."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "spoolease-scale-web-configuration",
      children: "SpoolEase Scale Web Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since SpoolEase Scale has no display, its web configuration interface is always active. The security key isn't visible on the device, so you'll need to remember it. For convenience, you can use the same fixed key you configured for SpoolEase Console, which is displayed when web configuration is activated on that device."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you forget your security key, follow the reset procedure described in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../build-setup/scale-setup",
        children: "SpoolEase Scale Setup"
      }), " troubleshooting section."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most configuration steps were completed during initial setup and won't be repeated here."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enabling-spoolease-scale",
      children: "Enabling SpoolEase Scale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By default, SpoolEase Console does not assume SpoolEase Scale is present in the system."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To enable it:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Access the web configuration of SpoolEase Console (not SpoolEase Scale web configuration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You can enable it without additional information, allowing the system to automatically discover any SpoolEase Scale on the network"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alternatively, you can configure it to search for SpoolEase Scale at a specific IP address (useful if you've set a fixed IP) or to connect only to a specifically named SpoolEase Scale (configured during setup)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recalibrating-the-scale",
      children: "Recalibrating the Scale"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you notice inaccurate measurements, you can recalibrate the scale at any time by following the procedure in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../build-setup/scale-setup",
        children: "SpoolEase Scale Setup Guide"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "finding-spoolease-scale-ip-address",
      children: "Finding SpoolEase Scale IP Address"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you need to know the IP address of SpoolEase Scale, even when SpoolEase Console is not connected to it, use the \"Scale(s) Information\" button in the Settings screen."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "updating-spoolease-scale-firmware",
      children: "Updating SpoolEase Scale Firmware"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can update SpoolEase Scale firmware through:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The initial installation web page you used during setup, or"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Over the network via the web configuration interface"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For network updates, use the web configuration to view the latest version and initiate the update process. To monitor progress, refresh the update page periodically. The device will automatically reboot once the update is complete."
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