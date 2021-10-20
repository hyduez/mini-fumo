import { SlashCommandBuilder } from '@discordjs/builders';
import { Formatters } from 'discord.js';

export const interaction = {
	...new SlashCommandBuilder()
	.setName("test")
	.setDescription("Testing command"),
	testOnly: true,
	type: 'CHAT_INPUT',
	run: async (bot, interact, args,) => {
		await interact.deferReply({ ephemeral: true });
        let url = Formatters.hyperlink('Fumos friday', 'https://github.com/hyduez', 'Fumos?')
        interact.followUp({ embeds: [
            {
                description: url
            }
        ] });
	},
};
