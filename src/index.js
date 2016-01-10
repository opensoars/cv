"use strict";

/**
 * Top level application namespace.
 * @namespace cv
 */
let cv = {};

/**
 * cv north bridge module
 */
cv.nb = require('./lib/devices/nb');

module.exports = cv;