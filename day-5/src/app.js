const express = require('express'); 

const app = express();

app.use(express.json());

const notes = []

app.post('/notes', (req, res) => {
  
  notes.push(req.body);
  res.status(201).json({ message: 'Note created successfully' });
});

app.get('/notes', (req, res) => {
 res.status(200).json({ notes: notes })
});

app.delete('/notes/:idx', (req, res) => {
     delete notes [req.params.idx];
     res.status(200).json({ 
        message: 'Note deleted successfully' 
    });
});


app.patch('/notes/:idx', (req, res) => {
    notes[req.params.idx] = req.body;
    res.status(200).json({ 
        message: 'Note updated successfully' 
    });
});


module.exports = app;