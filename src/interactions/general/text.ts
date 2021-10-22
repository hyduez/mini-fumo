import { Interaction } from '../../interfaces';

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
<<<<<<< HEAD:src/interactions/general/text.ts
	run: async (_, interact) => {
		const content = interact.options.getString('content', true);
=======
	run: async (_bot, interact, _args) => {
>>>>>>> 42ed65dd57086455b4748e36150eeac9ee1b996b:src/Interaction/general/text.ts

		const content = interact.options.getString('content'); /* Options(Line 12) */
		
		await interact.reply({ content: content.length > 500 ? content.slice(0, 500) + '...' : content });
	},
};
