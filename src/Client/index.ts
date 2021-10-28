import { Client } from 'eris';
import { readdirSync } from 'fs';
import { config } from 'dotenv';
import { Event, Interaction } from '../Interfaces';
import console from 'console';
import path from 'path';
config();

class Bot extends Client {
    public interactions: Map<string, Interaction> = new Map();
    public events: Map<string, Event> = new Map(); 
    public config = process.env;
    public console = console;
    public constructor() {
        super(process.env.token, { intents: 1, allowedMentions: { everyone: false, users: false, repliedUser: false, roles: false } });
        this.start();
    }
    public async start() {
        await this.connect();
        const eventPath = path.join(__dirname, '..', 'Events');
        readdirSync(eventPath).forEach(async (file) => {
            const { event } = await import(`${eventPath}/${file}`);
            this.events.set(event.name, event);
            this.on(event.name, event.run.bind(null, this));
        });
        const arrayOfInteractions = [];
        const arrayOfInteractionsTesting = [];
        const interactionPath = path.join(__dirname, '..', 'Interactions');
        readdirSync(interactionPath).forEach((dir) => {
            const interactionFolder = readdirSync(path.join(`${interactionPath}/${dir}`));
            interactionFolder.forEach((file) => {
                const { interaction } = require(`${interactionPath}/${dir}/${file}`);
                if (interaction?.testOnly) {
					this.interactions.set(interaction.name, interaction);
					return arrayOfInteractionsTesting.push(interaction);
				}
				this.interactions.set(interaction.name, interaction);
				arrayOfInteractions.push(interaction);
            });
        });
        this.once('ready', async () => {
			await this.guilds.get(this.config.testserver).bulkEditCommands(arrayOfInteractionsTesting);
			await this.bulkEditCommands(arrayOfInteractions);
		});
    }
}

export default Bot;