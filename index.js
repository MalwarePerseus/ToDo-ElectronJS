const electron = require('electron');
const {app, BrowserWindow, ipcMain, Menu} = electron;

let mainWindow;
let addWindow;

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

function createAddWindow() {
	addWindow = new BrowserWindow({
		width: 300,
		height: 200,
		title:'Add New Todo'
	});
}

const menuTemplate = [
	{
		label: 'File',
		submenu:[
			{ 
				label: 'New Todo',
				click() {
					createAddWindow();
					}
			},

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
