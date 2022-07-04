const { MessageEmbed } = require('discord.js')

module.exports = (client) => {
  client.on('guildMemberAdd', (member) => {
    const welkumId = '985200981044232212'
    const welcomeId = '865240043952930846'
    const role = '985184374683230228'
    const message = `welcome <@${member.id}>, selamat datang di markas besar TMJ!!`
    const channel = member.guild.channels.cache.get(welkumId)
    const embed = new MessageEmbed()
      .setColor('#66BFBF')
      .setTitle('WELKUMMM !!!')
      .setDescription(message)
      .setImage(url = 'https://c.tenor.com/ciGXE06AvzMAAAAd/dj-loli.gif')
      .setFooter('Take it easy.')
    channel.send({ embeds: [embed] })
    // channel.send(message)
    console.log(member)
  })
}