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
- And more  

The discussions below offer several solutions to try — so far, every case has been resolved with the right approach.

- [Issue #18](https://github.com/yanshay/SpoolEase/issues/18)
- [Discussion #51](https://github.com/yanshay/SpoolEase/discussions/51)

Also, a few simple things to try:
- Try a different USB cable if available
- Try a different computer if available
---

### Initialization
#### SpoolEase fails to establish communication with the NFC Tag Reader, showing a `TimeoutAck` error.
- Check that you configured the DIP switches correctly as described in the documentation.
- Inspect the soldering, verifying both the correctness of wire connections and the quality of the soldering. Look for solder bridges or other issues.
- Wires colors arrive in different variants, so colors could be misleading. Verify wiring based on the table by matching pin-number (on display) to signal-name (on PN532) see [Issues #13](https://github.com/yanshay/SpoolEase/issues/13), [Issue #26](https://github.com/yanshay/SpoolEase/issues/26) for some more details. It seems to be usually swapping yellow/green wires.
#### I see 'Initialization failed' message, but don't understand what has failed
- Initialization fails also if you haven't provided printer Serial/Access Code. It will how a message about that in the terminal log. See [Issue #19](https://github.com/yanshay/SpoolEase/issues/19) for more details.

---

### Connectivity
#### I see SpoolEase connected to wifi but I can't connect to it
- Verify you enabled Web-Config (swipe down until you see a button to enable Web-Config)
- There was a report that Pihole somehow caused communication issues, see [Duscussion #9](https://github.com/yanshay/SpoolEase/discussions/9) for more details.
#### SpoolEase successfully connects to the printer ("Printer is connected") but fails to establish a TLS connection with the error `TlsError(Eof)`.
- Verify that the printer's serial number and access code are entered correctly.
