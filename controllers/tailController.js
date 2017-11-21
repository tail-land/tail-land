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


    const infoTail = {
      name,
      time_max,
      creator
    }

    const newTail = new Tail(infoTail);

      newTail.save((err) => {
        if (err) {
          return res.render('tail/signup', {
            tails: newTail
          });
        }
        return res.redirect('/home');
      });
  }


};
