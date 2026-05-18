---
sidebar_position: 2
id: release-notes
title: Release Notes
sidebar_label: Release Notes
---
# Release Notes

### 0.6.3 — May 18, 2026 
- **Dashboard**  
  Configurable dashboard based on the filter expression language  

- **Filter Expressions**  
  Filter expression language added - much more capable filtering, with ability to fallback to previous simple field based primitives  
  Simplified the inventory filtering with fall back to basic fields filtering  

  **Other Enhancements**  
  Place in location manually entered on the console  

### 0.6.2-b.xx (0.6.2 not released, skipped to 0.6.3)  

- **Printers View**  
  First stab at printers display - includes the key features missing by lack of handy app when printer is in developer mode  
  Display printer and print status + Pause/Resume/Stop  
  Display printer errors  
  Available directly using url http://device/app/printers  

- **WPA**  
  Can now be added to Home Screen and used as a standalone app (PWA)  

- **Multiple Tags per Spool**  
  Link multiple tags to a spool using **Add Another Tag** operation  
  Unlink a specific linked tag or all linked tags from a spool  
  Especially useful for Bambu Lab spools to link both tags to the same spool record  
  Need to upgrade also scale for encoding support using scale  

-  **Multiple Colors Spools and Full Transparency Support**  
  Full support for multi-color spools  
  Full support for transparent/translucent colors  
  Add eyedropper support from images (mobile photos/local or web) to set colors  
  Improve convenience of color picker for multi color spools  

- **Other Enhancements**  
  Bambu Lab tag that's registered with SpoolEase, when scanned by AMS configures slot and assigns spool-id to slot - saves the need to scan Bambu Lab spools. Needs to be enabled in the Web Config  
  If slot is with spool-id and spool is loaded (w/o staging) then set slot by spool-id - allows to configure slot before loading spool  
  
- **Fixes**  
  Import of Bambu Lab spools now asks if spool is full or used, which solves all kinds of issues  
  Solved wrong count of number of spools in summary line  
  Added support for columns ordering drag/drop on mobile  
  When adding spools from inventory app, added date/time is set even when Console failed to get NTP using client date/time  
  CSV exports based on current applied filter  
  Hide security key in dialog  
  
- **UI/UX changes**  
  Overhaul the Inventory UI look and feel - likely to introduce glitches here and there, please report  
  Many Inventory UI improvements and fixes on desktop and mobile  
  Allow fixing number of rows in table across sessions  
  Storing column (using **Columns** button) configuration also stores the sorting as the default
  Probably more ...

- **Breaking Change**
  inventory now in http://device/app/inventory (redirects there from http://device/inventory)  

### 0.6.1

- **Inventory UI improvements**  
  Card title includes weight available / label weight  
  Mobile card view - cards are now collapsible and collapsed by default - collapse/expand by tapping card's top section  

- **Improved PN532 initialization**  
  Enhanced startup reliability, primarily impacting the scale.

- **Login “Remember Me” option**  
  Added support to persist the security key between sessions.  
  Includes a “Forget Me” option to clear saved credentials.

- **New inventory color columns**  
  Added **Swatch**, **Spool**, and **Percentage** columns.  
  The **Spool** column is now the default (replacing **RGBA**).  
  Column visibility can be customized via the **Columns** button.

- **Net column repositioned**  
  Moved the **Net** column to the left by default.

- **Inventory summary line**  
  Added a summary section with key information above the inventory table.

- **Improved mobile layout**  
  Edit/Delete actions moved into the record card opened on tap.

- **Spool cards enhancements**  
  Spool cards now include **Add** and **Edit** actions.

### 0.6.0

- **Storage System for spool locations**  
  Manage and track spool placement.  
  See [Storage System](full-guide/storage-system)

- **Stock support**  
  Create stock records containing multiple spools, with the option to split spools for use.  
  See [Stocks of Spools](full-guide/stocks)

- **No-printer mode**  
  Use SpoolEase purely for inventory, weight, and location tracking without configuring a printer.

- **Inventory improvements**
  - Improved Net weight sorting
  - Filtering by spool ID
  - Collapsible filters section
  - Header shows total Net weight and total spool count (filtered)
  - Clearer indication of tagged vs. untagged spools
  - Multiple UI and card view improvements (desktop & mobile)

- **Configuration enhancements**
  - Added configuration tabs for easier access

- **Printer connectivity status**  
  Display current printer status on the main screen and other printers in the printer selection view.

- **Label updates**
  - Added 10kg spool option
  - Updated spool tag encoding URL (preparation for upcoming features)


### 0.5.0

### 0.5.3 — Dec 11, 2025
- Baseline release noted in the release notes

### 0.5.5-b.4 — Dec 23, 2025
- Upgraded underlying frameworks, improving memory management, performance, and stability
- Fix: External slot configuration now works with older A1 firmware (and potentially other older printer firmware versions)

### 0.5.5-b.8 — Jan 21, 2025
- Fix: External spool loading and unloading issues, most noticeable on H2D
- Fix: AMS-HT nozzle display during printing

### 0.5.5-b.9 — Jan 22, 2025
- Fix: External spool filament consumption was not updated in inventory
- Fix: Location of spools loaded into the 8th AMS-HT (for setups with 8 AMS-HT units) were not reflected in inventory

### 0.5.5-b.10 — Jan 22, 2025
- Fix: Unloading an external spool now correctly removes the tag ID from the slot

### 0.5.5 - Jan 31, 2025
- Same content as 0.5.5-b.10
