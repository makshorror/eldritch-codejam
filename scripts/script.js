const ancient = document.querySelectorAll(".ancient");
const levelBlock = document.querySelector(".level")
const level = document.querySelectorAll(".levels");
const shuffle = document.querySelector(".shuffle")
const stageContainer = document.querySelector(".container-game")
let greenDots = document.querySelectorAll(".green-dots")
let brownDots = document.querySelectorAll(".brown-dots")
let blueDots = document.querySelectorAll(".blue-dots")
const backCard = document.querySelector(".cardBack")
let text = document.querySelectorAll(".stage-text")
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

let maxFirstAzathoth = ancientAzathoth.firstState.green + ancientAzathoth.firstState.brown + ancientAzathoth.firstState.blue
let maxSecondAzathoth = ancientAzathoth.secondState.brown + ancientAzathoth.secondState.green + ancientAzathoth.secondState.blue
let maxThirdAzathoth = ancientAzathoth.thirdState.blue + ancientAzathoth.thirdState.green + ancientAzathoth.thirdState.brown


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

let maxFirstCthulthu = ancientCthulthu.firstState.green + ancientCthulthu.firstState.brown + ancientCthulthu.firstState.blue
let maxSecondCthulthu = ancientCthulthu.secondState.brown + ancientCthulthu.secondState.blue + ancientCthulthu.secondState.green
let maxThirdCthulthu = ancientCthulthu.thirdState.blue + ancientCthulthu.thirdState.brown + ancientCthulthu.thirdState.green

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

let maxFirstIogSothoth = ancientIogSothoth.firstState.green + ancientIogSothoth.firstState.brown + ancientIogSothoth.firstState.blue
let maxSecondIogSothoth = ancientIogSothoth.secondState.brown + ancientIogSothoth.secondState.blue + ancientIogSothoth.secondState.green
let maxThirdIogSothoth = ancientIogSothoth.thirdState.blue + ancientIogSothoth.thirdState.brown + ancientIogSothoth.thirdState.green

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

let maxFirstShubNiggurath = ancientShubNiggurath.firstState.green + ancientShubNiggurath.firstState.brown + ancientShubNiggurath.firstState.blue
let maxSecondShubNiggurath = ancientShubNiggurath.secondState.brown + ancientShubNiggurath.secondState.blue + ancientShubNiggurath.secondState.green
let maxThirdShubNiggurath = ancientShubNiggurath.thirdState.blue + ancientShubNiggurath.thirdState.brown + ancientShubNiggurath.thirdState.green

let properties = {
    ancient: 0,
    level: 0
}
//////////////////////////////////////////////////////



//Cards///////////////////////////////////////////////


let greenCards = [
    {
        id: 'green1',
        src: './assets/MythicCards/green/green1.png',
        difficulty: 'easy',
        color:'green'
    },
    {
        id: 'green2',
        src: './assets/MythicCards/green/green2.png',
        difficulty: 'hard',
        color:'green'
    },
    {
        id: 'green3',
        src: './assets/MythicCards/green/green3.png',
        difficulty: 'hard',
        color:'green'
    },
    {
        id: 'green4',
        src: './assets/MythicCards/green/green4.png',
        difficulty: 'hard',
        color:'green'
    },
    {
        id: 'green5',
        src: './assets/MythicCards/green/green5.png',
        difficulty: 'hard',
        color:'green'
    },
    {
        id: 'green6',
        src: './assets/MythicCards/green/green6.png',
        difficulty: 'hard',
        color:'green'
    },
    {
        id: 'green7',
        src: './assets/MythicCards/green/green7.png',
        difficulty: 'normal',
        color:'green'
    },
    {
        id: 'green8',
        src: './assets/MythicCards/green/green8.png',
        difficulty: 'normal',
        color:'green'
    },
    {
        id: 'green9',
        src: './assets/MythicCards/green/green9.png',
        difficulty: 'normal',
        color:'green'
    },
    {
        id: 'green10',
        src: './assets/MythicCards/green/green10.png',
        difficulty: 'normal',
        color:'green'
    },
    {
        id: 'green11',
        src: './assets/MythicCards/green/green11.png',
        difficulty: 'normal',
        color:'green'
    },
    {
        id: 'green12',
        src: './assets/MythicCards/green/green12.png',
        difficulty: 'easy',
        color:'green'
    },
    {
        id: 'green13',
        src: './assets/MythicCards/green/green13.png',
        difficulty: 'normal',
        color:'green'
    },
    {
        id: 'green14',
        src: './assets/MythicCards/green/green14.png',
        difficulty: 'normal',
        color:'green'
    },
    {
        id: 'green15',
        src: './assets/MythicCards/green/green15.png',
        difficulty: 'normal',
        color:'green'
    },
    {
        id: 'green16',
        src: './assets/MythicCards/green/green16.png',
        difficulty: 'easy',
        color:'green'
    },
    {
        id: 'green17',
        src: './assets/MythicCards/green/green17.png',
        difficulty: 'easy',
        color:'green'
    },
    {
        id: 'green18',
        src: './assets/MythicCards/green/green18.png',
        difficulty: 'easy',
        color:'green'
    },
]

