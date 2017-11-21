const express = require("express");
const router = express.Router();
const tailController = require('../controllers/tailController');

router.get("/", tailController.tailsGet);
router.get("/signup", tailController.signupGet);
router.post('/signup', tailController.signupPost);
//router.get("/admin", tailController.adminGet);

module.exports = router;
