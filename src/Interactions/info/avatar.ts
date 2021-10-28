import { CommandInteraction, Client } from 'eris';

export const interaction = {
    name: 'avatar',
    testOnly: false,
    type: 2,
    run: async (bot: Client, interact: CommandInteraction, _args: string[]) => {
        const user = await bot.users.get(interact.data.target_id);
        await interact.createMessage({ content: user.dynamicAvatarURL('gif' || 'png', 1024), flags: 64 });
    }
}