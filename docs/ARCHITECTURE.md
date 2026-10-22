# Architecture (observed)

## Stack

| Layer | Observation |
|-------|-------------|
| Installer | NSIS 3 Unicode (`GameServer-Pro-Setup-1.0.2.exe`) |
| Payload | `$PLUGINSDIR/app-64.7z` → Electron app |
| UI | React (Vite build under `dist/`) |
| Main process | `electron/app.js` loads **bytenode** → `main.jsc` |
| Other logic | Multiple `.jsc` modules (license, hwid, rcon, upnp, p2p, security, …) |
| Preload | `electron/preload.js` (javascript-obfuscator style string table) |
| Updater | `electron-updater` via GitHub provider |

## Entry

```js
// electron/app.js — only plain-text loader in electron/
require('bytenode');
require('./main.jsc');
```

## Update config (`resources/app-update.yml`)

```yaml
owner: PolarWoIF
repo: gameserver-pro-releases
provider: github
updaterCacheDirName: gameserver-pro-updater
```

## Bytecode modules (filenames only)

- `main.jsc`
- `license.jsc`
- `hwid.jsc`
- `antiTamper.jsc`
- `security.jsc`
- `rcon.jsc`
- `upnp.jsc`
- `networkEngine.jsc`
- `p2pEngineProxy.jsc`
- `minecraftNbt.jsc`

`.jsc` is V8 bytecode (bytenode), not recovered TypeScript.
