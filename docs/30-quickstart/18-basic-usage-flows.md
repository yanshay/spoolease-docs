---
sidebar_position: 18
title: Basic Usage Flows
---

### Basic Flow to Add and Use a Spool With the System
1. [Register the spool](register-new-spools) in the inventory application.  
   It’s best to do this at the time of purchase (though not required). Include all relevant information.  
   Mark the spool’s package with the **ID** from the inventory record.  
   If the spool is already open, you can place a sticker with the ID directly on the spool.  

   When the spool is eventually to be used—possibly weeks or months later—open the package.  

2. Attach an **NFC tag** to the spool and scan it in **SpoolEase** to [link the tag](link-tag-to-spool) with the spool’s inventory record.

  :::tip
   The following step is especially important to do at this stage if the spool is still new and unused to record the weight before use.
  ::: 
3. During the linking process, **weigh the spool** using SpoolEase Scale (if available).  

4. **Calibrate pressure advance** (optional).  
   Perform calibration using your slicer. Once calibration is complete, edit the spool’s inventory record and select the appropriate pressure advance setting for your printers and nozzles.

5. **Encode the tag** (optional).  
   This writes the current spool information to the NFC tag, allowing you to view it by scanning with a mobile phone.  
   Encoding is a snapshot — future changes in the inventory will not appear automatically.  
   You can repeat encoding anytime to update the tag with the latest spool information.

---

### Using a Spool in the AMS
:::note
This is supported only if your printer is **not using the Bambulab authorization system**—either the firmware doesn’t include this feature, or it’s configured to run in **DEV mode**.
:::
1. **Scan the spool.**  
2. **Load the spool into the AMS** and it will be automatically configuration.


---

### Using a Spool in an External Spool Holder
:::note
This is supported only if your printer is **not using the Bambulab authorization system**—either the firmware doesn’t include this feature, or it’s configured to run in **DEV mode**.
:::
1. **Scan the spool** to staging.  
2. **Manually configure** the external slot by pressing the staging entry and following the options there as described [here](scan-and-load#loading-an-external-spool).

---

### Updating a Spool’s Current Weight Information
If the spool is removed from the AMS (an ideal moment to update its weight):  
1. The spool will immediately appear in **staging** under “Unloaded.”  
2. Place the spool on the **scale**.  
3. Press the **left (green) button** (or the only button if you’re using the latest SpoolEase Scale 3D model).

If the spool comes from storage (not the AMS):  
1. **Scan the spool.**  
2. Place it on the **scale**.  
3. Press the **left (green) button** (or the only button if you’re using the latest SpoolEase Scale 3D model).

:::note
SpoolEase can automatically track the spool’s weight during printing, as long as you’ve provided enough initial information.  
The displayed weight will decrease as layers are printed and filaments are changed, and these updates are instantly reflected in the inventory.  
However, the **most accurate weight** is obtained by physically weighing the spool, ideally when unloading it.
:::

---

### Searching for a Spool
1. Go to `http://_device-name_/inventory`  
   (note: use **http**, not https).  
2. Enter the **security key**. There’s no need to press any button—once the key is entered correctly, the inventory will load automatically.  
   You can also append it to the URL using `#sk=_security-key_`.  
3. Use filters or browse the list to find the desired spool, including by remaining filament amount.

---

### Checking What’s on a Spool
If the spool’s tag was encoded:  
1. **Scan the NFC tag** with a mobile phone.  
2. Follow the link to the **virtual tag display** to view the spool information.

---

### Used-Up Spool

You have several options for handling used-up spools. The right approach depends on a few factors:

- Will you use the same type of spool again in the future and want to reuse the information filled in the record?
- Do you plan to reuse the physical spool (the cardboard/plastic holding the filament)?  
- Can or will you reuse the tag? (stickers may not always come off cleanly)  

You could reuse the spool-record and ID with a new spool. The **recommended approach** is **not to do so and not reuse spool records**.  
Whenever you start a new spool—even for refills or re-spools—create a **new spool record**.  
This can be done from an existing spool easily by duplicating an existing record.  
If you plan to get the same or a similar spool again, you can keep the old record and use the **“Add Similar”** option (available when editing a spool) as the starting point for the new one.


To unlink or remove tags and records:

- **Unlink a tag**:  
  Scan the spool into staging → press the staging entry → select **More...** → choose **Unlink Tag**.  
  The tag can then be reused for another spool.

- **Erase a record**:  
  If you no longer need the spool record, simply delete it from the inventory.  
  This will also free the tag for reuse. 

In both cases, you can still have the tag on the physical spool, you only unlinked it from the spool-record.

:::tip
If the tag was encoded with information, it’s best to erase the data as well to avoid confusion when scanning it in the future.
:::


If you still decide not to create a new spool record for a refill or re-spool, make sure to **manually update the existing record** correctly.  This involves many small details, so proceed at your own risk.
