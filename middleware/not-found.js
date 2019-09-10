module.exports = function notFoundRoute(req, res) {
  res.status(404).json({code: 'NOT_FOUND', message: 'Not found'});
};