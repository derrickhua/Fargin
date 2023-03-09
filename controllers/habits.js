const User = require('../models/user');

module.exports = {
    create,
    show
  };

  function create(req, res, next) {
    console.log(req.user)
    User.findById(req.user.id).then(function(users) {
        console.log(req.body)
        users.habits.push(req.body)
        users.save().then(
            res.redirect('/homepage')
        )
    }).catch(err => {
        if (err) return next(err);
    })
  }

  function show(req, res, next) {
    User.findById(req.user.id).then(function(user){
        return user.habits
    }).then(function(habits){
        return habits.find(habit => habit.id === req.params.id)
    }).then(function(result){
        console.log(result)
        res.render('fargin/show', {habit: result})
    }).catch(err => {
        if (err) return next(err);
    })
}