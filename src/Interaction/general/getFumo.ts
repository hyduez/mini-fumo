import { Interaction } from '../../Interfaces';
import { randomFumo } from 'fumo-api';

export const interaction: Interaction = {
	name: 'getfumo',
	description: 'Fumos?',
	testOnly: false,
	type: 'CHAT_INPUT',
	run: async (bot, interact, args,) => {
		await interact.deferReply();
		try {
			const url = await randomFumo();
			await interact.followUp(url);
		} catch (err) {
			const error = err as Error;
			await interact.followUp({ content: `An error has occurred: \`${error.message}\``, ephemeral: true })
		}
	},
};
