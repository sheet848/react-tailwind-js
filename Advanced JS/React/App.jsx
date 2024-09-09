import React, { useState, useMemo } from 'react'

// issue with react -  re renders the state constantly
// what to do - useMemo

// don't want to re render debounce constantly 
const debounce = (func, wait) => {
  let timerId
  return (...args) => {
      clearTimeout(timerId)
      timerId = setTimeout(() => func(...args), wait)
  }
}

const App = () => {

  const [inputValue, setInputValue] = useState('')

  const callApi = (e) => {
    console.log('Calling API', e.target.value)
  }

  const debouncedCallApi = useMemo(() => debounce(callApi, 1000), [])

  return (
    <>
    <h1>Debouncing in React</h1>
    <input type='text' value={inputValue} onChange={(e) => {
      setInputValue(e.target.value)
      debouncedCallApi(e)
    }}></input>
    </>
  )
}

export default App
