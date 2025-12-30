// Na Windows to řeší instalátor, na Linuxu tento řádek prostě nic neudělá, 
// ale je dobré ho nechat takto, aby to v Ubuntu nepadalo, pokud by balíček chyběl.
try {
  if (require('electron-squirrel-startup')) return;
} catch (e) {
  // Na Linuxu squirrel není potřeba, tak chybu ignorujeme
}

const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    title: "KotakEngine",
    // POZOR: Linux rozlišuje velká a malá písmena v názvech souborů!
    // Ujisti se, že složka je 'assets' a soubor 'icon.png' (vše malým).
    icon: path.join(__dirname, 'assets/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.loadURL('https://kotakovec.github.io/kotakengine/');
  win.setMenuBarVisibility(false);

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