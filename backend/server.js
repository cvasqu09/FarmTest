const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/farmers-only';
mongoose.connect(connectionString, { useNewUrlParser: true });

const server = http.createServer(app);

server.listen(port);