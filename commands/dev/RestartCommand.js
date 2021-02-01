const config = require('../../config.json')


module.exports = {
    name : 'restart',
    category : 'dev',
    timeout: 5000,
    description : 'Redémarre le bot',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        if (message.author.id === config.owner) {
            message.channel.send(":wave: Re-démarrage de la radio!")
            setTimeout(function() {
              process.exit(1);
            }, 3 * 1000)
          } else {
            message.channel.send("> Désolé, seul le développeur de la radio peut utiliser cette commande.")
          }
        }
    }