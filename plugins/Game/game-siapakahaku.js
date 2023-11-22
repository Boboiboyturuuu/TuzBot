import fetch from 'node-fetch'
import { siapakahaku } from '@bochilteam/scraper'

let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
let imgr = flaaa.getRandom()

    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.siapakahaku[id][0])
        throw false
    }
    const json = await siapakahaku()
    let caption = `*${command.toUpperCase()}*
Siapakah aku? ${json.soal}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hsi untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.siapakahaku[id] = [
        await conn.sendFile(m.chat, imgr + command, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapakahaku/i

export default handler

const buttons = [
    ['Hint', '/hsi'],
    ['Nyerah', 'menyerah']
]