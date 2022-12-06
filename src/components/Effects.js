import React, {useState, useEffect} from "react";
import {Button} from "react-bootstrap";

function Effect(){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = ()=>{
    setWindowWidth(window.innerWidth);
  }
useEffect(()=>{
  window.addEventListener('resize',handleResize)

  return()=>{
    window.removeEventListener('resize', handleResize)
  }
},[])
  return(
    <div>
      {windowWidth}

    </div>

  )
}
export default Effect;