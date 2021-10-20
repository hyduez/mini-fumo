import { SlashCommandBuilder } from '@discordjs/builders';
import { randomFumo } from 'fumo-api';
import { MessageAttachment } from 'discord.js';

export const interaction = {
	...new SlashCommandBuilder()
	.setName("getfumo")
	.setDescription("Fumos?"),
	testOnly: false,
	type: 'CHAT_INPUT',
	run: async (bot, interact, args,) => {
		await interact.deferReply({ ephemeral: false });
		randomFumo().then((url) => { 
			const fumo = new MessageAttachment(url, 'fumo.jpg');
			interact.followUp({ files: [fumo] });
		})
	},
};
