import { useState } from "react";
import Create from "./components/Create.jsx"
import Read from './components/Read.jsx'
const App=()=>{
  let [todos,settodos]=useState([
    {
      id:1,
      title:"kam kr bhai",
      isComplete:false
    }
  ])
  return(
    <>
       <Create todos={todos} settodos={settodos}></Create>
       <Read todos={todos} settodos={settodos} ></Read>
    </>
  )
}
export default App;