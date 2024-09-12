function doHeavyCalculation(x) {

    // calculates time in millisec from 1970 till today
    const startTime = Date.now()
    let currentTime = startTime

    //pause the actual task until while loop completes
    while(startTime + 500 > currentTime) {
        currentTime = Date.now()
        console.log('Calculating...', (currentTime - startTime));
    }

    // actual task -  finding the square root - print result
    const result = + Math.sqrt(x).toFixed(3)
    return result
}

//Memoized function what does it do?
//save the answer in the callstack and doesn't run the calculation again if the function is executed once

function getYourMemoizedFunction() {
    const cache = {};

    function doCalc(x) {
        if(cache[x]) return cache[x]
        const starTime = Date.now();
        let currTime = starTime;

        while(starTime + 500 > currTime) {
            currTime = Date.now()
            console.log('Calculating...', (currTime - starTime));
        }

        const res = + Math.sqrt(x).toFixed(3)
        cache[x] = res
        return res
    }
    return doCalc
} 

const meme = getYourMemoizedFunction()
