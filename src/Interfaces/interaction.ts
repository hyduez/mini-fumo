import Client from '../Client';
import { CommandInteraction, ApplicationCommandData } from 'discord.js';

interface Run {
	(bot: Client, interact: CommandInteraction, args: string[]);
}

export type Interaction = ApplicationCommandData & {
	testOnly: boolean;
	type: string;
	run: Run;
};
