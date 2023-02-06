"use strict";

exports.default = void 0;
var _joi = require("@absolunet/joi");
//--------------------------------------------------------
//-- @valtech-commerce/capturing-group-values
//--------------------------------------------------------
/**
 * Extract values from a RegExp capturing groups.
 *
 * @module @valtech-commerce/capturing-group-values
 * @param {string} base - The string against which to match.
 * @param {RegExp} pattern - The regular expression.
 * @returns {object} Values extracted.
 */
var _default = (base, pattern) => {
  (0, _joi.validateArgument)('string', base, _joi.Joi.string().allow('').required());
  (0, _joi.validateArgument)('pattern', pattern, _joi.Joi.object().instance(RegExp).required());
  const {
    groups = {}
  } = base.match(pattern) || {};
  return groups;
};
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;