const { startCountdown } = require('../lib/countdown')

module.exports = {
    name: 'countdown',
    command: ['countdown', 'cd'],
    description: 'Set countdown timer',

    async execute(m, { conn, args }) {
        if (!args[0]) return m.reply('Contoh: .countdown 10 (detik)')

        let seconds = parseInt(args[0])
        if (isNaN(seconds)) return m.reply('Harus angka!')

        m.reply(`⏳ Countdown dimulai: ${seconds} detik`)

        startCountdown(m.chat, seconds * 1000, () => {
            conn.sendMessage(m.chat, { text: '⏰ Waktu habis!' })
        })
    }
}
