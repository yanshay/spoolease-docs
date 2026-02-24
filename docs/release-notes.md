---
sidebar_position: 2
id: release-notes
title: Release Notes
sidebar_label: Release Notes
---
# Release Notes

### 0.6.1-b.2
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
