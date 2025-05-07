/*
Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (un array de strings). 
Luego, escribe una función que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona. 
Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt para ingresar los datos de la persona y el nuevo hobby.

*/

// Pedimos al usuario que ingrese los datos de la persona
function ingresarDatosPersona() {
    let nombre = prompt("Ingresa el nombre de la persona:");
    let edad = parseInt(prompt("Ingresa la edad de la persona:"));
    let hobbiesIniciales = prompt("Ingresa los hobbies iniciales separados por comas:").split(",");
    
    return {
      nombre: nombre,
      edad: edad,
      hobbies: hobbiesIniciales.map(hobby => hobby.trim())
    };
  }
  
  // Función para añadir un nuevo hobby a la lista de hobbies
  function agregarHobby(persona, nuevoHobby) {
    persona.hobbies.push(nuevoHobby);
  }
  
  // Función para mostrar los hobbies en la pantalla
  function mostrarHobbies(persona) {
    let hobbiesDiv = document.createElement("div");
    hobbiesDiv.innerHTML = `<h2>Hobbies de ${persona.nombre}:</h2><ul>`;
    
    // Usamos un bucle para recorrer los hobbies e imprimirlos
    for (let i = 0; i < persona.hobbies.length; i++) {
      hobbiesDiv.innerHTML += `<li>${persona.hobbies[i]}</li>`;
    }
    
    hobbiesDiv.innerHTML += "</ul>";
    document.body.appendChild(hobbiesDiv);
  }
  
  // Ingresamos los datos de la persona
  let persona = ingresarDatosPersona();
  
  // Pedimos un nuevo hobby y lo añadimos a la lista
  let nuevoHobby = prompt("Ingresa un nuevo hobby para la persona:");
  agregarHobby(persona, nuevoHobby);
  
  // Mostramos los hobbies en la pantalla
  mostrarHobbies(persona);