//--------------------------------------------------------
//-- @absolunet/capturing-group-values
//--------------------------------------------------------
import { Joi, validateArgument } from '@absolunet/joi';


/**
 * Extract values from a RegExp capturing groups.
 *
 * @module @absolunet/capturing-group-values
 * @param {string} base - The string against which to match.
 * @param {RegExp} pattern - The regular expression.
 * @returns {object} Values extracted.
 */
export default (base, pattern) => {
	validateArgument('string',  base,    Joi.string().allow('').required());
	validateArgument('pattern', pattern, Joi.object().instance(RegExp).required());

	const { groups = {} } = base.match(pattern) || {};

	return groups;
};
