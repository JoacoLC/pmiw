let cop_walk  = [];
let ness_walk = [];
let ness_sit;
let ness_lie;

let floor;
let halfplant;
let halfwin;
let pilar_top;
let pilar_bottom;

let frame_actual;

const ESCALA = 3;

function preload() {
  ness_walk.push(loadImage("data/ness_walk0.png"));
  ness_walk.push(loadImage("data/ness_walk1.png"));

  
  floor        = loadImage("data/floorpattern.png");
  pilar_top    = loadImage("data/pillar_top.png");
  pilar_bottom = loadImage("data/pillar_bottom.png");
  
}

function setup() {
  createCanvas(800,600);
  noSmooth();
}


function draw() {
  background(75, 75, 150);
  
  dibuj_piso(0,384, 16,8, ESCALA);
  dibuj_pilar(0,0, 13, ESCALA);
  //push();
  //scale(-1,1);
  //dibuj_pilar(0,0, 13, ESCALA);
  //pop();
  
  frame_actual = get_frame(ness_walk, 6);
  
  image (
    ness_frame,
    
    32,
    40,
    
    frame_actual.width * ESCALA,
    frame_actual.height * ESCALA
  ); 
}
