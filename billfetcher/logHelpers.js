var config = require('./config');
var fs = require('fs');

var log = function(log, callback) {
  fs.writeFile(config.logFile, Date.now().toString + ': ' + log + '\n', function(err) {
    if (err) {
      console.log('Failed to write to log file: ', err);
    } else {
      callback();
    }
  });
};

module.exports.log = log;