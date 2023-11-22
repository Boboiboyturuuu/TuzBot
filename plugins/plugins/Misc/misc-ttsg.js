import fetch from "node-fetch";
let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    args
}) => {
    let lang = args[0]
    let defaultLang = 'id'
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted?.text) text = m.quoted.text

    let res
    try {
        res = await TTSG(text, lang)
    } catch (e) {
        m.reply(e + '')
        text = args.join(' ')
        if (!text) throw `Use example ${usedPrefix + command} en hello world`
        res = await TTSG(text, defaultLang)
    } finally {
        if (res) await conn.sendFile(m.chat, res, '', '', m, null, {
            ptt: true,
            waveform: [100, 0, 100, 0, 100, 0, 100],
            contextInfo: adReplyS.contextInfo
        });
    }
}
handler.help = ["ttsg"]
handler.tags = ["misc"]
handler.command = /^(ttsg)$/i
export default handler

async function TTSG(text, lang = 'id') {
    return "https://translate.google.com/translate_tts?tl=" + lang + "&q=" + text + "&client=tw-ob";
}