let brownCards = [
    {
        id: 'brown1',
        src: './assets/MythicCards/brown/brown1.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown2',
        src: './assets/MythicCards/brown/brown2.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown3',
        src: './assets/MythicCards/brown/brown3.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown4',
        src: './assets/MythicCards/brown/brown4.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown5',
        src: './assets/MythicCards/brown/brown51.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown6',
        src: './assets/MythicCards/brown/brown6.png',
        difficulty: 'hard',
        color:'brown'
    },
    {
        id: 'brown7',
        src: './assets/MythicCards/brown/brown7.png',
        difficulty: 'hard',
        color:'brown'
    },
    {
        id: 'brown8',
        src: './assets/MythicCards/brown/brown8.png',
        difficulty: 'hard',
        color:'brown'
    },
    {
        id: 'brown9',
        src: './assets/MythicCards/brown/brown9.png',
        difficulty: 'hard',
        color:'brown'
    },
    {
        id: 'brown10',
        src: './assets/MythicCards/brown/brown10.png',
        difficulty: 'hard',
        color:'brown'
    },
    {
        id: 'brown11',
        src: './assets/MythicCards/brown/brown11.png',
        difficulty: 'easy',
        color:'brown'
    },
    {
        id: 'brown12',
        src: './assets/MythicCards/brown/brown12.png',
        difficulty: 'easy',
        color:'brown'
    },
    {
        id: 'brown13',
        src: './assets/MythicCards/brown/brown13.png',
        difficulty: 'easy',
        color:'brown'
    },
    {
        id: 'brown14',
        src: './assets/MythicCards/brown/brown14.png',
        difficulty: 'easy',
        color:'brown'
    },
    {
        id: 'brown15',
        src: './assets/MythicCards/brown/brown15.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown16',
        src: './assets/MythicCards/brown/brown16.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown17',
        src: './assets/MythicCards/brown/brown17.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown18',
        src: './assets/MythicCards/brown/brown18.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown19',
        src: './assets/MythicCards/brown/brown19.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown20',
        src: './assets/MythicCards/brown/brown20.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown21',
        src: './assets/MythicCards/brown/brown21.png',
        difficulty: 'easy',
        color:'brown'
    },
]

let blueCards = [
    {
        id: 'blue1',
        src: './assets/MythicCards/blue/blue1.png',
        difficulty: 'hard',
        color:'blue'
    },
    {
        id: 'blue2',
        src: './assets/MythicCards/blue/blue2.png',
        difficulty: 'hard',
        color:'blue'
    },
    {
        id: 'blue3',
        src: './assets/MythicCards/blue/blue3.png',
        difficulty: 'easy',
        color:'blue'
    },
    {
        id: 'blue4',
        src: './assets/MythicCards/blue/blue4.png',
        difficulty: 'easy',
        color:'blue'
    },
    {
        id: 'blue5',
        src: './assets/MythicCards/blue/blue5.png',
        difficulty: 'easy',
        color:'blue'
    },
    {
        id: 'blue6',
        src: './assets/MythicCards/blue/blue6.png',
        difficulty: 'hard',
        color:'blue'
    },
    {
        id: 'blue7',
        src: './assets/MythicCards/blue/blue7.png',
        difficulty: 'normal',
        color:'blue'
    },
    {
        id: 'blue8',
        src: './assets/MythicCards/blue/blue8.png',
        difficulty: 'hard',
        color:'blue'
    },
    {
        id: 'blue9',
        src: './assets/MythicCards/blue/blue9.png',
        difficulty: 'normal',
        color:'blue'
    },
    {
        id: 'blue10',
        src: './assets/MythicCards/blue/blue10.png',
        difficulty: 'easy',
        color:'blue'
    },
    {
        id: 'blue11',
        src: './assets/MythicCards/blue/blue11.png',
        difficulty: 'normal',
        color:'blue'
    },
    {
        id: 'blue12',
        src: './assets/MythicCards/blue/blue12.png',
        difficulty: 'normal',
        color:'blue'
    },
]

