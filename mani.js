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

function draw(){
    classifier.classify(video, gotResult);
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


function gotResult(error, results){
    if(error){
      console.log(error + " " + "Error Found");
    }else{
        if((PreviosResult != results[0].label) && (results[0].confidence > 0.5)){
          console.log(results);
          confidence = Math.round( results[0].confidence * 100);
          Label = results[0].label;
          PreviosResult = Label;
          if(LabelSpan.Inner == results[0].label){
            confidenceSpan.innerHTML = "Object : " + confidence ;
            LabelSpan.innerHTML = "Your Sketch : " + Label;
          }
        }else if(LabelSpan.value == results[0].label){
          // do nothing
        }
  
      
     
    }
}
