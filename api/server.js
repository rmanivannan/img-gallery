const fs = require('fs');
const restify = require('restify');
const ManageImages = require('./api-controller/image');
const server = restify.createServer();
const initSE = require('./sse');


server.use(restify.plugins.bodyParser({
    mapParams: true
}));

server.get('/api/static-images/*', restify.plugins.serveStatic({
    directory: __dirname + '/../'
}));

initSE(server);

new ManageImages(server);

server.listen(4000, function () {
    console.log('%s listening at %s', server.name, server.url);
});

module.exports = server;
