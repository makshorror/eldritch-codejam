const ancient = document.querySelectorAll(".ancient");
const levelBlock = document.querySelector(".level")
const level = document.querySelectorAll(".levels");
const shuffle = document.querySelector(".shuffle")
const stageContainer = document.querySelector(".current-state")
const cardBack = document.querySelector(".cardBack")
let properties = {
    ancient: 0,
    level: 0
}


ancient.forEach(function (img) {
    img.addEventListener("click", function (){
        let idAncient = this.id.replace(/id/ig, '') - 1;
        properties.ancient = idAncient;
        levelBlock.style.visibility = "visible"
        levelBlock.style.opacity = "100%"
    })
})



level.forEach(function (li) {
    li.addEventListener("click", function (){
        let idLevel = this.id.replace(/level/ig, '') - 1;
        properties.level = idLevel;
        levelBlock.style.visibility = "hidden"
        levelBlock.style.opacity = "0"
        shuffle.style.visibility = "visible"
        shuffle.style.opacity = "100%"
    })
})

shuffle.addEventListener("click", () => {
    shuffle.style.visibility = "hidden"
    shuffle.style.opacity = "0"
    stageContainer.style.visibility = "visible"
    stageContainer.style.opacity = "100%"
    cardBack.style.visibility = "visible"
    cardBack.style.opacity = "100%"

})