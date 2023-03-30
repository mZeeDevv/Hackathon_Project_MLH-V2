let toShow = document.getElementById('toShow');
let toHide = document.getElementById('toHide');
let getLinks = document.getElementById('links');
// getLinks.classList.add("trans")

toShow.addEventListener("click", () => {
    getLinks.style.margin = "0px"
   toHide.style.display = "block"
   toShow.style.display = "none"
})

toHide.addEventListener("click", () => {
    getLinks.style.margin = "-300px"
   toHide.style.display = "none"
   toShow.style.display = "block"
})