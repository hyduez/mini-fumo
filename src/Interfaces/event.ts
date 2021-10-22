import Client from '../lib/Client';
import { ClientEvents } from 'discord.js';

export type Event<T extends keyof ClientEvents> = {
	name: keyof ClientEvents;
	run(bot: Client, ...args: ClientEvents[T])
}