# Backup and Restore

### Backup

- Backup can be done manually from the inventory application.
- It backs up all spools and storage related information.
- It **does not** backup the configurations performed in the Web Config (custom filaments, spools, printers, device name, etc.).
- It **does not** backup the state of the printer (slots spool id's etc.)

### Restoring From Backup

You can restore the inventory from a backup (using the Backup button) using the following steps:

1. Turn off SpoolEase.  
2. Copy the backup file to the SD card root directory and rename it to `store.bak`.  
3. Delete the `STORE` folder if it exists.  
4. Insert the SD card back into SpoolEase and turn it on. A progress display will appear, followed by a success or failure message.

