
gameList.createMetaFilter({
    includeExcluded: true,
    priority: 100000,
    select: function(game, included) {
        return included || game.system.displayName == 'Wheel Actions';
    }
});

// Intercept command execution to handle our menu items.
mainWindow.on('launchoverlayshow', ev => {
    let game = gameList.getWheelGame(0) || { };
    let system = game.system || { } ;
    if (game.system.displayName == 'Wheel Actions') {
        mainWindow.preventDefault();
    }
})

mainWindow.on("command", ev => {
    if (ev.id == command.PlayGame) {
        let game = gameList.getWheelGame(0) || { };
        if (game.system.displayName == 'Wheel Actions') {
            let gameFile = game.resolveGameFile() || { };
            import(gameFile.path)
                .then((module) => {
                    module.doAction();
                });
            ev.preventDefault();
        }
    }
});