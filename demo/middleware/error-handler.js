module.exports = function internalServerError(err, req, res, next) {
  if (err.domain) {
    try {
      const killtimer = setTimeout(() => process.exit(1),10000);
      killtimer.unref();

      req.app.get('server').close();

      return res.status(500).end('Oops, there was a problem!\n');
    } catch (fatal) {
      console.error('Error sending 500!', fatal.stack);
    }
  }

  res.status(500).json({code: err.code, message: err.message});
};