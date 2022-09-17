const {Session} = require('../models/models');

const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {
  Session.findOne({ cookieId: req.cookies.ssid}, (err, session) => {
    if (err) {
      console.log('Error in sessionController.isLoggedIn');
      return next('Error in sessionController.isLoggedIn' + JSON.stringify(err));
    }
    else if (!session) {
      res.redirect('/signup');
    } else {
      return next();
    }
  });
};

sessionController.startSession = (req, res, next) => {
  Session.create({ cookieId: res.locals.user.id }, (err, session) => {
    console.log(res.locals.user);
    if (err) {
      return next('Error in sessionController.startSession' + JSON.stringify(err));
    }
  });
};






module.exports = sessionController;