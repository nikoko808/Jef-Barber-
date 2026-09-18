const boton =
document.getElementById("BotonContacto");
const contacto =
document.getElementById("contacto")

let posicionAnterior = window.scrollY;

window.addEventListener("scroll",function(){
    
    const posicionContacto =
    contacto.getBoundingClientRect().top;
    const alturaPantalla = window.innerHeight;

    if(posicionContacto<alturaPantalla){
        boton.classList.add("oculto");
    }else if(window.scrollY>posicionAnterior){
        boton.classList.add("oculto");
    }else{
        boton.classList.remove("oculto");
    }
    posicionAnterior = window.scrollY;
});


