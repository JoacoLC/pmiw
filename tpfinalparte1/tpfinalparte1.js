let pantalla = 0;
let font;

async function setup() {
  createCanvas(800, 450);
  font = await loadFont('PressStart2P-Regular.ttf');
  
  background(0);
  textFont(font);
  fill(255);
  text("He'll yea!", width / 2, height / 2);
}


function draw() {

}
