---
sidebar_position: 2
id: release-notes
title: Release Notes
sidebar_label: Release Notes
---
# Release Notes

## 0.5.0

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


## 0.6.0

### 0.6.0-b.12
- Major feature: Storage System for spools location, see [Storage System](full-guide/storage-system)
- Reflect on tagged/untagged spool clearer
- Improved sorting of Net weight
- Added configuration tabs for easier access to several configurations
- Improved cards view

### 0.6.0-b.13 - Jan 31, 2025

- A few more improvements to card view
- Add filtering by spool ID
- Filters section can be collapsed to save screen real estate
- Medium Feature: Stock - records with several spools, with option to split out spool records to use, see [Stocks of Spools](full-guide/stocks)
- Display total Net weight and Total spool count (of filtered spools) in the header
