const App=()=>{

   const alertHandler=(msg)=>{
    alert(msg)
   }
  return (
    <>
    <div>HEllo</div>
    <div>Hello Sumit</div>
    <div>{3+3}</div>
    <button onClick={()=>alertHandler("diye bhuz gye")}>click here</button>
    </>
)
}
export default App;