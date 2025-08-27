---
sidebar_position: 20
---

# Usage Troubleshooting

#### Scanning Babmbulab filaments doesn't work
- Bambulab spools RFID is currently not supported. AMS supports them built in, no need for SpoolEase with those filaments. They don't include the Pressure Advance though. 

#### Unreliable encoding
- Use a high-quality, stable and strong enough USB power adapter.
- Try a different USB cable.
- Don’t place the tag directly on the PN532 — keep it about 1 cm away for reliable encoding.
- Ensure you’re using a compatible tag: NTAG215 only. Mifare, FeliCa, and the default tag shipped with the PN532 are not supported.
- Upgrade to 0.3.0 (still beta at time of writing)

#### Connectivity Issues
- Keep Console and Scale at a distance to avoid interference, which may lead to:
  - Repeated disconnections of the Scale from the Console
  - Connectivity problems between the Console and the Printer, causing slow responses
  - Other related issues
