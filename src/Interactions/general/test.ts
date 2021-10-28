import { Interaction } from '../../Interfaces';

export const interaction: Interaction = {
	name: 'test',
	description: 'comando de prueba',
	type: 1,
	options: [
		{
			name: 'fumos',
			description: 'add your fumos',
			required: false,
			type: 3
		}
	],
	testOnly: true,
	run: async (_bot, interact, _args) => {
		interact.createMessage('Hola');
	},
};
