global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/Lb4Emjih98rBiCZiZoS2eM', 'https://chat.whatsapp.com/FrluVyY5kBRIhY6yKfH4DI']
global.Owner = {
  // use the phone number with the country code, for example Indonesia '62' America '1' etc
  '62822877501002': { // put your number here
    name: 'Owner 𝙰𝚕𝚙𝚒𝚗𝚇𝙳 ×፝֟͜×',
    isDev: true, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '6285799743965': { // put your number here
    name: '(Creator2 Botz)',
    isDev: true,
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '6282179163895': { // put your number here
    name: 'Testing Botz',
    isDev: true, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '6287708773367': {
    name: 'Lord Botz',
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '13479805233': {} // ignore if you don't want anything, like name dll
}
global.mods = ['6288229683561'] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'http://hardianto-chan.herokuapp.com': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'Copyright 𝙰𝚕𝚙𝚒𝚗𝚇𝙳 ×፝֟͜×'
global.author = '𝙰𝚕𝚙𝚒𝚗𝚇𝙳 ×፝֟͜× Best Bot\nCopyright 𝙰𝚕𝚙𝚒𝚗𝚇𝙳 ×፝֟͜× for ©Alpin\n*────「 Big Thx For 」────*\n*Allah SWT*\n*Nurutomo*\n*Ariffb*\n*BochilGaming*\n*AlpinXD*\n*games-wabot*\n*wabot-aq*\n*Adiwajshing*\n*Baileys*'

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

