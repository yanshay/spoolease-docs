---
sidebar_position: 20 
id: register-new-spools
title: Register New Spools
sidebar_label: Register New Spools
---
import inventoryAddSpool from '../img/inventory-add-spool.png';
import inventoryAddSpoolK from '../img/inventory-add-spool-k.png';

# Register New Spools

Registering a spool with SpoolEase Inventory is straightforward.

1. Browse to and log in to the inventory application at **http://\<spoolease-console-ip\>/inventory** .  
2. Press the **"Add Spool"** button to add a spool.  

<div style={{ display: 'flex', gap: '16px' }}>
  <img src={inventoryAddSpool} alt="Inventory Add Spool Dialog" class="img-shadow" />
  <img src={inventoryAddSpoolK} alt="Inventory Add Spool Dialog K Page" class="img-shadow" />
</div>

3. Fill in the information in the dialog that appears.  
4. Take note of the spool ID. If you plan to encode it immediately, just remember it. If not, place a sticker with the ID on the spool until you encode it. (It can also be useful to leave the sticker on the spool for easier identification in storage.)

After adding a spool, you can either add another spool similar to the one you just entered or create a new one from scratch.

The dialog itself is fairly simple, so there’s no need to explain every detail. Below are descriptions of fields that may not be completely straightforward:

- **Slicer Filament**  
  - If you have defined custom filaments in your slicer, you can add them in the Web Config.  
  - If you select a slicer filament, the material field will be filled and locked because they must match. To change the material, you need to deselect the slicer filament first.  

- **Color**  
  - You can set the color by name as a starting point for selecting the exact shade. Enter the color name in the relevant field, then after selecting it, press the button with arrows pointing left and up to set the color code. Alternatively, press **Enter** in the field (an extra press if you used the keyboard to select the color name) to fill in the code. You can then further refine the exact color code using the color picker button, which will open a color picker tool.  

- **Full When Added**  
  - Use this field to indicate whether the spool was new or already used when added to the inventory. If you set it as new, make sure to encode it as new and avoid using it before encoding (with weight).  

- **Core Weight**  
  - Core weight is the empty spool’s weight, and it’s essential for accurately estimating how much filament is left. If you don’t know the value, SpoolEase can help estimate it during encoding based on the label weight and the weight of a new spool. This estimate may not be perfectly accurate, since it depends on the manufacturer’s real filament weight, but it’s better than nothing.  
