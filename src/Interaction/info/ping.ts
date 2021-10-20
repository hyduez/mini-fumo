import { SlashCommandBuilder } from '@discordjs/builders';

export const interaction = {
	...new SlashCommandBuilder()
 	.setName("ping")
	.setDescription("Ping command"),
	testOnly: false,
	type: 'CHAT_INPUT',
	run: async (bot, interact, args) => {
		await interact.deferReply({ ephemeral: true });
		interact.followUp({ content: `pong! ${bot.ws.ping}ms <:cirnu_hm:890470624055660585>` });
	},
};
