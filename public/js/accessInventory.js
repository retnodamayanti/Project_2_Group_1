
let count = 0;
// Minus Button
document.querySelector('.minus').onclick = function () {

    count -= 1;
    document.getElementById('totalClicks').innerHTML = count;
    console.log(count)
    //Avoid Negatives
    if (count <= 0) {
        totalClicks.innerText = 0;
        count = 0
    }
}
// Add Button
document.querySelector('.add').onclick = function () {
    count += 1;
    document.getElementById('totalClicks').innerHTML = count;

    console.log(count)
}

// Reset Button
document.getElementById('reset').onclick = function () {
    count = 0;
    document.getElementById('totalClicks').innerHTML = count;
}

const deleteBtn = document.getElementById('deleteBtn')
const addStockBtn = document.getElementById('addStockBtn')
const reduceStockBtn = document.getElementById('reduceStockBtn')
const reset = document.getElementById('reset')

const addStock = async (event) => {
    var stockId = event.target.dataset.value

    const response = await fetch(`/api/inventory/${stockId}`, {
        method: 'POST',
        body: JSON.stringify({ increment: count }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        document.location.reload()
    }
}

const reduceStock = async (event) => {
    console.log(count)

    var stockId = event.target.dataset.value

    const response = await fetch(`/api/inventory/${stockId}`, {
        method: 'POST',
        body: JSON.stringify({ decrement: count }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        document.location.reload()
    }
}

reduceStockBtn.addEventListener('click', reduceStock)

addStockBtn.addEventListener('click', addStock)





const deleteProduct = async () => {
    const productId = deleteBtn.dataset.value
    console.log(productId)

    const response = await fetch(`/api/inventory/${productId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
    console.log(response)
    if (response.ok) {
        document.location.replace('/');
    }
}
deleteBtn.addEventListener('click', deleteProduct)


const animate = () => {
    anime({
        targets: '#deleteBtn',

        scale: 1.5,

    })
}

const animateOff = () => {
    anime({
        targets: '#deleteBtn',
        scale: 1

    })
}

deleteBtn.addEventListener('mouseover', animate)

deleteBtn.addEventListener('mouseleave', animateOff)

const animateAddBtn = () => {
    anime({
        targets: '#addStockBtn',

        scale: 1.25,

    })
}

const animateOffAddBtn = () => {
    anime({
        targets: '#addStockBtn',
        scale: 1

    })
}

addStockBtn.addEventListener('mouseover', animateAddBtn)

addStockBtn.addEventListener('mouseleave', animateOffAddBtn)


const animateReduceBtn = () => {
    anime({
        targets: '#reduceStockBtn',

        scale: 1.25,

    })
}

const animateOffReduceBtn = () => {
    anime({
        targets: '#reduceStockBtn',
        scale: 1

    })
}

reduceStockBtn.addEventListener('mouseover', animateReduceBtn)

reduceStockBtn.addEventListener('mouseleave', animateOffReduceBtn)


const animateResetBtn = () => {
    anime({
        targets: '#reset',

        scale: 1.25,

    })
}

const animateOffResetBtn = () => {
    anime({
        targets: '#reset',
        scale: 1

    })
}

reset.addEventListener('mouseover', animateResetBtn)

reset.addEventListener('mouseleave', animateOffResetBtn)

