const fs = require('fs');
const path = require('path');
const contentType ={
    css: "text/css",
    js :"text/javascript"
}
const publicHandle = (res,url) => {  
    const extension = url.split('.')[1];
    const filePath = path.join(__dirname, '..', '..', 'public',url);
    fs.readFile(filePath, (error, file) => {
        if (error) {
            res.writeHead(500);
            res.end('SERVER ERROR');
        } else {
            res.writeHead(200, contentType[extension]);
            res.end(file);
        }
    });
};
module.exports = publicHandle;