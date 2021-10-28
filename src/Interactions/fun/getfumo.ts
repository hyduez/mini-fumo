import { Interaction } from '../../Interfaces';
import { randomFumo } from 'fumo-api';
import { Constants } from 'eris';

export const interaction: Interaction = {
	name: 'getfumo',
	description: 'Get one Fumo form Fumo-api',
	testOnly: false,
	type: Constants.ApplicationCommandTypes.CHAT_INPUT,
	run: async (bot, interact, args,) => {
		await interact.defer();
		try {
			const url = await randomFumo();
			await interact.createFollowup(url);
		} catch (err) {
			const error = err as Error;
			await interact.createFollowup({ content: `An error has occurred: \`${error.message}\`` });
		}
	},
};
