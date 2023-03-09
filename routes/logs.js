var router = require('express').Router();

var logsCtrl = require('../controllers/logs') 


router.use(isLoggedIn)
router.get('/:id/new', logsCtrl.new)
router.post('/:id/new', logsCtrl.create)


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;