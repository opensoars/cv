/**
 * CPU module.
 * @module cv/nb/cpu
 */

/**
 * North-bridge cpu device.
 * @namespace cpu
 */
var cpu = {};


/**
 * CPU core class.
 */
cpu.Core = require('./lib/Core');

/**
 * CPU cores array.
 */
cpu.cores = [new cpu.Core()];

module.exports = cpu;