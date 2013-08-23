var app = require('./app');

module.exports = app.listen(app.get('port'), app.get('host'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
