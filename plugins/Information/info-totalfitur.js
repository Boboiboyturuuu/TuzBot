/*let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    const tags = Object.values(global.plugins)
      .flatMap(p => p.help ? p.tags : [])
      .filter(tag => tag != undefined && tag.trim() !== '');

    const counts = tags.reduce((c, tag) => {
      c[tag] = (c[tag] || 0) + 1;
      return c;
    }, {});

    const tagList = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([tag, count]) => `⭔ ${(tag.charAt(0).toUpperCase() + tag.slice(1)).padEnd(13)} - ${count.toString().padStart(3)}`)
      .join('\n');

    const totalCommands = Object.values(counts).reduce((a, b) => a + b, 0);
    const responseText = "```" + `${tagList}\n` + "```";

    await conn.reply(m.chat, `*[ FEATURE LIST ]*\n\n${responseText}\n\n*Total fitur: ${totalCommands} Commands*`, m, adReply);
  } catch (error) {
    console.error(error);
    await conn.reply(m.chat, 'Terjadi kesalahan dalam mengeksekusi perintah.', m, adReply);
  }
}

handler.help = ['totalfitur']
handler.tags = ['main', 'info']
handler.command = /^(feature|totalfitur)$/i
export default handler*/
import fs from 'fs';

let handler = async (m, { conn, args, command }) => {
  const tags = Object.values(global.plugins)
    .filter(v => v.help && Array.isArray(v.tags))
    .reduce((acc, val) => {
      val.tags.forEach(tag => {
        acc[tag] = acc[tag] || [];
        acc[tag].push(val.help);
      });
      return acc;
    }, {});

  const totalTags = Object.keys(tags).length;
  const count = `LIST FITUR ${totalTags} Tags`;

  const tagCounts = Object.entries(tags).map(([tag, features]) => `╎❏─「${tag}」: ${features.length}`).join('\n');

  const response = `\`\`\`
*Halo ${conn.getName(m.sender)}, Ini Total Fitur Yang Dimiliki ${global.namebot} Masih Dikit Kek Duit Mu :v .*
╔┈┈┈「 ${count} 」
${tagCounts}
╚┈┈┈┈┈┈┈┈┈❖
\`\`\``;

  await m.reply(response);
};

handler.help = ['totalfitur'];
handler.tags = ['main'];
handler.command = ['totalfitur'];

export default handler;