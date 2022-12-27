const mongoose = require("mongoose");
const NotesSchema = new mongoose.Schema({
  content: String,
});

module.exports = mongoose.model("notes", NotesSchema);
