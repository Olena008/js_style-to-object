'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const rules = sourceString.split(';');

  for (let rule of rules) {
    rule = rule.trim();

    if (!rule) continue;

    const parts = rule.split(':');

    if (parts.length < 2) continue;

    const key = parts[0].trim();
    const value = parts[1].trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
