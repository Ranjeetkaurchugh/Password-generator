import React from "react";
import { useState,useCallback ,useEffect} from "react"



function App() {
  const [length,setlength] = useState(8)
  const[NumberAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setcharAllowed]=useState(false);
  const[password,setpassword]=useState("");
  
  const passwordGenerator = useCallback(()=>{
    let pass= "";
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvyxwz";
    if(NumberAllowed){
      str+="0123456789";

    }
    if(charAllowed){
      str+="!@#$%^&*(){}`";

    }
    for (let index = 1; index <=length; index++) {
    let char = Math.floor(Math.random()* str.length+1);
      pass  =pass+ str.charAt(char);
     
    }
    setpassword(pass);
      
  },[length,NumberAllowed,charAllowed,setpassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, NumberAllowed, charAllowed, passwordGenerator])
  
 return (
    <>
      <div className='w-full  max-w-md  mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-600'>
      <h1 className=" text-center text-size-400 mx-auto text-white shadow my-3">PasswordGenerator</h1>
        <div className="flex overflow-hidden rounded-lg shadow-md mb-4"> 
       
        <input
         type="text" 
         value={password}
         className="outline-none w-full py-1 px-3"
         placeholder="Password"
         readOnly
         />
         <button className="outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0">copy</button>
         
         
         </div>
        <div className="flex  text-sm gap-x-2">
          <div className="flex  item-center  gap-x-1">
            <input type="range"
            min={8}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setlength(e.target.value)}}
             />
             <label>Length:{length}</label>

          </div>
          <div className="px-1">
            <input type="checkbox"
            defaultChecked={NumberAllowed}
            id="numberInput"
            onChange={() => {
                setNumberAllowed((prev) => !prev);
            }}/>
            <label>Number</label></div>
            <div className="px-1">
            <input type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
                setcharAllowed((prev) => !prev);
            }}/>
            <label>Character</label>
            </div>
          </div>
        </div>
       
         

    </>
  )
}

export default App
