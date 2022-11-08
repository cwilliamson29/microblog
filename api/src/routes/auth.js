const router = require("express").Router();
const controllers = require("../controllers");
const User = require("../models/User");

function tmp(req, res) {}

router.post("/signup", controllers.auth.signup);
router.post("/login", controllers.auth.login);
router.post("/logout", tmp);
router.post("/accessToken", tmp);
router.post("/refreshToken", controllers.auth.newRefreshToken);

module.exports = router;
