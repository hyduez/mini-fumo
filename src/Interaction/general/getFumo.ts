import { Interaction } from '../../Interfaces';
import { randomFumo } from 'fumo-api';

export const interaction: Interaction = {
	name: 'getfumo',
	description: 'Fumos?',
	testOnly: false,
	type: 'CHAT_INPUT',
	run: async (bot, interact, args,) => {
		await interact.deferReply({ ephemeral: false });

		randomFumo().then((url) => {
			interact.followUp({ content: url });
		});
	},
};
