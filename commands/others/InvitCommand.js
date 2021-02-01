const { MessageEmbed } = require('discord.js')


module.exports = {
    name : 'invite',
    category : 'others',
    timeout: 5000,
    description : 'Renvoie le lien d\'invitation du bot',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        const embed = new MessageEmbed()
        .setColor(3447003)
        .addField(':flag_fr: Invitez moi sur votre serveur!', '[Cliquez ici](https://discord.com/api/oauth2/authorize?client_id=777260982513827861&permissions=8&scope=bot)')
        .addField(':flag_fr: Rejoignez le support!', '[Cliquez ici](https://discord.gg/TCk7CRHxjZ)')
        .addField(':flag_um: Add me on your server!', '[Click here](https://discord.com/api/oauth2/authorize?client_id=777260982513827861&permissions=8&scope=bot)')
        .addField(':flag_um: Join support server!', '[Click here](https://discord.gg/TCk7CRHxjZ)')
        .setThumbnail(client.user.avatarURL())
        .setFooter("Emilia エミリア Radio", `${client.user.avatarURL()}`)
  
      message.channel.send(embed);
    }
}