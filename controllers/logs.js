module.exports = {
    new: newLog,
    create
  };

function newLog(req, res, next) {
    let result = req.user.habits.id(req.params.id)
    res.render('log/new', {habit: result})
}

function create(req, res, next) {    
    req.user.habits.id(req.params.id).logs.push(req.body)
    req.user.save().then(()=>
        res.redirect(`/habit/${req.params.id}`)
    ).catch(err => {
        if (err) return next(err);
    })
}


