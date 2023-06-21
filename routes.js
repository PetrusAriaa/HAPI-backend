const routes = [
	{
		path: '/',
		method: 'GET',
		handler: (req, h) => {
			return '<h1>Homepage</h1>';
		},
	},
	{
		path: '/',
		method: '*', //method any
		handler: (req, h) => {
			return '<h1>halaman tidak dapat diakses untuk method tersebut </h1>';
		},
	},
	{
		path: '/about',
		method: 'GET',
		handler: (req, h) => {
			return '<h1>About Page</h1>';
		},
	},
	{
		path: '/about',
		method: '*',
		handler: (req, h) => {
			return '<h1>halaman tidak dapat diakses untuk method tersebut </h1>';
		},
	},
	{
		path: '/{any*}', //wildcard route
		method: '*',
		handler: (req, h) => {
			return '<h1>Oops! Halaman tidak ditemukan.</h1>';
		},
	},
];

module.exports = routes;
