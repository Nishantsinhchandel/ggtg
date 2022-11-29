
song1="";

song1_status = "";

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function modelLoaded(){
    console.log('posenet is initialized');
}

function preload(){
    song1 = loadSound("music.mp3");
  
}
function play(){
    song1.play;
}
function draw(){
    image(video,0,0,600,500);
}