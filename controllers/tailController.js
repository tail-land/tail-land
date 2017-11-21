const Tail = require("../models/Tail");

module.exports = {
  tailsGet: (req, res, next) => {
    Tail.find((err, tails) => {
      if (err) { return next(err); }
        res.render("tail/tails",{ title: "Tails",tails: tails});
      });
  },
  signupGet: (req, res, next) => {
    res.render("tail/signup",{ title: "Tail signup" });
  },
  signupPost: (req, res, next) => {

    let name = req.body.name;
    let time_max = req.body.time_max;
    let creator = req.body.creator;
    let tail_user = req.body.tail_user;

    const infoTail = {
      name,
      time_max,
      creator,
      tail_user
    };

    const newTail = new Tail(infoTail);

      newTail.save((err) => {
        if (err) {
          return res.render('tails/signup', {
            tails: newTail
          });
        }
        return res.redirect('/profile');
      });
  }


};
