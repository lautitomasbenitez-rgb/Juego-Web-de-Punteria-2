const objetivo = document.getElementById('objetivo');
const pantalla = document.getElementById('pantalla');
const textopuntos = document.getElementById('puntos');
const textovidas = document.getElementById('vidas');

let puntos = 0;
let vidas = 3;

function mover() {
  
    const x = Math.floor(Math.random() * (pantalla.offsetWidth - 100));
    const y = Math.floor(Math.random() * (pantalla.offsetHeight - 100));

    objetivo.style.left = x + "px";
    objetivo.style.top = y + "px";
}


function mover() {
    const x = Math.floor(Math.random() * (pantalla.offsetWidth - 100));
    const y = Math.floor(Math.random() * (pantalla.offsetHeight - 100));

    objetivo.style.left = x + "px";
    objetivo.style.top = y + "px";
}

setInterval(mover, 1000);

objetivo.addEventListener('click', function(e){
 
    e.stopPropagation();

    puntos = puntos + 1;

    textopuntos.innerText = puntos; 

    mover();
});


objetivo.addEventListener('click', function(e){
    e.stopPropagation();

    puntos = puntos + 1;
    textopuntos.innerText = puntos;


    mover();
});

pantalla.addEventListener('click', function(){

    vidas = vidas -1;

    textovidas.innerText = vidas;

    if(vidas <= 0) {
        alert("perdiste");
        location.reload();
    }
});