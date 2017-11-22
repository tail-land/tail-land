const router = require('express').Router();
const userController = require('../controllers/userController');
const middle = require('../config/middlewares');
const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });

router.get('/profile', middle.EnsureLoggedIn, userController.profileGet);
// router.get('/:id', userController.idGet);
router.get('/:id/editUser', middle.EnsureLoggedIn, userController.editGet);
router.post('/:id', upload.single('photo'), middle.EnsureLoggedIn, userController.editPost);

module.exports = router;