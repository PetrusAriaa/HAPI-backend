const {nanoid} = require('nanoid');
const notes = require('./notes');

const handler = {
  handleNotePost: (req, h) =>{
    const {title, tags, body} = req.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updateAt = createdAt;

    const data = {
      title, id, createdAt, updateAt, tags, body,
    };
    notes.push(data);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
      const res = h.response({
        status: 'success',
        message: 'Note added',
        data: {
          noteId: id,
        },
      });
      res.code(201);
      console.log(res.source);
      return res;
    }

    const res = h.response({
      status: 'failed',
      message: 'Note not added',
    });
    res.code(500);
    return res;
  },

  handleNoteGet: (req, h)=> {
    const res = h.response({
      status: 'success',
      data: {notes},
    });
    res.code(200);
    return res;
  },

  handleNoteGetByIde: (req, h)=> {
    const noteId = req.params.id;
    const note = notes.filter((n)=> n.id === noteId)[0];

    if (note !== undefined) {
      return {
        status: 'success',
        data: {note},
      };
    }

    const res = h.response({
      status: 'failed',
      message: 'Note not found!',
    });
    res.code(404);
    return res;
  },

  deleteNote: (req, h) => {
    const noteId = req.params.id;
    const noteIndex = notes.findIndex((item) => item.id === noteId);

    if (noteIndex !== -1) {
      notes.splice(noteIndex, 1);
      return {
        status: 'success',
        message: 'Note Deleted',
      };
    }
    const res = h.response({
      status: 'failed',
      message: 'Note not found',
    });
    res.code(404);
    return res;
  },

};

module.exports = handler;
