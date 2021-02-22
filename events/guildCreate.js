const client = require('../animeradio')


client.on("guildCreate", async guild => {
    console.log(`Je viens de rejoindre ${guild.name}`)
});