const router = require('express').Router();
const userController = require('../controllers/userController');
const middle = require('../config/middlewares');

router.get('/profile', middle.EnsureLoggedIn, userController.profileGet);

router.get('/:id/edituser', middle.EnsureLoggedIn, userController.editGet);
router.post('/:id/edituser', [middle.EnsureLoggedIn, middle.UploadFile]);

module.exports = router;