const router = require("express").Router();
const controllers = require("../controllers");
const User = require("../models/User");

function tmp(req, res) {}

router.post("/signup", controllers.auth.signup);
router.post("/login", tmp);
router.post("/logout", tmp);
router.post("/accessToken", tmp);
router.post("/refreshToken", tmp);

module.exports = router;
