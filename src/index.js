/**
 * Computer visualization module.
 * @module cv
 */

/**
 * Top level application namespace.
 * @namespace cv
 */
var cv = {};

/**
 * cv north bridge module
 */
cv.nb = require('./lib/devices/nb');

module.exports = cv;