### [ buy me pizza and or burritos ](https://paypal.me/DvdIsDead)

# Steam, SteamLibrary and Game Path Fetcher (via AppID)

![image](https://github.com/ArchemedIan/steam-path-info/assets/105951210/44ef9214-0ef1-46a0-b7e9-9a99c542746f)


## Make into an executable:

**requires node.js(?) and [nexe](https://github.com/nexe/nexe#windows) installed**

```
git clone https://github.com/ArchemedIan/steam-path-info
cd steam-path-info
nexe --build steam-path-info.mjs
```

## Usage:
```
steam-path-info.exe steam path                        returns steam install directory
steam-path-info.exe steam libpaths                    returns comma-separated list of libraries
steam-path-info.exe steam libpaths count              returns number of libraries
steam-path-info.exe steam libpaths index <index>      returns specific single library path
steam-path-info.exe game (path/name) <SteamAppID>     returns path or name of an installed app/game
```
