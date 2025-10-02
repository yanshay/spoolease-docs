---
sidebar_position: 05
title: Upgrading
---
# Upgrading From Previous Versions

:::info
If you are upgrading from previous versions, please read the following carefully:

Starting with version **0.5**, an **SD card is required**.  
Do not upgrade if you don’t have one available. The SD card must be formatted with the classic **FAT file system**. Your **Bambulab printer can format it** for you.

Version 0.5 introduces a major change in how **SpoolEase** works, greatly simplifying usage:  
- The **NFC tag now serves only as an identifier** for the spool information stored in the **inventory on the SD card**.  
- When a tag is scanned, it’s used only to **identify** the spool. The data stored on the tag itself is **not used**, except when importing old tags (explained later).  
- You may still encode information on a tag, but this is only for **scanning with a mobile phone** to view the spool details as they were when encoded.

When scanning an **old tag** that isn’t in the inventory, you’ll be prompted to either:  
1. **Import** the data into the inventory, or  
2. **Erase** the tag for standard use.  

This ensures you can keep relevant data or clear outdated tags so SpoolEase doesn’t load obsolete information after the spool is used up.

For **new spools**, the process is simple:  
1. Add the spool to the inventory.  
2. Scan a blank tag and link it to the spool.  
No encoding or manual updates are needed anymore.

Please review the relevant documentation pages to fully understand the new system.
::: 
