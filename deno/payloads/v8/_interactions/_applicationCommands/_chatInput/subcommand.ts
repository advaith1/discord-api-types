import type { APIApplicationCommandBasicOption, APIApplicationCommandInteractionDataBasicOption } from '../chatInput.ts';
import type { APIApplicationCommandOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIApplicationCommandSubcommandOption
	extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.Subcommand> {
	options?: APIApplicationCommandBasicOption[];
}

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIApplicationCommandInteractionDataSubcommandOption {
	name: string;
	type: ApplicationCommandOptionType.Subcommand;
	options?: APIApplicationCommandInteractionDataBasicOption[];
}
