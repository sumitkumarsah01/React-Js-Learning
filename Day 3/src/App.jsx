const App=()=>{
  let arrObj=[
    {name:"sumit",age:12},
    {name:"Kaushal",age:12},
    {name:"khushi",age:12},
  ];

  var Data=arrObj.map((profile)=>{
       return( 
       <li>
          <span>{profile.name}</span>
          <br />
          <span>{profile.age}</span>
        </li>
       )
  })
  return (
    <>
     <ol>{Data}</ol>
    </>
  )
};

export default App;