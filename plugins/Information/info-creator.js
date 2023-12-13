import fetch from "node-fetch"
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, {
    conn,
    usedPrefix,
    text,
    args,
    command
}) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
    let name = await conn.getName(who)

    if (command == "creator") {
        let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Saya Owner 𝐓𝐮𝐳𝐁𝐨𝐭 〶;;Md\nFN:Saya Owner 𝐓𝐮𝐳𝐁𝐨𝐭 〶  WhatsApp, Md\nNICKNAME:👑 Owner 𝐓𝐮𝐳𝐁𝐨𝐭 〶 \nORG:Wudy\nTITLE:soft\nitem1.TEL;waid=6281243673506:6281243673506\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://github.com/Boboiboyturuuu\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:abdultobigo@mail.com\nitem3.X-ABLabel:💌 Mail Owner 𝐓𝐮𝐳𝐁𝐨𝐭 〶\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 23 January 2005\nEND:VCARD`
        let tag_own = await conn.sendMessage(m.chat, {
            contacts: {
                displayName: wm,
                contacts: [{
                    vcard
                }]
            },
            contextInfo: {
                externalAdReply: {
                    title: wm,
                    mediaType: 1,
                    previewType: 0,
                    renderLargerThumbnail: true,
                    thumbnailUrl: logo,
                    sourceUrl: ''
                }
            }
        }, {
            quoted: fakes
        })
        await conn.reply(m.chat, `Halo kak @${m.sender.split("@")[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, tag_own, {
            mentions: [m.sender]
        })
    }
    const _0x597d7c=_0x54e7;function _0x54e7(_0x5be01f,_0x28a26d){const _0x386925=_0x3869();return _0x54e7=function(_0x54e73c,_0x1b82c9){_0x54e73c=_0x54e73c-0xbc;let _0x1d7b22=_0x386925[_0x54e73c];return _0x1d7b22;},_0x54e7(_0x5be01f,_0x28a26d);}(function(_0x5d0d3b,_0x52f8e6){const _0x1db61e=_0x54e7,_0x17ef56=_0x5d0d3b();while(!![]){try{const _0x4e9885=-parseInt(_0x1db61e(0xc9))/0x1+parseInt(_0x1db61e(0xd0))/0x2*(-parseInt(_0x1db61e(0xc7))/0x3)+-parseInt(_0x1db61e(0xc3))/0x4*(parseInt(_0x1db61e(0xbe))/0x5)+parseInt(_0x1db61e(0xbf))/0x6+parseInt(_0x1db61e(0xca))/0x7+-parseInt(_0x1db61e(0xbd))/0x8+parseInt(_0x1db61e(0xc5))/0x9*(parseInt(_0x1db61e(0xd2))/0xa);if(_0x4e9885===_0x52f8e6)break;else _0x17ef56['push'](_0x17ef56['shift']());}catch(_0x3d9ba7){_0x17ef56['push'](_0x17ef56['shift']());}}}(_0x3869,0xb5853));function _0x3869(){const _0x44441e=['sendMessage','594689tWaskd','5911381SBsezJ','sender','split','\x0aEND:VCARD','reply','\x20itu\x20nomor\x20team\x20developerku,\x20jangan\x20di\x20apa-apain\x20ya\x20kak😖','33962XVovDa',';;;\x0aFN:','20EeRwSv','pengembang','172112VntzwP','195vGbwim','1272138HLCGQd','chat','\x0aX-WA-BIZ-DESCRIPTION:','Halo\x20kak\x20@','127580ylGohO','\x20Nih\x20pengembang\x20ku\x20kack\x20yg\x20mengaktifkan\x20aq.\x0aX-WA-BIZ-NAME:','12540249XefgvP','BEGIN:VCARD\x0aVERSION:3.0\x0aN:;','219JHzVtd'];_0x3869=function(){return _0x44441e;};return _0x3869();}if(command==_0x597d7c(0xbc)){let vcard=_0x597d7c(0xc6)+author+_0x597d7c(0xd1)+author+'\x0aORG:'+author+'\x0aTITLE:\x0aitem1.TEL;waid=6281243673506:6281243673506\x0aitem1.X-ABLabel:'+author+_0x597d7c(0xc1)+htjava+_0x597d7c(0xc4)+author+_0x597d7c(0xcd),tag_own=await conn[_0x597d7c(0xc8)](m['chat'],{'contacts':{'displayName':wm,'contacts':[{'vcard':vcard}]},'contextInfo':{'externalAdReply':{'title':wm,'mediaType':0x1,'previewType':0x0,'renderLargerThumbnail':!![],'thumbnailUrl':logo,'sourceUrl':''}}},{'quoted':fakes});await conn[_0x597d7c(0xce)](m[_0x597d7c(0xc0)],_0x597d7c(0xc2)+m['sender'][_0x597d7c(0xcc)]('@')[0x0]+_0x597d7c(0xcf),tag_own,{'mentions':[m[_0x597d7c(0xcb)]]});}
    if (command == "owner") {
        try {
            const ownerPromises = global.owner.map(async (item, index) => [
                item[0],
                (await conn.getName(item[0] + "@s.whatsapp.net")) || "Tidak diketahui",
                "👑 Owner",
                ((await conn.fetchStatus(item[0] + "@s.whatsapp.net")).status) || "Tidak diketahui",
                "abdultobigo@gmail.com",
                "🇮🇩 Indonesia",
                "🚀 https://.github.io/",
                "👤 Gada pawang nih senggol dong 😔"
            ]);

            const data = await Promise.all(ownerPromises);

            let contacts = []
            for (let [number, name, isi, isi1, isi2, isi3, isi4, isi5] of data) {
                number = number.replace(/[^0-9]/g, '')
                let njid = number + '@s.whatsapp.net'
                let biz = await conn.getBusinessProfile(njid).catch(_ => null) || {}
                // N:;${name.replace(/\n/g, '\\n').split(' ').reverse().join(';')};;;
                let vcard = `
BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN:${name.replace(/\n/g, '\\n')}
item.ORG:${isi}
item1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
item1.X-ABLabel:${isi1}
item2.EMAIL;type=INTERNET:${isi2}
item2.X-ABLabel:📧 Email
item3.ADR:;;${isi3};;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 Region
item4.URL:${isi4}
item4.X-ABLabel:Website
item5.X-ABLabel:${isi5}
END:VCARD`.trim()
                contacts.push({
                    vcard,
                    displayName: name
                })
            }
            let tag_own = await conn.sendMessage(m.chat, {
                contacts: {
                    displayName: (contacts.length > 1 ? `2013 kontak` : contacts[0].displayName) || null,
                    contacts,
                },
                contextInfo: {
                    externalAdReply: {
                        title: wm,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: logo,
                        sourceUrl: ''
                    }
                }
            }, {
                quoted: fakes
            })
            await conn.reply(m.chat, `Halo kak @${m.sender.split("@")[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, tag_own, {
                mentions: [m.sender]
            });
        } catch {
            let tag_own = await conn.sendContact(m.chat, nomorown, await conn.getName(nomorown + "@s.whatsapp.net"), m);
            await conn.reply(m.chat, `Halo kak @${m.sender.split("@")[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, tag_own, {
                mentions: [m.sender]
            });
        }

    }
}
handler.help = ["owner", "creator", "pengembang"]
handler.tags = ["info"]
handler.command = /^(owner|pengembang|creator)$/i

export default handler
