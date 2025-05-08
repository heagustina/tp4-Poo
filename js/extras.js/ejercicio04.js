/*
Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números). 
Escribe una función que reciba un objeto alumno y un número, y que añada la calificación al array de calificaciones del alumno. Usa un bucle para calcular la calificación más alta del alumno y un switch para clasificar al alumno según su calificación más alta 
(A para 9-10, B para 7-8, C para 5-6, D para 0-4).
*/

let alumno = {
    nombre: prompt("Ingresa el nombre del alumno:"),
    curso: prompt("Ingresa el curso del alumno:"),
    calificaciones: []
  };
  
  // Pedimos cuántas notas ingresar
  let cantidadNotas = prompt("¿Cuántas calificaciones deseas ingresar?");
  cantidadNotas = parseInt(cantidadNotas);
  
  // Agregamos las calificaciones al array
  for (let i = 0; i < cantidadNotas; i++) {
    let nota = prompt("Ingresa una calificación:");
    nota = parseFloat(nota);
    alumno.calificaciones.push(nota);
  }
  
  // Calculamos la nota más alta
  let notaMasAlta = 0;
  for (let i = 0; i < alumno.calificaciones.length; i++) {
    if (alumno.calificaciones[i] > notaMasAlta) {
      notaMasAlta = alumno.calificaciones[i];
    }
  }
  
  // Clasificamos según la nota más alta
  let clasificacion = "";
  
  switch (true) {
    case (notaMasAlta >= 9 && notaMasAlta <= 10):
      clasificacion = "A";
      break;
    case (notaMasAlta >= 7 && notaMasAlta < 9):
      clasificacion = "B";
      break;
    case (notaMasAlta >= 5 && notaMasAlta < 7):
      clasificacion = "C";
      break;
    case (notaMasAlta >= 0 && notaMasAlta < 5):
      clasificacion = "D";
      break;
    default:
      clasificacion = "Nota inválida";
  }
  
  // Mostramos el resultado en la pantalla
  document.writeln("<h2>Información del alumno</h2>");
  document.writeln("<p><strong>Nombre:</strong> " + alumno.nombre + "</p>");
  document.writeln("<p><strong>Curso:</strong> " + alumno.curso + "</p>");
  document.writeln("<p><strong>Calificaciones:</strong> " + alumno.calificaciones.join(", ") + "</p>");
  document.writeln("<p><strong>Nota más alta:</strong> " + notaMasAlta + "</p>");
  document.writeln("<p><strong>Clasificación:</strong> " + clasificacion + "</p>");