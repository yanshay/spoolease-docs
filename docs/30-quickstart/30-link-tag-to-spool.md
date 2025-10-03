import linkStep1 from '../img/link-step1.png';
import linkStep1Selected from '../img/link-step1-selected.png';
import linkStep2 from '../img/link-step2.png';
import linkStep3 from '../img/link-step3.png';
import linkStep4 from '../img/link-step4.png';
import linkStep4Loaded from '../img/link-step4-loaded.png';
import linkStep6Main from '../img/link-step6-main.png';

# Link Tag to Spool

Linking a tag to a spool is required for many SpoolEase features. By linking a tag, the system can recognize the spool simply by scanning it and perform various operations such as automatically configuring the slot when the spool is loaded into the AMS or placing it on the scale to update its weight, etc.

For accurate weight tracking, it’s important to **link the tag and weigh the spool at its full (initial) weight before first use**.

### Linking Steps

1. **Scan the tag with SpoolEase.**

   A linking screen will appear.
   <img src={linkStep1} alt="Select Operation" class="img-shadow" />

   If you recently added a spool to the inventory, it will be shown for quick selection. Choose the desired operation and press **Next**.
   <img src={linkStep1Selected} alt="Operation  Selected" class="img-shadow" />

2. **Enter the spool inventory ID.**

   Press **Next**. If the ID is invalid (already tagged or not in the inventory), an error will be shown and you won’t proceed.
   <img src={linkStep2} alt="Fill in Spool Id" class="img-shadow" />

3. **Verify the spool details.**  
   The selected spool’s information will be displayed. Confirm it’s correct, then press **Link Tag**.
   <img src={linkStep3} alt="Verify Details" class="img-shadow" />

4. **(Optional) Weigh the spool.**  
   If you have SpoolEase Scale, you’ll be prompted to measure the spool’s weight. This is especially important for unused spools to capture their **full weight** before printing starts.  

   <img src={linkStep4} alt="Prompt to Weight" class="img-shadow" />

   Select whether the spool is **Used** or **Full/Unused** (other options may appear if previously weighed), place the spool on the scale, and press **Update Weight** once the measurement appears.

   <img src={linkStep4Loaded} alt="Weighting" class="img-shadow" />

5. **Confirmation.**  
   A message will briefly appear confirming the weight update. The spool will also be loaded into **Staging** as a scanned spool, allowing you to load it into AMS or perform other staging actions (including encoding tag data if desired).

   <img src={linkStep6Main} alt="Weighting" class="img-shadow" />

6. **Next Steps**  
You can now use the spool with SpoolEase. Common follow-up actions include:

- **Encoding tag information** to enable [Virtual Tag](view-tag-info) functionality. This lets you view the spool’s details on your mobile phone by scanning the tag.  
- **Calibrating K (pressure advance)**. This consumes filament, so it should be done **after you weighted the spool in its full state as described above**. Once calibration is complete, set the calibrated K value in the spool’s edit dialog in the inventory application.
