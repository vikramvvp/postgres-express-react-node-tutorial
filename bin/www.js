// this will be our application entry, we will setup our server here
const http = require('http');
const app = require('../app');		// the express app created on root

const port = parseInt(process.env.PORT, 10) || 8000;

app.set('port', port);

const server = http.createServer(app);
server.listen(port);