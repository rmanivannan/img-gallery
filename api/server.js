const fs = require('fs');
const restify = require('restify');
const ManageImages = require('./api-controller/image');
const server = restify.createServer();
const initSE = require('./sse');
var httpProxy = require('http-proxy');



server.use(restify.plugins.bodyParser({
    mapParams: true
}));

server.get('/api/static-images/*', restify.plugins.serveStatic({
    directory: __dirname + '/../'
}));

new ManageImages(server);

let Proxy = httpProxy.createProxyServer({});
server.get('/api/listenChanges', function (req, res) {
    "use strict";
    return Proxy.web(req, res, { target: 'http://localhost:4001/'});
});

server.listen(4000, function () {
    console.log('%s listening at %s', server.name, server.url);
});

module.exports = server;
