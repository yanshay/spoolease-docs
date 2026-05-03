---
draft: true
---
# Spool Scanner

## Introduction

**Spool Scanner** helps fill spool information from images when adding a new spool or editing an existing one.

You can give it photos of the spool, the package, the label, or even a product page screenshot. SpoolEase will scan the images, suggest field values, and let you review them before applying anything to the spool record.

The goal is to reduce manual typing, especially for brand, material, label weight, color, and similar fields.

## Before You Start

:::info
Spool Scanner requires an AI API key to be configured first.

In the inventory application, press the settings icon at the top right, open **Console Configuration**, and set the **OpenAI API Key** there.

If you have not done this before, see [OpenAI API Key](openai-api-key).
:::

- Open the spool in the add or edit dialog.
- Go to the **Spool Scanner** tab.
- If no AI key is configured, the tab will tell you that the feature is not available yet.

## What You Can Scan

Spool Scanner works best with one or more of the following:

- A photo of the spool itself
- A photo of the box or bag label
- A product page screenshot
- A close-up photo of material and color labels
- Several photos of the same spool from different angles

You can add up to 4 images for a single scan.

## Typical Fields It Can Fill

Depending on what appears in the images, Spool Scanner may suggest values for fields such as:

- **Brand**
- **Label Weight**
- **Material**
- **Material Subtype**
- **Slicer Filament**
- **Color Name**
- **Color RGBA**
- **Full When Added**
- **Empty Weight**
- **Spools Count**
- **Note**

Not every scan will produce all fields.

## Basic Flow

1. Open the spool in **Add** or **Edit** mode.
2. Go to **Spool Scanner**.
3. Add one or more images.
4. Press **Scan**.
5. Wait for the scan to complete.
6. Review the suggested fields.
7. Approve the fields you want to use.
8. Press **Apply approved**.
9. Review the values in **Filament Info** and save the spool normally.

:::note
Applying approved fields updates the form, but it does **not** save the spool automatically.
:::

## Adding Images

You can add images in several ways:

- Paste an image from the clipboard
- Upload an image from the device
- Take a photo
- Load an image from a URL

:::note
Loading an image from a URL depends on the website hosting that image. Some websites do not allow their images to be loaded this way. If that happens, save the image or take a screenshot and add it normally.
:::

After adding an image:

- It appears in the image tabs above the canvas
- You can switch between images using the tabs
- You can zoom in, zoom out, and move the image
- You can remove the current image from the canvas

If you have several images, it is usually best to include both:

- one image that clearly shows text
- one image that clearly shows the spool or filament color

## Reviewing the Results

After scanning, Spool Scanner shows one card per detected field.

Each card includes:

- The detected value
- The confidence level
- Which images were used
- Short supporting details

Some cards may also show one of these statuses:

- **Matches current**: the scanned value is the same as the value already in the form
- **Applied**: the value was applied from the current scan session

If a card is collapsed, you can expand it to see more details.

## Approving and Applying

You can:

- Approve fields one by one
- Use **Approve all** to approve everything that can be applied
- Use **Clear approvals** to remove the current approvals

When you press **Apply approved**:

- Only approved fields are copied into the form
- The dialog switches back to **Filament Info**
- The scanner results stay available if you return to the **Spool Scanner** tab

## Scan Progress and Cancel

When a scan is running:

- A progress overlay is shown
- The overlay displays elapsed seconds
- A message explains that scanning may take a while
- You can press **Cancel** to stop the scan

Scan time depends on the number of images, time of day, and the current load on the AI servers. In some cases it may take over a minute.

If you cancel the scan, the current scan attempt is stopped and the previous results remain unchanged.

## Clearing and Re-scanning

The bottom actions in the **Spool Scanner** tab are:

- **Clear Results**: removes the scan results but keeps the images
- **Clear All**: removes both images and results

This lets you either:

- keep the same images and run another scan
- or start over completely

## Tips for Better Results

- Use clear, well-lit photos
- Make sure printed text is readable
- Include a product page screenshot if available
- If the spool itself does not show enough information, also include the package label
- If color matters, include a close photo of the visible filament
- If the first scan misses something, try adding a second image rather than replacing the first one

## Things to Keep in Mind

- The images are uploaded and shared with OpenAI for analysis
- Spool Scanner is a helper, not an automatic final decision maker
- Text visible in the images is usually more reliable than values inferred visually
- Some values, especially visual ones, may be estimates
- You should review the suggestions before applying them

## Troubleshooting

### The scanner says an AI key is required

In the inventory application, press the settings icon at the top right, open **Console Configuration**, set the **OpenAI API Key**, and then return to the spool.

If needed, follow the full setup guide here: [OpenAI API Key](openai-api-key).

### The scan takes a while

This is normal. Scan time depends on the number of images, time of day, and the current load on the AI servers. In some cases it may take over a minute. You can wait for the scan to finish or press **Cancel**.

### The scan found only a few fields

Try adding:

- a clearer label photo
- a product page screenshot
- another angle of the spool or package

### The suggested result is wrong

Do not approve that field. You can scan again with better images or fill the field manually.
