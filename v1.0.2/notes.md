# v1.0.2 extraction notes

- Installer: `GameServer-Pro-Setup-1.0.2.exe` (NSIS), size ~143935408 bytes
- Release feed: GitHub `PolarWoIF/gameserver-pro-releases` tag `v1.0.2`
- Unpacked `resources/app.asar`; kept readable loader + preload + package metadata
- Main logic remains `.jsc` (bytenode); only string greps are stored under `electron/*.jsc.strings.txt`
- String dumps were filtered to avoid shipping PEM private-key bodies

By DevForSy
