// render instantly - to add a delay to reduce API requests
let inputElement = document.querySelector('input')
const span = document.querySelector('h2 span')

// capturing input data

const callApi = (value) => {
    console.log('Calling API', value)
}

const logInput = throttle(callApi, 800)

inputElement.addEventListener('input', (e) => {
    logInput(e.target.value)
})

// mouse over function
/*
document.addEventListener('mouseover', () => {
    updateNumber()
})

const updateNumber = throttle(() => {
    span.innerText = ++span.innerText;
}, 500)
*/
function throttle(func, delay = 1000) {
    let firstCall = true
    let timerId = null
    let lastArgs = []
    return (...args) => {
        lastArgs = args
        if(firstCall) {
            func(...lastArgs)
            firstCall = false
            return
        }
        if(timerId) return
        setTimeout(()=> {
            timerId = null
            func(...lastArgs)
        },delay)
    }
}
