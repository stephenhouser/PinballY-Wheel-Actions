// Set filter to only tables with category Adult
import {isWheelAction} from '../wheel-actions.js'

const NEW_GAME_COUNT = 10;

export function doAction() {
	let filterCmd = createNewGameFilter(NEW_GAME_COUNT);
	mainWindow.doCommand(filterCmd);
}

function createNewGameFilter(gameCount) {
	let newGames;

	return gameList.createFilter({
		id: "New Tables",
		title: "Newest Tables Added",
		before: function() {
			newGames = getNewGames(gameCount);
		},
		select: function(game) {
			return newGames.get(game.id);
		},
		after: function() {
			newGames = undefined;
		}
	});
}

function getNewGames(gameCount) {
	let allGames = gameList.getAllGames();
	let activeGames = allGames.filter((game) => isActiveGame(game));
	activeGames.sort(function(firstGame, secondGame) {
		// sort in descending order of dateAdded
		return firstGame.dateAdded > secondGame.dateAdded;
	});

	let newGames = activeGames.slice(0, gameCount);
	return new Map(newGames.map(g => [g.id, g]));
}

function isActiveGame(game) {
	return game 
		&& !game.isHidden 
		&& game.isConfigured 
		&& !isWheelAction(game);
}
