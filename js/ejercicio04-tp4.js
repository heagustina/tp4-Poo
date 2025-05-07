/* 4- Escribe una clase Producto para crear objetos. 
Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, 
el cual escribe por pantalla los valores de sus propiedades.

Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

*/
// Definición de la clase Producto
class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    // Método para imprimir los datos del producto
    imprimeDatos() {
      alert("Código: " + this.codigo + "\nNombre: " + this.nombre + "\nPrecio: $" + this.precio.toFixed(2));
    }
  }
  
  // Crear tres instancias de Producto
  let producto1 = new Producto(1001, "Notebook", 3000000);
  let producto2 = new Producto(1008, "Celular", 1000000);
  let producto3 = new Producto(1023, "Auriculares", 250000);
  
  // Guardar los productos en un array
  let productos = [producto1, producto2, producto3];
  
  // Mostrar los datos de los productos utilizando el método imprimeDatos
  productos.forEach(producto => producto.imprimeDatos());