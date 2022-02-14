import type {
	APIApplicationCommandOptionBase,
	APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper,
	APIInteractionDataOptionBase,
} from './base';
import type { APIApplicationCommandOptionChoice, ApplicationCommandOptionType } from './shared';

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
interface APIApplicationCommandIntegerOptionBase
	extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.Integer> {
	/**
	 * If the option is an `INTEGER` or `NUMBER` type, the minimum value permitted.
	 */
	min_value?: number;
	/**
	 * If the option is an `INTEGER` or `NUMBER` type, the minimum value permitted.
	 */
	max_value?: number;
}

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandIntegerOption = APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper<
	APIApplicationCommandIntegerOptionBase,
	APIApplicationCommandOptionChoice<number>
>;

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIApplicationCommandInteractionDataIntegerOption
	extends APIInteractionDataOptionBase<ApplicationCommandOptionType.Integer, number> {
	focused?: boolean;
}
