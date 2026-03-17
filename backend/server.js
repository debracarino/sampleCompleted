/**
 * server.js
 * 
 * main file connecting datbase access and routers
 */

const express = require('express');
const app = express();
const cors = require('cors');

require("./config/db");
const Wishlist = require('./models/Wishlist');
const wishlistRouter = require('./routes/wishlistRouter');

const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/wishlist', wishlistRouter);


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