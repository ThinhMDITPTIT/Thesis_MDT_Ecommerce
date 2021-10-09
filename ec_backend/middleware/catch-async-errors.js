module.exports = (CbFunction) => (req, res, next) => {
  Promise.resolve(CbFunction(req, res, next)).catch(next);
};
