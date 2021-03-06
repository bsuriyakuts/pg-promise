/*
 * Copyright (c) 2015-present, Vitaly Tomilov
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Removal or modification of this copyright notice is prohibited.
 */

/* eslint no-var: off */
var v = process.versions.node.split('.'),
    highVer = +v[0], lowVer = +v[1];

// istanbul ignore next
if (highVer < 7 || (highVer === 7 && lowVer < 6)) {

    // From pg-promise v9.0.0, the oldest supported Node.js is v7.6.0,
    // which started official ES2017 support.

    // Node.js v4.5.0 was supported up to pg-promise v8.7.5
    // Node.js v0.10 was supported up to pg-promise v5.5.8

    throw new Error('Minimum Node.js version supported by pg-promise is 7.6.0');
}

module.exports = require('./main');
