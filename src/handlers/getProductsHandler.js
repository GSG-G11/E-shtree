const axios = require('axios');

const getProductHandler = (res) => {
    axios.get('https://fakestoreapi.com/products')
        .then(response => {
            res.writeHead(200);
            console.log(response.data);
            res.end(JSON.stringify( response.data));
        })
};
module.exports = getProductHandler;