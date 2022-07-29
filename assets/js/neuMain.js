let botonCambiar = document.getElementById('cambiar')
let color = document.getElementById('color')
let parrafo = document.getElementById('parrafo')

function cambiarColor(){
   parrafo.style.color = color.value;
}

function cambiarColorEnter(event){
    if (event.key === 'Enter'){
        parrafo.style.color = color.value;
    }
}

 botonCambiar.addEventListener('click', cambiarColor);

 color.addEventListener('keypress', (event)=>cambiarColorEnter(event))
 color.addEventListener('blur', ()=>alert('te saliste del input'))