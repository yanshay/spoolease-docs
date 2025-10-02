---
sidebar_position: 05
title: Upgrading
---
# Upgrading From Previous Versions

:::info
If you are upgrading from previous versions, please read the following carefully:

Starting with version **0.5**, an **SD card is required**.  
Do not upgrade if you don’t have one available. The SD card must be formatted with the classic **FAT file system**. Your **Bambulab printer can format it** for you.

---

### Upgrading from Version 0.4 Alpha

- **Important:** Before flashing the firmware, **back up the `STORE` and `STATE` folders** to your computer. This is essential if you want the option to downgrade later or encounter serious issues with the new version. You’ll need to remove the SD card for this.  
- On the first run after upgrading, the **inventory will be automatically upgraded**. A progress display will be shown, followed by a success or failure message.  
- For some spools, the **K setting (pressure advance)** may not be upgraded, depending on the specific alpha version in which they were imported.  
  - You can still view the original K configuration by scanning old tags with your mobile phone.  
  - If K is missing, reconfiguring it for a spool is now very easy and can be done directly from the inventory.

⚠️ When upgrading or downgrading, **both the console and the scale must be upgraded or downgraded together**.

---

### Major Changes in Version 0.5

Version 0.5 introduces a **new approach to SpoolEase**, significantly simplifying usage:

- The **NFC tag now acts only as an identifier** for the spool data stored in the **inventory on the SD card**.  
- When a tag is scanned, it is used only to **identify** the spool. The data stored on the tag itself is **no longer used**, except for importing old tags (explained below).  
- **Encoding tags is no longer required.** To link a new tag, simply scan an unlinked tag and follow the linking wizard.  
- You can still **encode information on a tag** if you want to be able to scan it later with a mobile phone and view the spool details as they were at the time of encoding. This is referred to as 'Virtual Tag'.
- Because all information is stored in the inventory on the SD card, it is recommended to use the **Backup** button periodically to save the inventory to your personal computer. This is a quick and simple operation.

---

### Handling Old Tags

When scanning an **old tag** that isn’t in the inventory (from versions up to 3.5), you will be prompted to either:  
1. **Import** the tag’s data into the inventory, or  
2. **Erase** the tag to convert it for standard use.

This ensures you can keep relevant data or clear outdated tags so SpoolEase doesn’t reload old information after a spool is finished.

---

### Adding New Spools

For **new spools**, the process is straightforward:  
1. Add the spool to the inventory.  
2. Scan a blank NFC tag and link it to the spool.  

No encoding or editing while encoding are required anymore.

---

### Additional Changes in Version 0.5

- **K (pressure advance)** is now configured directly in the inventory by editing the spool. A new tab allows configuration per printer and nozzle, and future updates will support extruder/nozzle types (e.g., H2 series).  
- **Additional actions** are available when pressing on staging and slot entries.  
- The **external spool slot has been moved to the right** to match newer versions of Bambu Studio (it was originally on the left).  
- **OTA updates are supported** in this version. However, check the download page before updating to understand the risks. As this is an Alpha release, some versions may be less stable. It is recommended to **back up the inventory** before upgrading.

---

### Restoring From Backup

You can restore the inventory from a backup (using the Backup button) using the following steps:

1. Turn off SpoolEase.  
2. Copy the backup file to the SD card root directory and rename it to `store.bak`.  
3. Delete the `STORE` folder if it exists.  
4. Insert the SD card back into SpoolEase and turn it on. A progress display will appear, followed by a success or failure message.

---

⚠️ **This was only a short summary of the critical points to know when upgrading. For more complete information, please review the rest of the documentation.**
:::
