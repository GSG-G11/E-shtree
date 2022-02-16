const http = require('http');
const router = require('./router');
const env = require('env2')('./path-to-your/.env');
const server = http.createServer(router);
const port =p 5000;
server.listen(port);
