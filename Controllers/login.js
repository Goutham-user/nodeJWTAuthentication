const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.loginUserValidation = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            res.status(400).send("All the Input fields are required");
        }

        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h"
                }
            );
            user.token = token;
            res.status(200).json(user);
        }
        else {
            res.status(400).send("Invalid Credentials")
        }

    } catch (err) {
        console.log(err)
    }
}