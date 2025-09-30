const Show=(props)=>{
    let Data=props.users
    // let Newdata=Data.map((profile)=>profile.name)
    return(
        <>
         <h1>{Data.map((profile)=>profile.name)}</h1>
         <h1>{Data.map((profile)=>profile.age)}</h1>
        </>
    )
}
export default Show;