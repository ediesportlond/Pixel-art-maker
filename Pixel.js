//defines where we will create the canvas
var gridBox = document.querySelector('#boxContainer');

// Defines the function that will be used to create canvas
function makeGrid(height, width) {
        gridBox.innerHTML = '';
        for (x = 0; x < height; x++) {
            let row = document.createElement('tr');
            for (i = 0; i < width; i++) {
                let newBox = document.createElement('td');
                newBox.setAttribute('class','box');
                /* 
                assigns the previously created class to each cell
                */
                row.appendChild(newBox);
        }; gridBox.appendChild(row);
    }; 
};

//Identifies where user will input height and width
var height = document.querySelector('#gridHeight');
var width = document.querySelector('#gridWidth');
var button = document.getElementById('submit');

/* Values the user inputs are recorded and passed to
makeGrid function*/
if (button){
    button.addEventListener('click', function (event) {
        event.preventDefault();
        let wvalue = width.value;
        let hvalue = height.value;
        makeGrid(hvalue, wvalue);
    });
};


var color = document.querySelector('#colorPick');

//takes user selected color and applies to background.
if (gridBox){
    gridBox.addEventListener('click', function (event){
        if (event.target.className == 'box') {
            event.target.style.backgroundColor = color.value;
        };
    });
};
