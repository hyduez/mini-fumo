import type { CommandInteraction } from 'discord.js';
import { Interaction } from '../../interfaces';

export const interaction: Interaction = {
    name: 'avatar',
    testOnly: false,
    type: 'USER',
    run: async (_, interact: CommandInteraction) => {
        const user = interact.options.getUser('user', true);

        const avatar = user.avatarURL({ dynamic: true, size: 2048 });

        await interact.reply({ content: avatar, ephemeral: true });
    }
}