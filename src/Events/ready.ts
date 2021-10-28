import chalk from 'chalk';
import { Event } from '../Interfaces';

export const event: Event = {
	name: 'ready',
	run: async (bot) => {
		bot.console.log(`${chalk.bold.green(`[CLIENT]`)} ${bot.user.username} ready`);
        bot.editStatus('dnd', {
            name: 'Fumo podcast',
            type: 2
        });
    },
};