let boton=document.getElementById("sumar")
let resultado=document.getElementById("resultado")



boton.addEventListener('click',hacerSuma)

function hacerSuma(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
let s=n1+n2

resultado.innerHTML=`la suma es ${s}`

}

//resultado.textContent=resultado;







