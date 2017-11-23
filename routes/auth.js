const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');
const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });
const middle = require('../config/middlewares');

router.get('/signup', authController.signupGet);
router.post('/signup', upload.single('photo'), authController.signupPost);

router.get('/login', authController.loginGet);
router.post('/login', authController.loginPost);

router.get('/logout', authController.logout);

module.exports = router;
