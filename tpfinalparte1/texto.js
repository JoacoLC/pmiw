let txt_completo = "Hola! Cómo están?";
let txt_indice   = 0;
let txt_timer    = 0;
let txt_timermax = 3;
let txt_pausado  = false;

function txt_gradual(x, y, size, col) { // Hace aparecer caracteres de texto uno por uno.
  if (txt_timer < 0 && txt_indice < txt_completo.length) {  
    txt_timer = txt_timermax;
    txt_indice++;
    txt_pausado = false; // En caso de que se haya hecho una pausa en el último
                         // caracter, reanudar la velocidad usual.
  } else txt_timer--;
  
  textSize(size);
  fill(col);
  text(txt_completo.slice(0, txt_indice), x, y);
}

function txt_pausa(adonde, cuanto) { // Esta es bastante intuitiva, creo. :P
  if (!txt_pausado && txt_indice === adonde) {
    txt_timer   = cuanto;
    txt_pausado = true;
  }
}
