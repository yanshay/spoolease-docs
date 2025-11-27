# Bambulab Firmware Versions

Throughout 2025, Bambulab released firmware updates that introduced a software mechanism called **“Authorization Control”**, which restricts certain MQTT communications while the printer is in **Cloud Connected** mode. These MQTT messages remain available in **LAN Only** mode when **Developer Mode** is enabled.

One SpoolEase feature - **slot filament configuration**, rely on these MQTT messages to set filament information for AMS slots and the External Spool Holder.

Other features — such as **Inventory Management**, **Weight Tracking** (using both SpoolScale and print progress), **Virtual Label on Mobile**, **visibility into AMS filaments** and others — are not affected by this change.

To use the filament configuration feature, you have two options:

- **Use an older firmware version** released before the Authorization change.  
  This allows SpoolEase to work fully while keeping Cloud Connected mode enabled.  

- **Use a newer firmware version** and switch the printer to **LAN Only** mode with **Developer Mode** enabled.

If you prefer to keep using newer firmware with Cloud Connected mode, you can still use SpoolEase without filament configuration. Inventory management, spool weight tracking, and other features will continue to work normally.

Below are the latest firmware versions for each Bambulab printer line that do **not** include the Authorization restrictions, so using versions up to (and including) these will allow you to fully enjoy all SpoolEase features and Cloud Connected mode without switching to **Lan Only** mode with **Developer Mode** enabled.

- **A1:** `01.04.00.00`  
- **P1:** `01.08.01.00`  
- **X1:** `01.08.02.00`  
- **H2:** All H2 printers include Authorization Control.
- **P2:** All P2 printers include Authorization Control.

