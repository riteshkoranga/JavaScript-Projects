//variable

let openBtn = document.getElementById('open');
let modalContainer = document.querySelector('.modal-container');
let closeBtn = document.querySelector('.close');

openBtn.addEventListener("click", function () {
    modalContainer.style.display = "block";


})

closeBtn.addEventListener("click", () => {
    modalContainer.style.display = "none";
})

window.addEventListener('click', function (e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }

})


