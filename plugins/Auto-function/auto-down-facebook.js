const {
    fbdl
} = await (await import('@ruhend/scraper')).default;

export async function before(m) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.gg|fb\.watch)\/[^\s/]+(?:\/videos\/\d+\/?)?/;
    const matches = (m.text.trim()).match(regex);
    const spas = "                ";
    if (!matches) return false;
    await m.reply(wait);

    try {
        const {
            video
        } = await fbdl(matches[0]);
        let FbCap = `${spas}*[ FACEBOOK ]*`
        await conn.sendFile(m.chat, video || giflogo, "", FbCap, m)
    } catch (e) {
    }
}
export const disabled = false