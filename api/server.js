const restify = require('restify');
const ManageImages = require('./api-controller/image');
const server = restify.createServer();

server.use(restify.plugins.bodyParser({
    mapParams: true
}));

new ManageImages(server);

server.get('/api/static-images/*', restify.plugins.serveStatic({
    directory: __dirname + '/../'
}));

server.listen(4000, function () {
    console.log('%s listening at %s', server.name, server.url);
});

module.exports = server;