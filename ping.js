const { client } = require("discord.js");

module.exports = {
    name: "h-ping",
    category: "bot",
    run: (client, message, args) => {
message.channel.send(`seu ping é de ${Date.now() - message.createdTimestamp} ms
meu ping é de ${client.ws.ping}`)
}
}
