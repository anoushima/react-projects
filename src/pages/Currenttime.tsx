import React, { useEffect, useState } from 'react'

function Currenttime() {
  const [time,setime]=useState(new Date().toLocaleDateString());

  useEffect(()=>{
    const interval=setInterval(()=>{
      setime(new Date().toLocaleTimeString());
    },1000);

    return()=>clearInterval(interval);
  },[]);
  return (
   <>
   <h2>Current time</h2>
   <p>{time}</p>
   </>
  )
}

export default Currenttime