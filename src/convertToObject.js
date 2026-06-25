'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const formatted = sourceString
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  for (const line of formatted) {
    const [key, value] = line.split(':');

    if (!key || !value) continue;

    result[key.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
