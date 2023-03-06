const User = require('../models/user');

module.exports = {
  index
};

function index(req, res, next) {
    console.log(req.user)
    User.find(req.user).then(function(users) {
        res.render('fargin/homepage', {
            users,
            user: req.user,
            name: req.query.name,
        })
    }).catch(err => {
        if (err) return next(err);
    })
}
