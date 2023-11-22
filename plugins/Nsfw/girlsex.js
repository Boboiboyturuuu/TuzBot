import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api-brunosobrino.zipponodes.xyz/api/adult/packgirl`
	conn.sendFile(m.chat, url, '', '_Dih Mesumm_', m)
}
handler.command = /^(girlsex)$/i
handler.tags = ['nsfw']
handler.help = ['girlsex']
handler.limit = true
handler.premium = true
handler.register = true
export default handler