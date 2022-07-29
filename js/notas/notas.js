let boton=document.getElementById("sumar")
let resultado=document.getElementById("resultado")




boton.addEventListener('click',hacerSuma)

function hacerSuma(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    let n3=parseInt(document.getElementById("n3").value)
    let n4=parseInt(document.getElementById("n4").value)
let s=(n1+n2+n3+n4)/4


if(s>=7){
    resultado.classList.remove('bg-danger')
    resultado.classList.add('bg-success')

}
else{
    resultado.classList.remove('bg-success')
    resultado.classList.add('bg-danger')


}






resultado.innerHTML=`El promedio es ${s}`

}

//resultado.textContent=resultado;





