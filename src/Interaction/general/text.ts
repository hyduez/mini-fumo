import { SlashCommandBuilder } from '@discordjs/builders';

export const interaction = {
	...new SlashCommandBuilder()
	.setName("text")
	.setDescription("Make the bot say something")
	.addStringOption(option => option
		.setName('content')
		.setDescription('The content that the bot will send')
		.setRequired(true)),
	testOnly: false,
	type: 'CHAT_INPUT',
	run: async (bot, interact, args,) => {
		await interact.deferReply({ ephemeral: false });
		const content = interact.options.getString('content');
		interact.followUp({ content: content });
	},
};
