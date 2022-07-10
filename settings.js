//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is CYBER PODDA🔥
My Creator is sachi sampath😎` //Costomize Alive Message (type your message in `🔵🄷🄸 𝗕𝗢𝗧 𝗜𝗦 𝗢𝗡𝗟𝗜𝗡𝗘⚉𝘁↰❧

🟡Qᵘᵉᵉⁿ ᴬᵐᵈⁱ P̶U̶B̶L̶I̶C̶ E̶D̶I̶T̶I̶O̶N̶

🔴𝗖𝗥𝗘𝗔𝗧𝗘𝗗 𝗕𝗬🎗𝗖𝗬𝗕𝗘𝗥 𝗣𝗢𝗗𝗗𝗔

⚪𝘍𝘈𝘚𝘛  ＳＰＥＥＤ🎗

╭━━━━━━━╮
┃       ● ══    ┃
┃███████┃
┃███████┃
┃█𝙨𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚█┃
┃█   𝙉𝙤𝙬👇🏻👇🏻┃
┃█ѕℓ  ¢увєя  █┃
┃█  нα¢кєя██┃
┃███████┃
┃███████┃
┃   ⦀       ○       ↰┃
╰━━━━━━━╯
𝙸 𝚊𝚖 𝚘𝚗𝚕𝚒𝚗𝚎 𝚐𝚎𝚝 𝚠𝚑𝚊𝚝 𝚢𝚘𝚞 𝚗𝚎𝚎𝚍 𝚢𝚘𝚞 𝚌𝚊𝚗 𝚞𝚜𝚎 𝚝𝚑𝚎🤙🏻 .cyberpodda 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝚃𝙾 𝙶𝙴𝚃 𝙷𝙴𝙻𝙿⚉

🔵𝘀𝘂𝗯𝘀𝗰𝗿𝗶𝗯𝗲 𝗺𝘆    𝗰𝗵𝗮𝗻𝗻𝗲𝗹🎃↡↡↡↡↡↡↡↡↡
👇👇👇👇👇👇👇

https://youtube.com/channel/UCO1gMv3lnxhwD1JzEgAFmuA


👆👆👆👆👆👆👆🌐

𝗹𝗶𝗸𝗲🌻©
𝗰𝗼𝗺𝗺𝗲𝗻𝘁🌼©
𝘀𝗵𝗮𝗿𝗲☘️🌹

©️©️©️©️©️©️©️` )

global.owner = ['+94768733078'] //Owner number in aive msg
global.premium = ['+94768733078'] //Owner Number info
global.ownernomer = '+94768733078' //Owner Number <<<

global.ownername = '᳆⃞🇱🇰ᴄʏʙᴇʀ↯❰❰පොඩ්ඩාꪶහ්᭄❱❱☆✰★' //Owner Name
global.botname = ' ×⃬͜⃞×ᴄʏʙᴇʀ↯❰ᴘᴏᴅᴅᴀꪶᴹᴼᴰˢ᭄❱™♔' //Bot Name

global.button = '🤭Youtube📍' //Costomize A Button Name In Alive Message
global.btnurl = 'https://youtube.com/channel/UCO1gMv3lnxhwD1JzEgAFmuA' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '𝙲𝚈𝙱𝙴𝚁 𝙿𝙾𝙳𝙳𝙰' //Bot Pacage Name
global.author = '×⃬͜⃞×ᴄʏʙᴇʀ↯❰ᴘᴏᴅᴅᴀꪶᴹᴼᴰˢ᭄❱™♔' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '©_Kumuthu.' //In list menu
global.chatbotpre = 'false'  // Chat bot true/false

global.ig = 'https://youtube.com/channel/UCO1gMv3lnxhwD1JzEgAFmuA!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
