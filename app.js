require('dotenv').config();
require('./config/database').connect();

const express = require('express');
const route = require('./Routes/index')
// const registerUserController = require('./Controllers/registerUser');
// const loginUserController = require('./Controllers/login');

// const User = require('./model/user');
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

// app.post('/register', async (req, res) => {
//     try {
//         const { firstName, lastName, email, password } = req.body;
//         if (!(firstName && lastName && email && password)) {
//             res.status(400).send("All input fields are required")
//         }

//         const oldUser = await User.findOne({ email });
//         if (oldUser) {
//             res.status(409).send("Email already exists");
//         }

//         encryptedPassword = await bcrypt.hash(password, 10);

//         const user = await User.create({
//             firstName,
//             lastName,
//             email: email.toLowerCase(),
//             password: encryptedPassword
//         });

//         const token = jwt.sign(
//             { user_id: user._id, email },
//             process.env.TOKEN_KEY,
//             {
//                 expiresIn: '2h'
//             }
//         );

//         user.token = token;

//         res.status(200).json(user);
//         console.log("user registerd sucessfully");
//     } catch (err) {
//         console.log(err);
//     }
// });

// app.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (!(email && password)) {
//             res.status(400).send("All the Input fields are required");
//         }

//         const user = await User.findOne({ email });

//         if (user && (await bcrypt.compare(password, user.password))) {
//             const token = jwt.sign(
//                 { user_id: user._id, email },
//                 process.env.TOKEN_KEY,
//                 {
//                     expiresIn: "2h"
//                 }
//             );
//             user.token= token;
//             res.status(200).json(user);
//         }
//         else{
//             res.status(400).send("Invalid Credentials")
//         }

//     } catch (err) {
//         console.log(err)
//     }

// });

app.use('/', route);

// app.post('/register', registerUserController.registerUniqueUser);
// app.post('/login', loginUserController.loginUserValidation);


module.exports = app;
