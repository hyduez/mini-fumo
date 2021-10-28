import Client from '../Client';
import { CommandInteraction, ApplicationCommandStructure } from 'eris';

interface Run {
	(bot: Client, interact: CommandInteraction, args: string[]);
}

export type Interaction = ApplicationCommandStructure & {
	testOnly: boolean;
	run: Run;
};
