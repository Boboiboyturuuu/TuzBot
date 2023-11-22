import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api-brunosobrino.zipponodes.xyz/api/adult/videoxxx`
	conn.sendFile(m.chat, url, '', '_dihh sange_', m)
}
handler.command = /^(xxxvid)$/i
handler.tags = ['nsfw']
handler.help = ['xxxvid']
handler.limit = true
handler.register = true
handler.premium = true
export default handler