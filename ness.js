let ness_walk = []; // Sprites
let ness_sit;
let ness_lie;

let ness_frame; // Frame actual

const gravedad = 0.5;
const piso = 450;

let ness_x = 816;
let ness_y = piso;
let ness_velx = 6;
let ness_vely = 8;
let ness_bounce = 0;

let ness_estado = "Caminando";

function ness_caminar() {
  ness_frame = get_frame(ness_walk, 24 / ness_velx);
  
  ness_x -= ness_velx;
  
  image (
    ness_frame,
    
    ness_x,
    ness_y,
    
    ness_frame.width * ESCALA,
    ness_frame.height * ESCALA
  ); 
}

function ness_caerse() {
  if (ness_velx > 0) ness_velx -= 0.1;
  else ness_velx = 0;
  ness_x += ness_velx;
  
  ness_vely -= gravedad;
  if (ness_y < piso && ness_bounce <= 1) ness_y -= ness_vely;
  else {
    ness_y = piso;
    if (ness_bounce < 1) {
      ness_bounce++;
      ness_vely = 4;
      ness_y -= 1;
    }
  }
  
  image (
    ness_sit,
    
    ness_x,
    ness_y,
    
    ness_sit.width * ESCALA,
    ness_sit.height * ESCALA
  );
}
