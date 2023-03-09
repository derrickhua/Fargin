module.exports = {
    create,
    show,
    update,
    delete: deleteHabit
  };

  function create(req, res, next) {
    req.user.habits.push(req.body)
    req.user.save().then(() => {
        res.redirect('/homepage')
    }).catch(err => {
        if (err) return next(err);
    })
  }

  function show(req, res) {
    let result = req.user.habits.id(req.params.id)
    res.render('fargin/show', {habit: result})

}

function update(req, res, next) {
    let result = req.user.habits.id(req.params.id)
    result.name = req.body.name
    result.specificGoal = req.body.specificGoal
    req.user.save().then(() => {
        console.log(req.user.habits.id(req.params.id))
        res.redirect('/homepage')
    }).catch(err => {
        if (err) return next(err);
    })
}

function update(req, res, next) {
    let result = req.user.habits.id(req.params.id)
    result.name = req.body.name
    result.specificGoal = req.body.specificGoal
    req.user.save().then(() => {
        console.log(req.user.habits.id(req.params.id))
        res.redirect('/homepage')
    }).catch(err => {
        if (err) return next(err);
    })
}

function deleteHabit(req, res, next) {
    let habitIdx = req.user.habits.indexOf(habit => habit.id === req.params.id)
    req.user.habits.splice(habitIdx, 1)
    req.user.save().then(() => {
        res.redirect('/homepage')
    }).catch(err => {
        if (err) return next(err);
    })
}