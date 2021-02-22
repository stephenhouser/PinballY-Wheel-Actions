# The Concept 

[PinballY Users Community on Facebook](https://www.facebook.com/groups/781499215682063/?multi_permalinks=1065515423947106&notif_id=1614013597614579&notif_t=feedback_reaction_generic&ref=notif)

Jasiel Estrada
...
1. Create a fake "system" to represent your new top-level wheel menu. Call it "Top Level Menu" or whatever. It's a fake system, so it's not going to be tied to VP or FP or anything like that; it's just there to hold fake games representing the top-level menu items. The important thing is to give it a game file folder and default filename extension, so that PinballY will search for its fake games. You can make the file extension something like ".menu" to suggest what's going on, but it doesn't matter what you use, as long as you pick something.

2. Now create the fake files for the fake "games" in the fake "system" folder. Each one of these is going to represent a slot on the wheel menu you want to create. Per your example, you'd create a fake game called MAME.menu, one called Nintendo.menu, one called Sega Genesis.menu, etc. These can just be empty text files you create with Notepad or from the Windows desktop (Create New Item > Text File, say).

3. Now PinballY will start seeing those fake game files and think they're games, so they'll show up in the wheel. That's how you get the wheel entries you're after. You can set each one up with media (wheel icon, background image) using the normal drag-and-drop method to set up a game. For example, to set a wheel icon, drag a PNG file onto the main window and drop it onto the "Drop wheel icon here" box that lights up when you drag the file.

At this point, you'll have all of these new fake games mixed into your regular wheel list. To create the hierarchical menu system you're after, you need to do a little Javascript coding to slice and dice the filters the way you want. This is where you'll have to work out the details according to the exact UI flow you're after. But the basics should be:

4. Create a metafilter to show the fake games when you're in "Menu" mode, and hide them when you're not in "Menu" mode. See the following help sections:

```
Javascript scripting > Metafilters
Javascript scripting > Worked Examples > Family Filter
```

The Family Filter will give you a concrete example of how to use a metafilter, but you don't want to follow it exactly - treat it as an analogy that needs to be adapted for this new situation. In particular, you won't need any of the "Tag" stuff as filter criteria. It's much easier than that - since the fake games are all part of the fake "Top Level Menu" system, you can just filter on that system. When you're in menu mode, filter so that ONLY "Top Level Menu" games appear. When you're NOT in menu mode, filter so that NONE of the "Top Level Menu" games appear.

5. You'll need a global variable that tells you whether you're in menu mode or not, so that the filter can decide what to do. You can follow the example of how the Family Filter does that.

6. Finally, you'll need to tweak the system menus to get the UI flow you want, in and out of the new Top Level Menu filter. When you're in menu mode, you'll want to remove all of the normal game-related menu items (Play, Info, Flyer, Rate this game, etc), and add a custom menu command for "Open this category" or whatever you want to call it. That command just has to switch out of menu mode and select the appropriate game filter. When you're NOT in menu mode, you'll want to intercept the Exit command and make it switch back into menu mode.

There are undoubtedly more details, but hopefully that'll give you a starting point if you want to explore it. If you get it working, it'd be great if you want to write it up as a "worked example" that I could add to the help.