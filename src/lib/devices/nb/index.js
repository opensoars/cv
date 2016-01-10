/**
 * @module cv/nb
 */

/**
 * North-bridge module object.
 * @namespace nb
 */
let nb = {};

/**
 * North-bridge cpu device.
 */
nb.cpu = require('./lib/cpu');

module.exports = nb;