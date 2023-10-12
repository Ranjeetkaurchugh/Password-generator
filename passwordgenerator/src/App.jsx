import React from "react";
import { useState,useCallback } from "react"



function App() {
  const [lenght,setlenght] = useState(8)
  const[NumberAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setcharAllowed]=useState(false);
  const[password,setpassword]=useState();
  
  const passwordGenerator = useCallback(fn,[lenght,NumberAllowed,charAllowed,setpassword])
  
 

  return (
    <>
      <h1 className=' text-white text-center my-3'>Password generator</h1>
    </>
  )
}

export default App
