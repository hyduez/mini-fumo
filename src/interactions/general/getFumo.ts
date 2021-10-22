import { Interaction } from '../../interfaces';
import { randomFumo } from 'fumo-api';

export const interaction: Interaction = {
	name: 'getfumo',
	description: 'Fumos?',
	testOnly: false,
	type: 'CHAT_INPUT',
	run: async (_, interact) => {
		await interact.deferReply();

		try {
			const url = await randomFumo();

			await interact.followUp(url);
		} catch (err) {
			const error = err as Error;

			await interact.followUp(`🔥🐈 (${error.message})`)
		}
	},
};
