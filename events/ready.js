const { MessageEmbed } = require('discord.js')
const client = require('../emiradio')

client.on('ready', () => {
    console.log(`L'EmiRadio est diffusée sur ${client.guilds.cache.size} serveurs. Avec un total de ${client.users.cache.size} utilisateurs.`)
    client.user.setActivity("emiradio.eu | +help", { type: 'STREAMING', url: ""})
  
    const logem = new MessageEmbed()
    .setColor("AQUA")
    .setAuthor('EmiRadio', 'https://i.imgur.com/Wx2DIaq.jpeg')
    .setDescription(`Lancement du Bot avec succès.\nServeurs: ${client.guilds.cache.size}\nUtilisateurs: ${client.users.cache.size}\nSalons: ${client.channels.cache.size}`)
    .setTimestamp()
    client.channels.cache.get('804752984453677117').send(logem);
  });
