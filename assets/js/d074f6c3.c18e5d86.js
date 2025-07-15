"use strict";
(self["webpackChunkspoolease_docs"] = self["webpackChunkspoolease_docs"] || []).push([[9516],{

/***/ 7741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_30_quickstart_18_basic_use_flows_md_d07_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-30-quickstart-18-basic-use-flows-md-d07.json
const site_docs_30_quickstart_18_basic_use_flows_md_d07_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"quickstart/basic-use-flows","title":"Basic Usage Flows","description":"Basic Flow to Add a Spool to the System with Encoding","source":"@site/docs/30-quickstart/18-basic-use-flows.md","sourceDirName":"30-quickstart","slug":"/quickstart/basic-use-flows","permalink":"/docs/quickstart/basic-use-flows","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"sidebar_position":18,"title":"Basic Usage Flows"},"sidebar":"documentationSidebar","previous":{"title":"Inventory UI Intro","permalink":"/docs/quickstart/inventory-ui-intro"},"next":{"title":"Register New Spools","permalink":"/docs/quickstart/register-new-spools"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/30-quickstart/18-basic-use-flows.md


const frontMatter = {
	sidebar_position: 18,
	title: 'Basic Usage Flows'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Basic Flow to Add a Spool to the System with Encoding",
  "id": "basic-flow-to-add-a-spool-to-the-system-with-encoding",
  "level": 3
}, {
  "value": "Using a Spool in the AMS",
  "id": "using-a-spool-in-the-ams",
  "level": 3
}, {
  "value": "Using a Spool in an External Spool Holder",
  "id": "using-a-spool-in-an-external-spool-holder",
  "level": 3
}, {
  "value": "Updating a Spool’s Current Weight Information",
  "id": "updating-a-spools-current-weight-information",
  "level": 3
}, {
  "value": "Searching for a Spool",
  "id": "searching-for-a-spool",
  "level": 3
}, {
  "value": "Checking What’s on a Spool",
  "id": "checking-whats-on-a-spool",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    em: "em",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-flow-to-add-a-spool-to-the-system-with-encoding",
      children: "Basic Flow to Add a Spool to the System with Encoding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Register the spool in the inventory application (preferably, but not required, at purchase) with all information."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Encode the tag together with measuring weight, and using the inventory record ID (weight requires the scale).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(This can also take place weeks after resitering the spool in the inventory)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calibrate pressure advance (optional)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-encode from the slot configured with the pressure advance (optional)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "using-a-spool-in-the-ams",
      children: "Using a Spool in the AMS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan the spool."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Load the spool into the AMS for automatic configuration."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "using-a-spool-in-an-external-spool-holder",
      children: "Using a Spool in an External Spool Holder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan the spool to staging."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manually configure the external slot."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "updating-a-spools-current-weight-information",
      children: "Updating a Spool’s Current Weight Information"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the spool is removed from the AMS (a good opportunity to weigh and update):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The spool information immediately appears in staging (under \"Unloaded\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Place the spool on the scale."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Press the left (green) button."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the spool is not from the AMS (e.g., taken from storage):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan the spool."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Place it on the scale."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Press the left (green) button on the scale."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "searching-for-a-spool",
      children: "Searching for a Spool"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Navigate to http://", (0,jsx_runtime.jsx)(_components.em, {
          children: "device-name"
        }), "/inventory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enter the security key (can be appended automatically with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#sk=_security-key_"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use filters or just look around to find the relevant spool, including by the amount of filament available."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "checking-whats-on-a-spool",
      children: "Checking What’s on a Spool"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan the spool’s tag with a mobile phone."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow the link to the “virtual tag” display."
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