---
sidebar_position: 10
---
# Setup Troubleshooting

### Flashing

#### Various issues during flashing
At times, flashing may encounter problems for various reasons, unrelated to the SpoolEase code. These could stem from issues with the board, PC, USB port, cable, flashing tool, browser, etc.  
Possible symptoms include:  
- Flashing does not initiate  
- Board repeatedly connects and disconnects from the PC  
- Device enters a continuous reboot loop  
- Device appears unresponsive or bricked  
- Erasing stops midway  

The discussions below offer several solutions to try — so far, every case has been resolved with the right approach.

- [Issue #18](https://github.com/yanshay/SpoolEase/issues/18)
- [Discussion #51](https://github.com/yanshay/SpoolEase/discussions/51)

#### A message prompting you to press the boot button may appear when attempting to flash.
  - Sometimes simply trying again resolves the issue.
  - Occasionally, you may need to select a different port (even when using the same connector). Ports can have very similar names sometimes differing by just one letter—but behave differently.
  - The Scale ESP32 board has two connectors. Switching to the other connector can sometimes allow flashing to succeed.
  - For some Scale board variants, pressing the boot button is required to flash. The Scale ESP32S3 board includes a boot button. Try holding it while starting the installation. If it helps it is usually with the bottom connector.
  - For the Console board, the boot button is harder to access. More details are available in [Discussion #51](https://github.com/yanshay/SpoolEase/discussions/51).

#### Chrome/Edge may shut down, usually at the end of flashing.  
  - This is not uncommon and is due to a bug in the browser. If it happens at the end of flashing, the flash likely succeeded. It can also happen mid-flash.  
  - If this occurs, simply reopen the flashing page, press the flash button again, and check if logs from the device appear.

#### Also, a few simple things to try:
- Try different USB ports; on some computers, USB 3.0 ports may not work, while USB 2.0 ports do
- Try a different USB cable if available
- Try a different computer if available

---

## WiFi Configuration

#### WiFi Setup Doesn't Show Up on the Desktop

- If you had to flash the Scale using the bottom connector, the WiFi setup will not appear. In this case, use the alternative WiFi setup method.  
- In other cases, try pressing the flash button again, choose to see logs, and then press back on that page. Often, this will make the option to configure WiFi appear.  
- If none of these methods work, use the alternative WiFi setup as described on the setup page.

#### Can't See the Device's WiFi SSID in the Alternative WiFi Setup Method

- It may take some time for the WiFi network to appear.  
- Turning your mobile WiFi off and on may speed up discovery.  
- Try adjusting the distance or moving around your device until the WiFi is discovered.

---

### Initialization
#### SpoolEase fails to establish communication with the NFC Tag Reader, showing a `TimeoutAck`/`BadAck` errors.
- Check that you configured the DIP switches correctly as described in the documentation.
- Inspect the soldering, verifying both the correctness of wire connections and the quality of the soldering. Look for solder bridges or other issues.
- Wires colors arrive in different variants, so colors could be misleading. Verify wiring based on the table by matching pin-number (on display) to signal-name (on PN532) see [Issues #13](https://github.com/yanshay/SpoolEase/issues/13), [Issue #26](https://github.com/yanshay/SpoolEase/issues/26) for some more details. It seems to be usually swapping yellow/green wires.
- On the Scale, sometimes DuPont connectors don't connect well to the ESP32 pins, try replacing the wires.
- Verify the power supply is good enough - strong and stable. Needs to be capable of 2A+ and also reasonable quality.
- To check if it may be caused by RF interference, try temporarily placing the PN532 as far as possible from the ESP32/WT32-SC01-Plus and powering off/on. 
- Sometimes it is just a matter of time until the PN532 'heats up' and then it starts working well, so give it a couple of minutes with power and then turn off/on.

#### I see 'Initialization failed' message, but don't understand what has failed
- Initialization fails also if you haven't provided printer Serial/Access Code. It will how a message about that in the terminal log. See [Issue #19](https://github.com/yanshay/SpoolEase/issues/19) for more details.

---

### Connectivity
#### I see SpoolEase connected to wifi but I can't connect to it
- Verify you enabled Web-Config (swipe down until you see a button to enable Web-Config)
- There was a report that Pihole somehow caused communication issues, see [Duscussion #9](https://github.com/yanshay/SpoolEase/discussions/9) for more details.
#### SpoolEase successfully connects to the printer ("Printer is connected") but fails to establish a TLS connection with the error `TlsError(Eof)`.
- Verify that the printer's serial number and access code are entered correctly.
