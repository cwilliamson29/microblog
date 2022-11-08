const express = require("express");
const logger = require("./logger");
const routes = require("./routes");
const app = express();
const port = process.env.PORT || 5000;
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const connectToDatabase = require("./database");

app.use(express.json());

app.use("/api", routes);

app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(err.statusCode || 500).send({ error: err.message });
});

async function startServer() {
    await connectToDatabase();

    app.use("/images", express.static(path.join(__dirname, "/images")));

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "images");
        },
        filename: (req, file, cb) => {
            cb(null, req.body.name);
        },
    });

    const upload = multer({ storage: storage });
    app.post("/api/upload", upload.single("file"), (req, res) => {
        res.status(200).json("File uploaded");
    });

    app.listen(port, () => {
        logger.info(`Server listening at http://localhost:${port}`);
    });
}

module.exports = startServer;
