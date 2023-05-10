const auth = require('../middleware/auth');

exports.tokenValidator = (req, res) => {
    res.status(200).send("Welcome 🙌 ");
};