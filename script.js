let colorPalette = document.getElementById('color-palette')
let changeBtn = document.getElementById('change-colors')
function generateColorsDiv() {
    colorPalette.innerHTML = ''
    for (let i=0;i<4;i+=1) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        newColor = document.createElement('div')
        colorPalette.appendChild(newColor)
        newColor.className = 'color'
        newColor.style.backgroundColor = `#${randomColor}`
        if (i === 0) {
            newColor.classList.add('selected')
            newColor.style.backgroundColor = 'black'
        }
    }
}
generateColorsDiv()
changeBtn.addEventListener('click', generateColorsDiv)

let superChangeBtn = document.getElementById('super-change')
function superChange() {
    setInterval(function() {
        generateColorsDiv()
        }, 500) 
}
superChangeBtn.addEventListener('click', superChange)

let generateBtn = document.getElementById('generate-board')
let pixelBoard = document.getElementById('pixel-board')
function theBoard(pixels) {
    let boardSize = pixels*40
    let boardPixels = pixels*pixels
    pixelBoard.innerHTML = ''
    pixelBoard.style.width = `${boardSize}px`
    pixelBoard.style.height = `${boardSize}px`
    for(let i=0; i<boardPixels; i+=1) {
        let singlePixel = document.createElement('div')
        pixelBoard.appendChild(singlePixel)
        singlePixel.className = 'pixel'
    }
    document.getElementById('board-size').value = ''
}
theBoard(5)

function receiveColor(e) {
    e.target.style.backgroundColor = targetColor
}
pixelBoard.addEventListener('click', receiveColor)