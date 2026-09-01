let ness_walk;
let ness_sit;
let ness_lie;
let cop_walk;

let floor;
let halfplant;
let halfwin;
let pilar_top;
let pilar_bottom;

function preload() {
  floor        = loadImage("data/floorpattern.png");
  pilar_top    = loadImage("data/pillar_top.png");
  pilar_bottom = loadImage("data/pillar_bottom.png");
}

function setup() {
  createCanvas(800,600);
  noSmooth();
  
  background(75, 75, 150);
}


function draw() {
  dibuj_piso(0,384, 16,8, 3);
  dibuj_pilar(0,0, 13, 3,3);
}
