const {ensureLoggedIn} = require("connect-ensure-login");

module.exports = {
  EnsureLoggedIn: ensureLoggedIn('../../auth/login')
};
