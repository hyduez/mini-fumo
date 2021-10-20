import { SlashCommandBuilder } from '@discordjs/builders';
import { Interaction } from '../../Interfaces';
import axios from 'axios';

export const interaction = {
	...new SlashCommandBuilder()
 	.setName("docs")
	.setDescription("Search for methods, events or functions in the Docs")
    .addStringOption(option => option
		.setName('search')
		.setDescription('Section to search')
		.setRequired(true))
    .addStringOption(option => option
        .setName('version')
        .setDescription('Documentation version')
        .addChoices([['stable', 'stable'], ['master', 'master']])
        .setRequired(false)),
	testOnly: false,
	type: 'CHAT_INPUT',
	run: async (bot, interact, args) => {
		await interact.deferReply({ ephemeral: false });
        const search = interact.options.getString('search');
        const version = interact.options.getString('version');
        const url = `https://djsdocs.sorta.moe/v2/embed?src=${version || "stable"}&q=${encodeURIComponent(search)}`;
        axios.get(url).then((e) => {
            const { data } = e;
            if (data) {
                interact.followUp({ embeds: [data] }).catch((e) => { interact.followUp(`An error has occurred: \`${e}\``)});
            } else {
                interact.followUp({ content: 'Oh no papu, no he podido hayar eso :\'v'});
            }
        })
	},
};
