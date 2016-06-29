function npmls(cb) {
  require('child_process').exec('npm ls -g --depth=0 --json --long',
                                {maxBuffer: 1024 * 1024},
                                function(err, stdout, stderr) {
    if (err) return cb(err);

    var modules = JSON.parse(stdout).dependencies;

    for (mod in modules) {
      if (modules[mod].bin) {
        for (bin in modules[mod].bin) {
          cb(mod + "@" + modules[mod].version + " - (" + bin + ")");
        }
      }
    }
  });
}
npmls(console.log);
