function dibuj_piso(x, y, ancho, alto, escala) {
  for (let i = 0; i <= alto; i++) for (let j = 0; j <= ancho; j++) {
    image (
      floortile,
      
      x + j * floortile.width * escala,
      y + i * floortile.height * escala,
      
      floortile.width * escala,
      floortile.height * escala
    );
  }
}

function dibuj_pilar(x, y, altura, escala) {
  for (let i = 0; i < altura; i++) {
    image (
      pilar_top,
      
      x,
      y + i * (pilar_top.height * escala),
      
      pilar_top.width * escala,
      pilar_top.height * escala
    );
  }
  
  image (
    pilar_bottom,
    
    x,
    y + altura * pilar_top.height * escala,
    
    pilar_bottom.width * escala,
    pilar_bottom.height * escala
  );
}
