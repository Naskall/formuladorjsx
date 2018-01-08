const electron = require('electron');
const {app,BrowserWindow} = electron;

let mainWindow;

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:1600,
        height:700,
        fullscreen:true,
        resizable:false,
        movable:false,
        frame:false,
        webPreferences:{backgroundThrottling:false}

    });
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
})

app.on('window-all-closed',()=>{
    app.quit();    
})