 import { useState } from "react"
 const Read=()=>{
  let [Username,setUsername]=useState("Sumit")

let changeuser=()=>{
  setUsername("khushi")
}
console.log(Username);

  return(
      <>
      <h1>{Username}</h1>
      <button onClick={changeuser}>Change</button>
      </>
  )
}

export default Read;