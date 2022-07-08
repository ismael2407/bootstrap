console.log("Buenas :)");
let edad=17;
/*
variables (Cambia)
constantes (No cambia)
*/

//defino o declaro constante//

const mensaje =document.getElementById('mensaje')

console.log(mensaje);


//seleccionamos mensaje y le agregamos o cambiamos el contenido

mensaje.textContent ="DOU";


//eliminar clases
mensaje.classList.remove('bg-primary')


//selecciono el boton

const boton=document.getElementById('boton');

//escuhcar un evento especifico

boton.addEventListener('click', mostrarFondo)

function mostrarFondo(){
    console.log("click");
    mensaje.classList.add('bg-success')
}



//Agregar una clase de css
//mensaje.classList.add('text-center' ,'bg-warning');

//funcion
function mostrarTexto(e){ 
    console.log(e);
}
//invocacion de la funcion


mostrarTexto(edad);
