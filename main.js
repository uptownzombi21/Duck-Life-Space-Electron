const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,  // Allows using Node.js features in the renderer process (html, js)
    }
  });

  // Load the HTML file
  win.loadFile('index.html');

  win.on('closed', () => {
    win = null;  // Dereference the window when it's closed
  });
}

app.whenReady().then(createWindow);

// Quit the app when all windows are closed (except for macOS where it's common to keep apps running)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});