import { MessageAttachment } from 'discord.js';
/* import { Interaction } from '../../Interfaces'; */

export const interaction = {
    name: 'avatar',
    testOnly: false,
    type: 'USER',
    run: async (bot, interact, args) => {
        await interact.deferReply({ ephemeral: true })
        const user = await bot.user.fetch(interact.targetId)
        const avatar = new MessageAttachment(user.avatarURL({ dynamic: true, size: 1024 }))
        interact.followUp({ files: [avatar] })
    }
}