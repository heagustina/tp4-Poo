/*
Crea un objeto libro que tenga propiedades título, autor, año y género. 
Luego, escribe una función que reciba un array de libros y un género y devuelva un array con los libros de ese género usando filter. 
Usa prompt para ingresar los datos de los libros y el género.

*/

let libros = [];

// Preguntamos cuántos libros va a ingresar el usuario
let cantidad = prompt("¿Cuántos libros deseas ingresar?");
cantidad = parseInt(cantidad);

// Usamos un bucle para pedir los datos de cada libro
for (let i = 0; i < cantidad; i++) {
  let titulo = prompt("Ingresa el título del libro:");
  let autor = prompt("Ingresa el autor del libro:");
  let año = prompt("Ingresa el año del libro:");
  año = parseInt(año);
  let genero = prompt("Ingresa el género del libro:");

  // Creamos el objeto libro
  let libro = {
    titulo: titulo,
    autor: autor,
    año: año,
    genero: genero
  };

  // Lo agregamos al array
  libros.push(libro);
}

// Pedimos al usuario el género por el que quiere filtrar
let generoBuscado = prompt("¿Qué género quieres buscar?");

// Usamos filter para obtener solo los libros del género buscado
let librosFiltrados = libros.filter(function(libro) {
  return libro.genero === generoBuscado;
});

// Mostramos los resultados con document.write()
document.write("<h2>Libros encontrados del género: " + generoBuscado + "</h2>");

if (librosFiltrados.length === 0) {
  document.write("<p>No se encontraron libros de ese género.</p>");
} else {
  document.write("<ul>");
  for (let i = 0; i < librosFiltrados.length; i++) {
    document.write("<li><strong>" + librosFiltrados[i].titulo + "</strong> de " + librosFiltrados[i].autor + " (" + librosFiltrados[i].año + ")</li>");
  }
  document.write("</ul>");
}
