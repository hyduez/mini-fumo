import { Interaction } from "../../Interfaces";

/* Comando vago */

export const interaction: Interaction = {
    name: 'ask',
    description: 'Ask the bot',
    testOnly: false,
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'question',
            description: 'The question',
            type: 'STRING',
            required: true
        }
    ],
    run: async (_bot, interact, _args) => {
        const res = ['Yes', 'Nope', 'Probably', 'Unlikely', 'Sure', 'Hmmm... ||Nope||', 'Hmmm... ||YES||'];
        interact.reply({ content: `${res[Math.floor(Math.random() * res.length)]}`, ephemeral: false })
    }
}