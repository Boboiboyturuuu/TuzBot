import didyoumean from 'didyoumean';
import similarity from 'similarity';

const handler = m => m;

handler.before = function (m, { match, usedPrefix }) {
  if ((usedPrefix = (match[0] || '')[0])) {
    let noPrefix = m.text.replace(usedPrefix, '').trim();
    let alias = Object.values(global.plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1);
    let mean = didyoumean(noPrefix, alias);
    let sim = similarity(noPrefix, mean);
    let similarityPercentage = parseInt(sim * 100);

    if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
      let response = `Perintah yang Anda masukkan sepertinya salah, berikut adalah perintah yang disarankan untuk hal yang sama:\n\n➠  ${usedPrefix + mean}\n➠  Hasil serupa:  ${similarityPercentage}%`;

      this.reply(m.chat, response, m, {
        contextInfo: {
          externalAdReply: {
            title: '𝓑𝓸𝓫𝓸𝓲𝓫𝓸𝔂 𝓣𝓾𝓻𝓾𝓾𝓾',
            body: 'Apakah anda sedang mencari menu berikut ini ',
            thumbnailUrl: 'https://telegra.ph/file/bdb2dcd668357b092862f.jpg',
            sourceUrl: 'https://chat.whatsapp.com/KuKs6nQ0h2w3AThOcFogEh',
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      });
    }
  }
};

export default handler;