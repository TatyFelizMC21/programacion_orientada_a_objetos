let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);
  let nuevaParticula = new particulas(mouseX, mouseY);
  particulas.push(nuevaParticula);

  for (let i = 0; i < particulas.length - 1; i++) {
    particulas[i].update();
    particulas[i].display();
  }

  /*
   * Esta es una forma de borrar las partículas muertas utilizando
   * un for loop que navega todas las partículas y se pergunta por
   * la varible boleana estaViva.
   *
   * Utiliza la función slipice para borrar la partícula específica
   * mediante su Indice
   *
   */

  // for (let i = 0; i < particulas.length; i++) {
  // 	if (!particulas[i].estaViva) {
  // 		particulas.splice(i, 1);
  // 	}
  // }

  /**
   * Esta es la forma moderna de resolverlo
   */

  particulas = particulas.filter((pelota) => pelota.estaViva);

  noFill();
  stroke(252, 99, 56);
  strokeWeight(1);

  for (let i = 0; i < particulas.length; i++) {
    particulas[i].posx;
    particulas[i].posy;
    particulas[i + 1].posx;
    particulas[i + 1] - posy;
  }

  console.log(particulas.length);
}
