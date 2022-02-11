img = "";
status = "";
objects = [];

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('status', modelLoaded);
    document.getElementById('status').innerHTML = "status: Detecting Objects";
}

function preload(){
    img = loadImage('dog_cat.jpg');
    objects = status;
}

function draw(){
    image(img,0,0,640,420);
    fill("#4169e1");
    text("dog",45,75)
    noFill();
    stroke("#4169e1");
    rect(30,40,450,350);

    fill("#4169e1");
    text("cat", 300, 100);
    noFill();
    stroke("#4169e1");
    rect(280, 70, 340, 330);

    if (status != ""){
        for( i=0; i<objects.length; i++){

            document.getElementById('status').innerHTML = "Status = Objects Detected";

            fill("#4169e1");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" + objects[i].x + objects[i].y);
            noFill();
            stroke("#4169e1");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}



function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult)
}

function gotResult(error, Results){
    if(error){
        console.log(error);
    }
    else
    console.log(Results);
}

