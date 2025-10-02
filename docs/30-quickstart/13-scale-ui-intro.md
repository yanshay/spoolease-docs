---
sidebar_position: 13
title: Scale UI Intro
---

import scaleLoaded from '../img/scale-loaded.png';

## Intro to SpoolEase Scale "UI"

Interaction with SpoolEase Scale occurs primarily through the SpoolEase Console display. 
Additionally, SpoolEase Scale features an RGB LED that provides direct status information and two buttons at the front of the case.

## LED Status Indicators

The RGB LED communicates the following states, with earlier states taking precedence in case two apply at the same time:

These are the main colors to be aware of, more are detailed in the full guide.
- **Flashing Red** - SpoolEase Scale is not connected to WiFi
- **Constant Red** - SpoolEase Scale is not connected to SpoolEase Console (but is connected to WiFi)
- **Orange** - The scale is not calibrated
- **Yellow** - Load detected on the scale, but weight is unstable
- **Blue** - Load detected on the scale and reading is stable

## In SpoolEase Console
A small rectangular information panel appears in the middle of the display, below the AMS slots view and above the message area. This panel shows SpoolEase Scale information with color-coding based on status:

- **Red background** - Indicates an error condition:
  - No communication with SpoolEase Scale
  - SpoolEase Scale is not calibrated

- **Yellow background** with weight value - Load detected but reading is unstable
- **Blue background** with weight value - Load detected and reading is stable

<img src={scaleLoaded} alt="Scale Display" class="img-shadow" />

SpoolEase can display the weight of any object (typically a spool) and calculate net filament weight if the spool core weight is known from an NFC tag scan.

If a single value is shown, the system doesn't know the spool core weight and shows only the current weight on the scale.
If the spool core weight is known, it displays two values in the format `net-weight/total-weight` (e.g., `432g / 556g`). This means the total spool weight is 556g, with 432g of usable filament.
