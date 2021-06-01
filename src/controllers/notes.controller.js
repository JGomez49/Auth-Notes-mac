// Al igual que index.controller.js, en este archivo se definen las funciones
// que despues seran llamadas desde notes.routes.js

//https://www.youtube.com/watch?v=8sXcFXFOWK4
//https://www.youtube.com/watch?v=htlt7L8Yl1k
//https://www.youtube.com/watch?v=dFb1r4rUYMQ

const notesCrtl = {};
const Note = require('../models/Note');

notesCrtl.renderNoteForm = (req,res)=>{
    // res.send('Add a note...');
    res.render('notes/new-note');
}

notesCrtl.createNewNote = async(req,res)=>{
    console.log(req.body);
    // res.send('Create note...');
    const{title, description}=req.body;
    //Se puede obviar title de la propiedad title porque
    //tienen el mismo nombre. Lo dejo para referencia.
    const newNote = new Note({
        title: title,
        description: description
    });
    await newNote.save();
    console.log(newNote);
    res.redirect('/notes');
}

notesCrtl.renderNotes = async (req,res)=>{
    // res.send('Get all notes...');
    const notes = await Note.find();
    res.render('notes/all-notes', {notes});
};

notesCrtl.renderEditForm = (req,res)=>{
    res.send('Edit note...');
}

notesCrtl.updateNote = (req,res)=>{
    res.send('Update note...');
}

notesCrtl.deleteNote = async (req,res)=>{
    // res.send('Delete a note');
    // console.log(req.params.id);
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes');
}
module.exports = notesCrtl;