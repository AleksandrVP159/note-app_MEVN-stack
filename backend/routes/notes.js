const express = require("express");
const router = express.Router();
const Note = require("../models/notes");

// CRUD

// создать новую заметку
router.post("/new", async (req, res) => {
  const newNote = new Note(req.body);
  const savedNote = await newNote.save();
  res.json(savedNote);
});

// прочитать все заметки
router.get("/", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// обновить заметку по id
router.put("/update/:id", async (req, res) => {
  const noteUpdate = await Note.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );

  res.json(noteUpdate);
});

// удалить заметку по id
router.delete("/delete/:id", async (req, res) => {
  const noteDelete = await Note.findByIdAndDelete({
    _id: req.params.id,
  });
  res.json(noteDelete);
});

module.exports = router;
