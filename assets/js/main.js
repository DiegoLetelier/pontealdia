let productos = []


function agregarProducto(producto) {
   let existe = productos.find((elemento) => (elemento.id === producto.id))
   if (!existe) {
      productos.push(producto)
      localStorage.setItem('misproductos', JSON.stringify(productos))
   }
}

function eliminarProducto(id) {
   productos = productos.filter((elemento)=>(elemento.id!==id))
   localStorage.setItem('misproductos', JSON.stringify(productos))
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