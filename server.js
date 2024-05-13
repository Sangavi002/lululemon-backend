const express = require('express');
const jsonServer = require('json-server');

const PORT = process.env.PORT || 3000;
const server = express();

// Create a JSON Server instance
const jsonServerRouter = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Use JSON Server middlewares
server.use(middlewares);

// You can use the JSON Server router in combination with your existing Express app
server.use('/api', jsonServerRouter);

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
