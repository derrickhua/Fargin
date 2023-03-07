var router = require('express').Router();
var usersCtrl = require('../controllers/users');
var habitsCtrl = require('../controllers/habits')

router.get('/:id', habitsCtrl.show)