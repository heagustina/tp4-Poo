/*
Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse".
Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades 
y llama a sus métodos "saludar" y "despedirse".

*/

class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  saludar() {
    alert(
      `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`
    );
  }

  despedirse() {
    alert(`¡Adios!  ${this.nombre} fue un gusto hablar con vos.`);
  }
}

// Solicitar datos para la primera persona
let nombre1 = prompt("Ingresa el nombre de la primera persona:");
let edad1 = prompt("Ingresa la edad de la primera persona:");
let profesion1 = prompt("Ingresa la profesión de la primera persona:");
let persona1 = new Persona(nombre1, edad1, profesion1);

// Solicitar datos para la segunda persona
let nombre2 = prompt("Ingresa el nombre de la segunda persona:");
let edad2 = prompt("Ingresa la edad de la segunda persona:");
let profesion2 = prompt("Ingresa la profesión de la segunda persona:");
let persona2 = new Persona(nombre2, edad2, profesion2);

// Llamar a los métodos
persona1.saludar();
persona2.saludar();

persona1.despedirse();
persona2.despedirse();
