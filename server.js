'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: (process.env.PORT || 3000) });

/**
 * --- HOME ---
 */
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Home');
  }
});

/**
 * --- HELLO ---
 */
server.route({
  method: 'GET',
  path: '/getHello',
  handler: function (request, reply) {
    reply('Hello!');
  }
});

// server.register([], (err) => {
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});

