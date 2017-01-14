/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-phoenix-shim',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([
      { name: 'phoenix', target: '^1.2.1' }
    ]);
  }
};
