/*!
 * is-directory <https://github.com/vdegenne/isdir-async>
 *
 * Copyright (c) 2018 Valentin Degenne.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var util = require('util');


const isDirectory = util.promisify((filepath, cb) => {
  if (typeof cb !== 'function') {
    throw new Error('expected a callback function');
  }

  if (typeof filepath !== 'string') {
    cb(new Error('expected filepath to be a string'));
    return;
  }

  fs.stat(filepath, function(err, stats) {
    if (err) {
      if (err.code === 'ENOENT') {
        cb(null, false);
        return;
      }
      cb(err);
      return;
    }
    cb(null, stats.isDirectory());
  });
});

module.exports = isDirectory;