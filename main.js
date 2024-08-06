// main.js
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const window = new BrowserWindow({
        title: "VlcMetro",
        maximizable: true,
        width: 800,
        height: 600,
        minWidth: 400,
        minHeight: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
          },
    });

    window.loadFile('index.html');
    window.webContents.openDevTools();
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () =>{
    app.quit();
});
