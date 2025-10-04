const Read=(props)=>{
    let todos=props.todos;
    let settodos=props.settodos;
    let renderTodos=todos.map(data =>{
    return <li key={data.id}>{data.title}
    <button onClick={()=> Datahandler(data.id)}>Delet</button></li>
  })

  let Datahandler=(id)=>{
    const deletItem=todos.filter((todo)=> todo.id != id);
      settodos(deletItem);
  }
    return(
        <>
            <h1>Todo list</h1>
            <hr />
            <ol>{renderTodos}</ol>
        </>
    )
}
export default Read;