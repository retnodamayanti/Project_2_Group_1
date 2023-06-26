
let count = 0;
// Minus Button
document.querySelector('.minus').onclick = function(){

count -=1;
document.getElementById('totalClicks').innerHTML = count;

//Avoid Negatives

if (count < 0) {
    totalClicks.innerText = 0;
    count = 0
}
}
// Add Button
document.querySelector('.add').onclick = function(){
    count +=1;
document.getElementById('totalClicks').innerHTML = count;
}

// Reset Button
document.getElementById('reset').onclick = function(){
    count =0;
document.getElementById('totalClicks').innerHTML = count;
}