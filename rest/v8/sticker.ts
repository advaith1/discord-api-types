import type { APISticker, APIStickerPack } from '../../payloads/v8/index';
import type { AddUndefinedToPossiblyUndefinedPropertiesOfInterface } from '../../utils/internals';

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPIStickerResult = APISticker;

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export interface RESTGetNitroStickerPacksResult {
	sticker_packs: APIStickerPack[];
}

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPIGuildStickersResult = APISticker[];

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPIGuildStickerResult = APISticker;

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export interface RESTPostAPIGuildStickerFormDataBody {
	/**
	 * Name of the sticker (2-30 characters)
	 */
	name: string;
	/**
	 * Description of the sticker (empty or 2-100 characters)
	 */
	description: string;
	/**
	 * The Discord name of a unicode emoji representing the sticker's expression (2-200 characters)
	 */
	tags: string;
	/**
	 * The sticker file to upload, must be a PNG, APNG, or Lottie JSON file, max 500 KB
	 */
	file: unknown;
}

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTPostAPIGuildStickerResult = APISticker;

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTPatchAPIGuildStickerJSONBody = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
	/**
	 * Name of the sticker (2-30 characters)
	 */
	name?: string;
	/**
	 * Description of the sticker (2-100 characters)
	 */
	description?: string | null;
	/**
	 * The Discord name of a unicode emoji representing the sticker's expression (2-200 characters)
	 */
	tags?: string;
}>;

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTPatchAPIGuildStickerResult = APISticker;

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTDeleteAPIGuildStickerResult = never;
