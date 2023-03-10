var router = require('express').Router();
var habitsCtrl = require('../controllers/habits')

router.use(isLoggedIn)
router.get('/:id', habitsCtrl.show)
router.put('/:id', habitsCtrl.update)
router.delete('/:id', habitsCtrl.delete)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }


module.exports = router;