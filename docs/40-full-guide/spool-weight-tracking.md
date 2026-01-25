# Spool Weight Tracking

**Spool Weight Tracking** represents a core capability within SpoolEase.

To achieve optimal weight tracking accuracy, SpoolEase utilizes two complementary approaches for determining spool weight:

- Measuring spool weight directly using the SpoolEase scale
- Tracking print progress and computing filament consumption based on printer activity

Each approach offers distinct advantages and limitations, and their combined use provides continuous, reliable visibility into spool weight status, including as it is used and when inside AMS.

Beyond these measurement techniques, SpoolEase supports additional configuration parameters that enable automatic calculation of remaining filament quantity. These parameters include **Empty Weight**, **Label Weight**, and **Full Weight**.

Based on the available input data, SpoolEase applies various calculation methods to determine the **Net Weight** whenever possible.

The Full Weight can be captured when a spool is new and unused, either during tag linking or subsequently through the "Advance Weight" option in the staging operations menu.

Additional parameters can be specified when entering spool details in the inventory application.

### Scale-Based Weighing

This method provides the most accurate determination of spool weight. Its primary limitation is that it requires an additional manual step. SpoolEase addresses this by streamlining the weighing process as much as possible.

**Weight measurement occurs when spool tag is scanned and its information is loaded into the staging area**. The weighting process involves placing the spool on the scale and pressing the scale button to capture the measurement.  

To further simplify this workflow, SpoolEase automatically loads spool information into the staging area when a spool is removed from the AMS. This timing is ideal for weight measurement, ensuring accurate weight data is available for the next use. The complete workflow consists of removing a spool from the AMS after printing completes, placing it on the scale, and pressing the scale button once the weight reading stabilizes.

Weight information is immediately synchronized with the inventory system.

### Weight Calculation During Printing

While scale-based weighing delivers accuracy and simplicity, it cannot be performed when a spool is actively in use within the AMS or loaded into the external feed. Spools frequently remain in the AMS across multiple print jobs, making continuous weight tracking essential.

To address this requirement, SpoolEase monitors active print jobs and calculates consumed weight as printing progresses through each layer and color change, automatically decreasing the recorded spool weight. This calculation represents an estimate, albeit a reliable one, as it depends on the filament density parameter specified in filament settings. This value can vary between filaments, and in practice, users rarely adjust it. However, filaments of a given type have sufficiently similar densities to make this approach accurate enough for practical applications.

The limitation of relying exclusively on this method is that it cannot account for filament breaks, jams within the AMS, manual cutting, or other disruptions. Additionally, certain printer operations, such as pre-print calibration routines, are not reported and therefore not included in consumption calculations.

The advantage of this approach is the ability to monitor remaining filament in real-time as the printer consumes it, with visibility both in the inventory system and through spool information displayed when selecting a slot in the console.

:::info
SpoolEase cannot track filament consumption when the print file is loaded from the printer’s internal memory. This includes:
  1. Printing preloaded models that come with the printer
  2. Using the **Print Again** button on the printer display after a print completes
  3. Reprinting a previously printed model from the printer’s internal memory
:::

### Net Weight Calculation

The most useful weight value is the **Net Weight**.

To calculate it, a measured **Gross Weight**, taken using SpoolEase Scale, must be available. In addition, one of the following is required:

- **Empty Weight**  
or  
- **Label Weight** and **Full Weight** (weight when new)

The Empty Weight can be entered manually. Also, when linking a new full spool (stating it is new unused), it is calculated and filled automatically if missing, but it can also be edited o r cleared later.

Depending on the available data, Net Weight is calculated as:

- `Net Weight = Gross Weight - Empty Weight - Filament Consumed Since Last Weight (tracked from prints)`
- `Net Weight = Gross Weight - (Full Weight - Label Weight) - Filament Consumed Since Last Weight (tracked from prints)`

The second formula simply estimates the empty spool weight using the Full and Label weights in case the Empty weight is missing.

:::note
In theory, Net Weight could be estimated without Gross Weight by subtracting consumed filament from the Label Weight.  
In practice, this can be highly inaccurate due to factors such as print files that can't be retrieved, filament loss outside prints, missing print tracking, or incorrect filament density.  
For this reason, SpoolEase intentionally does not perform this calculation, though the reported data allows you to do it manually if desired.
:::

### Weight Display in SpoolEase Console

SpoolEase Console displays weight information in several places:

1. **Main slots view**  
   - If Net Weight can be calculated, it is shown directly on the slot. This is normally a positive value, though invalid data may result in a negative value.  
   - If Net Weight cannot be calculated, a negative (or zero) value is shown, representing filament consumed in printing since the spool was loaded into the AMS or used as an external spool.

2. **Slot details** (when pressing a slot)  
   - **Slot Information page**: **Consumed since Loaded** shows the filament used since loading the spool into the AMS or as an external spool.  
   - **Spool Information page**: Displays all spool-related values, including Label, Empty, Full, Net, and Gross weights (including missing values).

:::note
When a spool is considered new and unused, the Net weight field in the inventory displays the label weight as the net weight (in parentheses).  
Once a spool is linked to a tag, it is considered in use. From that point on, the system no longer assumes the spool is unused and rely on the actual weight measured by the scale to calculate the net weight. This means that if a spool is tagged but its weight is not measured for any reason, the net weight field will appear empty.  
This is especially relevant when importing a ambu Lab spool while it is still packaged and going through the link step. In this case, even though the spool is still in its closed package, no net weight will be shown.  
If you want to import a Bambu Lab spool while it is still packaged, without weighing it, and still see the net weight as the label weight, skip the link step on import and link the tag only when you actually start using the spool. With Bambu Lab spools this is a good idea any way since there are two tags and you need to know which tag you linked to which is difficult when it's still in the package.
:::




## Spool Weight Glossary

**Label Weight**  
The weight printed on the spool's label, typically indicating the nominal filament weight without including the spool itself.

**Empty Weight**  
The weight of the spool alone, without any filament. Useful for calculating remaining filament.

**Full Weight**  
The total weight of the spool when it is full of filament, including the spool itself.

**Gross Weight**  
The current combined weight of the spool and filament, as measured on the scale.

**Used Weight**  
The amount of filament that has been used from the spool so far, either through printing or removed/broken/cut in any way.

**Net Weight**  
The weight of the filament alone, excluding the spool.  
Calculated as Gross Weight minus Empty Weight, or Gross Weight minus 

**Printed Since Added**  
The amount of filament used for printing since the spool was first added to the inventory, tracked via printer activity.

**Printed Since Weighted**  
The amount of filament used for printing since the last time the spool was weighed on the scale.

**Consumed Since Load (to AMS)**  
The amount of filament used since the spool was loaded into the AMS (Automatic Material System).

## Calibrating the Scale

