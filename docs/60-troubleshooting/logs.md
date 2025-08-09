---
sidebar_position: 5 
---

# Logs

### Accessing Logs

For troubleshooting, accessing the logs is often necessary.  
Follow these steps to do so:

1. Connect the appropriate device (Console or Scale) to a computer via the USB connector.  
2. Using Chrome or Edge, navigate to any flash firmware button on https://www.spoolease.io (e.g. https://www.spoolease.io/console.html#firmware) and click it.  
3. Select the port.  
4. A dialog will appear asking to choose between installing or "Logs & Console".  
5. Select the "Logs & Console" option.

This opens the Logs terminal view, showing logs as they stream from the device.  
Here you can:  
1. Copy and paste logs directly from the view.  
2. Use "Reset Device" to collect logs starting from device boot, which is often helpful.  
3. Use "Download Logs" to save all logs to a file for easier sharing on Discord/GitHub.

Note: If many logs are generated (some printers produce more logs than others), the browser may slow down.

### Configuring SpoolEase Console Printer Logs

By default, the SpoolEase Console sends standard logs that do not overload the browser or device.  
If more detailed logs (especially full printer logs) are needed, you can enable printer logs per printer in the Web Config.  
Turn this on only when necessary and remember to disable it afterward.  
After changing the setting, apply it and restart the SpoolEase Console.
