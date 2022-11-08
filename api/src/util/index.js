const { default: mongoose } = require("mongoose");

function errorHandler(fn) {
    return async function (req, res, next) {
        try {
            const result = await fn(req, res, next);
            res.json(result);
        } catch (err) {
            next(err);
        }
    };
}

function withTransaction(fn) {
    return async function (req, res, next) {
        let result;
        await mongoose.connection.transaction(async (session) => {
            result = await fn(req, res, session);
            return result;
        });

        return result;
    };
}

module.exports = { errorHandler, withTransaction };
