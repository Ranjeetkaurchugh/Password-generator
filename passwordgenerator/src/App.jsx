import React from "react";
import { useState,useCallback } from "react"



function App() {
  const [lenght,setlenght] = useState(8)
  const[NumberAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setcharAllowed]=useState(false);
  const[password,setpassword]=useState();
  
  const passwordGenerator = useCallback(()=>{
    let pass= "";
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvyxwz";
    if(NumberAllowed){
      str+="0123456789";

    }
    if(charAllowed){
      str+="!@#$%^&*(){}`";

    }
    for (let index = 1; index < array.length; index++) {
    let char = Math.floor(Math.random()* str.length+1);
      pass = str.charAt(char);
      setpassword(pass);
      
    }
  },[lenght,NumberAllowed,charAllowed,setpassword])
  
 return (
    <>
      <div className='w-full  max-w-md  mx-auto shadow-md-rounded-lg px-4 my-8 text-orange-400 bg-gray-700'>test</div>
    </>
  )
}

export default App
