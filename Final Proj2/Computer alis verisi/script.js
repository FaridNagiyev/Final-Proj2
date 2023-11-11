const users = JSON.parse(localStorage.getItem('users'))

const computerContainer = document.querySelector('.computer-container')
const categories = document.querySelectorAll('.radio')
const searchInput = document.querySelector('.search-input')

var modal = document.getElementById("myModal");
var btn = document.querySelectorAll('button');
var span = document.getElementsByClassName("close")[0];
const modalImg = document.querySelector('.m-img')
const allModalP = document.querySelectorAll('.information .information-text p')

btn.forEach(item => {
    item.addEventListener('click', (e) => {
        modal.style.display = "block";
        const imgSource = e.target.closest("div").children[0].children[0].src
        modalImg.src = imgSource
        users.forEach(user => {
            user.computers.forEach((computer, key) => {
                if(e.target.id.includes(user.userName) && e.target.id.includes(computer.id)){
                    for(let modalP of allModalP){
                        modalP.innerText = ''
                    }
                    allModalP[0].innerText += computer.computerName
                    allModalP[1].innerHTML += computer.description
                    allModalP[2].innerHTML += computer.price + ' azn'
                    allModalP[3].innerHTML += user.phone
                    allModalP[4].innerHTML += computer.used
                    allModalP[5].innerHTML += computer.ram + ' GB'
                    allModalP[6].innerHTML += computer.processor
                    allModalP[7].innerHTML += computer.rom + ' GB'
                    allModalP[8].innerHTML += computer.os
                    allModalP[9].innerHTML += computer.gpu + ' GB'
                }
            })
        })
    })
})

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
