/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, 
calcular el perímetro y el área
*/

// Definición de la clase Rectangulo

class Rectangulo {
    constructor(ancho, alto) {
      this.ancho = ancho;
      this.alto = alto;
    }
  
    modificar(ancho, alto) {
      this.ancho = ancho;
      this.alto = alto;
      alert(`Propiedades modificadas:\nAncho: ${this.ancho}\nAlto: ${this.alto}`);
    }
  
    mostrar() {
      alert(`Propiedades del rectángulo:\nAncho: ${this.ancho}\nAlto: ${this.alto}`);
    }
  
    calcularPerimetro() {
      const perimetro = 2 * (this.ancho + this.alto);
      alert(`Perímetro: ${perimetro}`);
    }
  
    calcularArea() {
      const area = this.ancho * this.alto;
      alert(`Área: ${area}`);
    }
  }
  
  // El usuario ingresa los valores deseados 
  let anchoInicial = parseFloat(prompt("Ingresa el ancho del rectángulo:"));
  let altoInicial = parseFloat(prompt("Ingresa el alto del rectángulo:"));
  
  const miRectangulo = new Rectangulo(anchoInicial, altoInicial);
  
  // Mostrar propiedades
  miRectangulo.mostrar();
  
  // Calcular área y perímetro
  miRectangulo.calcularArea();
  miRectangulo.calcularPerimetro();
  
  // Preguntar si quiere modificar (sin usar toLowerCase)
  let modificar = prompt('¿Deseas modificar el rectángulo? Escribe "si" para aceptar');
  if (modificar === "si") {
    let nuevoAncho = parseFloat(prompt("Nuevo ancho:"));
    let nuevoAlto = parseFloat(prompt("Nuevo alto:"));
    miRectangulo.modificar(nuevoAncho, nuevoAlto);
    miRectangulo.mostrar();
    miRectangulo.calcularArea();
    miRectangulo.calcularPerimetro();
  }