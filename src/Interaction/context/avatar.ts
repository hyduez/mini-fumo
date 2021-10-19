export const interaction = {
    name: 'avatar',
    testOnly: false,
    type: 'USER',
    run: async (bot, interact, args) => {
        await interact.deferReply({ ephemeral: true })
        const user = await bot.user.fetch(interact.targetId)
        interact.followUp({ content: user.avatarURL({ dynamic: true, size: 1024 }) })
    }
}