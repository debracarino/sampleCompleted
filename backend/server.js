/**
 * server.js
 * 
 * custom web server software
 * main file connecting datbase access and routers
 */

const express = require('express');
const app = express();
const cors = require('cors');

require("./config/db");
const User = require('./models/User');
const userRouter = require('./routes/userRouter');

const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRouter);


app.get("/", (request, response) => {
    response.status(200).json({message: "Welcome! This API has the following endpoints..."});
});

// Catch-all (Express 5 style)
app.use((request, response) => {
  response.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log(`Updated Server running on ${PORT}`);
});