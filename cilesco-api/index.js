const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require('body-parser');
const cors = require("cors");
const videoRoutes = require("./src/routes/videos.js")



const app = express();
const port = process.env.PORT || 9000;


//middleware
app.use(cors());
app.use('/api', videoRoutes)
app.use(express.json())
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//routes
app.get('/', (req, res)=>{
    res.send('Welcome to my api')
})

//mongodb connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(()=>console.log('Connected to MongoDB Atlas'))
.catch((error)=>console.log(error))

app.listen(port, () => console.log('server listening on port', port))