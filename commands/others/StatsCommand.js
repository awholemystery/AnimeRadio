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
          .setTitle('AnimeRadio レム')
          .setAuthor(client.user.username, client.user.avatarURL())
          .setColor(3447003)
          .setThumbnail(client.user.avatarURL())
          .addField(':desktop: **Servers**', "`" + client.guilds.cache.size + "`", true)
          .addField(':thinking: **Memory usage**', "`" + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB`", true)
          .addField(':floppy_disk: **Version**', "`" + version + "`", true)
          .addField(`📻 **Stations**`, "`3`", true)
          .addField(`⚙️ **System**`, "`Linux`", true)
          .addField("🌐 **Website**", "[AnimeRadio レム](https://animeradio.fr)")
          .setFooter("AnimeRadio レム", `${client.user.avatarURL()}`)
    
        message.channel.send(embed);
    }
}