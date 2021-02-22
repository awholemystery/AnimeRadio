const { MessageEmbed } = require('discord.js')


module.exports = {
    name : 'play',
    category : 'radio',
    timeout: 5000,
    description : 'Lance une station',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {


const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      const embed = new MessageEmbed()
        .setColor("#ff0000")
        .setDescription(":flag_fr: Erreur! Vous devez être connectés dans un salon vocal.\n:flag_um: Error! You have to be in a voice channel.")
        .setFooter("AnimeRadio レム", `${client.user.avatarURL()}`)

      message.channel.send(embed)
      return
    }
    if (!args[1]) {
      const embed = new MessageEmbed()
        .setColor("#ff0000")
        .setDescription(":flag_fr: Vous devez choisir une radio! ex: `+play 1`\n:flag_um: You have to choose a radio! eg: `+play 1`")
        .setFooter("AnimeRadio レム", `${client.user.avatarURL()}`)

      message.channel.send(embed)
      return
    }
    if (args[1] === "1") {
      const embed = new MessageEmbed()
        .setColor("#68ca55")
        .setDescription(":flag_fr: Lancement de la radio [`AnimeNexus`](https://www.animenexus.mx/) dans <#" + message.member.voice.channel + ">\n:flag_um: Radio launch [`AnimeNexus`](https://www.animenexus.mx/) in <#" + message.member.voice.channel + ">")
        .setThumbnail('https://cdn.discordapp.com/attachments/804411970212069416/804412016970301520/radio-animenexus.jpg')
        .setFooter("AnimeRadio レム", `${client.user.avatarURL()}`)

      message.channel.send(embed);
      message.member.voice.channel.join().then( connection => {
        require('http').get("http://radio.animenexus.mx:8000/animenexus", (res) => {
          connection.play(res).on('error', err => {
            client.logger.error(err);
            connection.play(res)
          })
        })
      })
      return
    }
    if (args[1] === "2") {
      const embed = new MessageEmbed()
        .setColor("#68ca55")
        .setDescription(":flag_fr: Lancement de la radio [`Skyrock`](https://skyrock.fm/) dans <#" + message.member.voice.channel + ">\n:flag_um: Radio launch [`Skyrock`](https://skyrock.fm/) in <#" + message.member.voice.channel + ">")
        .setThumbnail('https://cdn.discordapp.com/attachments/804411970212069416/804412012968149033/image.jpg')
        .setFooter("AnimeRadio レム", `${client.user.avatarURL()}`)

      message.channel.send(embed);
      message.member.voice.channel.join().then(connection => {
        require('http').get("http://icecast.skyrock.net/s/natio_mp3_128k", (res) => {
          connection.play(res).on('error', err => {
            client.logger.error(err);
            connection.play(res)
          })
        })
      })
      return
    }
    if (args[1] === "3") {
      const embed = new MessageEmbed()
        .setColor("#68ca55")
        .setDescription(":flag_fr: Lancement de la radio [`Nolife`](https://www.radionolife.com/) dans <#" + message.member.voice.channel + ">\n:flag_um: Radio launch [`Nolife`](https://www.radionolife.com/) in <#" + message.member.voice.channel + ">")
        .setThumbnail('https://cdn.discordapp.com/attachments/804411970212069416/804431468654100486/banner_radionolife.jpg')
        .setFooter("AnimeRadio レム", `${client.user.avatarURL()}`)

      message.channel.send(embed);
      message.member.voice.channel.join().then(connection => {
        require('https').get("https://radionolife.com:8000/nolife", (res) => {
          connection.play(res).on('error', err => {
            client.logger.error(err);
            connection.play(res)
          })
        })
      })
      return
    }
  
    const embed = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(":flag_fr: Cette radio n'est pas dans ma base!\n:flag_um: This radio isn't in my database!")
      .setFooter("AnimeRadio レム", `${client.user.avatarURL()}`)

    message.channel.send(embed);
}
}