module.exports = {
    name: 'newgame',
    description: 'Announce Among Us game to the server.',
    usage: '[join code]',
    aliases: ['newroom', 'newlobby'],
    cooldown: 10,
    guildOnly: true,
    args: true,
    execute(message, args, {Canvas: Canvas, Discord: Discord}) {
        message.channel.startTyping()
        getGuildData(message.guild.id).then(function (result) {
            let amongusrole = result;
            const newgameEmbed = new Discord.MessageEmbed()
                .setColor('#8a0000')
                .setTitle('New Among Us Game!')
                .setAuthor('ImposterBot', 'https://i.imgur.com/TLMyjPM.png', 'https://github.com/shiv213/ImposterBot')
                .setThumbnail('https://i.imgur.com/LHkwkNC.png')
                .addFields(
                    {name: "CODE: ", value: args[0], inline: true},
                )
                .setTimestamp()
                .setFooter('Join now!');
            if (amongusrole === 'none') {
                message.channel.send(`Among Us role has not been set! Set one using \`setamongusrole\``);
            } else {
                message.channel.send(`${amongusrole}`);
            }
            message.channel.send(newgameEmbed).then(r => message.channel.stopTyping());
        })


    },
};