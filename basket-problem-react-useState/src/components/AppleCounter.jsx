import React, { useState } from 'react'
import AppleBasket from './AppleBasket'
import ClickButton from './ClickButton'
import leftArrow from '../assets/icons8-left-arrow-50.png'
import rightArrow from '../assets/icons8-right-arrow-50.png'

const AppleCounter = () => {

    const totalApplesCount = 10;
    const [rightAppleCount, setRightAppleCount] = useState(0);
    const [leftAppleCount, setLeftAppleCount] = useState(totalApplesCount - rightAppleCount);

    const leftClickHandler = () => {
        if (rightAppleCount > 0) {
            setRightAppleCount(rightAppleCount - 1);
            setLeftAppleCount(leftAppleCount + 1);
          }
    }

    const rightClickHandler = () => {
        if (leftAppleCount > 0) {
            setRightAppleCount(rightAppleCount + 1);
            setLeftAppleCount(leftAppleCount -1);
          }
    }
    return (
        <>
        <div className='root'>
            <AppleBasket appleCount={leftAppleCount} basket="basket1" />
            <ClickButton imgUrl={leftArrow} symbol="left-arrow" sym="left" clickHandler={leftClickHandler}/>
            <ClickButton imgUrl={rightArrow} symbol="right-arrow" sym="right" clickHandler={rightClickHandler}/>
            <AppleBasket appleCount={rightAppleCount} basket="basket2" />
        </div>
        </>
    )
}

export default AppleCounter