const ancient = document.querySelectorAll(".ancient");
const levelBlock = document.querySelector(".level")
const level = document.querySelectorAll(".levels");
const shuffle = document.querySelector(".shuffle")
const stageContainer = document.querySelector(".container-game")
let greenDots = document.querySelectorAll(".green-dots")
let brownDots = document.querySelectorAll(".brown-dots")
let blueDots = document.querySelectorAll(".blue-dots")
const backCard = document.querySelector(".cardBack")





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

let maxGreenAzathoth = ancientAzathoth.firstState.green + ancientAzathoth.secondState.green + ancientAzathoth.thirdState.green
let maxBrownAzathoth = ancientAzathoth.firstState.brown + ancientAzathoth.secondState.brown + ancientAzathoth.thirdState.brown
let maxBlueAzathoth = ancientAzathoth.firstState.blue + ancientAzathoth.secondState.blue + ancientAzathoth.thirdState.blue

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

let maxGreenCthulthu = ancientCthulthu.firstState.green + ancientCthulthu.secondState.green + ancientCthulthu.thirdState.green
let maxBrownCthulthu = ancientCthulthu.firstState.brown + ancientCthulthu.secondState.brown + ancientCthulthu.thirdState.brown
let maxBlueCthulthu = ancientCthulthu.firstState.blue + ancientCthulthu.secondState.blue + ancientCthulthu.thirdState.blue

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

let maxGreenIogSothoth = ancientIogSothoth.firstState.green + ancientIogSothoth.secondState.green + ancientIogSothoth.thirdState.green
let maxBrownIogSothoth = ancientIogSothoth.firstState.brown + ancientIogSothoth.secondState.brown + ancientIogSothoth.thirdState.brown
let maxBlueIogSothoth = ancientIogSothoth.firstState.blue + ancientIogSothoth.secondState.blue + ancientIogSothoth.thirdState.blue

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

let maxGreenShubNiggurath = ancientShubNiggurath.firstState.green + ancientShubNiggurath.secondState.green + ancientShubNiggurath.thirdState.green
let maxBrownShubNiggurath = ancientShubNiggurath.firstState.brown + ancientShubNiggurath.secondState.brown + ancientShubNiggurath.thirdState.brown
let maxBlueShubNiggurath = ancientShubNiggurath.firstState.blue + ancientShubNiggurath.secondState.blue + ancientShubNiggurath.thirdState.blue

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


backCard.addEventListener("click", randomCard)


function randomCard() {
    fullCards.sort(() => Math.random() - 1);
    let randomCard = fullCards[Math.floor(Math.random() * greenCards.length)];
    console.log(randomCard)
}
