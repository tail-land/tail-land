const User = require("../models/User");
const passport = require("passport");
const flash = require("connect-flash");

module.exports = {
  signupGet: (req, res, next) => { res.render('auth/signup' ); },
  signupPost: passport.authenticate('local-signup', {
      successRedirect: '/users/profile',
      failureRedirect: '/auth/signup'
  }),

  loginGet: (req, res, next) => { res.render('auth/login', {title: 'Login'}); },
  loginPost: passport.authenticate('local-login', {
    successRedirect : '/users/profile',
    failureRedirect : '/auth/login'
  }),

  logout: (req, res, next) => { req.logout(); res.redirect('/../'); } };
