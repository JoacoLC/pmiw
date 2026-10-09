let miT = "Soy texto, un gusto";
let miTiempo = 0;
let miVuelta = 3;
let duracion = D(miT);
function D(text) {
  let a = miVuelta * text.length;
  return a;
}

let textoPrueba = textoFuncion(miT);

function textoFuncion(texto) {
  let indice = floor(miTiempo / miVuelta) % text.length;
  return miT[indice];
}
