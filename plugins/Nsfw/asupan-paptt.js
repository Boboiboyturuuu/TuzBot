import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
try {
	let url = `https://api-brunosobrino.zipponodes.xyz/api/adult/tetas`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
	} catch (e) {
	m.reply(eror)
	}
}
handler.command = /^(paptt)$/i
handler.tags = ['asupan','nsfw']
handler.help = ['paptt']
handler.premium = false
handler.limit = true
handler.register = true
export default handler