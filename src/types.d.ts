import { ApplicationCommandOptionType, InteractionType, VERSION, InteractionResponseType } from "./Constants";
import { AllowedMentions, EmbedOptions } from "eris";

declare namespace DiscordSlashCommands {
	export interface User {
		username: string;
		public_flags: number;
		id: string;
		discriminator: string;
		avatar: string | null;
	}

	export interface Member {
		user: User;
		roles: string[];
		premium_since: string | null;
		premissions: string;
		pending: boolean;
		nick: string | null;
		mute: boolean;
		joined_at: string;
		is_pending: boolean;
		deaf: boolean;
	}

	export interface ApplicationCommand {
		id: string;
		application_id: string;
		name: string;
		description: string;
		options: ApplicationCommandOption[];
	}

	export interface ApplicationCommandOption {
		type: typeof ApplicationCommandOptionType[keyof typeof ApplicationCommandOptionType];
		name: string;
		description: string;
		default?: boolean;
		required?: boolean;
		choices?: [
			ApplicationCommandOptionChoice?,
			ApplicationCommandOptionChoice?,
			ApplicationCommandOptionChoice?,
			ApplicationCommandOptionChoice?,
			ApplicationCommandOptionChoice?,
			ApplicationCommandOptionChoice?,
			ApplicationCommandOptionChoice?,
			ApplicationCommandOptionChoice?,
			ApplicationCommandOptionChoice?,
			ApplicationCommandOptionChoice?
		];
		options?: ApplicationCommandOption[];
	}

	export interface ApplicationCommandOptionChoice {
		name: string;
		value: string;
	}

	export interface Interaction {
		id: string;
		type: typeof InteractionType[keyof typeof InteractionType];
		data: ApplicationCommandInteractionData;
		guild_id: string;
		channel_id: string;
		member: Member;
		token: string;
		version: typeof VERSION;
	}

	export interface ApplicationCommandInteractionData {
		id: string;
		name: string;
		options?: ApplicationCommandInteractionDataOption[];
	}

	export interface ApplicationCommandInteractionDataOption {
		name: string;
		value?: unknown; // OptionType
		options?: ApplicationCommandInteractionDataOption[];
	}

	export interface InteractionResponse {
		type: typeof InteractionResponseType[keyof typeof InteractionResponseType];
		data?: InteractionApplicationCommandCallbackData;
	}

	export interface InteractionApplicationCommandCallbackData {
		tts?: boolean;
		allowed_mentions?: AllowedMentions;
		flags?: number;
		content?: string;
		embeds?: EmbedOptions[];
	}
}

export = DiscordSlashCommands;
