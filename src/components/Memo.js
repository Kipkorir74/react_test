import React, {useState,useMemo} from 'react';
// useMemo helps to cache a value to avoid recomputing each time
function Memo(){
  const[number, setNumber]=useState(0);
  const[dark, setDark]=useState(false);
  const doubleNumber = useMemo(() => {
   return slowFunction(number)
  }, [number]);
  const themeStyles = {
    backgroundColor:dark ? "black":"white",
    color:dark ? "white" :"black"
  }
  return (
    <div>
    <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
      <button onClick={()=> setDark(prevDark =>!prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}
export default Memo;
function slowFunction(num){
  console.log("Calling Slow Function")
  for (let i = 0 ; i<=10; i++){}
  return num*2
}