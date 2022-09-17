const {User} = require('../models/models');

const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  const { username, password} = req.body;
  User.findOne({username: username}, '_id' => {
    res.cookie('ssid', `${user._id}`, {httpOnly: true});
    next();
  })
  .catch(err => {
    return next({
      method: 'setSSIDCookie',
      type: 'Middleware error',
      error: err
    });
  });
};






module.exports = cookieController;