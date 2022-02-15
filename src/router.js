const homeHandle = require('./handlers/homeHandle');
const productsHandle = require('./handlers/productsHandle');
const publicHandle =require('./handlers/publicHandle')

const router = (req, res) => {
    const { url } = req;
    if (url === '/') {
        homeHandle(res);
    }
    else if(url==='/css/style.css'){
        publicHandle(res,url);
    }
    else if(url === '/products'){
        productsHandle(res);
    }
};
    
module.exports = router;