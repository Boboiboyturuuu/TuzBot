import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.fgmods.xyz/api/nsfw/lesbian?apikey=lVLg6Nf7`
	conn.sendFile(m.chat, url, '', '_Tchii dasar mesum🤢_', m)
}
handler.command = /^(lesbian)$/i
handler.tags = ['nsfw']
handler.help = ['lesbian']
handler.limit = true
handler.premium = true
handler.register = true
export default handler