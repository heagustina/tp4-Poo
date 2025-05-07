/*
10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, 
el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información 
en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. 
Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, 
caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. 
Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

*/


class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.pasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.pasajeros.length < this.capacidad) {
        this.pasajeros.push(pasajero);
        alert(`Pasajero ${pasajero} abordó el avión ${this.nombre}.`);
      } else {
        alert(`El avión ${this.nombre} está lleno. No se puede abordar.`);
      }
    }
  
    mostrarInfo() {
      let info = `Avión: ${this.nombre}\nDestino: ${this.destino}\nCapacidad: ${this.capacidad}\nPasajeros a bordo: ${this.pasajeros.join(', ') || "Ninguno"}`;
      alert(info);
    }
  }
  
  // Clase Aeropuerto
  class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaAviones.push(avion);
      alert(`Avión ${avion.nombre} agregado al aeropuerto ${this.nombreAeropuerto}.`);
    }
  
    buscarAvion(nombreAvion) {
      const avionEncontrado = this.listaAviones.find(avion => avion.nombre === nombreAvion);
      if (avionEncontrado) {
        alert(`Avión encontrado: ${nombreAvion}`);
        avionEncontrado.mostrarInfo();
        return avionEncontrado;
      } else {
        alert(`Avión ${nombreAvion} no encontrado en el aeropuerto.`);
        return null;
      }
    }
  }
  
  // Crear aeropuerto
  const aeropuerto = new Aeropuerto("Aeropuerto Internacional");
  
  // Crear y agregar 3 aviones
  const avion1 = new Avion("Águila", 2, "Madrid");
  const avion2 = new Avion("Cóndor", 3, "Nueva York");
  const avion3 = new Avion("Fénix", 1, "Tokio");
  
  aeropuerto.agregarAvion(avion1);
  aeropuerto.agregarAvion(avion2);
  aeropuerto.agregarAvion(avion3);
  
  // Buscar avión
  const nombreAvionBuscar = prompt("¿Qué avión quieres buscar? (Águila, Cóndor, Fénix):");
  const avionSeleccionado = aeropuerto.buscarAvion(nombreAvionBuscar);
  
  // Abordar pasajeros si el avión fue encontrado
  if (avionSeleccionado) {
    let continuar = true;
    while (continuar) {
      const nombrePasajero = prompt("Ingresa el nombre del pasajero (o escribe 'salir' para terminar):");
      if (nombrePasajero.toLowerCase() === 'salir') {
        continuar = false;
      } else {
        avionSeleccionado.abordar(nombrePasajero);
      }
    }
  
    // Mostrar información final del avión
    avionSeleccionado.mostrarInfo();
  }