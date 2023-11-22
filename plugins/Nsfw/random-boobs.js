import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
try {
	let url = `https://api.fgmods.xyz/api/nsfw/boobs?apikey=lVLg6Nf7`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
	} catch (e) {
	m.reply(eror)
	}
}
handler.command = /^(boobs)$/i
handler.tags = ['asupan','nsfw']
handler.help = ['boobs']
handler.premium = true
handler.limit = true
handler.register = true
export default handler