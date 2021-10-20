import { Interaction } from '../../Interfaces';
import { Formatters } from 'discord.js';

export const interaction: Interaction = {
	name: 'test',
	description: 'Testing command',
	testOnly: true,
	type: 'CHAT_INPUT',
	options: [{
		name: 'asdsadsdad',
		description: 'uwu',
		type: 'STRING',
		required: false,

	}],
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
