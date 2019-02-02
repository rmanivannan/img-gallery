const restify = require('restify');
const ManageImages = require('./api-controller/image');
const server = restify.createServer();

server.use(restify.plugins.bodyParser({
    mapParams: true
}));

ManageImages(server);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});

module.exports = server;
