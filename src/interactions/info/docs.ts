import { Interaction } from '../../Interfaces';
import axios from 'axios';
import { MessageEmbedOptions } from 'discord.js';

export const interaction: Interaction = {
    name: 'docs',
    description: 'Search for methods, events or functions in the Docs',
    testOnly: false,
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'search',
            description: 'Section to search',
            type: 'STRING',
            required: true
        },
        {
            name: 'version',
            description: 'Documentation version',
            type: 'STRING',
            required: false,
            choices: [
                {
                    name: 'stable',
                    value: 'stable'
                },
                {
                    name: 'master',
                    value: 'master'
                }
            ]
        }
    ],
    run: async (_, interact) => {
        await interact.deferReply({ ephemeral: false });

        const search = interact.options.getString('search', true);
        const version = interact.options.getString('version');

        const url = `https://djsdocs.sorta.moe/v2/embed?src=${version || "stable"}&q=${encodeURIComponent(search)}`;
        axios.get(url).then(({ data }) => {
            if (data) {
                (data as MessageEmbedOptions).fields.map((field) => field.value.length > 1000 ? field.value = field.value.slice(0, 1000) + '...' : null);

                interact.followUp({ embeds: [data] }).catch((e) => { interact.followUp(`An error has occurred: \`${e}\``) });
            } else {
                interact.followUp({ content: 'Oh no papu, no he podido hayar eso :\'v' });
            }
        });
    },
};
