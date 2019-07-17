var canvasHeight = 600;
var canvasWidth = 600;
var boxHeight = canvasHeight;
var boxes = [];
var fillColors = [];

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    for(let i = 0; i < 50; i++) {
        boxes.push((canvasWidth/50)*i);
        fillColors.push("blue");
    }
}

function draw() {
    for(let i = 0; i < boxes.length; i++) {
        strokeWeight(5);
        fill(fillColors[i]);
        rect(boxes[i], 0, canvasWidth/boxes.length, boxHeight);
    }
}

function mouseClicked() {
    for(let i = 0; i < boxes.length; i++) {
        if(mouseX >= boxes[i] && mouseX <= boxes[i] + canvasWidth/boxes.length && fillColors[i] == "blue")
            fillColors[i] = "red";
        else if(mouseX >= boxes[i] && mouseX <= boxes[i] + canvasWidth/boxes.length && fillColors[i] == "red")
            fillColors[i] = "blue";
    }
}