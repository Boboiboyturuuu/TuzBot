//Recode By BoboiboyTuru

import axios from 'axios';

let handler = async (m, { text, conn }) => {
    if (!text) throw 'Masukkan nama hero 😕';

    try {
        let res = await getMLProfile(text);
        if (!res) throw res;

        const {
            heroImg,
            description,
            releaseYear,
            role,
            specialty,
            lane,
            price,
            gameplayInfo,
            storyInfoList,
            storyInfoArray,
            attributes
        } = res;

        // Menampilkan gambar hero
        await conn.sendFile(m.chat, heroImg, 'hero.jpg', `
📊 *Informasi Hero Mobile Legends:*
📝 *Deskripsi:* ${description || '-'}
📅 *Tahun Rilis:* ${releaseYear}
👥 *Peran (Role):* ${role}
🔮 *Spesialisasi:* ${specialty}
🛣️ *Jalur (Lane):* ${lane}
💰 *Harga:* ${price}
        
⚔️ *Informasi Gameplay:*
💪 *Daya Tahan:* ${gameplayInfo.durability}
🔥 *Serangan:* ${gameplayInfo.offense}
🎮 *Efek Kontrol:* ${gameplayInfo.control_effect}
🌟 *Kesulitan:* ${gameplayInfo.difficulty}

📖 *Informasi Cerita:*
${storyInfoList.Full_name ? `👤 *Nama Lengkap:* ${storyInfoList.Full_name}` : ''}
${storyInfoList.Alias ? `🦸 *Alias:* ${storyInfoList.Alias}` : ''}
${storyInfoList.Origin ? `🏰 *Asal:* ${storyInfoList.Origin}` : ''}
${storyInfoList.Species ? `👥 *Spesies:* ${storyInfoList.Species}` : ''}
${storyInfoList.Gender ? `⚧ *Jenis Kelamin:* ${storyInfoList.Gender}` : ''}
${storyInfoList.Affiliation ? `🤝 *Afiliasi:* ${storyInfoList.Affiliation}` : ''}
${storyInfoList.Weapons ? `🗡️ *Senjata:* ${storyInfoList.Weapons}` : ''}
${storyInfoList.Abilities ? `🔮 *Kemampuan:* ${storyInfoList.Abilities}` : ''}
${storyInfoList.Website ? `🌐 *Situs Web:* ${storyInfoList.Website.trim()}` : ''}
${storyInfoList.Height ? `📏 *Tinggi:* ${storyInfoList.Height}` : ''}

🔗 *Link Gambar Hero:* ${heroImg}
        `.trim());

    } catch (e) {
        m.reply('Error. Terjadi kesalahan 😔');
    }
};

handler.help = ['heroml'];
handler.tags = ['information'];
handler.command = /^(heroml)$/i;

export default handler;

async function getMLProfile(heroName) {
    const apiKey = 'Io4NNb2xlt';

    try {
        const response = await axios.get(`https://api.ibeng.tech/api/others/heroml?q=${encodeURIComponent(heroName)}&apikey=${apiKey}`);
        
        const status = response.data.status;
        
        if (status === 'Success') {
            const heroImg = response.data.data.hero_img;
            const description = response.data.data.desc;
            const releaseYear = response.data.data.release;
            const role = response.data.data.role;
            const specialty = response.data.data.specialty;
            const lane = response.data.data.lane;
            const price = response.data.data.price;
            
            const gameplayInfo = response.data.data.gameplay_info;
            const storyInfoList = response.data.data.story_info_list;
            const storyInfoArray = response.data.data.story_info_array;
            const attributes = response.data.data.attributes;

            return {
                heroImg,
                description,
                releaseYear,
                role,
                specialty,
                lane,
                price,
                gameplayInfo,
                storyInfoList,
                storyInfoArray,
                attributes,
            };
        } else {
            throw new Error('Hero information not found.');
        }
    } catch (error) {
        console.error('Error fetching hero information:', error);

        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            console.error('Headers:', error.response.headers);
        }

        throw error;
    }
}