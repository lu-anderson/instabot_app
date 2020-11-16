const { app, BrowserWindow } = require('electron')

const path = require('path')
const isDev = require('electron-is-dev')

function createWindow () {
  const mainPage = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 500,
    webPreferences: {
      worldSafeExecuteJavaScript: true,
      nodeIntegration: true,
      enableRemoteModule: true,
      nodeIntegrationInWorker: true
    }
  })
  mainPage.removeMenu()

  mainPage.loadURL( isDev ? 'http://localhost:3000/': `file://${path.resolve(__dirname, '..', 'build', 'index.html' )}`)
  mainPage.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Algumas APIs podem ser usadas somente depois que este evento ocorre.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // No macOS é comum para aplicativos e sua barra de menu
  // permaneçam ativo até que o usuário explicitamente encerre com Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. Você também pode colocar eles em arquivos separados e requeridos-as aqui.


