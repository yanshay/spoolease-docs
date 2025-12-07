---
title: Console Web Config
---

To access the Console Web Config:
To access the Console Web Config, open your browser and go to one of the following:  
- `http://<console-device-ip>/config`  
- `http://<console-device-name.local>/config` (requires mdns supporting client and network)

⚠️ Note: Use http, and not https.

For detailed instructions, on the console:  
1. Swipe up to open the settings screen below the main view.  
2. Tap **Web Config Instructions**.  

When that screen appears, you can also scan the console’s NFC tag with your phone. It will automatically open the Web Config URL with the security key prefilled.


## Security Key
SpoolEase usually runs on a home network without DNS, so standard HTTPS isn’t practical.

To protect sensitive data, SpoolEase uses its own encrypted channel between the browser and the console. A security key is used to establish this encryption.

If the key isn’t fixed, the console generates a new one on every restart and shows it on the screen under Web Config Instructions. If a fixed key is set, it’s kept until you replace it.

## WiFi Credentials

## Device Name

If a device name is set, the console broadcasts its IP via mDNS as `<device-name>.local`. This works only if the router and clients support mDNS. macOS and iOS do; support on other systems depends on their configuration.

## Display Settings

## Printer Settings

## Scale Settings

## My Spools List

SpoolEase needs each spool’s empty weight for accurate remaining filament calculations. It includes a built-in list collected from multiple sources, but vendors sometimes change spool designs, so the values may not always be exact.

If you regularly use specific spools, you can add custom filament entries. These will appear in the selection list when entering filament details.

## Custom Filaments

SpoolEase configures the printer exactly as a slicer would. It includes all filament presets from Bambu Studio and updates them as new ones are released.

If you use custom filaments in addition to the built in filaments settings, you should add them here; otherwise SpoolEase will fall back to the basic Bambu Studio presets. The Web Config page explains the process—it’s automatic but requires a few simple steps.

## Network Firmware Upgrade

## General

