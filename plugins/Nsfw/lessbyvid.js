import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api-brunosobrino.zipponodes.xyz/api/adult/videoxxxlesbi`
	conn.sendFile(m.chat, url, '', '_dihh sange_', m)
}
handler.command = /^(lesbyvid)$/i
handler.tags = ['nsfw']
handler.help = ['lesbyvid']
handler.limit = true
handler.register = true
handler.premium = true
export default handler