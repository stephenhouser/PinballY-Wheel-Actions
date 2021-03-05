//
export function doAction() {
	logfile.log('Wheel Action = Exit');
    mainWindow.doCommand(command.Quit);
}
