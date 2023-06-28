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
  {
    path: '/notes/{id}',
    method: 'GET',
    handler: handler.handleNoteGetByIde,
  },
  {
    path: '/notes/{id}',
    method: 'DELETE',
    handler: handler.deleteNote,

  },
];

module.exports = routes;
