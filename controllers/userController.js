const User = require('../models/User');

module.exports = {
    profileGet: (req, res, next) => {
      User.find( {_id: req.params.id}, (err, user) => {
        res.render('user/profile', {
          user: user,
        });
      });
    },
  
    editGet: (req, res, next) => {
      User.findById(req.params.id, (err, user) => {
        if (err) {
          console.log(err);
        }
        res.render('user/editUser', {
          user: user
        });
      });
    },
  
    editPost: (req, res, next) => {
      let updates = {
        name: req.body.name,
        email: req.body.email,
        pic_path: `../uploads/${req.file.filename}`,
        pic_name: req.file.originalname
      };
      User.findByIdAndUpdate(req.params.id, updates, (err, result) => {
        if (err) {
          console.log(err);
        }
        res.redirect('/user/profile');
      });
    }
  };