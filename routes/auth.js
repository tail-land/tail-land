const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');
var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' });

router.get('/signup', authController.signupGet);
router.post('/signup',upload.single('photo'), authController.signupPost);

router.get('/login', authController.loginGet);
router.post('/login', authController.loginPost);

router.get('/logout', authController.logout);

module.exports = router;
