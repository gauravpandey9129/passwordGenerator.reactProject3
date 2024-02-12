import { useCallback, useEffect, useState } from "react";


function App() {
  const [password,setPassword]=useState('')
  const [number,setNumber]=useState(false)
  const [characters,setCharacters]=useState(false)
  const [range,setRange]=useState(8)

  const passwordGenerator=useCallback(()=>{
     let pass='';
     let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
     if(number) str+='1234567890';
     if(characters) str+='!@#$&*(){}[]';
     for (let i = 1; i <= range; i++) {
      let randomNumber=Math.floor(Math.random() * str.length+1);
      pass+=str[randomNumber]
      
     }

     setPassword(pass)

  },[setPassword,characters,number,range])

  useEffect(()=>{
    passwordGenerator()
  },[passwordGenerator])
  return (
  < > 
      
       <div className=" border-danger  bg-dark-subtle text-center w-50 mx-auto p-5">
       <div className="input-group mb-3">
  
        <input type="text"   readOnly className="form-control input-group-large" value={password} aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        <button className="btn btn-outline-secondary text-light btn-outline-warning  btn-primary" type="button" id="button-addon1">Copy</button>
         </div>
         <div className="container bg-danger-subtle">
         <input type="range"   value={range} onChange={(event)=>{ setRange(event.target.value)}}min={5} max={20} id="range"></input><br/>
         <label     htmlFor="range">Select Length of Password = {range}</label></div>
         <br/>
         
         <input type="checkbox"  id="number" onChange={()=>setNumber((prev)=>!prev)}></input>
         <label htmlFor="number">Number</label><br/>
         <input type="checkbox"  id="char" onChange={()=>setCharacters((prev)=>!prev)}></input>
         <label htmlFor="char">Character</label>
         

        </div>
       
    
  </>)
}

export default App;
