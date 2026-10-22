# API and network indicators

**Provenance:** Index compiled from strings and distributed frontend files extracted from the public installer. **Not** an original source file. Presence does **not** prove the app contacted the endpoint at runtime. Static analysis only.

## Google / Firebase / authentication

- `https://accounts.google.com/o/oauth2/auth`
- `https://oauth2.googleapis.com/token`
- `https://www.googleapis.com/oauth2/v1/certs`
- `https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40gameserver-171a8.iam.gserviceaccount.com`
- Domains/CSP sources: `googleapis.com`, `*.googleapis.com`, `*.firebaseio.com`, `*.google.com`
- Firebase project identifier observed: `gameserver-171a8`
- Service-account identifier observed: `firebase-adminsdk-fbsvc@gameserver-171a8.iam.gserviceaccount.com`
- License operation strings: `activateLicense`, `validateLicense`, `deactivateLicense`, `getLicenseInfo`

Private key material is **omitted** from this repository (see `SECURITY_NOTES.md`).

## Updates

- `https://github.com/PolarWoIF/gameserver-pro-releases/releases/latest/download/latest.yml`
- `https://github.com/PolarWoIF/gameserver-pro-releases/releases/download/v...`

## Public-IP lookup and MQTT/P2P signaling

- `https://api.ipify.org`
- `https://icanhazip.com`
- `https://ifconfig.me/ip`
- `mqtt://broker.hivemq.com:1883`
- `wss://broker.hivemq.com:8884/mqtt`
- `mqtt://broker.emqx.io:1883`
- `wss://broker.emqx.io:8084/mqtt`
- P2P topic prefix string: `gspro/p2p/`

## Game server, mod, and runtime sources

- `https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip`
- `https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz`
- `https://api.curse.tools/v1/mods/`
- `https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/`
- `https://api.papermc.io`
- `https://api.purpurmc.org/v2/purpur/`
- `https://piston-meta.mojang.com/mc/game/version_manifest_v2.json`
- `https://meta.fabricmc.net/v2/versions/loader/`
- `https://maven.minecraftforge.net/net/minecraftforge/forge/`
- `https://maven.neoforged.net/releases/net/neoforged/neoforge/`
- `https://api.modrinth.com/v2/project/`
- `https://cdn.modrinth.com/`
- `https://download.geysermc.org/`
- `https://download.luckperms.net/`
- `https://github.com/adoptium/temurin21-binaries/releases/download/jdk-21.0.12.1%2B1/OpenJDK21U-jre_x64_windows_hotspot_21.0.12.1_1.zip`
- `https://github.com/playit-cloud/playit-agent/releases/download/v0.15.26/playit-windows-x86_64.exe`
- Plugin release URLs also appear for EssentialsX, Vault, SkinsRestorer, ViaVersion, Geyser, Floodgate, LuckPerms, WorldEdit (GitHub/CDN strings).

## Local route strings

- `/api/status`
- `/api/start`
- `/api/stop`
- `/api/ini/:file`
- `/api/mods`

Readable files do not establish bind address, full auth model, or confirmed runtime usage of every route.
