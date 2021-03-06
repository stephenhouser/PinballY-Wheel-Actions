// Set filter to only tables with category Adult
import {isWheelAction, isActiveGame} from '../wheel-actions.js'

const GAME_COUNT = 10;

let filterCmd;

export function doAction() {
	let filteredGames;
	if (!filterCmd) {
		filterCmd = gameList.createFilter({
			id: "Just Added",
			title: "Just Added Tables",
			before: function() {
				filteredGames = getJustAddedGames(GAME_COUNT);
			},
			select: function(game) {
				return filteredGames.get(game.id);
			},
			after: function() {
				filteredGames = undefined;
			}
		});
	}

	mainWindow.doCommand(filterCmd);
}

function getJustAddedGames(gameCount) {
	let allGames = gameList.getAllGames();
	let activeGames = allGames.filter((game) => isActiveGame(game));
	activeGames.sort(function(firstGame, secondGame) {
		// sort in descending order of dateAdded
		return secondGame.dateAdded - firstGame.dateAdded;
	});

	let addedGames = activeGames.slice(0, gameCount);
	return new Map(addedGames.map(g => [g.id, g]));
}
