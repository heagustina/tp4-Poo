/*
1- Crea un objeto llamado auto que tenga algunas características como el color, 
marca, modelo y si está encendido o apagado. 
Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó

*/

// Definición de la clase Auto
class Auto {
    constructor(color, marca, modelo) {
      this.color = color;
      this.marca = marca;
      this.modelo = modelo;
      this.encendido = false;
  
      document.writeln("El auto es de color: " + color);
      document.writeln("<br>");
      document.writeln("El auto es marca: " + marca);
      document.writeln("<br>");
      document.writeln("El auto es modelo: " + modelo);
      document.writeln("<br>");
    }
  
    encender() {
      if (!this.encendido) {
        this.encendido = true;
        document.writeln("auto encendido<br>");
      } else {
        document.writeln("El auto ya está encendido<br>");
      }
      this.estadoActual();
    }
  
    apagar() {
      if (this.encendido) {
        this.encendido = false;
        document.writeln("El auto se apagó<br>");
      } else {
        document.writeln("El auto ya está apagado<br>");
      }
      this.estadoActual();
    }
  
    estadoActual() {
      const estado = this.encendido ? "encendido" : "apagado";
      document.writeln(`Estado actual: El auto está ${estado}<br><br>`);
    }
  }
  
  //  Crear el objeto auto
      const elAuto = new Auto("blanco", "Peugeot", "208");
  
      document.writeln("Encendiendo el auto:<br>");
      elAuto.encender();
  
      document.writeln("Apagando el auto:<br>");
      elAuto.apagar();