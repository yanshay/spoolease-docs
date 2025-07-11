---
sidebar_position: 30 
id: encode-tag
---
# Encode a Tag

To encode an NFC tag, follow these steps:

1. **Set Tag Information**  
   In BambuStudio or Orca Slicers, set the required spool information for the NFC tag:
   - Filament type (material/vendor)
   - Color
   - PA profile (if applicable, but not mandatory)

   For easier encoding without affecting your AMS spools, it's recommended to use the **External Spool** option.

2. **Encode the Tag**  
   - Press the **'Encode'** button on the SpoolEase device. All available slots will flash.
   - Select the slot you set up in step 1.
   - An encoding screen will appear.  
     Most fields are auto-filled; others can be modified using the web app linked at the top of the screen.  
     The easiest method: scan the tag with your phone using your usual tag reader—this opens the web app for editing. Once you’re done, confirm the info in the app and it will appear in the console.  
     On the encoding screen, you can also tap the “Weights” button to enter the spool core weight. If you’re using SpoolEase Scale, placing the spool on it will automatically launch this screen and allow you to optionally encode also the total weight.  
     Multiple methods are available for entering weight data; see the SpoolEase Scale section below for more details—some apply even without the scale.  
     When everything looks good, press the Encode button.
   - A message will appear prompting you to place the spool tag to encode.
   - Place the NFC tag next to the right side of SpoolEase.
   - Once the encoding is successful, a confirmation message will appear. If it fails, repeat the process.

> **Note**: NFC tags have varying ranges depending on factors like the PN532 module, the NFC tag itself, and the USB power supply. Typically, the tag needs to be placed around 1 cm from the sensor. The exact placement may require some trial and error to find the optimal spot.


## Encoding Weight Information

When SpoolScale is available, you can encode weight information to an NFC tag:
1. Place the spool on the scale and press encode, then pick the tray, or
2. Press encode, pick a tray, then place the spool on the scale

Either method will prompt you to:
1. Specify the spool core weight
2. Indicate whether this is a new unused spool or one that's already been used

**Important:** Keep the spool on the scale until you complete this process.

### Specifying Spool Core Weight

You can specify spool core weight through several methods:
1. **Pick from a list:**
   - User-specified list (entered through web configuration)
   - Previously used list (previously selected from the catalog or manually entered spools, and not in your user list)
   - Spool catalog (aggregated from various sources)
2. **Manual entry** - Enter the weight in grams manually
3. **Calculation** - Calculated for brand new spools, assuming standard filament amounts (1kg/750g/500g only at time of this writing)

After selecting the spool core weight, you'll specify whether this is a new or used spool. For new spools, the total weight will be encoded to track consumption from the original amount rather than relying solely on core weight data.

Once all information is entered, the display returns to the standard encoding process. At this point, remove the spool from the scale to encode the tag.

## Clearing the Previously Used Spools List

As the previously used spools list grows, you may wish to clear it. This can be done through the Settings screen.
