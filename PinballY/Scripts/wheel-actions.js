// The name given to the Wheel Action system in PinballY Options
let WHEEL_ACTION_SYSTEM = 'Wheel Actions';

// Test if game is a Wheel Action
function isWheelAction(game) {
    if (game && game.system) {
        if (game.system.displayName == WHEEL_ACTION_SYSTEM) {
            return true;
        }
    }

    return false;
}

// Create widening filter to include Wheel Actions
gameList.createMetaFilter({
    includeExcluded: true,
    priority: 100000,
    select: function(game, included) {
        return included || isWheelAction(game);
    }
});

// Dynamically load and execute a wheel action script
function doWheelAction(game) {
    let gameFile = game.resolveGameFile() || { };
    import(gameFile.path)
        .then((module) => {
            module.doAction();
        });
}

// Intercept opening of main menu and
//  ... prevent showing menu if this is a Wheel Action
//  ... execute the wheel action script
mainWindow.on("menuopen", ev => {
    if (ev.id == "main") {
        let game = gameList.getWheelGame(0) || { };
        if (isWheelAction(game)) {
            doWheelAction(game);
            ev.preventDefault();
        }
    }
});

// Intercept PlayGame command and
//  ... execute the wheel action script
mainWindow.on("command", ev => {
    if (ev.id == command.PlayGame) {
        let game = gameList.getWheelGame(0) || { };
        if (isWheelAction(game)) {
            doWheelAction(game);
            ev.preventDefault();
        }
    }
});



// Filters
// [Script] NeverPlayed
// [Script] AddedWithin.7
// [Script] AddedWithin.30
// [Script] AddedWithin.365
// [Script] PlayedWithin.7
// [Script] PlayedWithin.30
// [Script] PlayedWithin.365
// [Script] AddedBefore.7
// [Script] AddedBefore.30
// [Script] AddedBefore.365
// [Script] Category.
// [Script] Category.isAlternateVersion
// [Script] Uncategorized
// [Script] YearRange.1960.1969
// [Script] YearRange.1970.1979
// [Script] YearRange.1980.1989
// [Script] YearRange.1990.1999
// [Script] YearRange.2000.9999
// [Script] Manuf.0xACE
// [Script] Manuf.Bally
// [Script] Manuf.Bally 1978
// [Script] Manuf.Capcom
// [Script] Manuf.Data East
// [Script] Manuf.Gottlieb
// [Script] Manuf.Gottlieb 
// [Script] Manuf.JPSalas
// [Script] Manuf.Midaway
// [Script] Manuf.Midway
// [Script] Manuf.Premier
// [Script] Manuf.Sega
// [Script] Manuf.Stern
// [Script] Manuf.Williams
// [Script] Hidden
// [Script] Unconfigured
// [Script] NotPlayedWithin.7
// [Script] NotPlayedWithin.30
// [Script] NotPlayedWithin.365
// [Script] Rating.0
// [Script] Rating.1
// [Script] Rating.2
// [Script] Rating.3
// [Script] Rating.4
// [Script] Rating.5
// [Script] Rating.-1
// [Script] System.Visual Pinball 9
// [Script] System.Visual Pinball X
// [Script] System.Wheel Actions
// [Script] All
// [Script] Favorites