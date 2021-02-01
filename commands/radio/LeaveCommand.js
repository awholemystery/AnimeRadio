const { MessageEmbed } = require('discord.js')


module.exports = {
    name : 'leave',
    category : 'radio',
    timeout: 5000,
    description : 'Déconnecte le bot de votre vocal',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        if (message.member.voice.channel) {
            const embedg = new MessageEmbed()
              .setColor("#68ca55")
              .setDescription(":flag_fr: Déconnection du salon vocal réussi!\n:flag_um: Disconnected from voice channel succesfully!")
              .setFooter("Emilia エミリア Radio", `${client.user.avatarURL()}`)
        
            message.channel.send(embedg);
            message.member.voice.channel.leave();
            return
          } else {
            const embehd = new MessageEmbed()
              .setColor("#ff0000")
              .setDescription(":flag_fr: Vous n'êtes pas dans un salon vocal!\n:flag_um: You aren't on a voice channel!")
              .setFooter("Emilia エミリア Radio", `${client.user.avatarURL()}`)
        
            message.channel.send(embehd)
            return
        }
    }
}