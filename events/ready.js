const { MessageEmbed } = require('discord.js')
const client = require('../animeradio')

client.on('ready', () => {
    console.log(`AnimeRadio est diffusé sur ${client.guilds.cache.size} serveurs. Avec un total de ${client.users.cache.size} utilisateurs.`)
        let statuses = [
        `animeradio.fr`]

        setInterval(function() {
        	let status = statuses[Math.floor(Math.random() * statuses.length)]
        	client.user.setActivity(status,{type: 'WATCHING'})
        }, 300000)
  
    const logem = new MessageEmbed()
    .setColor("AQUA")
    .setAuthor('AnimeRadio', 'https://i.imgur.com/B9ciI9l.png')
    .setDescription(`Lancement du Bot avec succès.\nServeurs: ${client.guilds.cache.size}\nUtilisateurs: ${client.users.cache.size}\nSalons: ${client.channels.cache.size}`)
    .setTimestamp()
    client.channels.cache.get('804752984453677117').send(logem);
  });