// Musíš mít nainstalováno: npm install electron-squirrel-startup
if (require('electron-squirrel-startup')) return;

const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    title: "KotakEngine",
    // Ikona v liště okna
    icon: path.join(__dirname, 'assets/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Načte tvůj web z GitHubu
  win.loadURL('https://kotakovec.github.io/kotakengine/');

  // Schová horní menu (File, Edit, atd.)
  win.setMenuBarVisibility(false);

  // Zabrání webu otevírat nová okna (řeší ten zelený čtverec)
  win.webContents.setWindowOpenHandler(() => {
    return { action: 'deny' };
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});