let pantalla = 0;
let font;

async function preload() {
  font = await loadFont('data/PressStart2P-Regular.ttf');
}

async function setup() {
  createCanvas(800, 450);
  
  background(0);
  textFont(font);
  fill(255);
  text("He'll yea!", width / 2, height / 2);
}


function draw() {

}
