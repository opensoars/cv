/**
 * North-bridge module.
 * @module cv/nb
 */

/**
 * North-bridge module object.
 * @namespace nb
 */
var nb = {};

/**
 * North-bridge cpu device.
 */
nb.cpu = require('./lib/cpu');

module.exports = nb;