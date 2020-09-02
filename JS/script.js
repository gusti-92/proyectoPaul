var botonn = $("#boton");

botonn.click( cambioColor);

function cambioColor() {
    botonn.css("background", colorRandom)
    
};

function colorRandom() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
    
};



    
