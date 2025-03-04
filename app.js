const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = 3000 || process.env.PORT;

const userRoute = require('./routes/user');

app.use(express.json());
app.use('/', userRoute)

mongoose
    .connect("mongodb://localhost:27017/testuserdb", {})
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to MongoDB..."));

app.listen(port, () => {
    console.log('Server is running on port 3000');
})