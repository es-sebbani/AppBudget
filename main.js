const { app, BrowserWindow} = require ('electron');
const path = require('path');

//Création d'une fenetre
function createWindow()
{
    const win= new BrowserWindow({
        width : 1280,//largeur
        height : 720,//hauteur
        minWidth : 1024,
        minHeight : 640,
        closable : true,
        darkTheme : true,
        frame : false,
        icon : path.join(__dirname,'./ico.ico'),
        webPreferences : {
            preload : path.join(__dirname,"preload.js")
        }
    })
    win.loadFile("index.html");
}
//quand electron est prèt  !
app.whenReady().then(() => {
    createWindow();
    app.on('activate',() => {
        if(BrowserWindow.getAllWindows().length ===0)
        {
            createWindow();
        }
    });
});
//gestion de la fermeture de toutes les fenetres
app.on('window-all-closed',() => {
    if(process.platform !== 'darwin')
    {
        app.quit();
    }
});