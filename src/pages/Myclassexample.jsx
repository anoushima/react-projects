
import React from 'react'

function Myclassexample(props) {
  return (
    <>
    <div>
      <h1>hello,{props.course}</h1>
      <h3>score:{props.score}</h3>
      <p>{props.ispassed?"you passed":"try again"}</p>
    </div>

    </>
  )
}

export default Myclassexample