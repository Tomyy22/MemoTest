let iconos = [];
let select = [];

function establecerIconos() {
  iconos = [
    '<ion-icon name="bicycle-outline"></ion-icon>',
    '<ion-icon name="diamond-outline"></ion-icon>',
    '<ion-icon name="brush-outline"></ion-icon>',
    '<ion-icon name="basketball-outline"></ion-icon>',
    '<ion-icon name="american-football-outline"></ion-icon>',
    '<ion-icon name="alarm-outline"></ion-icon></i>',
    '<ion-icon name="airplane-outline"></ion-icon>',
    '<ion-icon name="accessibility-outline"></ion-icon>',
    '<ion-icon name="barbell-outline"></ion-icon>',
    '<ion-icon name="boat-outline"></ion-icon>',
    '<ion-icon name="cash-outline"></ion-icon>',
    '<ion-icon name="flame-outline"></ion-icon>',
    '<ion-icon name="earth-outline"></ion-icon>',
    '<ion-icon name="glasses-outline"></ion-icon>',
    '<ion-icon name="moon-outline"></ion-icon>',
    '<ion-icon name="paw-outline"></ion-icon>',
  ];
}


const tablero = document.getElementById("tablero");





function crearTablero(nivel) {
  establecerIconos();
  select = [];
  let tablero = document.getElementById("tablero");
  let cartas = [];
  for (let i = 0; i < nivel; i++) {
    cartas.push(`
        <div class="area-carta" onclick="seleccionarCarta(${i})">
            <div class="carta" id="carta${i}">
                <div class="cara reverso" id="reverso${i}">
                    ${iconos[0]}
                </div>
                <div class="cara superior">
                <ion-icon name="help-outline"></ion-icon>
                </div>
            </div>
        </div>        
        `);
        
    if (i % 2 == 1) {
      iconos.splice(0, 1);
    }
  }
  cartas.sort(() => Math.random() - 0.5);
  tablero.innerHTML = cartas.join(" ");

tablero.addEventListener('animationstart', function() {
  tablero.classList.add('no-click');
});

tablero.addEventListener('animationend', function() {
  tablero.classList.remove('no-click');
});
}
function seleccionarCarta(i) {
  let carta = document.getElementById("carta" + i);
  if (carta.style.transform != "rotateY(180deg)") {
    carta.style.transform = "rotateY(180deg)";
    select.push(i);
  }
  if (select.length == 2) {
    deseleccionar(select);
    select = [];
  }
}
var dificultad;
let cont = 0;

const facilEl = document.getElementById("facil");
const medioEl = document.getElementById("medio");
const dificilEl = document.getElementById("dificil");
const muydificilEl = document.getElementById("muy-dificil");
const newgameEl = document.getElementById("nuevo");

   newgameEl.onclick = function () {
    facilEl.style.display = "block" 
    medioEl.style.display = "block";
    dificilEl.style.display = "block";
    muydificilEl.style.display = "block";
    newgameEl.style.display = "none";
    cont = 0;
    contador = 0;
  };

facilEl.onclick = function () {
  crearTablero(8);
  dificultad = 1;
   facilEl.style.display = "none" 
   medioEl.style.display = "none";
   dificilEl.style.display = "none";
   muydificilEl.style.display = "none";
   newgameEl.style.display = "block";
   cont = 0;
   contador = 0;
};
medioEl.onclick = function () {
  crearTablero(16);
  dificultad = 2;
  facilEl.style.display = "none" 
  medioEl.style.display = "none";
  dificilEl.style.display = "none";
  muydificilEl.style.display = "none";
  newgameEl.style.display = "block";
  cont = 0;
  contador = 0;
};
dificilEl.onclick = function () {
  crearTablero(24);
  dificultad = 3;
  facilEl.style.display = "none" 
  medioEl.style.display = "none";
  dificilEl.style.display = "none";
  muydificilEl.style.display = "none";
  newgameEl.style.display = "block";
  cont = 0;
  contador = 0;
};
muydificilEl.onclick = function () {
  crearTablero(32);
  dificultad = 4;
  facilEl.style.display = "none" 
  medioEl.style.display = "none";
  dificilEl.style.display = "none";
  muydificilEl.style.display = "none";
  newgameEl.style.display = "block";
  cont = 0;
  contador = 0;
};

let contador = 0;

function deseleccionar(select) {
  setTimeout(() => {
    let reverso1 = document.getElementById("reverso" + select[0]);
    let reverso2 = document.getElementById("reverso" + select[1]);
    if (reverso1.innerHTML != reverso2.innerHTML) {
      let carta1 = document.getElementById("carta" + select[0]);
      let carta2 = document.getElementById("carta" + select[1]);
      carta1.style.transform = "rotateY(0deg)";
      carta2.style.transform = "rotateY(0deg)";
      contador++;
    } else {
      reverso1.style.background = "#50ffb1";
      reverso2.style.background = "#50ffb1";

      function mensajes(string){
        mensajeVictoria(string);
                mensajeContador(contador);
                h1.style.display = "block";
                conth1.style.display = "block";
                borrarContenido();
                cont = 0;
                contador = 0;
      }

      function mensajeVictoria(string) {
        let elemento = document.getElementById("victoria");
        elemento.innerHTML = `<h1>Ganaste${string}</h1>`;
      }
      function mensajeContador(contador) {
        let elemento = document.getElementById("contador-container");
        elemento.innerHTML = `<h1>Tuviste ${contador} Error/Errores `;
      }

      const h1 = document.getElementById("victoria");
      const conth1 = document.getElementById("contador-container");

      function borrarContenido() {
        let elemento = document.getElementById("victoria");
        let elemento2 = document.getElementById("contador-container");
        setTimeout(() => {
          elemento.style.display = "none";
          elemento2.style.display = "none";
        }, 5000);
      }
      cont++;
      if (dificultad == 1) {
        if (cont == 4) {
          mensajes(" Nivel Facil")
        }
      }
      if (dificultad == 2) {
        if (cont == 8) {
          mensajes(" Nivel Medio")
        }
      }
      if (dificultad == 3) {
        if (cont == 12) {
          mensajes(" Nivel Dificil")
        }
      }
      if (dificultad == 4) {
        if (cont == 16) {
          mensajes(" Nivel Muy Dificil")
        }
      }
    }
  }, 1000);
}




// mensajeVictoria(" Nivel Facil");
//           mensajeContador(contador);
//           h1.style.display = "block";
//           conth1.style.display = "block";
//           borrarContenido();
//           cont = 0;
//           contador = 0;