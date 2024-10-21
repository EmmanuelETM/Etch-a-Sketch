
// Calculating the Sketchpad Size
const sketchSize = (size) => {
    sketchpad.innerHTML = '';
    for(let i = 0; i < size ** 2; i++){
        let div = document.createElement('div');
        sketchpad.appendChild(div);
    }
}


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
    console.log(`add ${action}`)
    sketchpad.addEventListener(action, handleDrawing);
}

const handleRemoveListeners = (action) => {
    console.log(`remove ${action}`)
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

updateListeners();
hoverInput.addEventListener('change', updateListeners);



restartButton.addEventListener('click', (Event) => {
    let cells = document.querySelectorAll('.sketchpad div');
    cells.forEach(element => {
        element.style.backgroundColor = 'white';
    })
})

sketchSize(16);
