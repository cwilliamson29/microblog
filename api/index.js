const path = require("path");
require("dotenv").config({ path: require("find-config")(".env") });
require("./src")();
