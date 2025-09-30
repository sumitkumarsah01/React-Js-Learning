import Read from "./components/Read"
import Create from "./components/Create"
import Show from "./components/Show"
import { useState } from "react"
const App=()=>{

  let [users,setusers]=useState( [
    {name:"Sumit",age:23},
    {name:"kaushal",age:93}
  ])
   
  


  return(
  <>
     <Create></Create>
     <Read></Read>
     <Show users={users} setuser={setusers}></Show>
  </>
  )
}

export default App;