import { Interaction } from '../../interfaces';

export const interaction: Interaction = {
	name: 'ping',
	description: 'Ping command',
	testOnly: false,
	type: 'CHAT_INPUT',
<<<<<<< HEAD:src/interactions/info/ping.ts
	run: async (bot, interact) => {
		await interact.reply({ content: `Pong! ${bot.ws.ping}ms <:cirnu_hm:890470624055660585>` });
=======
	run: async (bot, interact, args) => {
		await interact.reply({ content: `Pong! ${bot.ws.ping}ms <:cirnu_hm:890470624055660585>`, ephemeral: true });
>>>>>>> 42ed65dd57086455b4748e36150eeac9ee1b996b:src/Interaction/info/ping.ts
	},
};
