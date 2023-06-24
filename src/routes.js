const handler = require('./handler');

const routes = [
  {
    path: '/notes',
    method: 'POST',
    handler: handler.handleNotePost,
  },
  {
    path: '/notes',
    method: 'GET',
    handler: handler.handleNoteGet,
  },
];

module.exports = routes;
