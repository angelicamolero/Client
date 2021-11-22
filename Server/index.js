const express = require('express');
const connectDB = require('./config/bd');

//create the server
const server = express();

//conect to bd
connectDB();

// server's port
const PORT = process.env.PORT || 4000;
//set main page
//server.get('/', (req, res) => {
//    res.send('Hola mundo')
//});
//get the server to start
server.listen(PORT, () => {
    console.log(`the server is working on port ${PORT}`);
});

