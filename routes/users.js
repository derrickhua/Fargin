var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /log
router.get('/homepage',isLoggedIn, usersCtrl.index);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
