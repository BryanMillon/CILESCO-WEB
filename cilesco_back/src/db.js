require('dotenv').config()
const mongoose = require('mongoose')
const {PASSWORD} = process.env

const uri = 'mongodb+srv://user-31:<password>@clustercilesco.3cqaypn.mongodb.net/test'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
  console.log("DB is conected")
);