/*
9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". 
Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". 
Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" 
para verificar que cada animal emite el sonido adecuado. 

*/

class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    emitirSonido() {
      console.log("Este animal emite un sonido genérico.");
    }
  
    mostrarDatos() {
      console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
  }
  
  // Clase hija: Perro
  class Perro extends Animal {
    emitirSonido() {
      console.log(`${this.nombre} dice: ¡Guau guau!`);
    }
  }
  
  // Clase hija: Gato
  class Gato extends Animal {
    emitirSonido() {
      console.log(`${this.nombre} dice: ¡Miau!`);
    }
  }
  
  // Crear un objeto de la clase Perro
  const miPerro = new Perro("Homero", 7);
  miPerro.mostrarDatos();
  miPerro.emitirSonido();
  
  // Crear un objeto de la clase Gato
  const miGato = new Gato("Olivia", 10);
  miGato.mostrarDatos();
  miGato.emitirSonido();