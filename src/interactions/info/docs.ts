<<<<<<< HEAD:src/interactions/info/docs.ts
import { Interaction } from '../../interfaces';
import axios from 'axios';
=======
import { Interaction } from '../../Interfaces';
>>>>>>> 42ed65dd57086455b4748e36150eeac9ee1b996b:src/Interaction/info/docs.ts
import { MessageEmbedOptions } from 'discord.js';
import axios from 'axios';

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
<<<<<<< HEAD:src/interactions/info/docs.ts
    run: async (_, interact) => {
        await interact.deferReply({ ephemeral: false });
=======
    run: async (bot, interact, args) => {
        await interact.deferReply();
>>>>>>> 42ed65dd57086455b4748e36150eeac9ee1b996b:src/Interaction/info/docs.ts

        const search = interact.options.getString('search'); /* const search = interact.options.getString('search', true); Options(Line 15)*/
        const version = interact.options.getString('version');

        const url = `https://djsdocs.sorta.moe/v2/embed?src=${version || "stable"}&q=${encodeURIComponent(search)}`;
<<<<<<< HEAD:src/interactions/info/docs.ts

        const { data } = await axios.get(url);

        if (data) {
            (data as MessageEmbedOptions).fields.map((field) => field.value.length > 1000 ? field.value = field.value.slice(0, 1000) + '...' : null);

            await interact.followUp({ embeds: [data] }).catch((e) => { interact.followUp(`An error has occurred: \`${e}\``) });
        } else {
            await interact.followUp({ content: 'Nothing found.' });
        }
=======
        axios.get(url).then(({ data }) => {
            if (data) {
                
                /* (data as MessageEmbedOptions).fields.map((field) => field.value.length > 1000 ? field.value = field.value.slice(0, 1000) + '...' : null); Si los datos para formar el Embed no contenian un Field, este proceso no se podria ejecutar y daria un error */

                interact.followUp({ embeds: [data] }).catch((err) => interact.followUp({ content: `An error has occurred: \`${err}\`` }));

            } else {
                interact.followUp({ content: "I couldn't find that" });
            }
        });
>>>>>>> 42ed65dd57086455b4748e36150eeac9ee1b996b:src/Interaction/info/docs.ts
    },
};
