const { MessageEmbed } = require('discord.js')


module.exports = {
    name : 'play',
    category : 'radio',
    timeout: 3000,
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
        .setFooter("Emilia エミリア Radio", `${client.user.avatarURL()}`)

      message.channel.send(embed)
      return
    }
    if (!args[1]) {
      const embed = new MessageEmbed()
        .setColor("#ff0000")
        .setDescription(":flag_fr: Vous devez choisir une radio! ex: `+play 1`\n:flag_um: You have to choose a radio! eg: `+play 1`")
        .setFooter("Emilia エミリア Radio", `${client.user.avatarURL()}`)

      message.channel.send(embed)
      return
    }
    if (args[1] === "1") {
      const embed = new MessageEmbed()
        .setColor("#68ca55")
        .setDescription(":flag_fr: Lancement de la radio [`Radio Animes`](http://www.radio-animes.net/) dans <#" + message.member.voice.channel + ">\n:flag_um: Radio launch [`Radio Animes`](http://www.radio-animes.net/) in <#" + message.member.voice.channel + ">")
        .setThumbnail('https://i.imgur.com/kOVWLzV.png')
        .setFooter("Emilia エミリア Radio", `${client.user.avatarURL()}`)

      message.channel.send(embed);
      message.member.voice.channel.join().then(connection => {
        require('http').get("http://listen.radioking.com/radio/238528/stream/282475", (res) => {
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
      .setFooter("Emilia エミリア Radio", `${client.user.avatarURL()}`)

    message.channel.send(embed);
}
}
