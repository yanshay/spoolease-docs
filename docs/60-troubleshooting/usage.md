---
sidebar_position: 20
---

# Usage Troubleshooting

#### WiFi Connectivity Issues
- Keep Console and Scale at a distance to avoid interference, which may lead to:
  - Repeated disconnections of the Scale from the Console
  - Connectivity problems between the Console and the Printer, causing slow responses
  - Other related issues


### Printer Connectivity Issues

For P1/A1 printers, there is a limit to the number of simultaneous connections they support. If you have multiple integrations (e.g. HA, Panda, XTouch) running alongside several instances of Bambu Studio, SpoolEase may fail to connect.  

- Try shutting down other integrations and closing extra Bambu Studio instances to see if this resolves the issue. Then manage the number of active integrations accordingly.

#### Unreliable encoding
- Use a high-quality, stable and strong enough USB power adapter.
- Try a different USB cable.
- Don’t place the tag directly on the PN532 — keep it about 1 cm away for reliable encoding.
- Ensure you’re using a compatible tag: NTAG215 only. While Mifare is supported for normal use, it's currently not supported for Encoding the virtual label. FeliCa tags are not supported at all.

#### Slow User Interface

If find the user interface to be slow and respond slow, delayed response of SpoolEase to printer activity, check that you didn't activate extended printer logs in the SpoolEase Console Web Config.

#### Every few hours SpoolEase hangs/stop functioning

Try a better power supply 

#### SpoolEase doesn't track filament consumption
- First, to verify if consumption is tracked check the "**Slot** Information "Consumed Since Loaded" field. For filament consumption to be reflected in the Spool itself certain informaion needs to be  filled in for the spool. See [Spool Weight Tracking](../full-guide/spool-weight-tracking for more information)
- Verify your printer has SDCard/USB-Stick installed - this is required when printer is in Dev Mode or set to always fetch print files using ftp.
- Verify your printer is configured to "Store  Sent Files on External Memory" (available in "Print Options" in the printer display).
