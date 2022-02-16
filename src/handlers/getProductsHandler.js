const https = require('https');

const getProductHandler = (res) => {
  https.get('https://fakestoreapi.com/products', (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      res.writeHead(200);
      res.end(data);
    });
  }).on('error', (err) => {
    console.log(`Error: ${err.message}`);
  });
};
module.exports = getProductHandler;
