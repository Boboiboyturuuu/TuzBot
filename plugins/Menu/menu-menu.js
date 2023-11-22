/* Recode Boboiboy */
import fs from 'fs'
let handler = async (m, { conn, text }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
  
  let mainmenu = `𝙷𝚊𝚕𝚕𝚘 ${conn.getName(m.sender)} 𝙰𝚔𝚞 ${global.namebot} 𝙷𝚊𝚜𝚒𝚕 𝚁𝚎𝚌𝚘𝚍𝚎 𝚃𝚞𝚊𝚗𝚔𝚞 𝚈𝚊𝚗𝚐 𝚃𝚞𝚔𝚊𝚗𝚐 𝙼𝚊𝚕𝚒𝚗𝚐 𝙽𝚊𝚖𝚞𝚗 𝚃𝚊𝚖𝚟𝚊𝚗'

${global.namebot}𝙳𝚊𝚙𝚊𝚝 𝙳𝚒𝙶𝚞𝚗𝚊𝚔𝚊𝚗 𝚂𝚎𝚋𝚊𝚐𝚊𝚒 *𝙴𝚍𝚞𝚔𝚊𝚜𝚒 𝙿𝚎𝚕𝚊𝚓𝚊𝚛𝚊𝚗, 𝚄𝚗𝚍𝚞𝚑𝚊𝚗 𝙼𝚎𝚍𝚒𝚊, 𝙶𝚊𝚖𝚎, 𝚂𝚝𝚘𝚛𝚎, 𝙿𝚎𝚗𝚓𝚊𝚐𝚊 𝙶𝚛𝚘𝚞𝚙, 𝙴𝚗𝚊𝚔-𝙴𝚗𝚊𝚔 𝙳𝚊𝚗 𝙻𝚊𝚒𝚗𝚗𝚢𝚊* 𝚈𝚊𝚗𝚐 𝙳𝚊𝚙𝚊𝚝 𝙼𝚎𝚖𝚋𝚊𝚗𝚝𝚞 𝙼𝚞 𝙳𝚊𝚕𝚊𝚖 𝙱𝚎𝚛𝚋𝚊𝚐𝚊𝚒 𝙷𝚊𝚕 >_<

╭  ◦ *𝙲𝚛𝚎𝚊𝚝𝚘𝚛*: ${global.nameown}
│  ◦ *𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖*: ${global.sig}
╰  ◦ ᴘʀᴇғɪx: *.*

ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ *.ᴏᴡɴᴇʀ*

┌ ◦ ᴜɴᴛᴜᴋ ᴍᴇɴᴅᴀғᴛᴀʀ ᴋᴇᴛɪᴋ: *.ᴠᴇʀɪғʏ*
│ ◦ ᴛᴏᴛᴀʟ ᴘᴇɴɢɢᴜɴᴀ ${global.namebot}: *${totalf}*
│ ◦𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙻𝚒𝚜𝚝 𝙼𝚎𝚗𝚞: *.MENULIST*
└ ◦ 𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙵𝚒𝚝𝚞𝚛 𝙱𝚘𝚝: *.ALLMENU*

ʜᴀʀᴀᴘ ᴜɴᴛᴜᴋ ʙᴇʀɢᴀʙᴜɴɢ ɢʀᴏᴜᴘ ʙᴏᴛ ᴀɢᴀʀ ᴍᴇɴɢᴇᴛᴀʜᴜɪ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ᴊɪᴋᴀ *ᴇʀʀᴏʀ/ʙᴀɴɴᴇᴅ*`

  let turuboy = `https://telegra.ph/file/e9b60122fd2a75169e32d.mp4`;

// Mengirim video
let sentMessage = await conn.sendMessage(m.chat, {video: {url: turuboy}, ptt:true, caption: 'DONT TOUCH MY GOD', viewOnce : true});

// Setelah 5 detik, hapus video
setTimeout(() => {
  // Kode untuk menghapus video
  conn.deleteMessage(m.chat, sentMessage.key.id);
}, 5 * 1000); // 5 detik dalam milidetik
 await conn.sendMessage(m.chat, {
          react: {
            text: '*Sabar*',
            key: m.key,
          }})
          await conn.sendMessage(m.chat, {
          react: {
            text: '😗',
            key: m.key,
          }})
await conn.sendMessage(m.chat, {
          react: {
            text: '😌',
            key: m.key,
          }})
await conn.sendMessage(m.chat, {
          react: {
            text: '😯',
            key: m.key,
          }})
          await conn.sendMessage(m.chat, {
          react: {
            text: '😎',
            key: m.key,
          }})
          await conn.sendMessage(m.chat, {
          react: {
            text: '🖕🏻',
            key: m.key,
          }})
          await conn.sendMessage(m.chat, {
          react: {
            text: '😎',
            key: m.key,
          }})
          await conn.sendMessage(m.chat, {
          react: {
            text: '🖕🏻',
            key: m.key,
          }})
  conn.sendMessage(m.chat, {
video:
fs.readFileSync('./images/menu.mp4'),
        mimetype: 'video/mp4',
        fileLength: 100000,
        caption: mainmenu,
        gifPlayback: true,
        gifAttribution: 5,
        title: '𝙱𝚘𝚋𝚘𝚒𝚋𝚘𝚢𝚃𝚞𝚛𝚞𝚞',
        contextInfo: {
            sourceUrl: sgc,
            renderLargerThumbnail: true,
        },
    });
conn.sendFile(m.chat, './mp3/menu.mp3', '', null, m, true, {
        type: 'audioMessage',
        ptt: true,
        fileLength: 88738,
    });

}

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = /^(menu)$/

