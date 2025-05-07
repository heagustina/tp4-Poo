/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

*/

const cuenta = {
    titular: "Alex",
    saldo: 0,
  
    ingresar: function () {
      const monto = parseFloat(prompt("¿Cuánto deseas ingresar?"));
      if (isNaN(monto) || monto <= 0) {
        alert("Ingresa un monto válido mayor a 0.");
      } else {
        this.saldo += monto;
        alert(`Se ingresaron $${monto.toFixed(2)}.\nNuevo saldo: $${this.saldo.toFixed(2)}.`);
      }
    },
  
    extraer: function () {
      const monto = parseFloat(prompt("¿Cuánto deseas extraer?"));
      if (isNaN(monto) || monto <= 0) {
        alert("Ingresa un monto válido mayor a 0.");
      } else if (monto > this.saldo) {
        alert("Fondos insuficientes.");
      } else {
        this.saldo -= monto;
        alert(`Se extrajeron $${monto.toFixed(2)}.\nNuevo saldo: $${this.saldo.toFixed(2)}.`);
      }
    },
  
    informar: function () {
      alert(`Titular: ${this.titular}\nSaldo actual: $${this.saldo.toFixed(2)}`);
    }
  };
  
  // Flujo del programa
  cuenta.informar();  // Muestra estado inicial
  cuenta.ingresar();  // Pide monto a ingresar
  cuenta.extraer();   // Pide monto a extraer
  cuenta.informar();  // Muestra estado final