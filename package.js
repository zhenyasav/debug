Package.describe({
  name: 'zhenya:debug',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'some debugging tools',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/zhenyasav/debug',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['coffeescript', 'less'], 'client');
  api.addFiles(['debug.coffee', 'debug.less'], 'client');
});
