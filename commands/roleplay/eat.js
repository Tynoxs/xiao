const { Command } = require('discord.js-commando');

module.exports = class EatCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'eat',
            group: 'roleplay',
            memberName: 'eat',
            description: 'Eats something/someone. (;eat @User)',
            examples: [';eat @User'],
            args: [{
                key: 'thing',
                prompt: 'What do you want to roleplay with?',
                type: 'string'
            }]
        });
    }

    run(message, args) {
        if (message.channel.type !== 'dm') {
            if (!message.channel.permissionsFor(this.client.user).hasPermission(['SEND_MESSAGES', 'READ_MESSAGES'])) return;
        }
        const roleplayed = args.thing;
        return message.say(`${message.author} *eats* ${roleplayed}`);
    }
};
