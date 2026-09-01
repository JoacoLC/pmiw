function dibuj_piso(x, y, ancho, alto, escala) {
  for (let i = 0; i <= alto; i++) for (let j = 0; j <= ancho; j++) {
    image (
      floor,
      
      x + j * (floor.width * abs(escala)),
      y + i * (floor.height * abs(escala)),
      
      floor.width * escala,
      floor.height * escala
      );
  }
}

function dibuj_pilar(x, y, altura, escala) {
  for (let i = 0; i < altura; i++) {
    image (
      pilar_top,
      
      x,
      y + i * (floor.height * abs(escala)),
      
      pilar_top.width * escala,
      pilar_top.height * escala
    );
  }
  
  image (
    pilar_bottom,
    
    x,
    y + altura * pilar_top.height * abs(escala),
    
    pilar_bottom.width * escala,
    pilar_bottom.height * escala
  );
}
