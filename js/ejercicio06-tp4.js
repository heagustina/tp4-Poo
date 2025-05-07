/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this._ISBN = ISBN;
      this._titulo = titulo;
      this._autor = autor;
      this._numPaginas = numPaginas;
    }
  
    // Get
    get ISBN() {
      return this._ISBN;
    }
  
    get titulo() {
      return this._titulo;
    }
  
    get autor() {
      return this._autor;
    }
  
    get numPaginas() {
      return this._numPaginas;
    }
  
    // Set
    set ISBN(valor) {
      this._ISBN = valor;
    }
  
    set titulo(valor) {
      this._titulo = valor;
    }
  
    set autor(valor) {
      this._autor = valor;
    }
  
    set numPaginas(valor) {
      this._numPaginas = valor;
    }
  
    // Método para mostrar la información del libro
    mostrarLibro() {
      alert(`El libro "${this._titulo}" con ISBN ${this._ISBN} creado por el autor ${this._autor} tiene ${this._numPaginas} páginas.`);
    }
  }
  
  // Crear dos libros con datos ingresados por el usuario
  let isbn1 = prompt("Introduce el ISBN del primer libro:");
  let titulo1 = prompt("Introduce el título del primer libro:");
  let autor1 = prompt("Introduce el autor del primer libro:");
  let paginas1 = parseInt(prompt("Introduce el número de páginas del primer libro:"));
  
  let libro1 = new Libro(isbn1, titulo1, autor1, paginas1);
  
  let isbn2 = prompt("Introduce el ISBN del segundo libro:");
  let titulo2 = prompt("Introduce el título del segundo libro:");
  let autor2 = prompt("Introduce el autor del segundo libro:");
  let paginas2 = parseInt(prompt("Introduce el número de páginas del segundo libro:"));
  
  let libro2 = new Libro(isbn2, titulo2, autor2, paginas2);
  
  // Mostrar los datos de ambos libros
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
  // Comparar cuál libro tiene más páginas
  if (libro1.numPaginas > libro2.numPaginas) {
    alert(`El libro "${libro1.titulo}" tiene más páginas (${libro1.numPaginas}) que "${libro2.titulo}".`);
  } else if (libro2.numPaginas > libro1.numPaginas) {
    alert(`El libro "${libro2.titulo}" tiene más páginas (${libro2.numPaginas}) que "${libro1.titulo}".`);
  } else {
    alert(`Ambos libros tienen el mismo número de páginas (${libro1.numPaginas}).`);
  }