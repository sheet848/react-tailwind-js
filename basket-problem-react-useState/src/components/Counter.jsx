import React, { useState } from 'react'

// simple state for the counter

const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <>
    <div style={{ textAlign: 'center' }}>
      <h1>{count}</h1>
      <button onClick={() => {setCount(count + 1)}}>Increase Count</button>
    </div>
    </>
  )
}

export default Counter