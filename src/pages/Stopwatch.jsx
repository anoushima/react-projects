import React, { useEffect, useState } from 'react'

function Stopwatch() {
    const[count,setcount]=useState(0);
    const[running,setrunning]=useState(false);

    useEffect(()=>{
        if (!running) return;
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, [running]);


    const start=()=>setrunning(true);
    const stop=()=>setrunning(false);
    const reset=()=>{setcount(0);
    }
  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen text-center'>
        <h1 className='text-4xl font-bold'>Stopwatch</h1>
        <p className='text-3xl'>{count}</p>

        <div className='flex space-x-4'>
            <button onClick={start} className='bg-green-500'>start</button>
            <button className='bg-green-500' onClick={stop}>Stop</button>
            <button className='bg-green-500' onClick={reset}>Reset</button>
        </div>
    </div>
    </>
  )
}

export default Stopwatch