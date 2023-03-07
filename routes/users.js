var router = require('express').Router();
var usersCtrl = require('../controllers/users');
var habitsCtrl = require('../controllers/habits')

router.use(isLoggedIn)
router.get('/homepage', usersCtrl.index);
router.post('/new', habitsCtrl.create)
router.get('/new', usersCtrl.new)

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
