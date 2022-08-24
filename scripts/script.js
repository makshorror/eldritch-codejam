const ancient = document.querySelectorAll(".ancient");
const levelBlock = document.querySelector(".level")
const level = document.querySelectorAll(".levels");
const shuffle = document.querySelector(".shuffle")
const stageContainer = document.querySelector(".container-game")
let greenDots = document.querySelectorAll(".green-dots")
let brownDots = document.querySelectorAll(".brown-dots")
let blueDots = document.querySelectorAll(".blue-dots")
let cards = document.querySelector(".cards")





//Ancient Properties///////////////////////////////////
let ancientAzathoth = {
    firstState: {
        green: 1,
        brown: 2,
        blue: 1
    },
    secondState: {
        green: 2,
        brown: 3,
        blue: 1
    },
    thirdState: {
        green: 2,
        brown: 4,
        blue: 0
    }
}

let ancientCthulthu = {
    firstState: {
        green: 0,
        brown: 2,
        blue: 2
    },
    secondState: {
        green: 1,
        brown: 3,
        blue: 0
    },
    thirdState: {
        green: 3,
        brown: 4,
        blue: 0
    }
}

let ancientIogSothoth = {
    firstState: {
        green: 0,
        brown: 2,
        blue: 1
    },
    secondState: {
        green: 2,
        brown: 3,
        blue: 1
    },
    thirdState: {
        green: 3,
        brown: 4,
        blue: 0
    }
}

let ancientShubNiggurath = {
    firstState: {
        green: 1,
        brown: 2,
        blue: 1
    },
    secondState: {
        green: 3,
        brown: 2,
        blue: 1
    },
    thirdState: {
        green: 2,
        brown: 4,
        blue: 0
    }
}

let properties = {
    ancient: 0,
    level: 0
}
//////////////////////////////////////////////////////



//Change//////////////////////////////////////////////
ancient.forEach(function (img) {
    img.addEventListener("click", function (){
        properties.ancient = this.id.replace(/id/ig, '') - 1;
        levelBlock.style.visibility = "visible"
        levelBlock.style.opacity = "100%"
        stageContainer.style.visibility = "hidden"
        stageContainer.style.opacity = "0"
    })
})
level.forEach(function (li) {
    li.addEventListener("click", function (){
        properties.level = this.id.replace(/level/ig, '') - 1;
        levelBlock.style.visibility = "hidden"
        levelBlock.style.opacity = "0"
        shuffle.style.visibility = "visible"
        shuffle.style.opacity = "100%"
    })
})
//////////////////////////////////////////////////////





//Shuffle Card////////////////////////////////////////
shuffle.addEventListener("click", shuffleCard)
function shuffleCard(){
    shuffle.style.visibility = "hidden"
    shuffle.style.opacity = "0"
    stageContainer.style.visibility = "visible"
    stageContainer.style.opacity = "100%"
    if (properties.ancient === 0) {
        greenDots[0].innerHTML = ancientAzathoth.firstState.green
        brownDots[0].innerHTML = ancientAzathoth.firstState.brown
        blueDots[0].innerHTML = ancientAzathoth.firstState.blue

        greenDots[1].innerHTML = ancientAzathoth.secondState.green
        brownDots[1].innerHTML = ancientAzathoth.secondState.brown
        blueDots[1].innerHTML = ancientAzathoth.secondState.blue

        greenDots[2].innerHTML = ancientAzathoth.thirdState.green
        brownDots[2].innerHTML = ancientAzathoth.thirdState.brown
        blueDots[2].innerHTML = ancientAzathoth.thirdState.blue
    } else if (properties.ancient === 1){
        greenDots[0].innerHTML = ancientCthulthu.firstState.green
        brownDots[0].innerHTML = ancientCthulthu.firstState.brown
        blueDots[0].innerHTML = ancientCthulthu.firstState.blue

        greenDots[1].innerHTML = ancientCthulthu.secondState.green
        brownDots[1].innerHTML = ancientCthulthu.secondState.brown
        blueDots[1].innerHTML = ancientCthulthu.secondState.blue

        greenDots[2].innerHTML = ancientCthulthu.thirdState.green
        brownDots[2].innerHTML = ancientCthulthu.thirdState.brown
        blueDots[2].innerHTML = ancientCthulthu.thirdState.blue
    } else if (properties.ancient === 2) {
        greenDots[0].innerHTML = ancientIogSothoth.firstState.green
        brownDots[0].innerHTML = ancientIogSothoth.firstState.brown
        blueDots[0].innerHTML = ancientIogSothoth.firstState.blue

        greenDots[1].innerHTML = ancientIogSothoth.secondState.green
        brownDots[1].innerHTML = ancientIogSothoth.secondState.brown
        blueDots[1].innerHTML = ancientIogSothoth.secondState.blue

        greenDots[2].innerHTML = ancientIogSothoth.thirdState.green
        brownDots[2].innerHTML = ancientIogSothoth.thirdState.brown
        blueDots[2].innerHTML = ancientIogSothoth.thirdState.blue
    } else {
        greenDots[0].innerHTML = ancientShubNiggurath.firstState.green
        brownDots[0].innerHTML = ancientShubNiggurath.firstState.brown
        blueDots[0].innerHTML = ancientShubNiggurath.firstState.blue

        greenDots[1].innerHTML = ancientShubNiggurath.secondState.green
        brownDots[1].innerHTML = ancientShubNiggurath.secondState.brown
        blueDots[1].innerHTML = ancientShubNiggurath.secondState.blue

        greenDots[2].innerHTML = ancientShubNiggurath.thirdState.green
        brownDots[2].innerHTML = ancientShubNiggurath.thirdState.brown
        blueDots[2].innerHTML = ancientShubNiggurath.thirdState.blue
    }
}
//////////////////////////////////////////////////////