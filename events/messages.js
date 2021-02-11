const {Collection } = require('discord.js')
const client = require('../emiradio')
const Timeout = new Collection();
const ms = require('ms')


client.on('message', async message =>{
    if(message.author.bot) return;
    var prefixes = ["<@777260982513827861>", "<@!777260982513827861>", "+", "emilia"]

    let prefix = false;
    for (const thisPrefix of prefixes) {
        if (message.content.toLowerCase().startsWith(thisPrefix)) prefix = thisPrefix;
    }
    if(!message.guild) return;
    if(!message.content.toLowerCase().startsWith(prefix)) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args[0];
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) {
        if(command.timeout) {
            if(Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(`> Vous devez patienter encore ${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), { long: true })}`)
            command.run(client, message,args)
            Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.timeout)
            setTimeout(() => {
                Timeout.delete(`${command.name}${message.author.id}`)
            }, command.timeout)
        }
    }
})
