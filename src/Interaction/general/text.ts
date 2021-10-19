import { SlashCommandBuilder } from '@discordjs/builders';

export const interaction = {
	...new SlashCommandBuilder()
	.setName("text")
	.setDescription("🙌")
	.addStringOption(option => option
		.setName('content')
		.setDescription('El contenido que enviara el bot')
		.setRequired(true)),
	testOnly: false,
	type: 'CHAT_INPUT',
	run: async (bot, interact, args,) => {
		await interact.deferReply({ ephemeral: false });
		const content = interact.options.getString('content');
		interact.followUp({ content: content });
	},
};
