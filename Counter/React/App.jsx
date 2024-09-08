import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const step = useRef(1)

  const setStep = (value) => {
    step.current = value;
  }

  const increment = () => {
    setCount((count)=> count + step.current);
  }

  const decrement = () => {
    setCount((count) => count - step.current);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <div className="conatiner">
        <div className="counter">
          <div className="counter-value">
            <span className="value">{count}</span>
          </div>
          <div className="counter-controls">
            <button className="decrement" onClick={decrement}>-</button>
            <button className="increment" onClick={increment}>+</button>
          </div>
          <div className="change">
            <label htmlFor="changeBy">Increment/Decrement By:</label>
            <input type="number" id="changeBy" min="1" max="10" 
            defaultValue={step.current} title='Step Value'
            onChange={(e) => setStep((e.target).valueAsNumber)} />
          </div>

          <div className="counter-control">
            <button className="reset" onClick={reset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
