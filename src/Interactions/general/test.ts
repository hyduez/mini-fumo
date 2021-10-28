import { Constants } from 'eris';
import { Interaction } from '../../Interfaces';

export const interaction: Interaction = {
	name: 'test',
	description: 'comando de prueba',
	type: Constants.ApplicationCommandTypes.CHAT_INPUT,
	options: [
		{
			name: 'fumos',
			description: 'add your fumos',
			required: false,
			type: Constants.ApplicationCommandOptionTypes.STRING
		}
	],
	testOnly: true,
	run: async (_bot, interact, _args) => {
		interact.createMessage('Hola');
	},
};
