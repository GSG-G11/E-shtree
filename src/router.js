const homeHandle = require('./handlers/homeHandle');
const router = (req, res) => {
    const { url } = req;
    if (url === '/') {
        homeHandle(res);
    }
};
    
module.exports = router;