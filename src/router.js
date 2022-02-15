const homeHandle = require('./handlers/homeHandle.js');
const {productsHandle, postHandler} = require('./handlers/productsHandle.js');
const publicHandle  = require('./handlers/publicHandle.js')
const getProductHandler  = require('./handlers/getProductsHandler.js')

const router = (req, res) => {
    const { url } = req;
    if (url === '/') {
        homeHandle(res);
    }
    else if (url === '/css/style.css') {
        publicHandle(res, url);
    }
    else if (url === '/products') {
        productsHandle(res);
    }
    else if (url === '/js/fetch.js') {
        postHandler(res)
    }
    else if (url === '/getAllProducts') {
        getProductHandler(res)
    }
    else{
        res.writeHead(500);
        res.end('SERVER ERROR');
    }
};

module.exports = router;