let productos = []


function agregarProducto(producto) {
   let existe = productos.find((elemento) => (elemento.id === producto.id))
   if (!existe) {
      productos.push(producto)
      localStorage.setItem('productos', JSON.stringify(productos))
   }
}

function eliminarProducto(id) {
   productos = productos.filter((elemento) => (elemento.id !== id))
   localStorage.setItem('productos', JSON.stringify(productos))
   console.log(productos)

}

function obtenerProductos() {
   let productosEnLS = localStorage.getItem('productos')
   if (productosEnLS !== null) {
      productos = JSON.parse(productosEnLS);
   }
   console.log(productos)

}

obtenerProductos()


// forEach option Editar Productos

function editarProductos(producto) {
   let { id, nombre, precio, descripcion } = producto;
   productos.forEach(elemento => {
      if (elemento.id === id) {
         elemento.nombre = nombre,
            elemento.precio = precio,
            elemento.descripcion = descripcion

      }

   })
   localStorage.setItem('productos', JSON.stringify(productos))
   console.log(productos)
}


// index option EditarProductos

function editarProductos2(producto) {
   // let {id} = producto; --->another option 
   let index = productos.findIndex(elemento => elemento.id === producto.id);
   productos.splice(index, 1);
   agregarProducto(producto)
   console.log(productos)
}

// filter option EditarProductos

function editarProductos3(producto) {
   productos = productos.filter(elemento=>elemento.id !== producto.id)
   agregarProducto(producto)
   console.log(productos)
}

// sort products by number item

function ordenarProductos(){
   productos.sort((a,b)=>a.precio-b.precio)
   console.log(productos) 
}

// sort products on alphabetic order

 function ordenarProductos2(){
   productos.sort((a,b)=>a.nombre.localeCompare(b.nombre))
   console.log(productos)
 }













/*
let producto = {
   id: 1,
   nombre: 'Bateria',
   precio: 100000,
   descripcion: 'suena perfecto',
}
*/