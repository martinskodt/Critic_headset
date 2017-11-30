var london
var space
var play
var qtime = 5;
var vol = 0.1;

var startswears = [2,10,38,58,63,64,67,83,87,188,197,207,210,218]
var stopswears = [2.5,10.5,38.5,58.5,63.5,64.5,67.5,83.5,87.5,188.5,197.5,207.5,210.5,218.5]

function preload() {
space = loadSound ('https://rikkewolf.github.io/Mini_exercises/mini_ex6/assets/relax.mp3');
}


function setup() {

  createCanvas(500,500);
  background(100);

  play = createButton("Play")
  play.mousePressed(toggleplay)


for (var l = 0; l < startswears.length; l++) {
 space.addCue(startswears[l], swears)

 if(space.currentTime() >= stopswears[l]){
   space.setVolume(0.1)
  
    }
  }
}
 function swears(){
 space.setVolume(0);
 background(random(255));




}
function volback(){

}

function toggleplay() {
  if (!space.isPlaying()) {
    space.loop();
    space.setVolume(vol);
    play.html("pause")
  } else {
    space.pause();
    play.html("Play")
  }
}

function draw() {

};
