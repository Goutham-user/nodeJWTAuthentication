const mongoose = require('mongoose');

const { MONGO_URL } = process.env;

const dbUserName = 'user1';
const dbPassword = 'GhBeqkOyelWQ6hbK';
const dbName= 'zomato_clone_DB';

const atlasDBURL = `mongodb+srv://${dbUserName}:${dbPassword}@cluster0.kdjlb.mongodb.net/${dbName}?retryWrites=true&w=majority`

exports.connect = () => {
    mongoose.connect(atlasDBURL,{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log("Database connected sucessfuly..");
    }).catch((error) => {
        console.log("database connection failed..", error);
        process.exit(1);
    })
};
