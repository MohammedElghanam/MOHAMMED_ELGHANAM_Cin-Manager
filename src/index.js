const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const UserRoute = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();
app.use(express.json());
app.use(cookieParser());



mongoose.connect("mongodb+srv://elghanammohammed20:mohammed20040303@cluster0.wqija.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("connecting seccessfuly"))
.catch(err => console.log("error in connecting", err));



app.use('/api/auth', UserRoute);
app.use('/api/movies', movieRoutes);
app.use('/api/reservations', reservationRoutes);

app.get('/', (req, res) => {
    res.send('hello');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`i'm listening in port http://localhost:${port}`);
    
})