const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const UserRoute = require('./routes/userRoutes');
const app = express();
app.use(express.json());



mongoose.connect("mongodb+srv://elghanammohammed20:mohammed20040303@cluster0.wqija.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("connecting seccessfuly"))
.catch(err => console.log("error in connecting", err));



app.use('/auth', UserRoute);


const port = 3000;
app.listen(port, () => {
    console.log(`i'm listening in port http://localhost:${port}`);
    
})