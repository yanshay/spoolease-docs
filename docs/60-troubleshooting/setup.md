---
sidebar_position: 10
---
# Setup Troubleshooting

### Flashing

#### Device erasing/flashing seem to fail again and again and/or the device appear to get into endless boots and/or appears to be bricked
- see [Issue #18](https://github.com/yanshay/SpoolEase/issues/18) for resolution options and more details.

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
