const Discord = require('discord.js')


module.exports = {
    name : 'link',
    category : 'radio',
    timeout: 3000,
    description : 'Permet de lire le flux indiquer',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      const embed1 = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .addField(':flag_fr: Erreur!', "Vous devez être dans un salon vocal!")
        .addField(':flag_um: Error!', "You must be in a Voice channel to use this command!")

      message.channel.send(embed1)
      return
    }
    if (!args[1]) {
      const embed2 = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .addField(':flag_fr: Erreur!', "Aucun URL indiquer!")
        .addField(':flag_um: Error!', "No URL inputted!")

      message.channel.send(embed2)
      return
    }
    if (message.content.match(/http/i)) {
      const embed3 = new Discord.MessageEmbed()
        .setColor("#68ca55")
        .addField(':flag_fr: Succès!', "Lancement de votre flux dans " + message.member.voice.channel + "\nSi vous n'entendez rien après un moment, votre lien est surement invalide.")
        .addField(':flag_um: Success!', 'Launching of you link in' + message.member.voice.channel + '\nIf you do not hear anything after a while, so you link does not work.')

      message.channel.send(embed3);
      const member1 = message.guild.member(client.user);
      message.member.voice.channel.join().then(connection => {
        require('http').get(args[1], (res) => {
          connection.play(res);
        })
      return
      })
    const embed4 = new Discord.MessageEmbed()
      .setColor("#ff0000")
      .addField(':flag_fr: Erreur!', "Le lien ne contient pas http!")
      .addField(':flag_um: Error!', "Inputted URL did not contain http at the start!")

    message.channel.send(embed4)
    return
  }
}
}
