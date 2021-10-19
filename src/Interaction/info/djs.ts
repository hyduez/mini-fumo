import axios from 'axios';
import { SlashCommandBuilder } from '@discordjs/builders';

export const interaction = {
	...new SlashCommandBuilder()
 	.setName("docs")
	.setDescription("👀")
    .addStringOption(option => option
		.setName('search')
		.setDescription('Seccion a buscar')
		.setRequired(true))
    .addStringOption(option => option
        .setName('version')
        .setDescription('Version de la documentacion')
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
                interact.followUp({ embeds: [data] })
            } else {
                interact.followUp({ content: 'Oh no papu, no he podido hayar eso :\'v'});
            }
        });
	},
};
