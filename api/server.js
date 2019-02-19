const fs = require('fs');
const restify = require('restify');
const ManageImages = require('./api-controller/image');
const server = restify.createServer();
const initSE = require('./sse');

server.use(restify.plugins.bodyParser({
    mapParams: true
}));

// restrict equest content size more han 5 Mb
server.use(function(req, res, next){
    let fileSize = Number(req.headers['content-length']);
    //console.log(fileSize)
    fileSize = isNaN(fileSize) ? 0 : ((fileSize*(3/4))/(1024*1024)); //convert to Mb
    //console.log(fileSize)
    if(fileSize > 4.05){
        res.status(422);
        res.send({
            errorMsg: 'Allowd file size is 4Mb'
        });
        return;
    }
    return next();
});

server.get('/api/static-images/*', restify.plugins.serveStatic({
    directory: __dirname + '/../'
}));

new ManageImages(server);

/*const httpProxy = require('http-proxy'), Proxy = httpProxy.createProxyServer({});
server.get('/api/listenChanges', function (req, res) {"use strict";return Proxy.web(req, res, { target: 'http://localhost:4001/'});});*/

server.listen(4000, function () {
    console.log('%s listening at %s', server.name, server.url);
});

module.exports = server;
