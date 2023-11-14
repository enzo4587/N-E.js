//serving static files

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static files/force (2).jpg')

    //A header tells the client what data to expect.
    res.writeHead(200, { 'Content-type': 'image/jpg' });

    //pipe the read stream to where you wanna send it 
    //send it to the user
    readStream.pipe(res);
}).listen(3000);