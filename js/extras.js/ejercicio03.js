/*
Crea un objeto libro que tenga propiedades título, autor, año y género. 
Luego, escribe una función que reciba un array de libros y un género y devuelva un array con los libros de ese género usando filter. 
Usa prompt para ingresar los datos de los libros y el género.

*/

let libros = [];

// Pedimos al usuario cuántos libros quiere ingresar
let cantidadLibros = prompt("¿Cuántos libros deseas ingresar?");
cantidadLibros = parseInt(cantidadLibros);  // Convertimos el número ingresado a entero

// Usamos un bucle para ingresar los datos de cada libro
for (let i = 0; i < cantidadLibros; i++) {
  let titulo = prompt("Ingresa el título del libro:");
  let autor = prompt("Ingresa el autor del libro:");
  let año = prompt("Ingresa el año de publicación del libro:");
  año = parseInt(año);  // Convertimos el año a número
  let genero = prompt("Ingresa el género del libro:");

  // Creamos un objeto para cada libro y lo agregamos al array
  let libro = {
    titulo: titulo,
    autor: autor,
    año: año,
    genero: genero
  };

  libros.push(libro);  // Añadimos el libro al array
}

// Pedimos al usuario que ingrese el género por el que quiere filtrar los libros
let generoFiltro = prompt("Ingresa el género por el que deseas filtrar los libros:");

// Creamos un array para almacenar los libros que coinciden con el género ingresado
let librosFiltrados = [];

// Usamos un bucle para recorrer los libros y filtrar por género
for (let i = 0; i < libros.length; i++) {
  if (libros[i].genero === generoFiltro) {
    librosFiltrados.push(libros[i]);  // Si el género coincide, agregamos el libro al array filtrado
  }
}

// Mostramos el resultado en la pantalla
let resultadoDiv = document.createElement("div");

if (librosFiltrados.length === 0) {
  resultadoDiv.innerHTML = "<h2>No se encontraron libros en este género.</h2>";
} else {
  resultadoDiv.innerHTML = "<h2>Libros de género '" + generoFiltro + "':</h2><ul>";

  // Mostramos los libros filtrados
  for (let i = 0; i < librosFiltrados.length; i++) {
    resultadoDiv.innerHTML += "<li><strong>" + librosFiltrados[i].titulo + "</strong> de " + librosFiltrados[i].autor + " (" + librosFiltrados[i].año + ")</li>";
  }
  resultadoDiv.innerHTML += "</ul>";
}

// Agregamos el resultado a la página
document.body.appendChild(resultadoDiv);