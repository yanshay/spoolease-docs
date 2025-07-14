"use strict";
(self["webpackChunkspoolease_docs"] = self["webpackChunkspoolease_docs"] || []).push([[2020],{

/***/ 3495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_60_troubleshooting_setup_md_d0a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-60-troubleshooting-setup-md-d0a.json
const site_docs_60_troubleshooting_setup_md_d0a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"troubleshooting/setup","title":"Setup Troubleshooting","description":"Flashing","source":"@site/docs/60-troubleshooting/setup.md","sourceDirName":"60-troubleshooting","slug":"/troubleshooting/setup","permalink":"/docs/troubleshooting/setup","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"documentationSidebar","previous":{"title":"index","permalink":"/docs/troubleshooting/"},"next":{"title":"Usage Troubleshooting","permalink":"/docs/troubleshooting/usage"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/60-troubleshooting/setup.md


const frontMatter = {
	sidebar_position: 10
};
const contentTitle = 'Setup Troubleshooting';

const assets = {

};



const toc = [{
  "value": "Flashing",
  "id": "flashing",
  "level": 3
}, {
  "value": "Device erasing/flashing seem to fail again and again and/or the device appear to get into endless boots and/or appears to be bricked",
  "id": "device-erasingflashing-seem-to-fail-again-and-again-andor-the-device-appear-to-get-into-endless-boots-andor-appears-to-be-bricked",
  "level": 4
}, {
  "value": "Initialization",
  "id": "initialization",
  "level": 3
}, {
  "value": "SpoolEase fails to establish communication with the NFC Tag Reader, showing a <code>TimeoutAck</code> error.",
  "id": "spoolease-fails-to-establish-communication-with-the-nfc-tag-reader-showing-a-timeoutack-error",
  "level": 4
}, {
  "value": "I see &#39;Initialization failed&#39; message, but don&#39;t understand what has failed",
  "id": "i-see-initialization-failed-message-but-dont-understand-what-has-failed",
  "level": 4
}, {
  "value": "Connectivity",
  "id": "connectivity",
  "level": 3
}, {
  "value": "I see SpoolEase connected to wifi but I can&#39;t connect to it",
  "id": "i-see-spoolease-connected-to-wifi-but-i-cant-connect-to-it",
  "level": 4
}, {
  "value": "SpoolEase successfully connects to the printer (&quot;Printer is connected&quot;) but fails to establish a TLS connection with the error <code>TlsError(Eof)</code>.",
  "id": "spoolease-successfully-connects-to-the-printer-printer-is-connected-but-fails-to-establish-a-tls-connection-with-the-error-tlserroreof",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "setup-troubleshooting",
        children: "Setup Troubleshooting"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flashing",
      children: "Flashing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "device-erasingflashing-seem-to-fail-again-and-again-andor-the-device-appear-to-get-into-endless-boots-andor-appears-to-be-bricked",
      children: "Device erasing/flashing seem to fail again and again and/or the device appear to get into endless boots and/or appears to be bricked"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/yanshay/SpoolEase/issues/18",
          children: "Issue #18"
        }), " for resolution options and more details."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "initialization",
      children: "Initialization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "spoolease-fails-to-establish-communication-with-the-nfc-tag-reader-showing-a-timeoutack-error",
      children: ["SpoolEase fails to establish communication with the NFC Tag Reader, showing a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TimeoutAck"
      }), " error."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check that you configured the DIP switches correctly as described in the documentation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inspect the soldering, verifying both the correctness of wire connections and the quality of the soldering. Look for solder bridges or other issues."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Wires colors arrive in different variants, so colors could be misleading. Verify wiring based on the table by matching pin-number (on display) to signal-name (on PN532) see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/yanshay/SpoolEase/issues/13",
          children: "Issues #13"
        }), ", ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/yanshay/SpoolEase/issues/26",
          children: "Issue #26"
        }), " for some more details. It seems to be usually swapping yellow/green wires."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "i-see-initialization-failed-message-but-dont-understand-what-has-failed",
      children: "I see 'Initialization failed' message, but don't understand what has failed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialization fails also if you haven't provided printer Serial/Access Code. It will how a message about that in the terminal log. See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/yanshay/SpoolEase/issues/19",
          children: "Issue #19"
        }), " for more details."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "connectivity",
      children: "Connectivity"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "i-see-spoolease-connected-to-wifi-but-i-cant-connect-to-it",
      children: "I see SpoolEase connected to wifi but I can't connect to it"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify you enabled Web-Config (swipe down until you see a button to enable Web-Config)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["There was a report that Pihole somehow caused communication issues, see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/yanshay/SpoolEase/discussions/9",
          children: "Duscussion #9"
        }), " for more details."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "spoolease-successfully-connects-to-the-printer-printer-is-connected-but-fails-to-establish-a-tls-connection-with-the-error-tlserroreof",
      children: ["SpoolEase successfully connects to the printer (\"Printer is connected\") but fails to establish a TLS connection with the error ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TlsError(Eof)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify that the printer's serial number and access code are entered correctly."
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