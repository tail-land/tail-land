const User = require('../models/User');
const bcrypt = require('bcrypt');
const flash = require("connect-flash");

module.exports = {
    profileGet: (req, res, next) => {
    
      User.findById( req.user._id)
        .then(user => res.render('user/profile', { user: user }))
        .catch(err => next(err));
    },

    editGet: (req, res, next) => {
     
      User.findById(req.user._id)
      .then(user => res.render('user/editUser', { user: user }))
      .catch(err => next(err));
    },

    editPost: (req, res, next) => {
      const hashPass = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
      const id = req.user.id;
      const updates = {
        username: req.body.username,
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashPass,
        pic_path: `/uploads/${req.file.filename}`,
        pic_name: req.file.originalname
      };
     
      User.findByIdAndUpdate(id, update)
       .then(() => res.redirect('/users/profile'))
        .catch(err => next(err));
    }
  };
