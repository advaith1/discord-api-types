import type { APIApplicationCommandOptionChoice, ApplicationCommandOptionType } from './shared';

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIApplicationCommandOptionBase<Type extends ApplicationCommandOptionType> {
	type: Type;
	name: string;
	description: string;
	required?: boolean;
}

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIInteractionDataOptionBase<T extends ApplicationCommandOptionType, D> {
	name: string;
	type: T;
	value: D;
}

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper<
	Base extends APIApplicationCommandOptionBase<ApplicationCommandOptionType>,
	ChoiceType extends APIApplicationCommandOptionChoice,
> =
	| (Base & {
			autocomplete: true;
	  })
	| (Base & {
			autocomplete?: false;
			choices?: ChoiceType[];
	  });
