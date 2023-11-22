import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.fgmods.xyz/api/nsfw/pussy?apikey=lVLg6Nf7`
	conn.sendFile(m.chat, url, '', '_dihh sange_', m)
}
handler.command = /^(pussy2)$/i
handler.tags = ['nsfw']
handler.help = ['pussy2']
handler.limit = true
handler.register = true
handler.premium = true
export default handler