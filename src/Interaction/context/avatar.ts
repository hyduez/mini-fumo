import { CommandInteraction, MessageAttachment } from 'discord.js';

export const interaction = {
    name: 'avatar',
    testOnly: false,
    type: 'USER',
    run: async (bot, interact: CommandInteraction, _args: string[]) => {
        const user = interact.options.getUser('user', true);

        const avatar = user.avatarURL({ dynamic: true, size: 2048 });

        await interact.reply(avatar);
    }
}