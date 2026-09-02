let cop_walk  = [];

let floortile;
let halfplant;
let halfwin;
let pilar_top;
let pilar_bottom;

const ESCALA = 3;

function preload() {
  ness_walk.push(loadImage("data/ness_walk0.png"));
  ness_walk.push(loadImage("data/ness_walk1.png"));
  ness_sit     = loadImage("data/ness_sit.png");
  ness_lie     = loadImage("data/ness_lie.png");
  
  floortile    = loadImage("data/floorpattern.png");
  pilar_top    = loadImage("data/pillar_top.png");
  pilar_bottom = loadImage("data/pillar_bottom.png");
  
}

function setup() {
  createCanvas(800,600);
  noSmooth();
}


function draw() {
  background(75, 75, 150);
  
  dibuj_piso(0,400, 16,8, ESCALA);
  dibuj_pilar(0,0, 13, ESCALA);
  push();
  scale(-1,1);
  dibuj_pilar(-765,0, 13, ESCALA);
  pop();
  
  if (ness_estado === "Caminando") {
    ness_caminar();
    if (ness_x < 400) {
      ness_estado = "Caerse";
      ness_velx = 8;
      ness_y -= 1;
    }
  } else if (ness_estado === "Caerse") {
    ness_caerse();
  }
}
