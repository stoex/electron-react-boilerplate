import { app, BrowserWindow } from 'electron'
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer'
import path from 'path'

const isDev = !!(process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath))

let mainWindow

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1400, height: 900, show: false
  })
  // Add devtools extensions
  if (isDev) {
    installExtension(REACT_DEVELOPER_TOOLS)
      .then(name => { console.log(`Added extension ${name}`) })
      .catch(err => { console.error(`Error occured: ${err}`) })
  }
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    if (isDev) {
      mainWindow.webContents.openDevTools()
    }
  })

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createMainWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow()
  }
})
