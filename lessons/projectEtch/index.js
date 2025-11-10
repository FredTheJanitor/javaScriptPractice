const container = document.querySelector('#container');
function createSquares(dimensions) {
    for (i=0;i<dimensions*dimensions;i++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('newSquare');
        // newSquare.textContent = `number: ${i}`
        const newSquareSize = (.5*(50/dimensions)-.1);
        console.log(newSquareSize);
        newSquare.style.padding = `${newSquareSize}vw`
        container.appendChild(newSquare);  
    }
}
createSquares(16);