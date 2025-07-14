"use strict";
(self["webpackChunkspoolease_docs"] = self["webpackChunkspoolease_docs"] || []).push([[7581],{

/***/ 1702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_20_build_setup_scale_setup_md_ed9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-20-build-setup-scale-setup-md-ed9.json
const site_docs_20_build_setup_scale_setup_md_ed9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"build-setup/scale-setup","title":"Scale Setup","description":"Overview","source":"@site/docs/20-build-setup/scale-setup.md","sourceDirName":"20-build-setup","slug":"/build-setup/scale-setup","permalink":"/docs/build-setup/scale-setup","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"sidebar_position":30,"title":"Scale Setup"},"sidebar":"documentationSidebar","previous":{"title":"Scale Build","permalink":"/docs/build-setup/scale-build"},"next":{"title":"Quick Start","permalink":"/docs/quickstart/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/20-build-setup/scale-setup.md


const frontMatter = {
	sidebar_position: 30,
	title: 'Scale Setup'
};
const contentTitle = 'Scale Setup';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "What You&#39;ll Need",
  "id": "what-youll-need",
  "level": 3
}, {
  "value": "Setup Steps",
  "id": "setup-steps",
  "level": 3
}, {
  "value": "Flashing the Firmware",
  "id": "flashing-the-firmware",
  "level": 2
}, {
  "value": "Setting Up WiFi - The Easy Way",
  "id": "setting-up-wifi---the-easy-way",
  "level": 2
}, {
  "value": "Setting Up Additional Configuration - The Easy Way",
  "id": "setting-up-additional-configuration---the-easy-way",
  "level": 2
}, {
  "value": "Alternative Setup",
  "id": "alternative-setup",
  "level": 2
}, {
  "value": "Verifying that the Load Cell is Working Properly",
  "id": "verifying-that-the-load-cell-is-working-properly",
  "level": 2
}, {
  "value": "Verifying that the NFC Reader is Working Properly",
  "id": "verifying-that-the-nfc-reader-is-working-properly",
  "level": 2
}, {
  "value": "Calibrating the Scale",
  "id": "calibrating-the-scale",
  "level": 2
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "scale-setup",
        children: "Scale Setup"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["*", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SpoolEase Scale requires the SpoolEase Console to be installed with version 0.3.0 or later."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scale must be enabled via SpoolEase Console Web-Config."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don't place SpoolEase Scale and SpoolEase Console too close, it has been seen to cause WiFi interference and break the connection from time to time."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The setup for SpoolEase Scale should begin partway through the build process—before the case is closed and the final two screws are installed. The instructions below specify the exact point where it’s best to pause the build and perform the setup."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The setup process is similar to the one you followed for the SpoolEase Console, with a few differences since the SpoolEase Scale doesn’t have a display."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-youll-need",
      children: "What You'll Need"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WiFi credentials"
        }), " (network name/SSID and password) for a network that has access to your 3D printer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setup-steps",
      children: "Setup Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Flash the firmware onto the device"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Configure Connectivity settings"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashing-the-firmware",
      children: "Flashing the Firmware"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The easiest way to flash the firmware is through Chrome or Edge (other browsers are not supported)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect the SpoolEase Scale device to your computer using a USB-C cable. IMPORTANT: Use the UPPER Usb-C connector on SpoolEase Scale. UPPER is when the board is positioned in its place the 3D printed model, with the two connectors on the left and the pins are facing away from you."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Visit ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.spoolease.io/scale.html#firmware",
          children: "https://www.spoolease.io/scale.html#firmware"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Press the \"New Install\" button for the version you want to flash at the bottom of the page."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Select the correct port for the board and click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Connect"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A dialog titled \"SpoolEaseScale\" should appear. Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Install SpoolEaseScale"
        }), " and confirm by pressing ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Install"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The device will erase old data (displaying \"Erasing\") and then install the new firmware (showing progress). This may take a few minutes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Once installation is complete, the device will restart. You'll see an \"Installation complete!\" message in the browser and WiFi setup instructions will follow."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["There are now two ways to configure WiFi. If your network is accessible where you installed the firmware, follow the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "WiFi Setup - Easy Way"
        }), " section. Otherwise, skip to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Alternative WiFi Setup"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-up-wifi---the-easy-way",
      children: "Setting Up WiFi - The Easy Way"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "If you encounter issues, retry by visiting"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.spoolease.io/scale.html#firmware",
          children: "https://www.spoolease.io/scale.html#firmware"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "and clicking \"New Install\" again."
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Press ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next"
        }), " on the \"Installation complete!\" dialog. This opens the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Configure WiFi"
        }), " screen."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select your WiFi network or enter it manually, then enter your WiFi password."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Press ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Connect"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A confirmation dialog will appear in the browser stating the device is connected. Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Visit Device"
        }), " to open the configuration application."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-up-additional-configuration---the-easy-way",
      children: "Setting Up Additional Configuration - The Easy Way"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enter \"Change-Me!\" as Security Key and click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify Key"
        }), ". A \"Security Key Validated\" message should appear."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It is recommended to change the security key by filling in the \"Set a Fixed Key\" field and pressing \"Apply\"."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["It is recommended to give the device a name so it can be identified as \"", (0,jsx_runtime.jsx)(_components.em, {
          children: "device-name"
        }), ".local\" on the network (this will work depending on the client you use) instead of using its IP address, which would be more difficult to find."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable or disable the NFC Module option (the one in SpoolEase Scale), depending on whether you installed it (by default it is enabled)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Restart the device from the browser by pressing ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Restart Device"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In SpoolEase Console Web-Config (not to confuse with Scale Web-Config) enable SpoolEase Scale."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After rebooting, the front RGB LED will flash red until the device connects to the network, then it will remain steady red until SpoolEase Console connects to it."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Congratulations! Setup is complete."
      }), " Please continue to verify that everything is working properly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alternative-setup",
      children: "Alternative Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Use this if the Easy WiFi Setup fails."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Restart the device by disconnecting and reconnecting the USB power or pressing the Reset button on the board."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Connect to the WiFi network ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"SpoolEaseScale\""
        }), ".", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "On mobile devices, wait a few moments; the device may auto-open a setup page similar to airport WiFi."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If not, browse to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "http://192.168.2.1/config.html",
              children: "http://192.168.2.1/config.html"
            }), " (note: use http NOT https, you must type http)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enter \"Change-Me!\" as Security Key and click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify Key"
        }), ". A \"Security Key Validated\" message should appear."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It is recommended to change the security key by filling in the \"Set a Fixed Key\" field and pressing \"Apply\" before configuring WiFi information."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fill in the WiFi information (SSID and Password) and press Apply."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["It is recommended to give the device a name so it can be identified as \"", (0,jsx_runtime.jsx)(_components.em, {
          children: "device-name"
        }), ".local\" on the network (this will work depending on the client you use) instead of using its IP address, which would be more difficult to find."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Restart the device from the browser by pressing ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Restart Device"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After rebooting, the front RGB LED will flash red until the device connects to the network, then it will remain steady red until SpoolEase Console connects to it."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Congratulations! Setup is complete."
      }), " Please continue to verify that everything is working properly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verifying-that-the-load-cell-is-working-properly",
      children: "Verifying that the Load Cell is Working Properly"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On SpoolEase Console, go to the settings screen by swiping up from the bottom of the screen."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On page 2, press \"Calibrate Scale\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On the title, you should see a number (negative or positive, it doesn't matter) - press the load cell and verify this number changes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At this stage don't press anything else on this screen!"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verifying-that-the-nfc-reader-is-working-properly",
      children: "Verifying that the NFC Reader is Working Properly"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you installed the NFC Module, scan a tag using SpoolEase Scale, and it should appear on SpoolEase Console as if you scanned it there."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Congratulations! You've completed the SpoolEase connectivity setup."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "But you aren't done yet!\nAfter completing the case assembly, it's essential to calibrate the scale for accurate measurements."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "calibrating-the-scale",
      children: "Calibrating the Scale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To ensure accurate weight measurements, you must calibrate the system to your specific load cell. This calibration needs to be performed only once after completing the case assembly, or whenever you suspect the accuracy has drifted.\nFollow these steps to calibrate:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find an object weighing approximately 750g - 1kg and measure its exact weight on a trusted scale."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On SpoolEase Console, go to the settings screen by swiping up from the bottom of the screen."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On page 2, press \"Calibrate Scale\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Place SpoolEase Scale on a steady surface with nothing on it to establish the zero point."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Press the \"Tare\" button."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Place the calibration object on the scale and wait a few seconds for the weight measurement to stabilize."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enter the object's exact weight in grams using the keypad on SpoolEase Console and press \"Ok\". The dialog will close."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return to the main screen and verify the object's weight appears accurately (within ±1g tolerance)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In case you made a mistake when entering WiFi information or don't remember the Security Key used, you can reset WiFi credentials and Security Key by pressing the Reset Button 5 times, with less than 5 seconds between presses (but not too quickly)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SpoolEase Scale will identify this sequence and clear both WiFi credentials and Security Key."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can then reenter the information as described in the \"Alternative Setup\" section."
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