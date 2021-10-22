import { Interaction } from '../../Interfaces';
import { Formatters } from 'discord.js';

export const interaction: Interaction = {
	name: 'test',
	description: 'Testing command',
	testOnly: true,
	type: 'CHAT_INPUT',
	options: [{
		name: 'fumos',
		description: 'love',
		type: 'STRING',
		required: false,
	}],
	run: async (_bot, interact, _args) => {

		let url = Formatters.hyperlink('Fumos friday', 'https://github.com/hyduez', 'Fumos now');
		
		await interact.reply({ embeds: [{ description: url }] });
	},
};