let fullCards = [
    {
        id: 'blue1',
        src: './assets/MythicCards/blue/blue1.png',
        difficulty: 'hard',
        color:'blue'
    },
    {
        id: 'blue2',
        src: './assets/MythicCards/blue/blue2.png',
        difficulty: 'hard',
        color:'blue'
    },
    {
        id: 'blue3',
        src: './assets/MythicCards/blue/blue3.png',
        difficulty: 'easy',
        color:'blue'
    },
    {
        id: 'blue4',
        src: './assets/MythicCards/blue/blue4.png',
        difficulty: 'easy',
        color:'blue'
    },
    {
        id: 'blue5',
        src: './assets/MythicCards/blue/blue5.png',
        difficulty: 'easy',
        color:'blue'
    },
    {
        id: 'blue6',
        src: './assets/MythicCards/blue/blue6.png',
        difficulty: 'hard',
        color:'blue'
    },
    {
        id: 'blue7',
        src: './assets/MythicCards/blue/blue7.png',
        difficulty: 'normal',
        color:'blue'
    },
    {
        id: 'blue8',
        src: './assets/MythicCards/blue/blue8.png',
        difficulty: 'hard',
        color:'blue'
    },
    {
        id: 'blue9',
        src: './assets/MythicCards/blue/blue9.png',
        difficulty: 'normal',
        color:'blue'
    },
    {
        id: 'blue10',
        src: './assets/MythicCards/blue/blue10.png',
        difficulty: 'easy',
        color:'blue'
    },
    {
        id: 'blue11',
        src: './assets/MythicCards/blue/blue11.png',
        difficulty: 'normal',
        color:'blue'
    },
    {
        id: 'blue12',
        src: './assets/MythicCards/blue/blue12.png',
        difficulty: 'normal',
        color:'blue'
    },
    {
        id: 'brown1',
        src: './assets/MythicCards/brown/brown1.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown2',
        src: './assets/MythicCards/brown/brown2.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown3',
        src: './assets/MythicCards/brown/brown3.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown4',
        src: './assets/MythicCards/brown/brown4.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown5',
        src: './assets/MythicCards/brown/brown51.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown6',
        src: './assets/MythicCards/brown/brown6.png',
        difficulty: 'hard',
        color:'brown'
    },
    {
        id: 'brown7',
        src: './assets/MythicCards/brown/brown7.png',
        difficulty: 'hard',
        color:'brown'
    },
    {
        id: 'brown8',
        src: './assets/MythicCards/brown/brown8.png',
        difficulty: 'hard',
        color:'brown'
    },
    {
        id: 'brown9',
        src: './assets/MythicCards/brown/brown9.png',
        difficulty: 'hard',
        color:'brown'
    },
    {
        id: 'brown10',
        src: './assets/MythicCards/brown/brown10.png',
        difficulty: 'hard',
        color:'brown'
    },
    {
        id: 'brown11',
        src: './assets/MythicCards/brown/brown11.png',
        difficulty: 'easy',
        color:'brown'
    },
    {
        id: 'brown12',
        src: './assets/MythicCards/brown/brown12.png',
        difficulty: 'easy',
        color:'brown'
    },
    {
        id: 'brown13',
        src: './assets/MythicCards/brown/brown13.png',
        difficulty: 'easy',
        color:'brown'
    },
    {
        id: 'brown14',
        src: './assets/MythicCards/brown/brown14.png',
        difficulty: 'easy',
        color:'brown'
    },
    {
        id: 'brown15',
        src: './assets/MythicCards/brown/brown15.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown16',
        src: './assets/MythicCards/brown/brown16.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown17',
        src: './assets/MythicCards/brown/brown17.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown18',
        src: './assets/MythicCards/brown/brown18.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown19',
        src: './assets/MythicCards/brown/brown19.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown20',
        src: './assets/MythicCards/brown/brown20.png',
        difficulty: 'normal',
        color:'brown'
    },
    {
        id: 'brown21',
        src: './assets/MythicCards/brown/brown21.png',
        difficulty: 'easy',
        color:'brown'
    },
    {
        id: 'green1',
        src: './assets/MythicCards/green/green1.png',
        difficulty: 'easy',
        color:'green'
    },
    {
        id: 'green2',
        src: './assets/MythicCards/green/green2.png',
        difficulty: 'hard',
        color:'green'
    },
    {
        id: 'green3',
        src: './assets/MythicCards/green/green3.png',
        difficulty: 'hard',
        color:'green'
    },
    {
        id: 'green4',
        src: './assets/MythicCards/green/green4.png',
        difficulty: 'hard',
        color:'green'
    },
    {
        id: 'green5',
        src: './assets/MythicCards/green/green5.png',
        difficulty: 'hard',
        color:'green'
    },
    {
        id: 'green6',
        src: './assets/MythicCards/green/green6.png',
        difficulty: 'hard',
        color:'green'
    },
    {
        id: 'green7',
        src: './assets/MythicCards/green/green7.png',
        difficulty: 'normal',
        color:'green'
    },
    {
        id: 'green8',
        src: './assets/MythicCards/green/green8.png',
        difficulty: 'normal',
        color:'green'
    },
    {
        id: 'green9',
        src: './assets/MythicCards/green/green9.png',
        difficulty: 'normal',
        color:'green'
    },
    {
        id: 'green10',
        src: './assets/MythicCards/green/green10.png',
        difficulty: 'normal',
        color:'green'
    },
    {
        id: 'green11',
        src: './assets/MythicCards/green/green11.png',
        difficulty: 'normal',
        color:'green'
    },
    {
        id: 'green12',
        src: './assets/MythicCards/green/green12.png',
        difficulty: 'easy',
        color:'green'
    },
    {
        id: 'green13',
        src: './assets/MythicCards/green/green13.png',
        difficulty: 'normal',
        color:'green'
    },
    {
        id: 'green14',
        src: './assets/MythicCards/green/green14.png',
        difficulty: 'normal',
        color:'green'
    },
    {
        id: 'green15',
        src: './assets/MythicCards/green/green15.png',
        difficulty: 'normal',
        color:'green'
    },
    {
        id: 'green16',
        src: './assets/MythicCards/green/green16.png',
        difficulty: 'easy',
        color:'green'
    },
    {
        id: 'green17',
        src: './assets/MythicCards/green/green17.png',
        difficulty: 'easy',
        color:'green'
    },
    {
        id: 'green18',
        src: './assets/MythicCards/green/green18.png',
        difficulty: 'easy',
        color:'green'
    },
]
//////////////////////////////////////////////////////


