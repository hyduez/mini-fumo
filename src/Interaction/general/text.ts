import { Interaction } from '../../Interfaces';

export const interaction: Interaction = {
	name: 'text',
	description: 'Make the bot say something',
	testOnly: false,
	options: [
		{
			name: 'content',
			description: 'The content that the bot will send',
			type: 'STRING',
			required: true,
		}
	],
	type: 'CHAT_INPUT',
	run: async (_bot, interact, _args) => {
		const content = interact.options.getString('content', true);

		await interact.reply({ content: content.length > 500 ? content.slice(0, 500) + '...' : content });
	},
};
