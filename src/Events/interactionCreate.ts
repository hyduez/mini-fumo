import { Interaction } from 'discord.js';
import { Event } from '../Interfaces';

export const event: Event = {
	name: 'interactionCreate',
	run: async (bot, interact: Interaction) => {

		if (interact.isCommand() || interact.isContextMenu()) {
			const cmd = bot.interact.get(interact.commandName);
			interact.member = interact.guild.members.cache.get(interact.user.id);

			try {
				await cmd.run(bot, interact);
			} catch (err) {
				const error = err as Error;

				console.log(error.stack);
				await interact[interact.deferred ? 'followUp' : 'reply']({ content: `An error has occurred: \`${error.message}\``, ephemeral: true });
			}
		}
	},
};
