// render instantly - to add a delay to reduce API requests
let inputElement = document.querySelector('input')

/*const handleInput = (e) => {
    console.log(e.target.value)
}*/

const debounce = (func, wait) => {
    let timerId
    return (...args) => {
        clearTimeout(timerId)
        timerId = setTimeout(() => func(...args), wait)
    }
}

const callApi = (e) => {
    console.log('Calling API', e.target.value)
}

const debouncedCallApi = debounce(callApi, 1000)
//console.log(debouncedCallApi)

inputElement.addEventListener('input', debouncedCallApi)
