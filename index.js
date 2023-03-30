let toShow = document.getElementById('toShow');
let toHide = document.getElementById('toHide');
let getLinks = document.getElementById('links');

getLinks.classList.add("toHide");
toHide.classList.add("toNone")



toShow.addEventListener("click", () => {
    getLinks.classList.remove("toHide")
    toShow.classList.add("toNone")
    toHide.classList.remove("toNone")
})

toHide.addEventListener("click", () => {
    getLinks.classList.add("toHide")
    toShow.classList.remove("toNone")
    toHide.classList.add("toNone")
})