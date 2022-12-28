// Variables Declaration
let grid = document.querySelector('.grid');
let label = document.querySelector('.label');
let range = document.querySelector('#range');
let colour = document.querySelector('.color');
let color = 'white';
let outerDiv = [];
let buttons = document.querySelectorAll('#button');
 

function gridMaker(value){
    grid.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    grid.innerHTML = '';
    outerDiv = [];
    
    for(i = 0; i < (value * value); i++){
        let div = document.createElement('div');
        outerDiv.push(div);
    }

    outerDiv.forEach(function(div){
        div.addEventListener('click', function(e){
            div.style.background = color;
            console.log('me');
        })
        grid.appendChild(div);
    })
}
gridMaker(range.value);
    
//Event Listeners
range.addEventListener('input', function(e){
    label.textContent = `${range.value} * ${range.value}`;
    gridMaker(range.value);
})

colour.addEventListener('input', function(e){
    color = colour.value;
})

buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
        if(btn.classList == ('clear')){
            color = 'white';
        }
        else{
            outerDiv.forEach(function(div){
                div.style.background = 'white'
            })
        }
    })
})

