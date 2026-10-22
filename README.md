# GameServer Pro reverse engineering notes

Independent **static** analysis notes for **GameServer Pro 1.0.2** (Windows desktop app from the PolarWoIF release channel).

> This is **not** the official source code.  
> Files here were recovered from a **public installer** / `app.asar`.  
> Main process logic ships as **bytenode** (`.jsc`), not original TypeScript.

**By DevForSy**

## What this repo contains

| Path | Content |
|------|---------|
| `v1.0.2/` | Extracted readable bits for version 1.0.2 |
| `v1.0.2/electron/app.js` | Plain-text bytenode loader only |
| `v1.0.2/electron/preload.js` | Obfuscated preload (as shipped) |
| `v1.0.2/electron/*.jsc.strings.txt` | Filtered strings from bytecode modules |
| `docs/` | Architecture, endpoints, IPC names, security notes |

## What this is not

- Not an official PolarWoIF / GameServer Pro repository  
- Not recovered original TypeScript source  
- Not a crack, license bypass, or Firebase exploit kit  
- **Does not** include embedded private keys (see `docs/SECURITY_NOTES.md`)

## Private key note

During static analysis of `electron/license.jsc`, a **Firebase service-account private key** was observed embedded in the client (project `gameserver-171a8`).

**I recovered evidence of that key for verification, but I am intentionally not publishing the private key material or a usable service-account JSON in this repository.**

See `docs/SECURITY_NOTES.md` for impact and vendor recommendations (rotate/revoke the key; do not ship admin credentials in desktop clients).

## High level architecture

- **Installer:** NSIS → Electron app (`GameServer Pro.exe`)
- **UI:** React / Vite (`dist/`)
- **Main:** `require('bytenode'); require('./main.jsc')`
- **Updates:** GitHub provider → `PolarWoIF/gameserver-pro-releases`
- **License:** Client-side module talking to **Firebase** + HWID checks (details redacted where secrets appear)

## Research scope

1. Download public release `v1.0.2`  
2. Extract NSIS / `app-64.7z` / `app.asar`  
3. Document readable entry files and string indicators  
4. Record security-relevant packaging issues (embedded credentials) **without redistributing secrets**

No claim is made that every string is reachable at runtime.


## Docs

- `docs/ARCHITECTURE.md`  
- `docs/OBSERVED_ENDPOINTS.md`  
- `docs/IPC_CHANNELS.md`  
- `docs/SECURITY_NOTES.md`  
- `DISCLAIMER.md`  

## Disclaimer

Not affiliated with the vendor
Do not use this material to violate terms of service, abuse cloud projects, or redistribute secrets or game content.

# By DevForSy