//Change//////////////////////////////////////////////
ancient.forEach(function (img) {
    img.addEventListener("click", function (){
        properties.ancient = this.id.replace(/id/ig, '') - 1;
        levelBlock.style.visibility = "visible"
        levelBlock.style.opacity = "100%"
        stageContainer.style.visibility = "hidden"
        stageContainer.style.opacity = "0"
        text[0].style.color = "#ad0101"
        text[1].style.color = "#ad0101"
        text[2].style.color = "#ad0101"
        cards.style.visibility = "hidden"

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
let parent = document.querySelector(".cards");
let openCard = document.createElement('IMG')


backCard.addEventListener("click", ()=>{
    if(properties.level === 2) {
        randomMediumCard()
    }
})


function randomMediumCard() {
    cards.style.visibility = "visible"
    fullCards.sort(() => Math.random() - 1);
    let randomCard = fullCards[Math.floor(Math.random() * fullCards.length)];
    if(properties.ancient === 0){
        if(maxFirstAzathoth > 0) {
            if (randomCard.color === 'blue') {
                if (ancientAzathoth.firstState.blue > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientAzathoth.firstState.blue -= 1
                    blueDots[0].innerHTML = ancientAzathoth.firstState.blue
                    maxFirstAzathoth -= 1
                }else{
                    randomMediumCard()
                }

            } else if (randomCard.color === 'green') {
                if (ancientAzathoth.firstState.green > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientAzathoth.firstState.green -= 1
                    greenDots[0].innerHTML = ancientAzathoth.firstState.green
                    maxFirstAzathoth -= 1
                }else{
                    randomMediumCard()
                }
            } else if (randomCard.color === 'brown') {
                if (ancientAzathoth.firstState.brown > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientAzathoth.firstState.brown -= 1
                    brownDots[0].innerHTML = ancientAzathoth.firstState.brown
                    maxFirstAzathoth -= 1
                }else{
                    randomMediumCard()
                }
            }
        }

        else if(maxSecondAzathoth > 0){

            if (randomCard.color === 'blue') {
                if (ancientAzathoth.secondState.blue > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientAzathoth.secondState.blue -= 1
                    blueDots[1].innerHTML = ancientAzathoth.secondState.blue
                    maxSecondAzathoth -= 1
                }else{
                    randomMediumCard()
                }

            } else if (randomCard.color === 'green') {
                if (ancientAzathoth.secondState.green > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientAzathoth.secondState.green -= 1
                    greenDots[1].innerHTML = ancientAzathoth.secondState.green
                    maxSecondAzathoth -= 1
                }else{
                    randomMediumCard()
                }
            } else if (randomCard.color === 'brown') {
                if (ancientAzathoth.secondState.brown > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientAzathoth.secondState.brown -= 1
                    brownDots[1].innerHTML = ancientAzathoth.secondState.brown
                    maxSecondAzathoth -= 1
                }else{
                    randomMediumCard()
                }
            }
        }

        else if(maxThirdAzathoth > 0){

            if (randomCard.color === 'blue') {
                if (ancientAzathoth.thirdState.blue > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientAzathoth.thirdState.blue -= 1
                    blueDots[2].innerHTML = ancientAzathoth.thirdState.blue
                    maxThirdAzathoth -= 1
                }else{
                    randomMediumCard()
                }

            } else if (randomCard.color === 'green') {
                if (ancientAzathoth.thirdState.green > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientAzathoth.thirdState.green -= 1
                    greenDots[2].innerHTML = ancientAzathoth.thirdState.green
                    maxThirdAzathoth -= 1
                }else{
                    randomMediumCard()
                }
            } else if (randomCard.color === 'brown') {
                if (ancientAzathoth.thirdState.brown > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientAzathoth.thirdState.brown -= 1
                    brownDots[2].innerHTML = ancientAzathoth.thirdState.brown
                    maxThirdAzathoth -= 1
                }else{
                    randomMediumCard()
                }
            }
        }

        if(maxFirstAzathoth === 0) {
            text[0].style.color ="black"
        }
        if(maxSecondAzathoth === 0) {
            text[1].style.color ="black"
        }
        if(maxThirdAzathoth === 0) {
            text[2].style.color ="black"
        }
    }


    else if(properties.ancient === 1){
        if(maxFirstCthulthu > 0) {
            if (randomCard.color === 'blue') {
                if (ancientCthulthu.firstState.blue > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientCthulthu.firstState.blue -= 1
                    blueDots[0].innerHTML = ancientCthulthu.firstState.blue
                    maxFirstCthulthu -= 1
                }else{
                    randomMediumCard()
                }

            } else if (randomCard.color === 'green') {
                if (ancientCthulthu.firstState.green > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientCthulthu.firstState.green -= 1
                    greenDots[0].innerHTML = ancientCthulthu.firstState.green
                    maxFirstCthulthu -= 1
                }else{
                    randomMediumCard()
                }
            } else if (randomCard.color === 'brown') {
                if (ancientCthulthu.firstState.brown > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientCthulthu.firstState.brown -= 1
                    brownDots[0].innerHTML = ancientCthulthu.firstState.brown
                    maxFirstCthulthu -= 1
                }else{
                    randomMediumCard()
                }
            }
        }

        else if(maxSecondCthulthu > 0){

            if (randomCard.color === 'blue') {
                if (ancientCthulthu.secondState.blue > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientCthulthu.secondState.blue -= 1
                    blueDots[1].innerHTML = ancientCthulthu.secondState.blue
                    maxSecondCthulthu -= 1
                }else{
                    randomMediumCard()
                }

            } else if (randomCard.color === 'green') {
                if (ancientCthulthu.secondState.green > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientCthulthu.secondState.green -= 1
                    greenDots[1].innerHTML = ancientCthulthu.secondState.green
                    maxSecondCthulthu -= 1
                }else{
                    randomMediumCard()
                }
            } else if (randomCard.color === 'brown') {
                if (ancientCthulthu.secondState.brown > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientCthulthu.secondState.brown -= 1
                    brownDots[1].innerHTML = ancientCthulthu.secondState.brown
                    maxSecondCthulthu -= 1
                }else{
                    randomMediumCard()
                }
            }
        }

        else if(maxThirdCthulthu > 0){

            if (randomCard.color === 'blue') {
                if (ancientCthulthu.thirdState.blue > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientCthulthu.thirdState.blue -= 1
                    blueDots[2].innerHTML = ancientCthulthu.thirdState.blue
                    maxThirdCthulthu -= 1
                }else{
                    randomMediumCard()
                }

            } else if (randomCard.color === 'green') {
                if (ancientCthulthu.thirdState.green > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientCthulthu.thirdState.green -= 1
                    greenDots[2].innerHTML = ancientCthulthu.thirdState.green
                    maxThirdCthulthu -= 1
                }else{
                    randomMediumCard()
                }
            } else if (randomCard.color === 'brown') {
                if (ancientCthulthu.thirdState.brown > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientCthulthu.thirdState.brown -= 1
                    brownDots[2].innerHTML = ancientCthulthu.thirdState.brown
                    maxThirdCthulthu -= 1
                }else{
                    randomMediumCard()
                }
            }
        }

        if(maxFirstCthulthu === 0) {
            text[0].style.color ="black"
        }
        if(maxSecondCthulthu === 0) {
            text[1].style.color ="black"
        }
        if(maxThirdCthulthu === 0) {
            text[2].style.color ="black"
        }
    }


    else if(properties.ancient === 2){
        if(maxFirstIogSothoth > 0) {
            if (randomCard.color === 'blue') {
                if (ancientIogSothoth.firstState.blue > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientIogSothoth.firstState.blue -= 1
                    blueDots[0].innerHTML = ancientIogSothoth.firstState.blue
                    maxFirstIogSothoth -= 1
                }else{
                    randomMediumCard()
                }

            } else if (randomCard.color === 'green') {
                if (ancientIogSothoth.firstState.green > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientIogSothoth.firstState.green -= 1
                    greenDots[0].innerHTML = ancientIogSothoth.firstState.green
                    maxFirstIogSothoth -= 1
                }else{
                    randomMediumCard()
                }
            } else if (randomCard.color === 'brown') {
                if (ancientIogSothoth.firstState.brown > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientIogSothoth.firstState.brown -= 1
                    brownDots[0].innerHTML = ancientIogSothoth.firstState.brown
                    maxFirstIogSothoth -= 1
                }else{
                    randomMediumCard()
                }
            }
        }

        else if(maxSecondIogSothoth > 0){

            if (randomCard.color === 'blue') {
                if (ancientIogSothoth.secondState.blue > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientIogSothoth.secondState.blue -= 1
                    blueDots[1].innerHTML = ancientIogSothoth.secondState.blue
                    maxSecondIogSothoth -= 1
                }else{
                    randomMediumCard()
                }

            } else if (randomCard.color === 'green') {
                if (ancientIogSothoth.secondState.green > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientIogSothoth.secondState.green -= 1
                    greenDots[1].innerHTML = ancientIogSothoth.secondState.green
                    maxSecondIogSothoth -= 1
                }else{
                    randomMediumCard()
                }
            } else if (randomCard.color === 'brown') {
                if (ancientIogSothoth.secondState.brown > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientIogSothoth.secondState.brown -= 1
                    brownDots[1].innerHTML = ancientIogSothoth.secondState.brown
                    maxSecondIogSothoth -= 1
                }else{
                    randomMediumCard()
                }
            }
        }

        else if(maxThirdIogSothoth > 0){

            if (randomCard.color === 'blue') {
                if (ancientIogSothoth.thirdState.blue > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientIogSothoth.thirdState.blue -= 1
                    blueDots[2].innerHTML = ancientIogSothoth.thirdState.blue
                    maxThirdIogSothoth -= 1
                }else{
                    randomMediumCard()
                }

            } else if (randomCard.color === 'green') {
                if (ancientIogSothoth.thirdState.green > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientIogSothoth.thirdState.green -= 1
                    greenDots[2].innerHTML = ancientIogSothoth.thirdState.green
                    maxThirdIogSothoth -= 1
                }else{
                    randomMediumCard()
                }
            } else if (randomCard.color === 'brown') {
                if (ancientIogSothoth.thirdState.brown > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientIogSothoth.thirdState.brown -= 1
                    brownDots[2].innerHTML = ancientIogSothoth.thirdState.brown
                    maxThirdIogSothoth -= 1
                }else{
                    randomMediumCard()
                }
            }
        }

        if(maxFirstIogSothoth === 0) {
            text[0].style.color ="black"
        }
        if(maxSecondIogSothoth === 0) {
            text[1].style.color ="black"
        }
        if(maxThirdIogSothoth === 0) {
            text[2].style.color ="black"
        }
    }


    else if(properties.ancient === 3){
        if(maxFirstShubNiggurath > 0) {
            if (randomCard.color === 'blue') {
                if (ancientShubNiggurath.firstState.blue > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientShubNiggurath.firstState.blue -= 1
                    blueDots[0].innerHTML = ancientShubNiggurath.firstState.blue
                    maxFirstShubNiggurath -= 1
                }else{
                    randomMediumCard()
                }

            } else if (randomCard.color === 'green') {
                if (ancientShubNiggurath.firstState.green > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientShubNiggurath.firstState.green -= 1
                    greenDots[0].innerHTML = ancientShubNiggurath.firstState.green
                    maxFirstShubNiggurath -= 1
                }else{
                    randomMediumCard()
                }
            } else if (randomCard.color === 'brown') {
                if (ancientShubNiggurath.firstState.brown > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientShubNiggurath.firstState.brown -= 1
                    brownDots[0].innerHTML = ancientShubNiggurath.firstState.brown
                    maxFirstShubNiggurath -= 1
                }else{
                    randomMediumCard()
                }
            }
        }

        else if(maxSecondShubNiggurath > 0){

            if (randomCard.color === 'blue') {
                if (ancientShubNiggurath.secondState.blue > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientShubNiggurath.secondState.blue -= 1
                    blueDots[1].innerHTML = ancientShubNiggurath.secondState.blue
                    maxSecondShubNiggurath -= 1
                }else{
                    randomMediumCard()
                }

            } else if (randomCard.color === 'green') {
                if (ancientShubNiggurath.secondState.green > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientShubNiggurath.secondState.green -= 1
                    greenDots[1].innerHTML = ancientShubNiggurath.secondState.green
                    maxSecondShubNiggurath -= 1
                }else{
                    randomMediumCard()
                }
            } else if (randomCard.color === 'brown') {
                if (ancientShubNiggurath.secondState.brown > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientShubNiggurath.secondState.brown -= 1
                    brownDots[1].innerHTML = ancientShubNiggurath.secondState.brown
                    maxSecondShubNiggurath -= 1
                }else{
                    randomMediumCard()
                }
            }
        }

        else if(maxThirdShubNiggurath > 0){

            if (randomCard.color === 'blue') {
                if (ancientShubNiggurath.thirdState.blue > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientShubNiggurath.thirdState.blue -= 1
                    blueDots[2].innerHTML = ancientShubNiggurath.thirdState.blue
                    maxThirdShubNiggurath -= 1
                }else{
                    randomMediumCard()
                }

            } else if (randomCard.color === 'green') {
                if (ancientShubNiggurath.thirdState.green > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientShubNiggurath.thirdState.green -= 1
                    greenDots[2].innerHTML = ancientShubNiggurath.thirdState.green
                    maxThirdShubNiggurath -= 1
                }else{
                    randomMediumCard()
                }
            } else if (randomCard.color === 'brown') {
                if (ancientShubNiggurath.thirdState.brown > 0) {
                    openCard.src = randomCard.src
                    parent.appendChild(openCard)
                    ancientShubNiggurath.thirdState.brown -= 1
                    brownDots[2].innerHTML = ancientShubNiggurath.thirdState.brown
                    maxThirdShubNiggurath -= 1
                }else{
                    randomMediumCard()
                }
            }
        }

        if(maxFirstShubNiggurath === 0) {
            text[0].style.color ="black"
        }
        if(maxSecondShubNiggurath === 0) {
            text[1].style.color ="black"
        }
        if(maxThirdShubNiggurath === 0) {
            text[2].style.color ="black"
        }
    }



}
