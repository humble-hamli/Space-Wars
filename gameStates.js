// General Game Variables
let gameState = 0
let gameStartTime = 0
let gameDuration = 60
let timeElapsed = 0
let hasGameStarted = false

// Style Variables
let fontSize = 40
let fontColor = [255, 0, 255]
let bgColor = [20, 20, 20]
let bgColor2 = [10, 0, 10]

// Preload
function preload() {
    superScript = loadFont('assets/SUPERSCR.TTF');
}


// Create Canvas
function setup() {
    angleMode(DEGREES)
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    if (gameState == 0) {
        // Start Game
        startGame()
    } else if (gameState == 1) {
        // Player Game
        playGame()
    } else if (gameState == 2) {
        // Game Over
        endGame()
    } 
    drawTime()
}

// START GAME
function startGame() {
    background(bgColor)
    textFont(superScript)
    fill(fontColor)
    textAlign(CENTER)
    textSize(fontSize)
    text("START GAME", width/2, height/2)
}

// PLAY GAME
function playGame() {
    background(bgColor2)
    textFont(superScript)
    fill(fontColor)
    textAlign(CENTER)
    textSize(fontSize)
    // text("PLAY GAME", width/2, height/2)

    // Call game logic
    playSpacewars()
}

// GAME OVER
function endGame() {
    background(bgColor)
    textFont(superScript)
    fill(fontColor)
    textAlign(CENTER)
    textSize(fontSize)
    text("GAME OVER", width/2, height/2)

}

// TIME CALCULATION
function drawTime() {
    // Save Time Passed
    timeElapsed = millis()/1000

    // Draw Time if game has started
    if(hasGameStarted) {
        let gameTimeElapsed = round(gameDuration - (timeElapsed - gameStartTime))
        text("TIME LEFT: " + gameTimeElapsed, width/2, height - (fontSize - 10))
    }   

    // End game if gamtime has passed
    if(timeElapsed - gameStartTime >= gameDuration) {
        console.log("GAME OVER")
        gameStartTime = NaN
        hasGameStarted = false
        gameState = 2
    }
}

function mousePressed() {
    if(gameState == 0) {
        hasGameStarted = true
        gameState = 1
        console.log(gameState)
        console.log(hasGameStarted)
        gameStartTime = millis()/1000
    }
}