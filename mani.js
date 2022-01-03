function preload() {
    classifier = ml5.imageClassifier("DoodleNet");
}


function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    background("White");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}


function clearCanvas() {
    background("White");
}


function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

All_the_Names = ["Cake", "Ball", "Camel", "Bread", "Brain", "Tree", "Eye", "Dolphin", "Hand", "Flower", "HotDog", "Burger", "Elephant", "fork", "Knee", "grass", "Guitar", "Grill", "Ice-Cream"];

function RandomValue(){
    randomValue = Math.floor(Math.random() * 18);
    randomThing = All_the_Names[randomValue]
    console.log(randomThing);

    document.getElementById("randomText").innerHTML = "Sketch to be Drawn : " + randomThing;
}

