const http = require('http');
const router = require('./router');
require('env2')('.env');

const server = http.createServer(router);
const port = process.env.PORT || 5000;
server.listen(port);
