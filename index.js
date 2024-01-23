const express = require('express'); 
const cors = require('cors') // for resource sharing between cliet and server
const morgan = require('morgan') // for api response on console
//const colors = require('colors') //for different colours in console
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config() // adding a security layer to the project

const userRoutes = require('./routes/userRoutes'); // controller connection
const blogRoutes = require('./routes/blogRoutes');

connectDB(); // mongoDB connection



const app = express();



app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);




const PORT = process.env.PORT || 8080



app.listen(PORT, () => {
    console.log("server running")
});