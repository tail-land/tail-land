const express = require("express");
const router = express.Router();
const tailController = require('../controllers/tailController');

router.get("/", tailController.tailsGet);

router.get("/signup", tailController.signupGet);
router.post('/signup', tailController.signupPost);

router.get('/:id', tailController.idGet);

router.get("/:id/edit", tailController.editGet);
router.post('/:id', tailController.editPost);

router.post('/:id/delete', tailController.deletePost);

router.post('/:id/addMe', tailController.addMePatch);
router.get('/:id/addMe', tailController.addMeGet);
router.post('/:id/deleteAddMe', tailController.deleteAddMe);

module.exports = router;
