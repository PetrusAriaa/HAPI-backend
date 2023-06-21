const Hapi = require('@hapi/hapi');

// inisiasi listened port
const init = async () => {
	const server = Hapi.server({
		port: 3300,
		host: 'localhost',
	});

	await server.start();
	console.log(`Server is up on ${server.info.uri}`);
};

init();
