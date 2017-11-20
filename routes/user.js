const router = require('express').Router();
const UserController = require('../controllers/userController');
const middle = require('../config/middlewares');

router.get('/profile', middle.EnsureLoggedIn, UserController.profileGet);

router.get('/:id/edituser', middle.EnsureLoggedIn, UserController.editGet);
router.post('/:id/edituser', [middle.EnsureLoggedIn, middle.UploadFile]);

module.exports = router;