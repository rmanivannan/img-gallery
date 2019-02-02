var restify = require('restify');

function getImages(req, res, next) {
    res.send('[]');
    next();
  }

  function uploadImage(req, res, next) {
    res.send('[]');
    next();
  }

var server = restify.createServer();
server.get('/images', getImages);
//server.get('/images/:name', getImages);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

module.exports = server;
