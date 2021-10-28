import { CommandInteraction } from 'eris';
import { Event } from '../Interfaces';

export const event: Event = {
    name: 'interactionCreate',
    run: async (bot, interact) => {
        if(interact instanceof CommandInteraction) {
            const cmd = bot.interactions.get(interact.data.name);
			if (!cmd) return interact.createMessage({ content: `An error has occured` });
			const args = [];
			try {
				await cmd.run(bot, interact, args);
			} catch (err) {
				const error = err as Error;
				await interact.createMessage({ content: `An error has occurred: \`${error.message}\`` });
			}            
        }
    }
}