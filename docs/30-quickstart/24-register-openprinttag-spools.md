---
sidebar_position: 24 
id: register-openprinttag-spools
title: Register OpenPrintTag Spools
sidebar_label: Register OpenPrintTag Spools
---

OpenPrintTag uses NFC technology not supported by current SpoolEase hardware (PN532). Until this is resolved, clone OpenPrintTag tags using your phone (e.g. NfcTools) onto an NTAG215 tag, attach it to the spool, and scan it.

The data will be imported automatically into the SpoolEase inventory, avoiding manual entry.

OpenPrintTag tags don’t include all data used by SpoolEase (e.g. slicer filament settings which is specific to your slicer configuration), so you may need to add or update missing information in the inventory app. Defaults are added during the import process wherever possible.
