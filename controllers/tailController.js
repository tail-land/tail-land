const Tail = require("../models/Tail");
const User = require("../models/User");

module.exports = {
  tailsGet: (req, res, next) => {
    Tail.find()
      .populate("tail_user")
      .then(result => res.render("tail/tails", {title:"Tails",tails: result,users: req.user}))
      .catch(err => next(err));
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

    newTail.save()
      .then(()=>res.redirect('/tails'))
      .catch(err=> res.render("tails/signup",{tails: newTail}));
  },
  idGet: (req, res, next) => {
    const id = req.params.id;
    Tail.findById(id)
      .populate("tail_user")
      .then(result=>{
        //console.log(result);
        res.render('tail/tail', {tails: result,users: req.user,title: "Tail"});
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
console.log("entrando a eadit post");
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
addMePatch: (req, res, next)=>{
  Tail.findByIdAndUpdate(req.body.tail,{ $push: { tail_user: req.body.user } })
    .then(result => res.json(result));
},
addMeGet: (req, res, next) => {
  const id = req.params.id;
  Tail.findById(id)
    .then(result => {
      res.json(result);
      res.render('tail/tail', {
        tails: tails,
        users: req.user,
        title: "Tail"
      });
    });

},
deleteAddMePost: (req, res, next) => {
    const id = req.body.tailID;
      console.log("El req!!!!!! " );
  console.log(req.params);
  //   const tail_user = req.body.;
        console.log("entra en delete add");

    Tail.findByIdAndUpdate(id,{ $pullAll: {tail_user: [req.params.userID] } })
      .then(result => res.redirect(`/tails/${id}`))

      .catch(err => next(err));
  }



};
