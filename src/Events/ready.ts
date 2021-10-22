import chalk from 'chalk';
import { Event } from '../Interfaces';

export const event: Event<'ready'> = {
	name: 'ready',
	run: async (bot) => {
		bot.console.success(`${chalk.bold.green(`[CLIENT]`)} ${bot.user.tag} ready`);
		bot.user.setActivity({ type: "LISTENING", name: "Fumo Podcast" })
	},
};
