import { CommandInteraction, Client } from 'eris';

export const interaction = {
    name: 'avatar',
    testOnly: false,
    type: 2,
    run: async (bot: Client, interact: CommandInteraction, _args: string[]) => {
        const user = await bot.users.get(interact.data.target_id);
        const dynamic = user.avatar ? (user.avatar.startsWith('a_') ? 'gif' : 'png') : 'png';
        await interact.createMessage({ content: user.dynamicAvatarURL(dynamic, 1024), flags: 64 });
    }
}