import { Event } from '../_interfaces';

export const event: Event<'interactionCreate'> = {
	name: 'interactionCreate',
	run: async (bot, interact) => {

		if (interact.isCommand() || interact.isContextMenu()) {
			const cmd = bot.interact.get(interact.commandName);
			if (interact.guild) interact.member = interact.guild.members.cache.get(interact.user.id);

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
