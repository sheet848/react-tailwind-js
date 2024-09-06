import React from 'react'
import AppleBasket from './AppleBasket'
import ClickButton from './ClickButton'
import leftArrow from '../assets/icons8-left-arrow-50.png'
import rightArrow from '../assets/icons8-right-arrow-50.png'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

const totalApplesCount = 10;

let rightAppleCount = 0;
let leftAppleCount = totalApplesCount - rightAppleCount;

const AppleCounter = () => {

    const leftClickHandler = () => {
        if (rightAppleCount > 0) {
            rightAppleCount--
            leftAppleCount++
            root.render(<AppleCounter />)
          }
    }

    const rightClickHandler = () => {
        if (leftAppleCount > 0) {
            leftAppleCount--
            rightAppleCount++
            root.render(<AppleCounter />)
          }
    }
    return (
        <>
            <AppleBasket appleCount={leftAppleCount} basket="basket1" />
            <ClickButton imgUrl={leftArrow} symbol="left-arrow" sym="left" clickHandler={leftClickHandler}/>
            <ClickButton imgUrl={rightArrow} symbol="right-arrow" sym="right" clickHandler={rightClickHandler}/>
            <AppleBasket appleCount={rightAppleCount} basket="basket2" />
        </>
    )
}

export default AppleCounter