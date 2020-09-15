const fs = require('fs');

module.exports = {
    name: 'setamongusrole',
    description: 'Set the default role to be used for Among Us notifications.',
    usage: '[current server\'s Among Us role]',
    aliases: ['amongusrole'],
    cooldown: 120,
    guildOnly: true,
    args: true,
    execute(message, args, {Canvas: Canvas, Discord: Discord}) {
        message.channel.startTyping().then(r => {
            console.log(args[0])
            fs.writeFile('amongusrole.txt', args[0], (err) => {
                if (err) {
                    message.channel.send(`Role ${args[0]} could not be saved: ${err}`);
                }
                message.channel.send(`Role ${args[0]} has been saved!`);
            })
        })
        message.channel.stopTyping()
    },
};