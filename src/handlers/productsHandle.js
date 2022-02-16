const fs = require('fs');
const path = require('path');

const productsHandle = (res) => {
  const filePath = path.join(__dirname, '..', 'products.json');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      res.writeHead(500);
      res.end('SERVER ERROR');
    } else {
      res.writeHead(200, { 'content-Type': 'application/json' });
      res.end(file);
    }
  });
};
const postHandler = (res) => {
  const filePath = path.join(__dirname, '..', '..', 'public', 'js/fetch.js');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      res.writeHead(500);
      res.end('SERVER ERROR');
    } else {
      res.writeHead(200, { 'content-Type': 'text/js' });
      res.end(file);
    }
  });
};
module.exports = { productsHandle, postHandler };
