import { getGamePath } from 'steam-game-path';
var args = process.argv ;
/*
console.log(args.length)
console.log(args) ;
process.exit(0) ;
*/

if (args.length < 3){
    usage() ;
}
var mode = args[2].toUpperCase() ;


if (mode === 'STEAM') {
    if (args.length < 4){
        usage() ;
    }
    var request = args[3].toUpperCase() ;
    const sgp = getGamePath() ;
    if (request === 'PATH') {
        console.log(sgp.steam.path) ;
        process.exit(0) ;
    } else if (request === 'LIBPATHS') {
        const libs = sgp.steam.libraries ;
        if (args.length > 4){
            var reqmode = args[4].toUpperCase()
            if (reqmode === 'COUNT') {
                console.log(libs.length) ;
                process.exit(0) ;
            } else if (reqmode === 'INDEX') {
                if (args.length < 6){
                    usage() ;
                }
                var reqindex = args[5]
                if (reqindex > libs.length){
                    console.log(['Error: there are only ' , libs.length , ' libraries'].join(''))
                    process.exit(1) ;
                }
                if (reqindex <= 0){
                    console.log(libs.length) ;
                    process.exit(0) ;
                }
                console.log(libs[reqindex-1]) ;
                process.exit(0) ;
            } else {
                usage() ;
            }

        } else {
            var libout = libs.join(',') ;
            console.log(libout) ;
            process.exit(0) ;
        }
      
    } else {
        usage() ;
    }
} else if (mode === 'GAME') {
    if (args.length < 5){
        usage() ;
    }
    var request = args[3].toUpperCase()
    var appid = args[4]
    const sgp = getGamePath(appid) ;
    if (request === 'PATH') {
        console.log(sgp.game.path) ;
        process.exit(0) ;
    } else if (request === 'NAME') {
        console.log(sgp.game.name) ;
        process.exit(0) ;
    } else {
        usage() ;
    }
} else {
    usage()
}



/*
{
  game: {
    path: 'C:\\Program Files (x86)\\Steam\\steamapps\\common\\Grand Theft Auto V',
    name: 'Grand Theft Auto V'
  },
  steam: {
    path: 'C:\\Program Files (x86)\\Steam',
    libraries: [
      'C:\\Program Files (x86)\\Steam\\steamapps',
      'D:\\Gams\\SteamLibrary\\steamapps',
      'H:\\Gams\\SteamLibrary\\steamapps'
    ]
  }
}
*/





// Functions


function usage(andexit){
    console.log("Usage:") ;
    console.log("steam-path-info.exe steam path                         returns steam install directory") ;
    console.log("steam-path-info.exe steam libpaths                    returns comma-separated list of libraries") ;
    console.log("steam-path-info.exe steam libpaths count              returns number of libraries") ;
    console.log("steam-path-info.exe steam libpaths index <index>      returns specific single library path") ;
    console.log("steam-path-info.exe game (path/name) <SteamAppID>      returns path or name of an installed app/game")

    process.exit(1) ;
    
}