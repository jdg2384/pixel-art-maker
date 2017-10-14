document.addEventListener('DOMContentLoaded', function () {
    
    var containerOne = document.getElementsByClassName('containerOne')[0];
    
    // start colorPicker Loop
    var colors = ['green', 'blue', 'yellow', 'orange', 'purple', 'red'];
   
    var colorPick = document.getElementsByClassName('colorPick')[0];
    for(var j in colors){
        var div = document.createElement('div');
        colorPick.appendChild(div);
        div.style.backgroundColor = colors[j];
        div.style.width = '60px';
        div.style.height = '60px';
        div.style.borderRadius = '50%';
        div.style.borderStyle ='solid';
        div.style.borderColor='#fff';
        div.style.float = 'left';
        div.style.marginLeft ='20px';
    }    
    // End Color Picker loop

    // Pixel div's
    for(var i = 0; i < 5200; i++){
        var div = document.createElement('div');
        containerOne.appendChild(div);
        div.style.backgroundColor = 'black';
        div.style.width = '1%';
        div.style.height = '1%';
        div.style.paddingBottom = '1%';
        div.style.float = 'left';
    }
    // End Pixel div's
    
    var mouseDown = false;
    c = 'red'; //Default Color
    
    colorPick.addEventListener("mousedown", function (event) {
        c = event.path[0]['style']['backgroundColor'];
    });
    containerOne.addEventListener("mousedown", function (event) {
        mouseDown = true;
    });
    containerOne.addEventListener("mouseover", function (event) {
        if(mouseDown === true){
            event.target.style.backgroundColor = c;
        }
    });
    containerOne.addEventListener("mouseup", function (event) {
        mouseDown = false;
    });
})




