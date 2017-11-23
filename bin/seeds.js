const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tail-land', {useMongoClient: true});
const Tail = require('../models/Tail');
const info = [
  {
    name: 'cola 1',
    time_max: 10,
    tail_user: ['5a1558a536d80f2979d91f63'],
    creator: 'Andrei',
  },
  {
    name: 'cola 2',
    time_max: 20,
    tail_user: ['5a1558a536d80f2979d91f63'],
    creator: 'Victor',
  },
  {
    name: 'cola 3',
    time_max: 30,
    tail_user: ['5a1558a536d80f2979d91f63'],
    creator: 'Andrei',
  }
];
Tail.collection.drop();
Tail.create(info, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((info) => {
    console.log(info.name);
  });
  mongoose.connection.close();
});
