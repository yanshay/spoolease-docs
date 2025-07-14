"use strict";
(self["webpackChunkspoolease_docs"] = self["webpackChunkspoolease_docs"] || []).push([[474],{

/***/ 8231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_30_quickstart_30_encode_tag_md_c9e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-30-quickstart-30-encode-tag-md-c9e.json
const site_docs_30_quickstart_30_encode_tag_md_c9e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"quickstart/encode-tag","title":"Encode a Tag","description":"Encode a Tag From Slot Information","source":"@site/docs/30-quickstart/30-encode-tag.md","sourceDirName":"30-quickstart","slug":"/quickstart/encode-tag","permalink":"/docs/quickstart/encode-tag","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"sidebar_position":30,"id":"encode-tag"},"sidebar":"documentationSidebar","previous":{"title":"Register New Spools","permalink":"/docs/quickstart/register-new-spools"},"next":{"title":"Scan & Load Tagged Spools","permalink":"/docs/quickstart/scan-and-load"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/30-quickstart/30-encode-tag.md


const frontMatter = {
	sidebar_position: 30,
	id: 'encode-tag'
};
const contentTitle = 'Encode a Tag';

const assets = {

};



const toc = [{
  "value": "Encode a Tag From Slot Information",
  "id": "encode-a-tag-from-slot-information",
  "level": 3
}, {
  "value": "Encoding Weight Information",
  "id": "encoding-weight-information",
  "level": 2
}, {
  "value": "Specifying Spool Core Weight",
  "id": "specifying-spool-core-weight",
  "level": 3
}, {
  "value": "Clearing the Previously Used Spools List",
  "id": "clearing-the-previously-used-spools-list",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    br: "br",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "encode-a-tag",
        children: "Encode a Tag"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "encode-a-tag-from-slot-information",
      children: "Encode a Tag From Slot Information"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Set Tag Information"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "In BambuStudio or Orca Slicers, set the slot information you would like to encode:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Filament type (material/vendor)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Color"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "PA profile (if applicable, but not mandatory)"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For easier encoding without affecting your AMS spools, it's recommended to use the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "External Spool"
          }), " slot."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Encode the Tag"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Press the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "'Encode'"
            }), " button on the SpoolEase device. All available slots will flash."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Select the slot you set up in step 1."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If a spool is placed on the scale filling information starts with weight informatio which is detailed below."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If not, or after filling weight information, an encoding screen will appear.\nMost fields are auto-populated; others can be modified using the web app linked at the top of the screen.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "To reach the encoding web application follow the instuctions on the encode screen title:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "The easiest method: scan the nfc reader with your phone as if you scan an nfc tag — this opens the web app for editing."
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["You can also use the url as shown in the encode screen title\nOnce you’re done filling the information, confirm the info in the app and it will appear in the console.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "On the encoding screen, you can also tap the “Weights” button to enter the spool core weight. If you’re using SpoolEase Scale, placing the spool on it will automatically launch this screen and allow you to optionally encode also the total weight.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Multiple methods are available for entering weight data; see the SpoolEase Scale section below for more details—some apply even without the scale.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "When everything looks good, press the Encode button."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A message will appear prompting you to place the spool tag to encode."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Place the NFC tag next to the right side of SpoolEase."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Once the encoding is successful, a confirmation message will appear. If it fails, repeat the process."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": NFC tags have varying ranges depending on factors like the PN532 module, the NFC tag itself, and the USB power supply. Typically, the tag needs to be placed around 1 cm from the sensor. The exact placement may require some trial and error to find the optimal spot."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "encoding-weight-information",
      children: "Encoding Weight Information"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When SpoolScale is available, you can encode weight information to an NFC tag:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Place the spool on the scale and press encode, then pick the tray, or"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Press encode, pick a tray, then place the spool on the scale"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Either method will prompt you to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Specify the spool core weight"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Indicate whether this is a new unused spool or one that's already been used"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " Keep the spool on the scale until you complete this process."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "specifying-spool-core-weight",
      children: "Specifying Spool Core Weight"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can specify spool core weight through several methods:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pick from a list:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "User-specified list (entered through web configuration)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Previously used list (previously selected from the catalog or manually entered spools, and not in your user list)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Spool catalog (aggregated from various sources)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manual entry"
        }), " - Enter the weight in grams manually"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation"
        }), " - Calculated for brand new spools, assuming standard filament amounts (1kg/750g/500g only at time of this writing)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After selecting the spool core weight, you'll specify whether this is a new or used spool. For new spools, the total weight will be encoded to track consumption from the original amount rather than relying solely on core weight data."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once all information is entered, the display returns to the standard encoding process. At this point, remove the spool from the scale to encode the tag."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "clearing-the-previously-used-spools-list",
      children: "Clearing the Previously Used Spools List"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "As the previously used spools list grows, you may wish to clear it. This can be done through the Settings screen."
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