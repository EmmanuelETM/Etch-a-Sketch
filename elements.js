let container = document.querySelector('.container');
let optionsContainer = document.createElement('div');
let buttonContainer = document.createElement('div');
let resizeButton = document.createElement('button');
let restartButton = document.createElement('button');
let inputContainer = document.createElement('div')
let colorInput = document.createElement('input');
let colorLabel = document.createElement('label');
let hoverInput = document.createElement('input');
let hoverLabel = document.createElement('label');
let sketchpad = document.createElement("div");

colorInput.type = 'checkbox';
colorLabel.textContent = 'Color';
hoverInput.type = 'checkbox';
hoverLabel.textContent = 'hover';

inputContainer.classList.add('input-container');
inputContainer.appendChild(colorInput);
inputContainer.appendChild(colorLabel);
inputContainer.appendChild(hoverInput);
inputContainer.appendChild(hoverLabel);

resizeButton.textContent = 'Resize';
resizeButton.classList.add('resize');
restartButton.textContent = 'Restart';
restartButton.classList.add('restart');

buttonContainer.classList.add('button-container');
buttonContainer.appendChild(resizeButton);
buttonContainer.appendChild(restartButton);

optionsContainer.classList.add('options-container');
optionsContainer.appendChild(buttonContainer);
optionsContainer.appendChild(inputContainer);

sketchpad.classList.add("sketchpad");

container.appendChild(optionsContainer);
container.appendChild(sketchpad);