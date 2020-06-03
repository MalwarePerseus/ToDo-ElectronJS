const electron = require('electron');
const {app, BrowserWindow, ipcMain, Menu} = electron;

let mainWindow;

app.on('ready', ()=>{
	mainWindow = new BrowserWindow({
		webPreferences : {
			nodeIntigration: true	
		} 
		});
	mainWindow.loadFile('./main.html')

	const mainMenu = Menu.buildFromTemplate(menuTemplate);
	Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [
	{
		label: 'File',
		submenu:[
			{ label: 'New Todo'},
			{ label: 'Quit',
				accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q', 
				// accelerator: (() => {
				// 	if (process.platform === 'darwin') {
				// 		return 'Command+Q';
				// 	} else {
				// 		return 'Ctrl+Q'
				// 	}
				// })(), 
				click() {
					app.quit();
				}
			}
		]
	}
]; 
if (process.platform === 'darwin'){
	menuTemplate.unshift({});
	}
