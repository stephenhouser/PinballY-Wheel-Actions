# Wheel Actions for PinballY

Add wheel items to PinballY that can run actions, change filters, and more. Any action you can code in JavaScript can now be triggered from a wheel item.

Very terse information here. This is a work-in-progress.

## Installation

1. Copy the files in `PinballY` into your `PinballY` directory

2. Update your `PinballY\Scripts\main.js` to include:

```
import 'wheel-actions.js'
```

3. Add the 'Wheel Actions' system to your Settings. You can do this manually
with the Options dialog in PinballY or simply add the `Settings.txt-wheel-actions` 
to the end of your existing `Settings.txt`. Make sure you adjust the system
number to an unused system in your cabinet.

4. Add `.js` files to your liking

5. Configure the `.js` Wheel Actions just as you would any other PinballY table.

6. Enjoy.