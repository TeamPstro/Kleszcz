require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('guildMemberAdd', member => {
  member.send(
    `Welcome on the server! Please be aware that we won't tolerate troll, spam or harassment. Have fun 😀`
  )
})

client.on('message', msg => {
  if (msg.content === 'Jak pan jezus powiedział?') {
    msg.reply('Tak jak pan jezus powiedział!')
  }
})

client.login('NjIzNDkxODAzNjk3NjQzNTIw.XYDo3w.rSiybMPvueRPaKiuoJLCDjcpN7Q')
