const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 ⎝🛡️ ALEXA 🛡️⎠ *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

🖲️   *Owner & Founder - Timasha ( TIMA )*

🖲️   *Language - NODE JS*

🖲️   *Sponser Team - Queen Alexa Team*


       💢 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 💢

🍒 *Lushen Tivanka* 🍒
➻ *ʙᴏᴛ ɢʀᴀᴘʜɪᴄ ᴅᴇꜱɪɢʜɴᴇʀ*

🍒 *Ashan Navodya* 🍒
➻ *Co Owner*

🍒 *Sathsara* 🍒
➻ *Admin Manger*

           🍒 *ᴀᴅᴍɪɴꜱ* ™🍒

╹ 🔰 *Sathsara* ╹
╹ 🔰 *Lushen Tivanka*╹
╹ 🔰 *Ashan Navodaya*    ╹
  
  
   🔰 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🔰`})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 ⎝🛡️ ALEXA🛡️⎠ *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

🖲️   *Owner & Founder Timasha ( TIMA )*

🖲️   *Language - NODE JS*

🖲️   *Sponser Team - Queen Alexa Team*


       💢 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 💢

🍒 *Lushen Tivanka* 🍒
➻ *ʙᴏᴛ ɢʀᴀᴘʜɪᴄ ᴅᴇꜱɪɢʜɴᴇʀ*

🍒 Ashan Navodya* 🍒
➻ *Co Owner*

🍒 *Sathsara* 🍒
➻ *Admin Manger*

           🍒 *ᴀᴅᴍɪɴꜱ* ™🍒

╹ 🔰 *Sathsara* ╹
╹ 🔰 *Lushen Tivanka*╹
╹ 🔰 *Ashan Navodya*    ╹
  
  https://api.whatsapp.com/message/STKRUWM327GCG1

   🔰 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🔰` })

    }));
  
  Trex.addrex({pattern: 'bot', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 ⎝🛡️ ALEXA 🛡️⎠ *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

🖲️   *Owner & Founder - Timasha(TIMA)*

🖲️   *Language - NODE JS*

🖲️   *Sponser Team - Queen Alexa Team*


       💢 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 💢

🍒 *Lushen Tivanka* 🍒
➻ *ʙᴏᴛ ɢʀᴀᴘʜɪᴄ ᴅᴇꜱɪɢʜɴᴇʀ*

🍒 *Ashan Navodya* 🍒
➻ *Co Owner*

🍒 *Sathsara* 🍒
➻ *Admin Manger*

           🍒 *ᴀᴅᴍɪɴꜱ* ™🍒

╹ 🔰 *Lushen Tivanka* ╹
╹ 🔰 *Ashan Navodya*╹
╹ 🔰 *Sathsara*    ╹
  
  https://api.whatsapp.com/message/STKRUWM327GCG1

   🔰 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🔰 `  ,quoted: message.data})

    }));
}
