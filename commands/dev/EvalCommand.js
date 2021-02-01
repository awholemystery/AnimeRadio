module.exports = {
    name : 'eval',
    category : 'dev',
    timeout: 5000,
    description : 'Renvoie un code JS testé',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

if (message.author.id === config.owner) {
    try {
      var output = eval(args.slice(1).join(" "))
      message.channel.send('**Output:** ' + output)
      return
    } catch (error) {
      message.channel.send('**Error:** ```' + error + '```')
      return
    }
  } else {
    message.channel.send("> Désolé, seul le développeur de la radio peut utiliser cette commande.")
  }
}
}