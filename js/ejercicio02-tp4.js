/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

*/

class Cuenta {
    constructor(titular) {
      this.titular = titular;
      this.saldo = 0;
    }

    ingresar(cantidad) {
      if (cantidad > 0) {
        this.saldo += cantidad;
        document.writeln(`Se ingresaron $${cantidad}<br>`);
      } else {
        document.writeln("Cantidad inválida para ingresar<br>");
      }
    }

    extraer(cantidad) {
      if (cantidad > 0 && cantidad <= this.saldo) {
        this.saldo -= cantidad;
        document.writeln(`Se extrajeron $${cantidad}<br>`);
      } else {
        document.writeln("Cantidad inválida o saldo insuficiente<br>");
      }
    }

    informar() {
      const info = `Titular: ${this.titular}, Saldo: $${this.saldo}`;
      document.writeln(info + "<br>");
      return info;
    }
  }

  // Crear el objeto cuenta
  const cuenta = new Cuenta("Alex");

  // Mostrar estado inicial
  cuenta.informar();

  // Ingresar y extraer dinero
  cuenta.ingresar(1000);
  cuenta.extraer(500);

  // Mostrar estado final
  cuenta.informar();