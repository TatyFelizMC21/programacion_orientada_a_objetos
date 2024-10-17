class Particulas {
  constructor(_x, _y) {
    this.posx = _x;
    this.posy = _y;
    this.estaViva = true;
    //tVida es = tiempo de vida
    this.tVida = round(random(100, 200));
    this.diam = random(0, 200);
  }

  update() {
    this.tVida--;
    if (this.tVida <= 0) {
      this.tVida = false;
      return;
    }
    this.posy += 2;
  }

  display() {
    fill(255);
    noStroke();
    circle(this.posx, this.posy, this.diam);
  }
}
