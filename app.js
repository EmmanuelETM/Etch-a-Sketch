let pog = document.createElement('div');
pog.textContent = 'verypoggers';


for(let i = 0; i < 1003; i++){
    let div = document.createElement('div');
    sketchpad.appendChild(div);
}

sketchpad.addEventListener('mouseover', (Event) => {
    console.log(Event.target);
    Event.target.style.backgroundColor = 'gray';
});

restartButton.addEventListener('click', (Event) => {
    let cells = document.querySelectorAll('.sketchpad div');
    cells.forEach(element => {
        element.style.backgroundColor = 'white';
    })
})
