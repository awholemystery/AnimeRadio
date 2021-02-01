module.exports = {
    name : 'ping',
    category : 'others',
    timeout: 5000,
    description : 'Renvoie la latence du bot',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        message.channel.send("> Ping?...").then(message => {
            
            message.edit(`> Pong!\n> ${client.ws.ping} ms`);
        })
    }
}