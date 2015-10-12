var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({
    port: 8000
});

server.route({
    method: 'GET',
    path: '/resource',
    handler: function (request, reply) {
        console.log(request.headers);
        reply('OK');
    }
});

server.start(function () {
    console.log('~>', server.info.uri);
});

