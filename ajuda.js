const Discord = require ('discord.js')

exports.run = async (client, message, args) => {
    
    
    const embed = new Discord.MessageEmbed()
    .setColor(`#00001`) //cor da embed//
    .setTitle(`Olá ${message.author.tag} Veja meus comandos logo a baixo:`) //title da embed do seu comando//
    .setDescription(`--seu comando aqui
    --seu comando aqui
    --seu comando aqui`) //descrição da sua embed//
    .setTimestamp() //esse é para mostrar o horario que usou o comando//
    message.channel.send(embed) //NÃO REMOVA ISSO!!!!//


}
