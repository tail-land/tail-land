const Tail = require("../models/Tail");
const User = require("../models/User");


// User.findById(req.params.id)
//   .populate('username')
//   .then(user =>{
//     if(req.user._id.equals(user.username._id)){
//       return next();
//     };
//     throw new Error("You are not the owner");
//   })
//   .catch(e => {
//     console.error(e);
//     res.redirect('/tails/'+req.params.id);
//   });
//
//

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
  },
  idGet: (req, res, next) => {
    const id = req.params.id;

    Tail.findById(id, (err, tails) => {
      console.log(req.locals);
      res.render('tail/tail', {
        tails: tails,
        title: "Tail"
      });
    });
  },

  editGet: (req, res, next) => {
    const id = req.params.id;
    console.log("entra en get edit id");
    Tail.findById(id, (err, tails) => {
      res.render(`tail/edit`, {
        title:"edit tail",
        tails: tails
      });
    });
  },
  editPost: (req, res, next) => {

    const id = req.params.id;
    const infoTailEdit = {
      name:req.body.name,
      time_max: req.body.time_max
    };

    Tail.findByIdAndUpdate(id, infoTailEdit, (err, tails) => {
      if (err){ return next(err); }
      return res.redirect(`/tails/${tails._id}`);
    });
  },
deletePost: (req, res, next)=>{
  const id = req.params.id;
      console.log("entra en delete");
Tail.findByIdAndRemove(id, (err, tails) => {
  if (err){ return next(err); }
  return res.redirect('/tails');
});
},
adMePatch: (req, res, next)=>{


}


};
