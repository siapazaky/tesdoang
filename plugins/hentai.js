let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender]
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	await conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/random2/hentai?apikey=${global.lolkey}`, '2023 © Kikuchanj', m)
}
handler.help = ['hentai']
handler.tags = ['nsfw']

handler.command = /^(hentai)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler