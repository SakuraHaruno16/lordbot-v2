let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • TELKOMSEL [082287750102]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282287750102
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
