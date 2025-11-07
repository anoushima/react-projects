import React, { useEffect, useState } from 'react'

function Automatic_counter() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        const interval=setInterval(() => {
            setCount((prevcount)=>prevcount+1);
            
        }, 1000);
        return()=>clearInterval(interval);
    },[]);
  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen text-center'>
        <h1 className='text-4xl font-bold mb-4'>Automatic Counter</h1>
        <p className='text-2xl'>{count}</p>
    </div>
    
    </>
  )
}

export default Automatic_counter