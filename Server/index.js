const express = require('express');
const connectDB = require('./config/bd');

//create the server
const server = express();

//conect to bd
connectDB();

//express.json
server.use(express.json({ entended: true }));

// server's port
const PORT = process.env.PORT || 4000;

//import routes
server.use('/api/users', require('./routes/users'));
server.use('/api/auth', require('./routes/auth'));
server.use('/api/projects', require('./routes/projects'));

//set main page
//server.get('/', (req, res) => {
//    res.send('Hola mundo')
//});
//get the server to start
server.listen(PORT, () => {
    console.log(`the server is working on port ${PORT}`);
});

