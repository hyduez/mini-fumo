import { Interaction } from 'discord.js';
import { Event } from '../interfaces';

export const event: Event<'interactionCreate'> = {
	name: 'interactionCreate',
	run: async (bot, interact) => {

		if (interact.isCommand() || interact.isContextMenu()) {
			const cmd = bot.interact.get(interact.commandName);
<<<<<<< HEAD
			if (interact.guild) interact.member = interact.guild.members.cache.get(interact.user.id);
=======
			if (!cmd) return interact.reply({ content: `An error has occured`, ephemeral: false });
			const args = [];
			for (let option of interact.options.data) {
				if (option.type === 'SUB_COMMAND_GROUP') {
					if (option.name) args.push(option.name);
					for (const op of option.options) {
						if (op.name) args.push(op.name);
						if (op.value) args.push(op.value);
						op.options.forEach((x) => {
							if (x.value) args.push(x.value);
						});
					}
				} else if (option.type === 'SUB_COMMAND') {
					if (option.name) args.push(option.name);

					option.options?.forEach((x) => {
						if (x.value) args.push(x.value);
					});
				} else if (option.value) args.push(option.value);
			}
			interact.member = interact.guild.members.cache.get(interact.user.id);

			try {
				await cmd.run(bot, interact, args);
			} catch (err) {
				const error = err as Error;

				console.log(error.stack);
				await interact.reply({ content: `An error has occurred: \`${error.message}\``, ephemeral: true });
			}
		}
		if (interact.isContextMenu()) {
			const cmd = bot.interact.get(interact.commandName);
			if (!cmd) return interact.reply({ content: 'An error occured', ephemeral: true });
			const args = [];
			interact.member = interact.guild.members.cache.get(interact.user.id);
>>>>>>> 42ed65dd57086455b4748e36150eeac9ee1b996b

			try {
				await cmd.run(bot, interact);
			} catch (err) {
				const error = err as Error;

				console.log(error.stack);
<<<<<<< HEAD
				await interact[interact.deferred ? 'followUp' : 'reply']({ content: `An error has occurred: \`${error.message}\``, ephemeral: true });
=======
				await interact.reply({ content: `An error has occurred: \`${error.message}\``, ephemeral: true });
>>>>>>> 42ed65dd57086455b4748e36150eeac9ee1b996b
			}
		}
	},
};
