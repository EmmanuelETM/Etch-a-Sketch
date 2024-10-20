const sketchSize = (size, sketchpad) => {
    sketchpad.innerHTML = '';
    for(let i = 0; i < size; i++){
        let div = document.createElement('div');
        sketchpad.appendChild(div);
    }
}

resizeButton.addEventListener('click', Event => {
    let rawSize = parseInt(prompt('Enter the size (from 1 to 100): ', 100));
    let size = rawSize * rawSize;
    sketchSize(size, sketchpad);
})

sketchpad.addEventListener('click', (Event) => {
    Event.target.style.backgroundColor = 'gray';
});

restartButton.addEventListener('click', (Event) => {
    let cells = document.querySelectorAll('.sketchpad div');
    cells.forEach(element => {
        element.style.backgroundColor = 'white';
    })
})
