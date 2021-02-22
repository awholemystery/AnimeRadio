const client = require('../animeradio')

client.on("guildDelete", async guild => {
    console.log(`Je viens de quitter ${guild.name}`)
});