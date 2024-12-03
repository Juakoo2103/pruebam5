// clases.js
export class Animal {
  constructor(nombre, edad, comentarios, imagen, sonido) {
    this.nombre = nombre;
    this.edad = edad;
    this.comentarios = comentarios;
    this.imagen = imagen;
    this.sonido = sonido;
  }

  reproducirSonido() {
    const player = document.getElementById("player");
    player.src = `assets/sounds/${this.sonido}`;
    player.play();
  }
}

export class Leon extends Animal {
  constructor(nombre, edad, comentarios, imagen, sonido) {
    super(nombre, edad, comentarios, imagen, sonido);
  }
}

export class Lobo extends Animal {
  constructor(nombre, edad, comentarios, imagen, sonido) {
    super(nombre, edad, comentarios, imagen, sonido);
  }
}

export class Oso extends Animal {
  constructor(nombre, edad, comentarios, imagen, sonido) {
    super(nombre, edad, comentarios, imagen, sonido);
  }
}

export class Serpiente extends Animal {
  constructor(nombre, edad, comentarios, imagen, sonido) {
    super(nombre, edad, comentarios, imagen, sonido);
  }
}

export class Aguila extends Animal {
  constructor(nombre, edad, comentarios, imagen, sonido) {
    super(nombre, edad, comentarios, imagen, sonido);
  }
}
