/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y 
cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/

class Persona {
    constructor(nombre, edad, sexo, peso, altura, añoNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.DNI = this.generaDNI();
      this.sexo = sexo.toUpperCase();
      this.peso = peso;
      this.altura = altura;
      this.añoNacimiento = añoNacimiento;
    }
  
    mostrarGeneracion() {
      let generacion = "";
      let rasgo = "";
  
      if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
        generacion = "Generación Z";
        rasgo = "Irreverencia";
      } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
        generacion = "Generación Y (Millennials)";
        rasgo = "Frustración";
      } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
        generacion = "Generación X";
        rasgo = "Obsesión por el éxito";
      } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
        generacion = "Baby Boom";
        rasgo = "Ambición";
      } else if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
        generacion = "Silent Generation";
        rasgo = "Austeridad";
      } else {
        generacion = "Desconocida";
        rasgo = "No definido";
      }
  
      alert(`${this.nombre} pertenece a la ${generacion} y su rasgo característico es: ${rasgo}`);
    }
  
    esMayorDeEdad() {
      if (this.edad >= 18) {
        alert(`${this.nombre} es mayor de edad.`);
      } else {
        alert(`${this.nombre} no es mayor de edad.`);
      }
    }
  
    mostrarDatos() {
      alert(
        `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.DNI}\nSexo: ${this.sexo}\nPeso: ${this.peso}kg\nAltura: ${this.altura}m\nAño de nacimiento: ${this.añoNacimiento}`
      );
    }
  
    generaDNI() {
      return Math.floor(10000000 + Math.random() * 90000000);
    }
  }
  
  // Crear una persona a partir de datos ingresados por el usuario
  let nombre = prompt("Ingresa tu nombre:");
  let edad = parseInt(prompt("Ingresa tu edad:"));
  let sexo = prompt("Ingresa tu sexo (H/M):");
  let peso = parseFloat(prompt("Ingresa tu peso en kg:"));
  let altura = parseFloat(prompt("Ingresa tu altura en metros:"));
  let añoNacimiento = parseInt(prompt("Ingresa tu año de nacimiento:"));
  
  let persona = new Persona(nombre, edad, sexo, peso, altura, añoNacimiento);
  
  persona.mostrarGeneracion();
  persona.esMayorDeEdad();
  persona.mostrarDatos();