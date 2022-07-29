let boton=document.getElementById("convertir")
let resultado=document.getElementById("resultado")




boton.addEventListener('click',hacerConversiòn)

function hacerConversiòn(){
    let n1=parseInt(document.getElementById("n1").value)

let a=n1*1000
let b=n1*100
let c=n1*10
let d=n1/10
let e=n1/100
let f=n1/1000






r1.innerHTML=`Metro a milimetro:${a}mm`
r2.innerHTML=`Metro a centimetro:${b}cm`
r3.innerHTML=`Metro a decimetro:${c}dm`
r4.innerHTML=`Metro a decametro:${d}dm`
r5.innerHTML=`Metro a hectometro:${e}hm`
r6.innerHTML=`Metro a kilometro:${f}km`
}

//resultado.textContent=resultado;





