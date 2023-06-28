import { createContext, useState } from "react";
import React from 'react'


//primero declarar el contexto
export const Notes = createContext(null)


//paso 2, crear el provider (poveedor) que me envolvera la app

const NotesProvider = ({children}) => {

//Dentro del context van : estados, efectos y funciones auxiliares  
 
  
  const [cnotes,setcNotes] = useState([])
 
  return (
    <Notes.Provider value={{cnotes,setcNotes }}>
        {children}
    </Notes.Provider>
  )
}

export default NotesProvider