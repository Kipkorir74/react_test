import React, {useState} from "react";
import {Button, Table, Form} from "react-bootstrap";

function Mchezo(){
  const [count,setCount] = useState(4);
  const [mambo, setMambo] = useState("Friday");

  function decrementCount(){
    setCount(prevCount=>prevCount-1);

  }

  function incrementCount(){
    setCount(prevCount=>prevCount+1);

  }
  return (
    <div>
      <h1>Mimi</h1>
      <Button onClick={decrementCount}>-</Button>
      <span> </span>
      <span> </span>
      <span>{count}</span>
      <span> </span>
      <span>{mambo}</span>

      <span> </span>
      <span> </span>
      <Button onClick={incrementCount}>+</Button>
    </div>
  )
}
export default Mchezo;