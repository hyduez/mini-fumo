import { Interaction } from '../../Interfaces';

export const interaction: Interaction = {
	name: 'text',
	description: 'Make the bot say something',
	testOnly: true,
	options: [
		{
			name: 'content',
			description: 'The content that the bot will send',
			type: 'STRING',
			required: true,
		}
	],
	type: 'CHAT_INPUT',
	run: async (bot, interact, args,) => {
		await interact.deferReply({ ephemeral: false });
		const content = interact.options.getString('content');
		interact.followUp({ content: content });
	},
};
