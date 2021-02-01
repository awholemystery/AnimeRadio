const client = require('../emiradio')

client.on("guildDelete", async guild => {
    console.log(`Je viens de quitter ${guild.name}`)
});