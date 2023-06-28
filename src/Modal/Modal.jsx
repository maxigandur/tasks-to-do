import React from 'react'
import "./Modal.css"
import { useState } from 'react';
import 'animate.css';

const Modal = ({modal,setModal, selectedNote,cnotes,setcNotes}) => {
    
    const [count, setCount] = useState(0);

  

    const handleClose = ()=>{
  
      setModal(false)
      
    }
     const deleteselectNote = ()=>{ 
      const updatedCNotes = (cnotes.filter(note => (note.id !== selectedNote[0].id)))
      cnotes = [...updatedCNotes]
      console.log("Cnotes",cnotes);
      console.log("updatedCnotes ", updatedCNotes);
      localStorage.setItem('notes', JSON.stringify(cnotes));
      setCount(count + 1)
      setModal(false)
      window.location.reload()
    } 
    

    const finalizeselectNote = ()=>{
      const finalizedNote = (cnotes.filter(note => (note.id === selectedNote[0].id)))
      console.log(finalizedNote);
      finalizedNote[0].finalized = true
      localStorage.setItem('notes', JSON.stringify(cnotes));
      setModal(false)    
    }

  return (
  
        <div className='modalMain animate__animated animate__bounceIn'>
            <div className='modalText'>

             <h1>{selectedNote[0].title}</h1>
             <p>{selectedNote[0].text}</p>       
            </div>

            <button onClick={handleClose} className='close'>Close</button> 
            
            <div className='nested-grid'>
              <button className='finalize' onClick={finalizeselectNote}>Finalize</button>
              <button className='delete' onClick={deleteselectNote} >Delete</button>
            </div>
        </div>
   
  )
}

export default Modal