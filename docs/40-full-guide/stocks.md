# Stocks of Spools (0.6)

:::info

This feature is available starting version 0.6

:::

When building an inventory of spools, it’s often convenient to buy several spools of the same type. At any given time, only one spool (or a few) are actually in use, while the rest remain as a stock to be used once the active ones are finished.

To simplify managing these spools in the inventory, instead of creating multiple individual spool records, you can create a record of type **Stock**. Do this by selecting the **Stock** option at the top of the Add/Edit form used to enter spool information, and then enter the number of spools in that stock.

Whenever you want to start using a spool, you can **Split** it from the stock. This creates a new record of type *Spool* and reduces the number of spools in the corresponding stock record. You can also split a single stock record into multiple stock records in the same way. This is useful when you want to place stocks, even of the same type, in different locations and assign a separate location to each stock record.

A stock record:
- Must contain at least two spools  
- Cannot be linked to a tag  
- Cannot be loaded into staging  
- Has a single location shared by all spools in the stock record  
- **Full When Added** must be set to **Full Unused** — the stock record represents only new, unused spools.

Once a spool is split from a Stock record, it becomes a regular spool record like any other and exists independently.
