const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const refreshTokenSchema = new mongoose.Schema({
    owner: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("RefreshToken", refreshTokenSchema);
