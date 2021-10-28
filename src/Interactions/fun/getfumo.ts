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
		const url = await randomFumo();
		interact.createFollowup(url);
	},
};
