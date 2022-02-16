const fs = require('fs');
const path = require('path');

const homeHandle = (res) => {
  const filePath = path.join(__dirname, '..', '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      res.writeHead(500);
      res.end('SERVER ERROR');
    } else {
      res.writeHead(200);
      res.end(file);
    }
  });
};
module.exports = homeHandle;
