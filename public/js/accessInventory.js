
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

const addBtn = document.getElementById('addStock')
const reduceBtn = document.getElementById('reduceStock')

const addStock = async (event) => {
   var stockId = event.target.dataset.value

    const response = await fetch(`/api/inventory/${stockId}`, {
        method: 'POST',
        body: JSON.stringify({ increment: count }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok){
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
    if (response.ok){
        document.location.reload()
    }
}

reduceBtn.addEventListener('click', reduceStock)

addBtn.addEventListener('click', addStock)

const deleteBtn = document.getElementById('deleteBtn')

const deleteProduct = async () => {
    const productId = deleteBtn.dataset.value
    console.log(productId)

    const response = await fetch(`/api/inventory/${productId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
    console.log(response)
    if (response.ok){
        document.location.replace('/');
    }
}
deleteBtn.addEventListener('click', deleteProduct)
