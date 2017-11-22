const app = require('express')();
require('dotenv').load();
require('./config/passport')();
require('./config/expressController')(app);
require('./config/express')(app);

const index = require('./routes/index');
const auth = require('./routes/auth');
const tail = require('./routes/tail');
const user = require('./routes/user');
const mail = require('./routes/mail');

app.use('/', index);
app.use('/auth', auth);
app.use('/tails', tail);
app.use('/users', user);
app.use('/email', mail);

require('./config/error-handler')(app);

module.exports = app;
