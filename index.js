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
