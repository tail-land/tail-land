const User = require('../models/User');

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
      const id = req.params.id;
      const updates = {
        username: req.body.username,
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
      };
      User.findByIdAndUpdate(id, updates, (err, user) => {
        if (err) { return next(err); }
        return res.redirect('/users/profile');
      });
    }
  };