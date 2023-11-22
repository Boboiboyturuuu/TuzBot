
import fetch from 'node-fetch'
let handler = async (m, {
    text,
    command,
    usedPrefix,
    conn
}) => {
var list_input = [
    "china",
"indonesia",
"japan",
"jiso",
"korea",
"lisa",
"malaysia",
"rose",
"thailand",
"vietnam",
"justinaxie",
"jeni",
"ryujin",
"hijaber"
]
var salah_input = "*Example:*\n" + usedPrefix + command + " vietnam \n*[ Daftar Cecans ]*\n\n" + await ArrClean(list_input)
if (!list_input.includes(text)) throw salah_input
try {
    let res = 'https://api.betabotz.org/api/cecan/' + text + '?apikey=Ot9ht6jg'
    m.reply(wait)
    conn.sendFile(m.chat, res, 'result', "Result Cecan: *" + text.toUpperCase() + "*", m)
    } catch (e) {
    throw eror
    }
}
handler.help = ["cecans"]
handler.tags = ['internet']
handler.command = ["cecans"]

export default handler

function ArrClean(str) {
return str.map((v, index) => ++index + ". " + v).join('\r\n')
}