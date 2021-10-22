import { Interaction } from '../../Interfaces';

export const interaction: Interaction = {
	name: 'ping',
	description: 'Ping command',
	testOnly: false,
	type: 'CHAT_INPUT',
	run: async (bot, interact) => {
		await interact.reply({ content: `Pong! ${bot.ws.ping}ms <:cirnu_hm:890470624055660585>` });
	},
};
