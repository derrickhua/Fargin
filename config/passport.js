const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ 'googleId': profile.id }).then(user => {
        if (user) {
          return cb(null, user);
        } else {
          // we have a new student via OAuth!
          var newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id
          });

          let result = newUser.save()
          result.then(function(result) {
            return cb(null, result)
        })
        }
      }).catch(err => {
        if (err) return cb(err);
      }) 
  }
))



// User's logged in, cookie is in browser, taking that cookie and associating with user.id
passport.serializeUser(function(user, done) {
    // you can pass through anything else
    //sever keeps track this cookie === user.id
  done(null, user.id)
})

// checking into the table, to check if the user.id === cookie, looks up user and present info
// attaching user document to request object 
// taking entire mongoose document user with all the methods and attributes and putting into request 
// every request has req.user 
passport.deserializeUser(function(id, done) {
  User.findById(id).then(user => {
    done(null, user);
  }).catch(err => {
    return done(err)
  })
})
