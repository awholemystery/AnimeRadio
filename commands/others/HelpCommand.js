const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'help',
    category : 'others',
    timeout: 5000,
    description : 'Renvoie la liste des commandes disponibles',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        const embedf = new MessageEmbed()
            .setColor(3447003)
            .setTitle("Help - Pannel d'aide")
            .setDescription(":flag_fr: Le prefix est `+`\n:flag_um: Bot's prefix is `+`")
            .addField("🎶 **Radio**", "`play`\n`leave`\n`list`")
            .addField("🔨 **Autres**", "`help`\n`invite`\n`ping`\n`stats`")
            .setThumbnail(client.user.avatarURL())
            .setFooter("Emilia エミリア Radio", `${client.user.avatarURL()}`)

        message.channel.send(embedf);
    }
}