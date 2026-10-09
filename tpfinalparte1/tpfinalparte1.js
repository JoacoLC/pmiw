let pantalla = "Leyes";
let init     = false;
let font;
let enter = false;

function enter_pressed() {
  let ret = enter;
  if (enter) enter = false;
  return ret;
}

function cambiar_pantalla(p) {
  if (txt_indice === txt_completo.length && enter_pressed()) {
    pantalla = p;
    txt_indice = 0;
    init = false;
  }
}

async function preload() {
  font = await loadFont('data/PressStart2P-Regular.ttf');
}

async function setup() {
  createCanvas(800, 450);
  textFont(font);
  cajatxt_origenx = width  / 16;
  cajatxt_origeny = height / 4 * 3;
}


function draw() {
  if (framenumber < 60) framenumber++;
  else framenumber = 0;
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
      
      txt_continuar = "<Pulsa ENTER para continuar>";
      init = true;
    } else {
      background(0);
      txt_gradual(cajatxt_origenx, 45, 12, 255);
      cambiar_pantalla("Museo en llamas");
    }
  break;
  case "Museo en llamas":
    if(!init) {
      txt_completo =
      "¡Un día, el Museo de Arqueorobótica estalla con una\n" +
      "fulgorosa llamarada!";
      init = true;
    } else {
      background(0);
      txt_gradual(cajatxt_origenx, cajatxt_origeny, 12, 255); 
      cambiar_pantalla("Light y Rock");
    }
  break;
  case "Light y Rock":
    if(!init) {
      txt_completo =
      `LIGHT: "¡Megaman! Tenés que ir a investigar lo que sea\n` +
      `que esté pasando en el museo. ¡Ya mismo!"`;
      init = true;
    } else {
      background(0);
      txt_pausa(18, 10);
      txt_pausa(85, 10);
      txt_gradual(cajatxt_origenx, cajatxt_origeny, 12, 255);
      cambiar_pantalla("Entrada al museo");
    }
  break;
  case "Entrada al museo":
    if(!init) {
      txt_completo =
      "Haciendo caso a las advertencias del Dr Light, llegás a \n" +
      "la entrada del museo.\n" +
      "Hay fuego en el techo. La puerta de entrada está abierta,\n" +
      "y se escuchan gritos ininteligibles desde dentro.\n" +
      "Notás también un hidrante de agua frente a la entrada.";
      txt_continuar = "<Haz clic en algo para interactuar>";
      init = true;
    } else {
      background(0);
      txt_gradual(cajatxt_origenx, cajatxt_origeny, 12, 255);
    }
  }
}

function keyPressed() {
  if(keyCode === ENTER) enter = true;
}
