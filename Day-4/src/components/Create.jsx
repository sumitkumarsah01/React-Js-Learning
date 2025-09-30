import { useState } from "react"
const Create=()=>{
    let [fullname,setfullname]=useState("")
    let [age,setage]=useState(18)

    let submitHandler=(e)=>{
      e.preventDefault();
      let newuser={name:fullname,age:age};
      console.log(newuser);
    }
    return(<>
        <h1>Register User</h1>
    <form onSubmit={submitHandler}>
      <input
      onChange={(e)=>setfullname(e.target.value)}
      value={fullname}
       type="text" 
       placeholder="Username" />
      <input 
      onChange={(e)=>setage(e.target.value)}
      value={age}
      type="number"  
      placeholder="Age"/>
      <button>Submit</button>
    </form>
    </>)
    
}

export default Create;