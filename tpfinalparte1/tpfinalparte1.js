let pantalla = 0;
let font;

async function preload() {
  font = await loadFont('data/PressStart2P-Regular.ttf');
}

async function setup() {
  createCanvas(800, 450);
  textFont(font);
}


function draw() {
  switch(pantalla) {
    case 0:
      background(0);
      txt_gradual(width/8,height/8 * 6, 12, 255);
  
  }
}
