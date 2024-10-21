
// Color checkbox functions
const getColor = () => {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
}

const handleDrawing = (Event) => {
    if (colorInput.checked) {
        Event.target.style.backgroundColor = getColor();
    } else {
        Event.target.style.backgroundColor = 'gray';
    }
}

const sketchSize = (size) => {
    sketchpad.innerHTML = '';
    for(let i = 0; i < size ** 2; i++){
        let div = document.createElement('div');
        sketchpad.appendChild(div);
    }
}

console.log(colorInput.checked);

sketchpad.addEventListener('mouseover', (Event) => {
    handleDrawing(Event);
});


restartButton.addEventListener('click', (Event) => {
    let cells = document.querySelectorAll('.sketchpad div');
    cells.forEach(element => {
        element.style.backgroundColor = 'white';
    })
})

sketchSize(16);
