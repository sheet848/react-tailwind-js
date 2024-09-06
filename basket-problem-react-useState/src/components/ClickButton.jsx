import React from 'react'

const ClickButton = ({imgUrl, symbol, sym, clickHandler}) => {
  return (
    <>
        <button className={symbol} onClick={clickHandler}>
            <img src={imgUrl} alt={sym} />
        </button>
    </>
  )
}

export default ClickButton