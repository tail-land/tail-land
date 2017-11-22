const User = require('../models/User');
const bcrypt = require('bcrypt');
module.exports = {
    profileGet: (req, res, next) => {
      User.findById( req.user._id, (err, user) => {
        res.render('user/profile', {
          user: user
        });
      });
    },

    // idGet: (req, res, next) => {
    //   console.log('id de get')
    //   const id = req.params.id;
    //   User.findById(id, (err, user) => {
    //     res.render('user/profile', {
    //       user: user,
    //       title: "user"
    //     });
    //   });
    // },

    editGet: (req, res, next) => {
      User.findById(req.user._id, (err, user) => {
        if (err) {
          console.log(err);
        }
        res.render('user/editUser', {
          user: user
        });
      });
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
      User.findByIdAndUpdate(id, updates, (err, user) => {
        if (err) { return next(err); }
        return res.redirect('/users/profile');
      });
    }
  };