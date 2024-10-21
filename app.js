// Calculating the Sketchpad Size

const cellSize = (size) => {
    let cellArr = document.querySelectorAll('.cell');
    cellArr.forEach(cell => {
        cell.style.width = `${550/size}` + 'px';
        cell.style.height = `${550/size}` + 'px';
    })
}

const gridSize = (size) => {
    for (let i = 0; i < size ** 2; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        sketchpad.appendChild(cell);
    }

    cellSize(size);
}


gridSize(16);


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

// Hover and Click listeners and functions

const handleAddListeners = (action) => {
    sketchpad.addEventListener(action, handleDrawing);
}

const handleRemoveListeners = (action) => {
    sketchpad.removeEventListener(action, handleDrawing);
}

const handleHoverClick = (action) => {
    if(action === 'click'){
        handleRemoveListeners('mouseover');
        handleAddListeners('click');
    } else if (action === 'hover') {
        handleRemoveListeners('click');
        handleAddListeners('mouseover');
    }
}

const updateListeners = () => {
    if(hoverInput.checked) {
        handleHoverClick('hover');
    }else {
        handleHoverClick('click');
    }
}

hoverInput.addEventListener('change', updateListeners);

// Restart button listeners

restartButton.addEventListener('click', (Event) => {
    let cells = document.querySelectorAll('.sketchpad div');
    cells.forEach(element => {
        element.style.backgroundColor = 'white';
    })
    sketchpad.style.backgroundColor = 'white';
})

updateListeners();