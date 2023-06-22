const routes = [
	{
		path: '/',
		method: 'GET',
		handler: (req, h) => {
			const response = h.response('<h1>Hello User</h1>');
			response.code(200);
			response.type('text/html');
			response.header('X-Custom', 'some-values');
			return response;
		},
	},
	{
		path: '/',
		method: '*', //method any
		handler: (req, h) => {
			const response = h.response(
				'<h1>halaman tidak dapat diakses untuk method tersebut </h1>'
			);
			response.code(401);
			response.type('text/html');
			return response;
		},
	},
	{
		path: '/about',
		method: 'GET',
		handler: (req, h) => {
			const res = h.response('<h1>About Page</h1>');
			res.code(201);
			res.type('text/html');
			return res;
		},
	},
	{
		path: '/about',
		method: '*',
		handler: (req, h) => {
			const res = h.response(
				'<h1>halaman tidak dapat diakses untuk method tersebut </h1>'
			);
			res.code(401);
			res.type('text/html');
			return res;
		},
	},
	{
		path: '/hello/{name?}',
		method: 'GET',
		handler: (req, h) => {
			const name = req.params.name ? req.params.name : 'stranger';
			const { lang } = req.query; // request query, endpointnya gini ==> http://localhost:3300/hello/nama?lang=id
			let msg = ' ';
			lang == 'id' ? (msg = `Halo, ${name}`) : (msg = `Hello, ${name}`);

			const res = h.response(`<h1>${msg}</h1>`);
			res.code(201);
			res.type('text/html');
			return res;
		},
	},
	{
		path: '/login',
		method: 'POST',
		handler: (req, h) => {
			const { username, password } = req.payload; //udah otomatis ngeparse jadi JSON
			console.log(username, '|', password);
			const res = h.response('success');
			res.code(201);
			res.type('text/html');
			return res;
		},
	},
	{
		path: '/{any*}', //wildcard route
		method: '*',
		handler: (req, h) => {
			const res = h.response('Not Found!');
			res.code(404);
			res.type('text/html');

			return res;
		},
	},
];

module.exports = routes;
