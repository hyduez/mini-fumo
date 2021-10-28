import { Interaction } from '../../Interfaces';
import { randomFumo } from 'fumo-api';

export const interaction: Interaction = {
	name: 'getfumo',
	description: 'Get one Fumo form Fumo-api',
	testOnly: false,
	type: 1,
	run: async (bot, interact, args,) => {
		await interact.defer();
		const url = await randomFumo();
		interact.createFollowup({ content: url });
	},
};
