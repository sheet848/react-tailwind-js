const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const changeBy = document.getElementById('changeBy');
const reset = document.getElementById('reset');
const value = document.querySelector('.value');

increment.addEventListener('click', () => {
        value.textContent = +value.textContent + changeBy.valueAsNumber;
});

decrement.addEventListener('click', () => {
        value.textContent = value.textContent - changeBy.valueAsNumber;
});

reset.addEventListener('click', ()=> {
    value.textContent = 0;
});
