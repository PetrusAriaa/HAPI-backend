const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const HOSTNAME = 'localhost';
const PORT = 3300;

var userData = [
	{ name: 'John Doe', age: 25, state: 'Kansans' },
	{ name: 'Christine', age: 23, state: 'New State' },
	{ name: 'Dave Richard', age: 28, state: 'Texas' },
];

var bookAuthors = [
	{ auth_id: 113, name: 'Pidi Baiq' },
	{ auth_id: 206, name: 'Tere Liye' },
	{ auth_id: 313, name: 'Hajime Isayama' },
];

// inisiasi listened port
const init = async () => {
	const server = Hapi.server({
		port: PORT,
		host: HOSTNAME,
	});

	// pages route
	server.route(routes);

	await server.start();
	console.log(`Server is up on ${server.info.uri}`);
};

init();
