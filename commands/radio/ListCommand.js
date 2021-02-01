const { MessageEmbed } = require('discord.js')


module.exports = {
    name : 'list',
    category : 'radio',
    timeout: 5000,
    description : 'Renvoie la liste des stations disponibles',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        const embed = new MessageEmbed()
            .setColor(3447003)
            .addField(':flag_fr: Liste des stations:', '`1`: AnimeNexus\n`2`: RadioAnimes\n`3`: Skyrock\n`4`: Nolife\n')
            .addField(':flag_um: Stations', '`1`: AnimeNexus\n`2`: RadioAnimes\n`3`: Skyrock\n`4`: Nolife\n')
            .setFooter("Emilia エミリア Radio", `${client.user.avatarURL()}`)
            .setThumbnail(client.user.avatarURL())

        message.channel.send(embed);
    }
}