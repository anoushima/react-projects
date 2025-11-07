import React, { useEffect, useState } from 'react'

function Mounted() {
    const [show,setshow]=useState(false);
    useEffect(()=>{
        setshow(false);
        const timer=setTimeout(()=>setshow(true),3000);
        return()=>clearTimeout(timer);
    },[]);
  return (
    <>
    <div>{show&& <div>component Mounted</div>}
    <p>content goes here</p>
    </div>
    </>
  )
}

export default Mounted