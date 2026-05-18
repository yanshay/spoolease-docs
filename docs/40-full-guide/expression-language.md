---
title: Expression Language
---

You can use the expression language to filter spools in a flexible way.

You do not need to learn all of it at once. Start with simple searches like `PLA Red`, then add more only when you need them.

## What a Search Looks At by Default

If you do not name a field, the search checks:

- the spool's main text
- the spool ID
- top-level weight checks such as `>250g`, which check net weight

The main text is built from the brand, material, subtype, and color name.

Examples:

- `PLA`
  Finds spools whose main text contains `PLA`.
- `10`
  Can find a spool whose ID is `10`.
- `>250g`
  Finds spools whose net weight is above 250 grams.

You can also search one specific field, including fields that are not part of the main text. See [Search in One Specific Field](#search-in-one-specific-field) and [Field Names, Aliases, and Built-In Shortcuts](#field-names-aliases-and-built-in-shortcuts).

## Quick Examples

| Expression | What it means |
| --- | --- |
| `RED PLA` | Find spools that match both `RED` and `PLA`. |
| `PLA (Red, Green)` | Find PLA spools that are either red or green. |
| `Red PLA, Gray PETG` | Find red PLA spools, or gray PETG spools. |
| `ASA >250g` | Find ASA spools with more than 250 grams of net weight. |

## Use a Space to Mean "and"

To make the simple filter cases simple and appear like regular text as you would expect, a space means both parts must match.

Examples:

- `PLA Red`
  Finds spools that match both `PLA` and `Red`.
- `Polymaker PLA`
  Finds spools that match both `Polymaker` and `PLA`.

## Use a Comma to Mean "or"

A comma means either side can match.

Examples:

- `PLA, PETG`
  Finds spools that are PLA or PETG.
- `Red PLA, Gray PETG`
  Finds red PLA spools, or gray PETG spools.

## Use `!` to Mean "not"

Use `!` to exclude something.

Examples:

- `PLA !Red`
  Finds PLA spools that are not red.
- `!(PLA, PETG)`
  Finds spools that are neither PLA nor PETG.

## Search by Word

A plain search like `PLA` or `Red` matches a whole word.

Examples:

- `Truck`
  Does not match `Truck-Red`.
- `Truck-Red`
  Does match `Truck-Red`.

## Search for an Exact Phrase

Use quotes when you want words next to each other in the same order.

Examples:

- `"Truck Red"`
  Finds the exact phrase `Truck Red`.
- `"Polymaker PLA"`
  Finds that exact text together.

You can use `*` inside quotes to match part of one word while still keeping the words next to each other.

Example:

- `"Bambu Lab*"`
  Can match `Bambu Lab`, `Bambu Lab Basic`, or `Bambu Laboratories`.

Inside quotes, `*` still works inside one word. It does not jump across separate words.

If you need a literal `*`, write `\*`. You can also write `\"` for a quote, `\\` for a backslash, and `\n`, `\r`, or `\t` for line breaks and tabs.

An exact phrase is not the same as an exact field match. It only means the words must appear together. To require the whole field to be exactly a value, see [Match a Field Exactly](#match-a-field-exactly).

Text matching treats repeated spaces as one space.

Example:

- `"Bambu Lab"`
  Can match stored text like `BAMBU    Lab`.

## Group Parts with Parentheses

Use parentheses to keep part of the search together.

Examples:

- `PLA (Red, Green)`
  Finds PLA spools that are red or green.
- `!(Red, Green)`
  Finds spools that are neither red nor green.

## Use `*` to Match Part of a Word

Use `*` when you want to match part of a word.

Examples:

- `PLA*`
  Matches words that start with `PLA`.
- `*maker`
  Matches words that end with `maker`.
- `*red*`
  Matches words that contain `red`.
- `"Bambu Lab*"`
  Matches a phrase where the second word starts with `Lab`.

`*` works inside one word. It does not jump across separate words.

## Uppercase and Lowercase Do Not Matter

Searches are not case-sensitive.

Examples:

- `red`, `RED`, and `ReD`
  All mean the same thing.
- `COLOR:red`
  Works the same as `color:red`.

## How Words Are Split

Words split at spaces and at these characters:

`, / \ ! # @ ( ) ; | . " { } [ ]`

Examples:

- `Red/Black`
  Can be found with `Red` or `Black`.
- `Truck-Red`
  Stays one word, because `-` does not split it.
- `#Main/S:5`
  Can be found with `Main` and `S:5`.

## Search in One Specific Field

Use `field:search` when you want to search only one field.

Examples:

- `material:PLA`
  Checks only the material field.
- `note:dry`
  Checks only the note field.
- `description:"Polymaker PLA"`
  Checks only the main text field.

You can use this with fields inside the main text and with other fields such as notes, tags, weights, and locations. See [Field Names, Aliases, and Built-In Shortcuts](#field-names-aliases-and-built-in-shortcuts).

## Match a Field Exactly

Use `field:=value` when the whole field must be exactly that value.

Examples:

- `brand:=Polymaker`
  Finds spools whose brand is exactly `Polymaker`.
- `brand:="Bambu Lab"`
  Finds spools whose brand is exactly `Bambu Lab`.
- `brand:!="Bambu Lab"`
  Finds spools whose brand is not exactly `Bambu Lab`.
- `brand:="Bob \"Special\" Filament"`
  Finds spools whose brand is exactly `Bob "Special" Filament`.

Use quotes when the exact value contains spaces, is empty, or looks like a number.

You can also check for one of several exact values.

Examples:

- `brand:=("Bambu Lab", Polymaker)`
  Finds spools whose brand is exactly `Bambu Lab` or exactly `Polymaker`.
- `brand:!=("Bambu Lab", Polymaker)`
  Finds spools whose brand is not exactly `Bambu Lab` and not exactly `Polymaker`.

Exact text matches are not case-sensitive, and repeated spaces count as one space.

Wildcards are not active in exact text matches. `brand:="Bambu Lab*"` checks for a literal `*` in the brand.

Example:

- `brand:="Bambu Lab"`
  Can match a stored brand like `BAMBU    Lab`.

You can also use exact matching to check whether a text field is empty.

Examples:

- `note:=""`
  Finds spools whose note is empty.
- `note:!=""`
  Finds spools whose note is not empty.

A field that is missing or only spaces counts as empty.

## Keep Several Checks in the Same Field

If more than one check should stay inside the same field, use parentheses.

Examples:

- `color:(red, green)`
  Finds spools whose color is red or green.
- `id:(15, 22, >100)`
  Checks all of those conditions inside the ID field.

Without parentheses, the field name applies only to the next part.

Example:

- `color:black red`
  Means color is black, and `red` can match somewhere else.

## Short Names for Common Fields

Some fields have shorter names.

Examples:

- `color:red`
  Uses `color` as a short name for `color_name`.
- `net:>250g`
  Uses `net` as a short name for `weight_net`.
- `actual:Main`
  Uses `actual` as a short name for `location_actual`.
- `assigned:Shelf-2`
  Uses `assigned` as a short name for `location_assigned`.

The full list is in [Field Names, Aliases, and Built-In Shortcuts](#field-names-aliases-and-built-in-shortcuts).

## Filter by Numbers

Some fields can be checked with numbers.

You can use:

- `<`
- `<=`
- `>`
- `>=`
- `=`
- `!=`

Examples:

- `net:>250g`
  Finds spools whose net weight is above 250 grams.
- `spools_count:>=2`
  Finds records that contain two or more spools.
- `used:<20`
  Finds spools with less than 20 grams used.

Numeric fields are listed in [Field Names, Aliases, and Built-In Shortcuts](#field-names-aliases-and-built-in-shortcuts).

## Use `g` and `kg`

Weight fields understand `g` and `kg`.

Inside a weight field, the unit is optional. If you leave it out, the number is read as grams.

Examples:

- `net:>250`
  Checks for more than 250 grams.
- `label:160`
  Checks for exactly 160 grams.
- `net:<=0.5kg`
  Checks for 500 grams or less.
- `>250g`
  Without a field name, this checks net weight, and here the unit is required.

Keep the unit attached to the number when you write one.

Example:

- `>250 g`
  Does not work.

## Short Form for an Exact Number Match

Inside numeric fields, you can often write just the number.

Examples:

- `spools_count:2`
  Means exactly 2 spools.
- `tags_count:3`
  Means exactly 3 tags.
- `gross:200`
  Means exactly 200 grams gross weight.

This is the same as using `=`.

Example:

- `spools_count:2`
  Means the same as `spools_count:=2`.

For weight fields, `gross:200` means 200 grams. You can still write `gross:200g` if you want.

## How Spool ID Searches Work

The `id` field behaves a little differently. It can work like text and like a number.

Examples:

- `id:ABC-42`
  Finds that ID as text.
- `id:*10*`
  Finds IDs that contain `10`.
- `id:>100`
  Finds numeric IDs above 100.
- `id:010`
  Can match the text `010`, and can also match numeric ID `10`.
- `id:="010"`
  Checks the exact ID text `010`, so it keeps the leading zero.

If an ID is not numeric, numeric comparisons like `id:>100` will not match it.

Use exact text matching when `010` and `10` should be treated as different IDs.

## Built-In Shortcuts

Some useful checks are already built in. These start with `%`.

Examples:

- `%tagged`
  Finds spools that have at least one tag.
- `!%tagged`
  Finds spools with no tags.
- `%stock`
  Finds stock records.
- `%placed`
  Finds spools that have a current location.
- `%inprinter`
  Finds spools that are currently in a printer.

More shortcuts are listed in [Field Names, Aliases, and Built-In Shortcuts](#field-names-aliases-and-built-in-shortcuts).

## Searching Lists Like Tags and Colors

The `tags` and `color_rgba` fields are treated as lists.

Each list item is checked on its own.

Examples:

- `tags:ABCD`
  Finds a spool that has tag `ABCD`.
- `tags:=ABCD`
  Finds a tag value that is exactly `ABCD`.
- `tags:=(ABCD, EF12)`
  Finds a tag value that is exactly `ABCD` or exactly `EF12`.
- `tags:*BC*`
  Finds a tag value that contains `BC`.
- `tags:=""`
  Finds spools with no tags.
- `color_rgba:FF0000FF`
  Finds a spool that has that RGBA color value.

One search does not stretch across two separate list items. Exact matching also checks each list item on its own.

These fields are listed in [Field Names, Aliases, and Built-In Shortcuts](#field-names-aliases-and-built-in-shortcuts).

## Counting Spools, Tags, and Colors

These fields let you search by count:

- `spools_count`
- `tags_count`
- `color_count`

Examples:

- `spools_count:2`
  Finds records that contain exactly 2 spools.
- `tags_count:>=2`
  Finds records with 2 or more tags.
- `color_count:1`
  Finds records with exactly 1 saved color value.

## Searching Locations

Location searches work for both managed locations and free-text locations.

In saved location values, the first character often tells you what kind of location it is:

- `#` means structured storage, such as `#Main/S:3/P:2`
- `@` means free text, such as `@loaned to john`
- `!` means the spool is in a printer

These leading characters are part of the saved location value. They are not field names, so they are not listed in the table at the end.

For managed locations such as `#Main/S:3/P:2`, you can search useful pieces of the path.

Examples:

- `actual:Main`
  Finds spools whose current location includes `Main`.
- `actual:S:3`
  Finds spools whose current location includes `S:3`.
- `actual:Main/S:*`
  Finds spools somewhere under `Main/S`.

For free-text locations, normal word searches and quoted phrases work too.

Examples:

- `actual:loaned`
  Finds locations that include the word `loaned`.
- `actual:"loaned to john"`
  Finds that exact location text.

The location fields are listed in [Field Names, Aliases, and Built-In Shortcuts](#field-names-aliases-and-built-in-shortcuts).

## The `@` Shortcut

At the top level, `@...` is a short form of `actual:...`.

This is different from a saved location value that starts with `@`.

Examples:

- `@Main`
  Means the same as `actual:Main`.
- `@"loaned to john"`
  Means the same as `actual:"loaned to john"`.
- `@(Main, loaned)`
  Searches the current location for `Main` or `loaned`.
- `@@loaned`
  Searches for the literal text `@loaned` in the current location.

## Matching Different Unicode Forms

Searches also handle different Unicode forms of the same visible text.

Example:

- `brand:café`
  Can match a stored value like `CAFÉ`.

This does not remove accents.

Example:

- `brand:cafe`
  Is not the same as `brand:café`.

## Spaces and Formatting

Extra spaces are usually fine.

Examples:

- `material:PLA color:Red`
  Works normally.
- `material: PLA`
  Also works.
- `weight_net: < 250`
  Also works.

One exception is weight units: the unit must stay attached to the number.

Example:

- `>250 g`
  Does not work.

## Invalid Searches and Current Limits

Here are a few common things that do not work:

- `>250`
  A top-level numeric check needs a unit such as `g` or `kg`.
- `""`
  Empty quoted phrases do not work by themselves. To check an empty field, name the field, such as `note:=""`.
- `brand:""`
  Empty quoted phrases do not work inside a field either. Use `brand:=""` to check for an empty brand.
- `brand:=()`
  Exact-value lists cannot be empty. Use values inside the parentheses, such as `brand:=(Bambu, Polymaker)`.
- `"bad\q"`
  Unknown quoted-string escapes do not work. Use only `\"`, `\\`, `\*`, `\n`, `\r`, or `\t`.
- `brand:(material:PLA)`
  You cannot put one field search inside another field search.

Current limits:

- Only `*` is supported as a wildcard.
- Weight units are only `g` and `kg`.
- Empty groups do not work.

## Field Names, Aliases, and Built-In Shortcuts

### Fields and Aliases

| Field name(s) | What it means |
| --- | --- |
| `description` | Main searchable text built from brand, material, subtype, and color name |
| `brand` | Brand name |
| `material` | Material name |
| `subtype` | Subtype or variant |
| `color_name`, `color` | Color name |
| `id` | Spool ID |
| `spools_count` | Number of spools in the record |
| `tags` | Tag values |
| `tags_count` | Number of non-empty tag values |
| `slicer_filament` | Slicer filament name |
| `weight_net`, `net` | Net weight |
| `weight_label`, `label` | Label weight |
| `weight_used`, `used` | Used weight |
| `weight_gross`, `gross` | Gross weight |
| `note` | Note text |
| `color_rgba`, `rgba` | RGBA color values |
| `color_count` | Number of non-empty RGBA color values |
| `data_origin` | Where the data came from |
| `location_actual`, `actual_location`, `actual` | Current location |
| `location_assigned`, `assigned_location`, `assigned` | Assigned location |

### Built-In Shortcuts

| Shortcut | What it means |
| --- | --- |
| `%tagged` | Has at least one tag |
| `%multicolor` | Has at least 2 saved color values |
| `%inprinter` | Current location says the spool is in a printer |
| `%inplace` | Current location and assigned location are the same |
| `%stock` | Record contains 2 or more spools |
| `%transparent` | At least one saved color value includes transparency |
| `%placed` | Has a current location |
| `%assigned` | Has an assigned location |
