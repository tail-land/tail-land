const router = require('express').Router();
const userController = require('../controllers/userController');
const middle = require('../config/middlewares');

router.get('/profile', middle.EnsureLoggedIn, userController.profileGet);
// router.get('/:id', userController.idGet);
router.get('/:id/editUser', middle.EnsureLoggedIn, userController.editGet);
router.post('/:id', middle.EnsureLoggedIn, userController.editPost);

module.exports = router;