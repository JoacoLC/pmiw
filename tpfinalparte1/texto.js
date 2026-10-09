let txt_completo;
let txt_continuar;

let txt_indice   = 0;
let txt_timer    = 0;
let txt_timermax = 1;
let txt_pausado  = false;

let framenumber = 0;

let cajatxt_origenx;
let cajatxt_origeny;

function txt_gradual(x, y, size, col) { // Hace aparecer caracteres de texto uno por uno.
  if(txt_indice < txt_completo.length && enter_pressed()) {
    txt_indice = txt_completo.length;
  }
  
  if (txt_timer < 0 && txt_indice < txt_completo.length) {  
    txt_timer = txt_timermax;
    txt_indice++;
    
    // Si se hizo una pausa en el último
    // caracter, reanudar la velocidad actual.
    txt_pausado = false;
  } else txt_timer--;
  
  textAlign(LEFT);
  textSize(size);
  fill(col);
  text(txt_completo.slice(0, txt_indice), x, y);
  
  textAlign(CENTER);
  fill(col / 2);
  if(txt_indice < txt_completo.length) {
    text("<Pulsa ENTER para saltear>", width / 2, 425);
  } else {
    if (framenumber % 4) text(txt_continuar, width / 2, 425);
  }
}

function txt_pausa(adonde, cuanto) { // Esta es bastante intuitiva, creo. :P
  if (!txt_pausado && txt_indice === adonde) {
    txt_timer   = cuanto;
    txt_pausado = true;
  }
}
