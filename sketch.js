let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);

  // Crear una nueva partícula en la posición del mouse y añadirla al array
  let nuevaParticula = new Particula(mouseX, mouseY);
  particulas.push(nuevaParticula);

  // Dibujar y actualizar todas las partículas
  for (let i = 0; i < particulas.length; i++) {
    particulas[i].update();
    particulas[i].display();
  }

  // Filtrar partículas que aún están "vivas"
  particulas = particulas.filter((pelota) => pelota.estaViva());

  // Crear un trazo entre las partículas (esto puede ser opcional para mejorar el efecto)
  noFill();
  stroke(252, 99, 56);
  strokeWeight(1);

  for (let i = 0; i < particulas.length - 1; i++) {
    let x1 = particulas[i].pos.x;
    let y1 = particulas[i].pos.y;
    let x2 = particulas[i + 1].pos.x;
    let y2 = particulas[i + 1].pos.y;

    // Dibujar una línea entre dos partículas
    line(x1, y1, x2, y2);
  }

  console.log(particulas.length);
}

// Clase Particula
class Particula {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acel = createVector(0, 0.05);
    this.tiempoDeVida = 255;
  }

  // Método para actualizar la partícula
  update() {
    this.vel.add(this.acel); // Aumentar la velocidad con la aceleración
    this.pos.add(this.vel); // Cambiar la posición con la velocidad
    this.tiempoDeVida -= 2; // Reducir el tiempo de vida
  }

  // Mostrar la partícula
  display() {
    noStroke();
    fill(252, 99, 56, this.tiempoDeVida); // Color con transparencia
    ellipse(this.pos.x, this.pos.y, 10); // Dibujar el círculo
  }

  // Verificar si la partícula aún está "viva"
  estaViva() {
    return this.tiempoDeVida > 0;
  }
}
