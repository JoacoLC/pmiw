let pantalla = "Leyes";
let init = false;
let font;

function cambiar_escena(sc) {
  if (txt_indice === txt_completo.length && keyIsDown(ENTER)) {
    escena = sc;
    init = false;
  }
}

async function preload() {
  font = await loadFont('data/PressStart2P-Regular.ttf');
}

async function setup() {
  createCanvas(800, 450);
  textFont(font);
}


function draw() {
  switch(pantalla) {
  case "Leyes":
    if (!init) {
      txt_completo =
      "Las 4 leyes de la robótica\n\n\n" +
      "1.\nUn robot no puede dañar a la humanidad o,\n" +
      "por inacción, permitir que la humanidad\n" +
      "sufra daños.\n\n" +
      "2.Un robot no hará daño a un ser humano,\n" +
      "ni por inacción permitirá que un ser humano\n" +
      "sufra daño.\n\n" +
      "3.\nUn robot debe cumplir las órdenes dadas por\n" +
      "los seres humanos, a excepción de aquellas que\n" +
      "entren en conflicto con la primera ley.\n\n" +
      "4.\nUn robot debe proteger su propia existencia\n" +
      "en la medida en que esta protección\n" +
      "no entre en conflicto con la primera\n" +
      "o con la segunda ley.";
          
      init = true;
    } else {
      background(0);
      txt_gradual(cajatxt_origenx, 45, 12, 255);
      cambiar_escena("Museo en llamas");
    }
  break;
  case "Museo en llamas":
    if(!init) {
      txt_completo =
      "¡De golpe, el Museo de Arqueorobótica\n" +
      "estalla en una fulgorosa llamarada!";
      init = true;
    } else {
      background(0);
      txt_gradual(cajatxt_origenx, cajatxt_origeny, 12, 255); 
      cambiar_escena("Light y Rock");
    }
  break;
  }
}
