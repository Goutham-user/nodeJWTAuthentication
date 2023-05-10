const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



exports.registerUniqueUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        if (!(firstName && lastName && email && password)) {
            res.status(400).send("All input fields are required")
        }

        const oldUser = await User.findOne({ email });
        if (oldUser) {
            res.status(409).send("Email already exists");
        }

        encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email: email.toLowerCase(),
            password: encryptedPassword
        });

        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: '2h'
            }
        );

        user.token = token;

        res.status(200).json(user);
        console.log("user registerd sucessfully");
    } catch (err) {
        console.log(err);
    }


}