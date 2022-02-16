const https = require('https');

const getProductHandler = (res) => {
    https.get('https://fakestoreapi.com/products', (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            res.writeHead(200);
            console.log(data);
            res.end(data);
            // console.log(JSON.parse(data).explanation);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
};
module.exports = getProductHandler;
