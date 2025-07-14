"use strict";
(self["webpackChunkspoolease_docs"] = self["webpackChunkspoolease_docs"] || []).push([[6594],{

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

/***/ 9414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_30_quickstart_13_scale_ui_intro_md_aac_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-30-quickstart-13-scale-ui-intro-md-aac.json
const site_docs_30_quickstart_13_scale_ui_intro_md_aac_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"quickstart/scale-ui-intro","title":"Scale UI Intro","description":"Intro to SpoolEase Scale \\"UI\\"","source":"@site/docs/30-quickstart/13-scale-ui-intro.md","sourceDirName":"30-quickstart","slug":"/quickstart/scale-ui-intro","permalink":"/docs/quickstart/scale-ui-intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"sidebar_position":13,"title":"Scale UI Intro"},"sidebar":"documentationSidebar","previous":{"title":"Console UI Intro","permalink":"/docs/quickstart/console-ui-intro"},"next":{"title":"Inventory UI Intro","permalink":"/docs/quickstart/inventory-ui-intro"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/30-quickstart/13-scale-ui-intro.md


const frontMatter = {
	sidebar_position: 13,
	title: 'Scale UI Intro'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Intro to SpoolEase Scale &quot;UI&quot;",
  "id": "intro-to-spoolease-scale-ui",
  "level": 2
}, {
  "value": "LED Status Indicators",
  "id": "led-status-indicators",
  "level": 2
}, {
  "value": "In SpoolEase Console",
  "id": "in-spoolease-console",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "intro-to-spoolease-scale-ui",
      children: "Intro to SpoolEase Scale \"UI\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interaction with SpoolEase Scale occurs primarily through the SpoolEase Console display.\nAdditionally, SpoolEase Scale features an RGB LED that provides direct status information and two buttons at the front of the case."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "led-status-indicators",
      children: "LED Status Indicators"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The RGB LED communicates the following states, with earlier states taking precedence in case two apply at the same time:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These are the main colors to be aware of, more are detailed in the full guide."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flashing Red"
        }), " - SpoolEase Scale is not connected to WiFi"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constant Red"
        }), " - SpoolEase Scale is not connected to SpoolEase Console"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Orange"
        }), " - The scale is not calibrated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Yellow"
        }), " - Load detected on the scale, but weight is unstable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Blue"
        }), " - Load detected on the scale and reading is stable"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "in-spoolease-console",
      children: "In SpoolEase Console"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A small rectangular information panel appears in the middle of the display, below the AMS slots view and above the message area. This panel shows SpoolEase Scale information with color-coding based on status:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Red background"
          }), " - Indicates an error condition:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No communication with SpoolEase Scale"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SpoolEase Scale is not calibrated"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Yellow background"
          }), " with weight value - Load detected but reading is unstable"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Blue background"
          }), " with weight value - Load detected and reading is stable"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SpoolEase can display the weight of any object (typically a spool) and calculate net filament weight if the spool core weight is known from an NFC tag scan."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If a single value is shown, the system doesn't know the spool core weight and shows only the current weight on the scale.\nIf the spool core weight is known, it displays two values in the format ", (0,jsx_runtime.jsx)(_components.code, {
        children: "net-weight/total-weight"
      }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "432g / 556g"
      }), "). This means the total spool weight is 556g, with 432g of usable filament."]
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



/***/ })

}]);