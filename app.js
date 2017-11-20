const app = require('express')();
require('dotenv').load();
require('./config/passport')();
require('./config/express')(app);
require('./config/expressController')(app);

const index = require('./routes/index');
const auth = require('./routes/auth');

app.use('/', index);
app.use('/', auth);

require('./config/error-handler')(app);

module.exports = app;
