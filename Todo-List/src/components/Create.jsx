import { useState } from "react";
import { nanoid } from "nanoid";
const Create=(props)=>{
    let todos=props.todos;
    let settodos=props.settodos;
    let [title,settitle]=useState("");

    const submitHandler=(e)=>{
    e.preventDefault();

    const todo={
      id: nanoid(),
      title,
      isComplete:false
    }

    let copyTodos=[...todos];
    copyTodos.push(todo);
    settodos(copyTodos);

    settitle("");

    // settodos([...todos,todo])
  }
    return (
        <>
        <form onSubmit={submitHandler}>
      <input 
      value={title}
      onChange={(e)=>settitle(e.target.value)}
      type="text" placeholder="title" />
      <br />
      <br />

      <button>Create To Do</button>
      
      
    </form>
        </>
    )
}
export default Create;