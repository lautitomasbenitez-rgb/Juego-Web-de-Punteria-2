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

// mover cada 1 segundo
setInterval(mover, 1000);

// click en objetivo (sumar puntos)
objetivo.addEventListener('click', function(e){
    e.stopPropagation();

    puntos++;
    textopuntos.innerText = puntos;

    mover();
});

// click fuera (perder vida)
pantalla.addEventListener('click', function(){

    vidas--;
    textovidas.innerText = vidas;

    pantalla.classList.add('dano');

    setTimeout(() => {
        pantalla.classList.remove('dano');
    }, 200);

    if(vidas <= 0) {
        alert("perdiste");
        location.reload();
    }
});