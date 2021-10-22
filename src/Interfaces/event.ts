import Client from '../lib/Client';
import { ClientEvents } from 'discord.js';

interface Run {
	(bot: Client, ...args: any[]);
}

export interface Event {
	name: keyof ClientEvents;
	run: Run;
}
