import Client from '../lib/Client';
import type { CommandInteraction, ApplicationCommandData, Message } from 'discord.js';


export type Interaction = ApplicationCommandData & {
	testOnly: boolean;
	type: string;
	run(bot: Client, interaction: CommandInteraction): Promise<void | Message>;
};
