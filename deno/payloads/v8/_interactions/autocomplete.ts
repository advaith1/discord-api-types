import type {
	APIBaseInteraction,
	APIChatInputApplicationCommandInteractionData,
	APIDMInteractionWrapper,
	APIGuildInteractionWrapper,
	InteractionType,
} from '../mod.ts';

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandAutocompleteInteraction = APIBaseInteraction<
	InteractionType.ApplicationCommandAutocomplete,
	APIChatInputApplicationCommandInteractionData
> &
	Required<
		Pick<
			APIBaseInteraction<InteractionType.ApplicationCommandAutocomplete, APIChatInputApplicationCommandInteractionData>,
			'data'
		>
	>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandAutocompleteDMInteraction =
	APIDMInteractionWrapper<APIApplicationCommandAutocompleteInteraction>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandAutocompleteGuildInteraction =
	APIGuildInteractionWrapper<APIApplicationCommandAutocompleteInteraction>;
