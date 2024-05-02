import React, { useState } from 'react'
//Building a counter function component
function Counting() {
    const [count, setCount] = useState(0);

    function increase(){
        setCount(count + 1)
    }
    function decrease(){
        setCount(count - 1)
    }

  return (
    <>
    <h1>Functional Based Component - Counter</h1>
    <p>Count: {count} </p>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    </>
  )
}

export default Counting