
module.exports = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || "*");
res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
  next();
}