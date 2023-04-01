let toShow = document.getElementById('toShow');
let toHide = document.getElementById('toHide');
let getLinks = document.getElementById('links');
let section_one = document.getElementById('section_one')
var x = window.matchMedia("(max-width: 780px)")
if (x.matches) {
    getLinks.classList.add('mar')
    toShow.addEventListener("click", () => {
        getLinks.classList.add("trans")
        getLinks.classList.remove('mar')
        toHide.style.display = "block"
        toShow.style.display = "none"
    })
    toHide.addEventListener("click", () => {
        getLinks.classList.add('mar')
        toHide.style.display = "none"
        toShow.style.display = "block"
    })
    function None() {
        getLinks.classList.add('mar')
    }
}
let close = document.getElementById('close');
let dialogue = document.getElementById('success')
function turnoff(){
    dialogue.style.display = "none"
};




