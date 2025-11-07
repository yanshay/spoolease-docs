# Spool Weight Tracking

**Spool Weight Tracking** is one of the key features of SpoolEase.

To get best in class weight tracking SpoolEase employs two complementory underlying methods for telling spool weight:
- Using SpoolEase scale to measure spool's weight
- Monitoring print progress and calculating the amount of filament consumed by the printer as print progress

Each method has its pros/cons and together they provide a good continuous visibility into the spool weight.

On top of that the measuring methods, SpoolEase allows you to provide additional information that will allow it to automatically calculate the amount of filament left on the spool. This information is **Empty Weight**, **Label Weight**, **Full Weight**.
SpoolEase employs a few calculation methods depending on the information it is fed with calculates the **Net Weight* if possible.

The Full Weight can be measured when the spool is still new and unused, either when linking a tag or also later using "Advance Weight" in the staging operations menu.

The other values can be provided when adding the spool information in the inventory application.

### Weighting Using Scale
This is the most accurate way to tell what the spool weight is. The main con of this method is that it's an extra step. Therefore SpoolEase tries to make it as easy as possible. 
Measuring the weight is done when the spool information is loaded in the staging area. Then, pleacing the spool on the scale and pressing it's button takes the measurement. To simplify this even further, when a spool is taken out of the AMS, its information is automatically loaded into the staging area. That's also a great point in time to measure weight, so you know what's the accurate weight when you want to use this spool next time. So a weight workflow ends up being taking a spool after print is done from AMS, placing it on the scale and pressing the scale's button once the weight has stabilized. 
The weight information is immediately updated in the inventory.

### Weight Calculation While Printing
While weighting using the scale is accurate and easy it is impossible to perform when the spool is being used and inside AMS. Many times spools stay in the AMS for many prints and it's important to track the updated weight.
For this purpose, SpoolEase monitors the print and as the print progress, layer by layer, color by color, it calculates the consumed weight and decreases the spool weight automatically. Note that this is an estimate (though a pretty good one) as it relies on filament density variable as specified in the filament settings. This can differ betweeon one filament to antoher and practically no one updates it. But filaments of certain type are close enough for this approach to be accurate enough for practical use.
Con of relying purely on this method is that when filament break, stuck in AMS, being cut for whatever reason, it does not consider that. Also, certain printing operations (such as the calibrations performed by the printer before prints) are not reported and not counted in.
The benefit of this approach is that you can monitor how much filament is left as it is being consumed by the printer, both in the inventory as well as in the spool information by simply pressing the slot in the console.


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
The weight of the filament alone, excluding the spool. Calculated as Gross Weight minus Empty Weight.

**Printed Since Added**  
The amount of filament used for printing since the spool was first added to the inventory, tracked via printer activity.

**Printed Since Weighted**  
The amount of filament used for printing since the last time the spool was weighed on the scale.

**Consumed Since Load (to AMS)**  
The amount of filament used since the spool was loaded into the AMS (Automatic Material System).

## Weighting a Spool

## Updating Spool Weight

## Weight Tracking While Printing

## Net Weight Calculations

## Calibrating the Scale

