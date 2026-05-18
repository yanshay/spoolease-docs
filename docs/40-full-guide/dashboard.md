---
title: Dashboard
---

import dashboardOverview from '../img/dashboard-overview.png';
import dashboardChartEditor from '../img/dashboard-chart-editor.png';
import dashboardInventoryFilter from '../img/dashboard-inventory-filter.png';

# Dashboard

The **Dashboard** gives you a visual summary of your spool inventory. It can show weight, spool counts, record counts, material mix, brand distribution, custom categories, and other views that are useful when managing many spools.

Use it when you want to answer questions such as:

- How much filament do I have by material, brand, or color?
- Which spools are tagged or not tagged?
- Which records match a custom condition?
- Which inventory records are behind a chart value?

<img src={dashboardOverview} alt="Dashboard overview" class="img-shadow" />

## Reading Charts

Each chart is based on the current inventory data. A chart can show values such as:

- **Net Weight**
- **Spools Count**
- **Record Count**
- **Percent of total**

Charts may be shown as bars or pie charts. Bar charts can also be split into several series, for example a brand chart split by material.

If a chart has a split selector, you can use it to view all split values together or focus on one value such as a single material.

## Opening Matching Inventory Records

Most chart values are clickable. Click a bar, a bar segment, or a pie slice to open a confirmation dialog. From there, press **Open Inventory** to view the matching records in the Inventory page.

<img src={dashboardInventoryFilter} alt="Open matching inventory records from dashboard" class="img-shadow" />

The dialog shows:

- Which chart selection you clicked
- How many spools or records match it
- The filter expression that will be applied in Inventory

The filter expression uses the same filtering expression language used by the main Inventory page. For syntax and examples, see [Expression Language](expression-language).

If a chart warns that records match more than one category, the warning can also be opened in Inventory. This is useful when checking overlapping custom groups.

## Editing the Dashboard

Press **Edit Dashboard** to make changes.

In edit mode you can:

- Add charts
- Edit existing charts
- Resize or move charts
- Import and export dashboards or chart packs
- Save, revert, or leave edit mode

Changes are not kept permanently until you press **Save Changes**.

Use **Done** to leave edit mode. If you have unsaved changes, SpoolEase will warn you before you leave the Dashboard page.

## Adding and Editing Charts

Press **Add Chart** to create a new chart, or use the edit button on an existing chart.

The chart editor is split into configuration sections and a live preview.

<img src={dashboardChartEditor} alt="Dashboard chart editor" class="img-shadow" />

The most important sections are:

| Section | What it controls |
| --- | --- |
| **General** | Chart title and description. |
| **Chart** | Chart type, primary measure, and displayed values. |
| **Scope** | Which inventory records are included before grouping. |
| **Group By** | How records are grouped into chart items. |
| **Split By** | Optional bar chart split, such as splitting each group by material. |
| **Layout** | Chart width and height on the dashboard grid. |
| **Presentation** | Bar chart orientation. |

Press **Apply** to apply the chart editor changes to the dashboard draft. Press **Save Changes** afterward if you want to keep the dashboard changes.

## Chart Type, Measure, and Displayed Values

The **Chart Type** can be:

- **Bar**
- **Pie**

The **Primary Measure** is the main value used for chart size and sorting. It can be net weight, spool count, or record count.

**Displayed Values** controls which values are shown in labels and summaries. For example, a chart can primarily measure weight while also showing percent of total.

## Scope Filter

The **Scope Filter** limits which inventory records are included before the chart groups anything.

Examples:

- `%tagged` includes tagged records.
- `material:PLA` includes PLA records.
- `brand:=Bambu` includes records whose brand is exactly Bambu.

The Scope Filter uses the same filtering expression language used by the main Inventory page. For syntax and examples, see [Expression Language](expression-language).

Leave the Scope Filter empty to include the whole inventory.

## Group By

**Group By** decides what each bar or pie slice represents.

There are two modes:

- **Custom Groups**: you define each group label and filter yourself.
- **Inventory Field**: SpoolEase creates groups from a field such as material, brand, or subtype.

Custom groups are useful for categories that do not exist as a single inventory field, such as color families, remaining weight ranges, or tagged vs not tagged.

Each custom group has a **Group Filter**. Group filters also use the same [Expression Language](expression-language).

Inventory field groups are useful when you want SpoolEase to build the groups automatically from your data.

### Other Groups

Some group modes can collect the remaining records into **Other**.

This is useful when you want to show the important groups but avoid losing records that did not match them.

### Overlapping Records

For custom groups, the same record can match more than one group. When that happens, the chart shows a warning below it.

Use the warning to review the overlapping records in Inventory if you want to adjust your group filters.

## Split By

**Split By** is available for bar charts. It divides each bar by a field such as material, brand, or subtype.

For example:

- Group by brand
- Split by material

This shows each brand as a bar, with material segments inside that bar.

When **Default Split** is **All**, the chart can show the split values as:

- **Total bars**
- **Stacked bars**
- **Grouped bars**

**Top Named Values (Rest Added as Other)** controls how many named split values are shown. If more values exist, the remaining values are grouped into **Other** so the totals still represent the full data.

Pie charts do not use Split By.

## Layout and Presentation

The dashboard uses a grid. Each chart has a width and height in grid units.

Use **Edit Layout** to show layout controls directly on the dashboard. You can then change chart size or move charts around.

In the chart editor, use **Layout** to set the chart width and height. Bar charts also have **Presentation** options for automatic, vertical, or horizontal orientation.

On small mobile screens, charts are stacked instead of using the desktop grid layout.

## Importing and Exporting

The Dashboard menu can import and export either a full dashboard or selected charts.

Use **Export Dashboard** when you want to save the entire dashboard configuration.

Use **Export Charts** when you want to share or reuse only selected charts.

Use **Import Dashboard** to replace the current dashboard draft with another dashboard file.

Use **Import Charts** to add charts from another dashboard file into the current dashboard draft.

After importing, press **Save Changes** if you want to keep the result.

## Tips

- Start with a small number of charts and add more as you find questions you want answered.
- Use **Scope Filter** to make focused charts, such as only tagged spools or only one material.
- Use **Group By: Inventory Field** for simple summaries by material, brand, or subtype.
- Use **Custom Groups** when you need categories based on filters.
- Use **Split By** only when the extra detail helps. Too many segments can make a chart harder to read.
- If a chart becomes crowded, try increasing its width or switching bar orientation.
