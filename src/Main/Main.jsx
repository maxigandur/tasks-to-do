import React, { useContext } from 'react'
import "./Main.css"
import { useState } from 'react'
import Tasks from '../Tasks/Tasks'
import { Notes } from '../Context/NotesProvider'
import Swal from 'sweetalert2'
const Main = () => { 
    
    let {setcNotes} = useContext(Notes)
    
    let newnote = useState()
    
    const [count, setCount] = useState(0);

    let notesJson = useState([])
  
        try {
            notesJson = JSON.parse(localStorage.getItem("notes")) || []
        } catch (error) {
            console.error("error Parsing Stored Value", error)
            notesJson = []
        }
        
   
        
    
    console.log(notesJson);

    function generateUniqueId() {
        return Math.random().toString(36).substring(2) + Date.now().toString(36);
    }

    const handleNote = (e)=>{
      
        const title = document.querySelector(".texttitle")
        const text = document.querySelector(".textarea")
        if (title.value === "" || text.value === "") {
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Debes Rellenar Todos los Datos!',
              })
            text.value = ""  
            title.value = ""     
        }else{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Nota Agregada Correctamente!',
                showConfirmButton: false,
                timer: 1500
              })
            newnote = {
                
                title: title.value,
                text : text.value,
                id:  generateUniqueId(),
                finalized: false     
            }    
           
            notesJson.push(newnote)
            text.value = ""  
            title.value = ""
            if (notesJson.length > 27) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Limite de notas alcanzados, Debes eliminar una para Continuar!',
                  })
           
            }else{
                localStorage.setItem("notes", JSON.stringify(notesJson))
            }     
          
           
        }    
        setCount(count + 1)
    }
     
  return (
    <section>
        <div className='main'>
            
            {/* <img src={noteimg} alt="" className='noteimg'/> */}
            <div className='maininputs'>  
                <div className='inputs'>
                    <span>Task To Do...</span>
                    <input type="text" placeholder='Title of Task...' className='texttitle'/>
                    <textarea type="text" placeholder="Descript The Task..." className='textarea' name='note'/>

               
         
                    <button type='submit' onClick={handleNote} className='btnNote'>Note IT!</button>
                </div>

                <div className='tasks'>
                    {notesJson ? <Tasks cnotes={notesJson} setcNotes={setcNotes}/> : NaN}
                </div>
            </div>  
        </div>

    </section>
  )
}

export default Main