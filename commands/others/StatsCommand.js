const { MessageEmbed } = require('discord.js')


module.exports = {
    name : 'stats',
    category : 'others',
    timeout: 5000,
    description : 'Renvoie les statistiques du bot',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

      var version = '1.0.4';

        const embed = new MessageEmbed()
          .setTitle('Emilia Radio')
          .setAuthor(client.user.username, client.user.avatarURL())
          .setColor(3447003)
          .setThumbnail(client.user.avatarURL())
          .addField(':desktop: **Serveurs**', "`" + client.guilds.cache.size + "`", true)
          .addField(':thinking: **Utilisation de la RAM**', "`" + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB`", true)
          .addField(':floppy_disk: **Version**', "`" + version + "`", true)
          .addField(`📻 **Radio supportées**`, "`4`", true)
          .addField(`⚙️ **Système**`, "`Linux`", true)
          .addField("🌐 **Site**", "[EmiRadio](https://www.emiradio.eu/)")
          .setFooter("Emilia エミリア Radio", `${client.user.avatarURL()}`)
    
        message.channel.send(embed);
    }
}