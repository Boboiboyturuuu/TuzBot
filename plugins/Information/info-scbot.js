import fs from 'fs';
import moment from 'moment-timezone';
import fetch from 'node-fetch';
let handler = async (m, { conn }) => {
  let loadd = [
    '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
    '《████▒▒▒▒▒▒▒▒▒》30%',
    '《███████▒▒▒▒▒▒》50%',
    '《██████████▒▒▒》70%',
    '《█████████████》100%',
    '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
  ];

  let { key } = await conn.sendMessage(m.chat, { text: '_Loading_' }); //Pengalih isu

  for (let i = 0; i < loadd.length; i++) {
    await conn.sendMessage(m.chat, { text: loadd[i], edit: key });
  }
let res = await fetch('https://api.github.com/repos/Boboiboyturuuu/TuzBot')
   let json = await res.json()
   
  let pfft = `*乂 B O T - S C R I P T*
  ◦  *Name* : ${json.name}\n
  ◦  *Visitor* : ${json.watchers_count}\n
  ◦  *Size* : ${(json.size / 1024).toFixed(2)} MB\n
  ◦  *Updated* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n
  ◦  *Url* : ${json.html_url}\n\n
  ${json.forks_count} Forks · ${json.stargazers_count} Stars · ${json.open_issues_count} Issues\n\n
  
*Source Code Type:*
 • Base : None
 • Language : NodeJs
 • Bailey : @adiwashing/baileys
 • Bailey Supp : @whiskeysockets/baileys

*Godalah tuanku sampai dia sange kalau perlu beri dia pap tt maka anda akan mendapatkan sc ini...:

*Contak tuankuu:*
wa.me/6281243673506
`;
  conn.sendMessage(m.chat, {
    text: pfft,
    contextInfo: {
      externalAdReply: {
        title: `BoboiboyTuruuu`,
        body: global.author,
        thumbnailUrl: `https://telegra.ph/file/ea2400097b0797b5944ad.jpg`,
        sourceUrl: sgc,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });
};

handler.command = /^(sc|script)$/i;

export default handler;