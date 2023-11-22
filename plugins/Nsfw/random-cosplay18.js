import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
try {
	let url = `https://api.fgmods.xyz/api/nsfw/cosplay?apikey=lVLg6Nf7`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
	} catch (e) {
	m.reply(eror)
	}
}
handler.command = /^(cosplay18)$/i
handler.tags = ['asupan','nsfw']
handler.help = ['cosplay18']
handler.private = true
handler.premium = false
handler.limit = true
 
export default handler