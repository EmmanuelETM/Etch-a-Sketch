for(let i = 0; i < 1003; i++){
    let div = document.createElement('div');
    sketchpadDiv.appendChild(div);
}

sketchpadDiv.addEventListener('mouseover', (Event) => {
    console.log(Event.target);
    Event.target.style.backgroundColor = 'gray';
});

restartButton.addEventListener('click', (Event) => {
    const cells = document.querySelectorAll('.sketchpad div');
    cells.forEach(element => {
        element.style.backgroundColor = 'white';
    })
})
