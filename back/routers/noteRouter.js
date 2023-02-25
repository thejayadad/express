const router = require("express").Router();
const Note = require("../models/Note");
const auth = require("../middleware/auth.js");



router.post("/notes", auth, async (req, res) => {
    try {
      const { title, content } = req.body;

      const newNote = new Note({
        title,
        content,
      });

      const savedNote = await newNote.save();

      res.json(savedNote);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });

  router.get("/notes", auth, async (req, res) => {
    try {
      const notes = await Note.find();
      res.json(notes);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });

  module.exports = router;