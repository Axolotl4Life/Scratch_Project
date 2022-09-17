const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

router.get('/', userController.getUsers, (req, res) => {
  return res.status(200).json(res.locals.users);
});

router.post('/signup', userController.createUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  return res.status(200).redirect('/secret');
});

router.post('/login', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  return res.status(200).redirect('/secret');
});


module.exports = router;