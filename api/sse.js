const fs = require('fs');
const SSE = require('sse');
const http = require('http');

const sseServer = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/event-stream',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    });
    let i = null;
    fs.watch('./static-images', (eventType, filename) => {
        clearTimeout(i);
        i = setTimeout(()=>{
            console.log(`"${filename}" is updated`)
            let txt = 'id: msg1\ndata: files modified\n\n';
            res.write(txt);
        },2000);
    });
});

sseServer.listen(4001, function () {
    const sse = new SSE(sseServer);
    sse.on('connection', (client) => {
        client.send('Conected!');
    })
});

module.exports = sseServer;
