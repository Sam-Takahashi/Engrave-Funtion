// function myFunction() {
//     var x = document.getElementById("myTextarea").value;
//     document.getElementById("innerText").innerHTML = x;
// }

var vm = new Vue({
    el: '#app',
    data: {
        message: '',
    }
})

const current = document.querySelector('#current');
const allImgs = document.querySelectorAll('.imgs img');

allImgs.forEach(img =>
    img.addEventListener('click', e => current.src = e.target.src));


