import { useState } from "react";

const App=()=>{
   let [title,settitle]=useState("");
   let [complete,setcomplete]=useState(true);
  return (
    
    <>
    <form action="">
      <input 
      value={title}
      onChange={(e)=>settitle(e.target.value)}
      type="text" placeholder="Enter your name" />
      <br />
      <br />


      <input 
      checked={complete}
      onChange={(e)=>setcomplete(e.target.checked)}
      type="checkbox" />

      <br />
    </form>
    </>
  )

}
export default App;