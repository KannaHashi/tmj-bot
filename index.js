const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: 515})
require('dotenv').config()

const pref = '-rb'

const welcome = require('./welcome')
const config = require('./config')

client.on( 'ready', () => {
  console.log(`logged in as ${client.user.tag}`)
  client.user.setActivity('-rb PREFIX !!', {type: 'LISTENING'})
  welcome(client)
})

client.on('messageCreate', (message) => {
  if (message.content === 'testing') {
    message.reply('berak pak')
  }
  if (message.content === 'berak') {
    const channel = "865240043952930846"
    const embed = new MessageEmbed()
      .setColor('#66BFBF')
      .setTitle('Berak')
      .setDescription(`moka berak !!`)
      .setFooter('Take it easy.')
    message.reply({ embeds: [embed] })
  }
  if (message.content === `${pref} help`) {
    const channel = "865240043952930846"
    const embed = new MessageEmbed()
      .setColor('#66BFBF')
      .setTitle('Testing')
      .setDescription(`see the following commands to help you sliding in this area!!`)
      .addFields(
        {name : 'enter', value : 'Endtair Channel' },
        {name : 'rm', value : 'Ricardo Milos' },
        {name : 'profile', value : 'View Profile' }
      )
      .setImage(url='https://i.pinimg.com/originals/85/ca/ab/85caab51be730a4e1290cd99d7d6e085.gif')
      .setFooter('Take it easy.')
    message.reply({ embeds: [embed] })
  }
  if (message.content === `${pref} rm`) {
    message.reply('https://i.pinimg.com/originals/85/ca/ab/85caab51be730a4e1290cd99d7d6e085.gif')
  }
  if (message.content === `${pref} enter`) {
    const embed = new MessageEmbed()
      .setColor('#66BFBF')
      .setTitle('Endtair Channel!!')
      .setThumbnail('https://yt3.ggpht.com/ytc/AKedOLQxbCpOqCirlpH2F9OEXxcpIZ3weeelnm6GtSFGeg=s176-c-k-c0x00ffffff-no-rj-mo')
      .setDescription(`https://www.youtube.com/channel/UCk_XM7yElDiTh0yYSdFlMLA`)
      .setFooter('Take it easy.')
    message.reply({embeds: [embed]})
  }
  if (message.content === `${pref} vl`) {
    const valo = ''
    const embed = new MessageEmbed()
      .setColor('RED')
      .setAuthor({
         name : `${message.author.username}`,
         iconURL : `${message.author.avatarURL()}`
      })
      .setTitle(`Valorant Profile`)
      .setDescription(`working on it...`)
      .setImage('https://cdn1-production-images-kly.akamaized.net/e23Gy7mJ4TAlvVQHoQHa5FN8BLo=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3142622/original/000361800_1591163362-valorant-2.jpg')
      .setFooter('Take it easy.')
    message.reply({embeds: [embed]})
  }
  if (message.content === `${pref} profile`) {
    console.log(message.author)
    const embed = new MessageEmbed()
      .setColor('#66BFBF')
      .setTitle(`Sangat Baik hati dan tidak sombonk`)
      .setAuthor({
        name : `${message.author.username} 's Profile`, iconURL : `${message.author.avatarURL()}`
      })
      .addFields(
        {name : 'Level', value : `1`, inline : true},
        {name : 'Class', value : `Novice`, inline : true},
        {name : 'Rank Palo', value : `Unrated`},
      )
      .setThumbnail(message.author.avatarURL())
      .setImage(url = 'https://c.tenor.com/ciGXE06AvzMAAAAd/dj-loli.gif')
      // .setDescription(``)
      .setFooter('Take it easy.')
    message.reply({embeds: [embed]})
  }
  if (message.content === `${pref} well`) {
    console.log(message.author)
    const embed = new MessageEmbed()
      .setColor('#66BFBF')
      .setTitle(`Sangat Baik hati dan tidak sombonk`)
      .setAuthor({
        name : `${message.author.username} 's Profile`, iconURL : `${message.author.avatarURL()}`
      })
      .addFields(
        {name : 'Level', value : `1`, inline : true},
        {name : 'Class', value : `Novice`, inline : true},
        {name : 'Rank Palo', value : `Unrated`},
      )
      .setImage(url = 'https://c.tenor.com/ciGXE06AvzMAAAAd/dj-loli.gif')
      // .setDescription(``)
      .setFooter('Take it easy.')
    message.reply({embeds: [embed]})
  }
  if (message.content === `${pref} member`) {
    const serverId = client.guilds.get(`${message.guildId}`)
    console.log(message.author)
    const embed = new MessageEmbed()
      .setColor('#66BFBF')
      .setTitle(`Member TMJ 21`)
      .setAuthor({
        name : `${message.author.username} 's Profile`, iconURL : `${message.author.avatarURL()}`
      })
      // .addFields(
      //   {while () {
      //     {name : 'asaldkalds'}
      //   }}
      // )
      .setImage(url = 'https://c.tenor.com/ciGXE06AvzMAAAAd/dj-loli.gif')
      // .setDescription(``)
      .setFooter('Take it easy.')
    message.reply({embeds: [embed]})
  }
})

client.login(config.token)