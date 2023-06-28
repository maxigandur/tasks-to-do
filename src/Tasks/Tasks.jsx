import React from 'react'
import "./Tasks.css"
import { useState } from 'react';
import Modal from '../Modal/Modal';


const Tasks = ({cnotes,setcNotes}) => {
 
    let [modal,setModal] = useState(false)
    const [selectednote,setselectedNote] = useState()
    console.log(cnotes);
   
    
    function generateUniqueId() {
        return Math.random().toString(36).substring(2) + Date.now().toString(36);
        
    }

    const handleModal = ()=>{
        setModal(true)     
    }
    const selectedNote = (e)=>{   
        const selected = (e.target.innerText);         
        const filteredNote = cnotes.filter(note=>(note.title === selected) )     
        setselectedNote(filteredNote)   
        
    }

    
    
   
  return (
    <>
    <div className='grid'>
         {cnotes.map(note=>(               
                <div key={generateUniqueId()} className={!note.finalized === true ? 'divtask' : "divtask finalized"} onClick={selectedNote}>
                    <h1 onClick={handleModal}>{note.title}</h1>
                            
                </div>               
         ))} 
         </div> 
          {modal ? <Modal modal={modal} setModal={setModal} selectedNote={selectednote} cnotes={cnotes} setcNotes={setcNotes}/> : ""}
         
    </>
  )
}

export default Tasks