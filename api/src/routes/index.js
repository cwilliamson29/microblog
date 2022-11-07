const router = require("express").Router();

const authRoute = require("./auth");
const userRoute = require("./users");
const postsRoute = require("./posts");
const categoryRoute = require("./categories");

router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/posts", postsRoute);
router.use("/categories", categoryRoute);

module.exports = router;
