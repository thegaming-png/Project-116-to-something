timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;






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

All_the_Names = ["Rain", "Cake", "Ball", "Camel", "Bread", "Brain", "Tree", "Eye", "Dolphin", "Hand", "Flower", "HotDog", "Burger", "Elephant", "fork", "Knee", "grass", "Guitar", "Grill", "Ice-Cream"];

function RandomValue(){
    randomValue = Math.floor(Math.random() * 18);
    randomThing = All_the_Names[randomValue]
    console.log(randomThing);

    document.getElementById("randomText").innerHTML = "Sketch to be Drawn : " + randomThing;
    sketch = randomThing;
    localStorage.setItem("sketch", sketch);
}

function draw(){
    check_sketch();
    if(drawn_sketch == localStorage.getItem("sketch")){
        answer_holder = "set";
        score = score+1;
        document.getElementById("score").innerHTML = "Score: "+score;
    }


    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }

}



function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results + "Hie");
    document.getElementById("label").innerHTML = "Label: " + results[0].label;
    document.getElementById('confidence').innerHTML = "Confidens: " + Math.round(results[0].confidence * 100) + "%";

    utterThis = new SpeechSynthesisUtterance(results[0].label)
    synth.speak(utterThis);


}
function check_sketch(){
    timer_counter++;
    document.getElementById("Timer").innerHTML = "Timer: "+timer_counter;
    if(timer_counter>500){
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check == "completed" || answer_holder == "set"){
        timer_check = "";
        answer_holder = "";
        RandomValue();
    }
}
