import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from 'axios'


function App() {

  const [notes, setNotes] = useState([])

  function fetchNotes(){
       axios.get("http://localhost:3000/api/notes")
    .then((res)=>{
      setNotes(res.data.notes)
    })
  }
  useEffect(()=>{
    fetchNotes()

  },[])

  function handleSubmit(e){
    e.preventDefault()
  const {title,description} = e.target.elements
 
   console.log(title.value,description.value);

   axios.post("http://localhost:3000/api/notes",{
    title:title.value,
    description:description.value
   })
    .then((res)=>{
      console.log(res.data);

      fetchNotes()
    })


  }

  function handleDeleteNote(noteId){
     axios.delete(`http://localhost:3000/api/notes/`+noteId)
     .then((res)=>{
      console.log(res.data);
      fetchNotes()
     })
    
    
  }

 

  return (
     <>
     <form className='note-create-from' onSubmit={handleSubmit}  >
      <input name="title" type='text' placeholder='Enter title' />
      <input name="description" type="text" placeholder='Enter description' />
       <button>Create note</button>
     </form>
   
 
    <div className="notes">
      {
        notes.map(note=>{
          return <div className="note">
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <button on onClick={()=>{handleDeleteNote(note._id)}} >Delete</button>
            
          </div>
        })
      }
      </div>
    </>
  )
}

export default App
