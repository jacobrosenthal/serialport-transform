var transformTools = require('browserify-transform-tools');

module.exports = transformTools.makeRequireTransform("requireTransform",
  {evaluateArguments: true},
  function(args, opts, cb) {
      if (args[0] === "serialport") {
          return cb(null, "require('chrome-serialport')");
      } else {
          return cb();
      }
  });
