(function () {
  'use strict';

  var fs = require('fs'),
      mkdirp = require('mkdirp'),
      path = require('path'),
      util = require('util');

  function wrightFile(filename, data, options, callback) {
    if (typeof options === 'function') {
      callback = options = {
        overwrite: true
      };
    }
    
    var writeFile = function() {
      fs.writeFile(filename, data, options, function(err) {
        callback(err);
      });
    };
    
    mkdirp(path.dirname(filename), function (err) {
      if (err) { callback(err); } else {
        if (!options.overwrite) {
          fs.exists(filename, function(exists) {
            if (exists) { callback(new Error(util.format('%s already exists', filename))); } else {
              writeFile();
            }
          });
        } else {
          writeFile();
        }
      }
    });
  };

  module.exports = wrightFile;
})();
