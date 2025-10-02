---
sidebar_position: 18
title: Basic Usage Flows
---

:::important
The flows described here apply to SpoolEase versions 0.4.0-alpha50 and later.
:::

### Basic Flow to Add a Spool to the System with Encoding
1. [Register the spool](register-new-spools) in the inventory application (preferably, but not required, at purchase) with all information.
2. [Encode the tag](encode-tag-0.4-alpha) together with measuring weight, and using the inventory record ID (weight requires the scale).  
   (This can also take place weeks after resitering the spool in the inventory)
3. Calibrate pressure advance (optional).
4. [Re-encode](encode-tag-0.4-alpha#adding-pressure-advance-information) from the slot configured with the pressure advance (optional).

### Using a Spool in the AMS
1. Scan the spool.  
2. Load the spool into the AMS for automatic configuration.  

### Using a Spool in an External Spool Holder
1. Scan the spool to staging.  
2. Manually configure the external slot.  

### Updating a Spool’s Current Weight Information
If the spool is removed from the AMS (a good opportunity to weigh and update):  
1. The spool information immediately appears in staging (under "Unloaded").  
2. Place the spool on the scale.  
3. Press the left (green) button.  

If the spool is not from the AMS (e.g., taken from storage):  
1. Scan the spool.  
2. Place it on the scale.  
3. Press the left (green) button on the scale.  

### Searching for a Spool
1. Navigate to http://_device-name_/inventory (note it's http and not http**s**)
2. Enter the security key (can be appended automatically with `#sk=_security-key_`).  
3. Use filters or just look around to find the relevant spool, including by the amount of filament available.  

### Checking What’s on a Spool
1. Scan the spool’s tag with a mobile phone.  
2. Follow the link to the “virtual tag” display.  

