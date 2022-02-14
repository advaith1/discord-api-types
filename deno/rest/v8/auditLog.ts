import type { Snowflake } from '../../globals.ts';
import type { APIAuditLog, AuditLogEvent } from '../../payloads/v8/auditLog.ts';

/**
 * https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export interface RESTGetAPIAuditLogQuery {
	/**
	 * Filter the log for actions made by a user
	 */
	user_id?: Snowflake;
	/**
	 * The type of audit log events
	 */
	action_type?: AuditLogEvent;
	/**
	 * Filter the log before a certain entry ID
	 */
	before?: Snowflake;
	/**
	 * How many entries are returned (default 50, minimum 1, maximum 100)
	 *
	 * @default 50
	 */
	limit?: number;
}

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPIAuditLogResult = APIAuditLog;
