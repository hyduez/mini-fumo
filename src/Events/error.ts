import { Event } from '../Interfaces';

export const event: Event = {
    name: 'error',
    run: async (bot, error) => {
        bot.console.error(error);
    }
};