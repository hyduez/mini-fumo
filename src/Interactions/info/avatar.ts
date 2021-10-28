import { CommandInteraction, Constants, Client } from 'eris';

export const interaction = {
    name: 'avatar',
    testOnly: false,
    type: Constants.ApplicationCommandTypes.USER,
    run: async (bot: Client, interact: CommandInteraction, _args: string[]) => {
        const user = await bot.users.get(interact.data.target_id);
        await interact.createMessage({ content: user.dynamicAvatarURL(), flags: 64 });
    }
}