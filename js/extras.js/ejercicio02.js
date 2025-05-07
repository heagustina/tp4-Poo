/*
Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota. 
Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. 
Usa un bucle para recorrer el array. Usa prompt para ingresar los datos de los estudiantes.
*/

function ingresarEstudiantes() {
    let estudiantes = [];
    let cantidadEstudiantes = parseInt(prompt("¿Cuántos estudiantes deseas ingresar?"));
    
    for (let i = 0; i < cantidadEstudiantes; i++) {
      let nombre = prompt(`Ingresa el nombre del estudiante #${i + 1}:`);
      let nota = parseFloat(prompt(`Ingresa la nota de ${nombre}:`));
      
      estudiantes.push({
        nombre: nombre,
        nota: nota
      });
    }
  
    return estudiantes;
  }
  
  // Función para calcular la nota media de los estudiantes
  function calcularNotaMedia(estudiantes) {
    let sumaNotas = 0;
  
    // Bucle para recorrer el array y sumar las notas
    for (let i = 0; i < estudiantes.length; i++) {
      sumaNotas += estudiantes[i].nota;
    }
  
    // Calcular la media
    let media = sumaNotas / estudiantes.length;
    return media;
  }
  
  // Función para mostrar el resultado en la pantalla
  function mostrarResultado(mediaNotas) {
    let resultadoDiv = document.createElement("div");
    resultadoDiv.innerHTML = `<h2>La nota media de los estudiantes es: ${mediaNotas.toFixed(2)}</h2>`;
    document.body.appendChild(resultadoDiv);
  }
  
  // Ingresamos los estudiantes
  let estudiantes = ingresarEstudiantes();
  
  // Calculamos la media de las notas
  let mediaNotas = calcularNotaMedia(estudiantes);
  
  // Mostramos el resultado en la pantalla
  mostrarResultado(mediaNotas);