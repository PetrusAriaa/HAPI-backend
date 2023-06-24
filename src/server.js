const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const HOSTNAME = 'localhost';
const PORT = 5000;

const init = async () => {
  const server = Hapi.server({
    host: HOSTNAME,
    port: PORT,
    routes: {
      cors: true,
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server started on ${server.info.uri}`);
};

init();
