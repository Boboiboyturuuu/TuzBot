const { proto } = (await import("@adiwajshing/baileys")).default;

let handler = async (m, { conn, text, command, usedPrefix }) => {
  let M = proto.WebMessageInfo;
  if (!m.quoted) return m.reply("Balas pesan dengan perintah *" + usedPrefix + command + "*");
  if (!text) return m.reply("Penggunaan: " + usedPrefix + command + " <teks>\n\ncontoh:\n" + usedPrefix + command + " tes");
  let msgs = global.db.data.msgs;
  if (text in msgs) return m.reply("[ " + text + " ] Telah terdaftar di List store");
  msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON();
  return m.reply("Berhasil menambahkan " + text + " ke List Store.\n\nakses dengan mengetik namanya");
};

handler.help = ["store"].map(v => "add" + v + " <teks>");
handler.tags = ["database"];
handler.command = ["addstore"];
handler.group = true;
handler.admin = true;

export default handler;
