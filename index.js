const electron = require('electron');
const {app, BrowserWindow, ipcMain} = electron;

let mainWindow;

app.on('ready', ()=>{
	mainWindow = new BrowserWindow({
		webPreferences : {
			nodeIntigration: true	
		} 
		});
	mainWindow.loadFile('./main.html')
});