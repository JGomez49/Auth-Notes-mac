// En este archivo estan las tareas basicas como listar, atualizar, etc

const {Router} = require('express');
const router = Router();
const {
    renderNoteForm, 
    createNewNote, 
    renderNotes, 
    renderEditForm,
    updateNote,
    deleteNote
} = require('../controllers/notes.controller');

//Get note
router.get('/notes/add', renderNoteForm);

//New note
router.post('/notes/new-note', createNewNote);

//Get all notes
router.get('/notes', renderNotes);

//Edit notes
    //Mostrar el formulario para editar
    router.get('/notes/edit/:id', renderEditForm);

    //Actualizar lo que esta en el formulario
    router.put('/notes/edit/:id', updateNote);

//Delete note
router.delete('/notes/delete/:id', deleteNote);

module.exports = router;