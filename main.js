let productos = [];
let i = 0; 

function cuantosproductos() {
    const cproductos = parseInt(prompt("¿Cuántos productos deseas ingresar?"), 10);   
    while (i < cproductos) { 
        const nombreproducto = prompt("Ingrese el nombre del producto");
        const precioproducto = parseInt(prompt("Ingrese el precio del producto"));
        let producto = { 
            nprod: i + 1, 
            nom: nombreproducto, 
            prec: precioproducto 
        };
        productos.push(producto); 
        i++; 
    }
}

function mostrarcarrito() {
    console.log("Productos ingresadops:");
    i = 0; 
    while (i < productos.length) { 
        let producto = productos[i];
        console.log(producto.nprod + "." + producto.nom + ", $" + producto.prec);
        i++; 
    }
  }

  function calculartotal() {
    let total=0;
    i = 0;
    while (i < productos.length) { 
      let producto = productos[i];
      let precioDelProducto = producto.prec;
      total = total + precioDelProducto;
      i++; 
    }
    console.log("Costo total de todos los productos: $" + total);
  }

cuantosproductos();
mostrarcarrito();
calculartotal();

