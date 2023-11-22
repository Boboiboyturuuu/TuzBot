import fetch from 'node-fetch';

let handler = async (m, { conn, command }) => {
    try {
        let response = await fetch('https://api.ibeng.tech/api/random/pornhub?apikey=Io4NNb2xlt');
        let data = await response.json();

        if (data.status === 'Success' && data.results.length > 0) {
            let randomVideo = data.results[Math.floor(Math.random() * data.results.length)];
            conn.reply(m.chat, `${randomVideo.link}\n\n*Title:* ${randomVideo.title}\n*Views:* ${randomVideo.views}\n*Author:* ${randomVideo.author}`, m);
        } else {
            conn.reply(m.chat, 'Gagal mendapatkan data video.', m);
        }
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, 'Terjadi kesalahan dalam memproses permintaan.', m);
    }
};

handler.command = /^(vidporn)$/i;
handler.tags = ['nsfw'];
handler.help = ['vidporn'];
handler.limit = true;
handler.register = true;
handler.premium = true;
handler.private = true;

export default handler;