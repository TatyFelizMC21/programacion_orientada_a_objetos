////////////////////////DECLARAR VARIABLES/////////////////////////////////////////////
let posX, posY; // Posición
let velX, velY; // Velocidad
let colorCH; // Color del BG
let diametro;
let radio;

////////////////////////FUNCTION SETUP/////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);

  radio = ceil(random(20, 50)); // Tamaño de la pelota
  diametro = radio * 2;

  posX = random(radio, width - radio); // P0 aleatoria
  posY = random(radio, height - radio);

  velX = random(-10, 10); // V0 aleatoria en X
  velY = random(-10, 10); // V0 aleatoria en Y

  colorCH = color(255);
}

////////////////////////FUNCTION DRAW/////////////////////////////////////////////
function draw() {
  background(colorCH);

  // DIBUJAR PELOTA
  fill(255);
  noStroke();
  circle(posX, posY, diametro);

  // Posición
  posX += velX;
  posY += velY;

  // REBOTE EN LOS BORDES

  if (posX > width - radio || posX < radio) {
    velX *= -1; // Invertir la velocidad en X
    cambiarcolor();
  }

  if (posY > height - radio || posY < radio) {
    velY *= -1; // Invertir la velocidad en Y
    cambiarcolor();
  }
}

function cambiarcolor() {
  colorCH = color(random(255), random(255), random(255));
}
