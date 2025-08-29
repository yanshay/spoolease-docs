---
sidebar_position: 31 
id: encode-tag-0.4-alpha
---
# Encode a Tag - Versions 0.4-alpha50+

:::important
The flows described here apply to SpoolEase versions 0.4.0-alpha50 and later.
:::

## Base Tag Information (excluding Pressure Advance - K)

The encoding process assumes the following:  
1. The spool to be encoded has already been added to SpoolEase Inventory as described in [Register New Spools](register-new-spools).  
2. You know the spool’s ID in the inventory.  
3. The spool with that ID has not already been encoded.  

In the SpoolEase Console display:

0. Make sure the staging area is empty. Encoding while the staging area contains data is for advanced use cases.  
1. Press the **"Encode"** button on the bottom right.  
2. Press **"Start Clean"** on the bottom left (where the staging area is).  
3. Press **"Use ID"** on the top left.  
4. Enter the spool’s ID and press **"Ok"**.  

The information you previously entered in SpoolEase Inventory will now be displayed.  

5. If you need to modify anything, open the Encode web application as instructed on the console's title. You can either enter the application URL manually on your mobile device or desktop, or simply scan the NFC reader of the Console with your mobile phone (pretty neat, right?). After making your changes, press **"Save Changes"**. This will update the information both on the screen and in the Inventory.  

If you have **SpoolEase Scale**:  

6. Place your spool on the Scale. Do not remove it until instructed.  
7. If you did not provide the spool’s core weight in the inventory, you can let SpoolEase assist in estimating it. Press the **"Weights"** button, then press the **"Est"** button on the left.  

Next:

8. Press **"Encode"**.  
9. A prompt will appear asking whether the spool is new or used. Respond accordingly.  
  - This selection overrides the **"Full When Added"** field you may have set in the Inventory.  
  - If you chose incorrectly, you must cancel the process and start over.  
  - If you answered **"Yes"**, the Scale weight will be stored as the **"Weight as New"**.  
10. The Encode screen will reappear. If you selected **New**, the new weight will be shown and will update with any change on the scale. 
11. Press **"Encode"** again and the NFC readers will wait for a tag to encode

Note: If you skipped placing the spool on the scale in step 6 and only place it now, SpoolEase will interpret this as "spool was forgotten." It will return to the encoding screen, where you can press **Encode** again with the updated weight.  

12. Remove the spool and place the tag next to one of the NFC readers to encode the tag.  
13. The encoded tag will now load into the staging area as **"Encoded"**. If you load the spool into the AMS at this point, it will be configured immediately.  

Notes:  
- When encoding with the spool on the scale, the **Current Weight** of the spool is recorded automatically (this is a value you can later update as you use the spool).  
- If a technical issue occurs during tag encoding, you must restart the process from the beginning. There is no option to retry the encoding step.  

---

## Adding Pressure Advance Information

At the time of writing, adding Pressure Advance requires an additional encoding step.  
If you need to run filament calibration, make sure to do it only after encoding the spool as above, since calibration consumes material.  

To encode Pressure Advance:  

1. Scan the tag into staging.  
2. Assign the tag information manually to any slot. The **External** slot is usually the easiest. Do this by pressing the staging area (showing **"Scanned"**). This will highlight all valid slots. Then, press the desired slot.  
3. In your slicer, wait for the information to update, then set only the Pressure Advance value for that slot.  

Next, repeat the encoding process, but **encode from the slot** instead of using an ID (no further changes will be required):  

4. Press the **"Encode"** button.  
5. Select the slot you used earlier.  
6. Place the spool on the Scale (to update the spool's weight).
7. Press **"Encode"**.  
8. Place the tag next to the NFC reader. The same information will be encoded, now including the Pressure Advance value that you configured in the slicer.  

