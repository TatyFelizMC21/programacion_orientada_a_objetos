let fonditoDeColorin;
let pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  fonditoDeColorin = color(random(100, 255), random(100), random(255));
  for (let i = 0; i < 100; i++) {
    let nuevaPelota = new Pelota();
    pelotas.push(nuevaPelota);
  }
}

function draw() {
  background(fonditoDeColorin);
  for (let i = 0; i < 100; i++) {
    pelotas[i].update();
    pelotas[i].display();
  }
}

class Pelota {
  // Plano de instrucciones para creae una pelota
  constructor() {
    this.rad = ceil(random(5, 30));
    this.diam = this.rad * 2;
    this.posX = random(this.rad, width - this.rad);
    this.posY = random(this.rad, height - this.rad);
    this.velX = random(-10, 10);
    this.velY = random(-10, 10);
    console.log("estoy viaaaaa!");
  }
  // método update
  update() {
    this.posX += this.velX;
    this.posY += this.velY;

    if (this.posX > width - this.rad || this.posX < this.rad) {
      this.velX *= -1;
    }
    if (this.posY > height - this.rad || this.posY < this.rad) {
      this.velY *= -1;
    }
  }

  display() {
    fill(255);
    noStroke();
    circle(this.posX, this.posY, this.diam);
  }
}
