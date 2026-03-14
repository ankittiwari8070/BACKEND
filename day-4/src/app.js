const express = require("express")

const app = express() // server create ho jata hai 

app.use(express.json())

const notes = [
    
]


app.get("/",(req,res)=>{
    res.send("hello Ankit kaise ho")
})


app.post("/notes",(req,res) =>{
    console.log(req.body);
    notes.push(req.body)

    console.log(notes);
    
    res.send("note created")
    
})

app.get("/notes",(req,res) => {
    res.send(notes)
})

// delete /notes/0  
// params 
// delete /notes/0 

app.delete("/notes/:index" , (req,res)=>{
    delete notes[req.params.index]
    res.send("note deleted")
    
})


// PATCH /notes/:index
// req.body = {description:- "sample modified description"}

app.patch("/notes/:index" , (req,res)=>{
    notes [req.params.index].description = req.body.description
    notes [req.params.index].title = req.body.title 
    res.send("note updated")
})


module.exports= app