let pantalla = "Leyes";
let init     = false;

function cambiar_pantalla(p) {
  if (txt_indice === txt_completo.length && enter_pressed()) {
    pantalla = p;
    txt_indice = 0;
    init = false;
  }
}
