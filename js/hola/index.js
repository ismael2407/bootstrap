const mensaje =document.getElementById('mensaje')

const titulo =document.getElementById('titulo')


console.log(mensaje)



const boton1=document.getElementById('boton-1');
const boton2=document.getElementById('boton-2');
const boton3=document.getElementById('boton-3');



boton1.addEventListener('click', mostrarFondo1)

function mostrarFondo1(){
    console.log("click");
    mensaje.classList.add('bg-dark','text-light')
    mensaje.classList.remove('bg-secondary')
    mensaje.classList.remove('bg-warning')

}




boton2.addEventListener('click', mostrarFondo2)

function mostrarFondo2(){
    console.log("click");
    mensaje.classList.add('bg-secondary','text-warning')
    mensaje.classList.remove('bg-dark')
    mensaje.classList.remove('bg-warning')
    mensaje.classList.remove('text-light')

}




boton3.addEventListener('click', mostrarFondo3)

function mostrarFondo3(){
    console.log("click");
    mensaje.classList.add('bg-warning','text-danger')
    mensaje.classList.remove('bg-secondary')
    mensaje.classList.remove('bg-dark')
    mensaje.classList.remove('text-light')

}