export default handler

/*import {
    generateWAMessageFromContent
} from "@adiwajshing/baileys"
import moment from "moment-timezone"

let handler = async (m, {
    conn,
    groupMetadata,
    usedPrefix,
    command
}) => {
    await conn.sendReact(m.chat, "⏳", m.key)
    let soun = ["aku-ngakak",
        "anjay",
        "ara-ara2",
        "ara-ara-cowok",
        "ara-ara",
        "arigatou",
        "assalamualaikum",
        "asu",
        "ayank",
        "bacot",
        "bahagia-aku",
        "baka",
        "bansos",
        "beat-box2",
        "beat-box",
        "biasalah",
        "bidadari",
        "bot",
        "buka-pintu",
        "canda-anjing",
        "cepetan",
        "china",
        "cuekin-terus",
        "daisuki-dayo",
        "daisuki",
        "dengan-mu",
        "Donasiku",
        "gaboleh-gitu",
        "gak-lucu",
        "gamau",
        "gay",
        "gelay",
        "gitar",
        "gomenasai",
        "hai-bot",
        "hampa",
        "hayo",
        "hp-iphone",
        "ih-wibu",
        "i-like-you",
        "india",
        "karna-lo-wibu",
        "kiss",
        "kontol",
        "ku-coba",
        "maju-wibu",
        "makasih",
        "mastah",
        "menuasli",
        "menuku",
        "menu",
        "MenuYuki",
        "nande-nande",
        "nani",
        "ngadi-ngadi",
        "nikah",
        "nuina",
        "onichan",
        "ownerku",
        "owner-sange",
        "pak-sapardi",
        "pale",
        "pantek",
        "pasi-pasi",
        "punten",
        "sayang",
        "siapa-sih",
        "sudah-biasa",
        "summertime",
        "tanya-bapak-lu",
        "to-the-bone",
        "wajib",
        "waku",
        "woi",
        "yamete",
        "yowaimo",
        "yoyowaimo"
    ].getRandom()
    let vn = "https://raw.githubusercontent.com/AyGemuy/HAORI-API/main/audio/" + soun + ".mp3"

    const caption = `*👋 Selamat datang di dashboard bot kami*!\n\n - Kami berharap Anda akan menikmati pengalaman berinteraksi dengan bot kami yang ramah dan intuitif.${readMore}\n\n - Kami telah menyertakan berbagai fitur yang dapat membantu Anda mengelola dan meningkatkan kinerja bot Anda.\n\n - Kami berharap Anda akan menikmati menggunakan dashboard bot kami dan semoga Anda mendapatkan manfaat dari fitur-fitur yang kami tawarkan.\n\n\n*[ LIST MENU ]*\n  - ${usedPrefix}menulist\n  - ${usedPrefix}allmenu\n\n`;

    await conn.sendFile(m.chat, Buffer.alloc(0), "D A S H B O A R D", caption, fakes, false, {
        mimetype: [dpptx, ddocx, dxlsx, dpdf, drtf].getRandom(),
        fileLength: fsizedoc,
        pageCount: fpagedoc,
        jpegThumbnail: await conn.resize([thumbdoc, thumb].getRandom(), 300, 150),
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                title: ucapan() + " " + m.name,
                body: bottime,
                mediaType: 1,
                previewType: 0,
                renderLargerThumbnail: true,
                thumbnailUrl: [logo, imagebot].getRandom(),
                sourceUrl: ''
            }
        }
    });
    await conn.sendPresenceUpdate('recording', m.chat);
    await conn.sendFile(m.chat, vn, '', '', m, null, {
        ptt: true,
        waveform: [100, 0, 100, 0, 100, 0, 100],
        contextInfo: adReplyS.contextInfo
    });
    await conn.sendReact(m.chat, "✅", m.key)

}
handler.help = ["menu", "help", "?"]
handler.tags = ["main"]
handler.command = /^(menu|help|\?)$/i

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
    let waktunya = moment.tz("Asia/Makassar").format("HH");
    return waktunya >= 24 ? "Selamat Begadang 🗿" :
        waktunya >= 18 ? "Selamat malam 🌙" :
        waktunya >= 15 ? "Selamat sore 🌅" :
        waktunya > 10 ? "Selamat siang ☀️" :
        waktunya >= 4 ? "Selamat pagi 🌄" :
        "Selamat Pagi 🗿";
}
*/