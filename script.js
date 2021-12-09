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