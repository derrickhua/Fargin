const User = require('../models/user');

module.exports = {
  index,
  new: newHabit
};

function index(req, res, next) {
    User.findById(req.user.id).then(function(users) {
        res.render('fargin/homepage', {
            users,
            user: req.user,
            name: req.query.name,
        })
    }).catch(err => {
        if (err) return next(err);
    })
}

function newHabit(req, res) {
    res.render('fargin/new')
}