import React from 'react'

const AppleBasket = ({basket, appleCount}) => {
  return (
    <>
        <div className={basket}>
            <h1><span>{appleCount}</span> apples</h1>
            <p>{basket}</p>
        </div>
    </>
  )
}

export default AppleBasket