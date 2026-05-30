// ====== FUNCIÓN MAESTRA DE NAVEGACIÓN ======
// Esta función oculta una pantalla, muestra la otra y reinicia el scroll arriba
function navegar(pantallaOcultar, pantallaMostrar) {
  pantallaOcultar.classList.add('contenido-oculto');
  pantallaMostrar.classList.remove('contenido-oculto');
  
  // Triple método para asegurar que el scroll suba en cualquier navegador
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function avisoDesarrollo() {
  alert("Sección en desarrollo:)) ");
}

// ====== CONSTANTES DE PANTALLAS ======
const pBienvenida = document.getElementById('pantalla-bienvenida');
const pRamas = document.getElementById('pantalla-ramas');
const pBGral = document.getElementById('pantalla-bgral');


//MANADA
const pManada = document.getElementById('pantalla-manada');

//Pantalla Primer Rastro
const pRastro = document.getElementById('pantalla-rastro');

// Pantallas del Eje Pantanos (Verde)
const pPantanos = document.getElementById('pantalla-pantanos');
const pMallaPantanos = document.getElementById('pantalla-malla');
const pInsigniasPantanos = document.getElementById('pantalla-insignias');

// Pantallas del Eje Dekkan (Rosa)
const pDekkan = document.getElementById('pantalla-dekkan');
const pMallaDekkan = document.getElementById('pantalla-malla-dekkan');
const pInsigniasDekkan = document.getElementById('pantalla-insignias-dekkan');

// Pantallas del Eje Colinas (Naranja)
const pColinas = document.getElementById('pantalla-colinas');
const pMallaColinas = document.getElementById('pantalla-malla-colinas');
const pInsigniasColinas = document.getElementById('pantalla-insignias-colinas');

// Pantallas del Eje Cubil (Azul)
const pCubil = document.getElementById('pantalla-cubil');
const pMallaCubil = document.getElementById('pantalla-malla-cubil');
const pInsigniasCubil = document.getElementById('pantalla-insignias-cubil');

//Pantalla Insignias finales
const pEnlace = document.getElementById('pantalla-enlace');

//Pantalla Juego
const pJuego = document.getElementById('pantalla-juego');
const pUniforme = document.getElementById('pantalla-uniforme');

//Pantalla Bibliografia
const pBibliografia = document.getElementById('pantalla-bibliografia');

// ====== NAVEGACIÓN FLUJO INICIAL ======
document.getElementById('btn-inicio').onclick = function () {
  navegar(pBienvenida, pRamas);
};

document.getElementById('btn-regresar-bienvenida').onclick = function () {
  navegar(pRamas, pBienvenida);
};

//NAVEGACION BIBLIOGRAFIA
document.querySelector('.btn-bgral').onclick = function () {
  navegar(pRamas, pBGral);
};

// Botón de regreso
document.getElementById('btn-volver-ramas-bgral').onclick = function () {
  navegar(pBGral, pRamas);

};

document.getElementById('btn-ir-manada').onclick = function () {
  navegar(pRamas, pManada);
};

document.getElementById('btn-regresar-ramas').onclick = function () {
  navegar(pManada, pRamas);
};

// NAVEGACION Y FUNCION RASTRO
function revelarInsignia(insigniaId, btnId) {
  const insignia = document.getElementById(insigniaId);
  const boton = document.getElementById(btnId);
  
  if (insignia && boton) {
      // Muestra la insignia
      insignia.classList.add('mostrar-insignia');
      // Oculta el botón suavemente
      //boton.style.display = 'none';
  }
}

document.querySelector('.btn-rastro').onclick = function () {
  navegar(pManada, pRastro);
};

// Botón de regreso
document.getElementById('btn-volver-manada-rastro').onclick = function () {
  navegar(pRastro, pManada);
};

// ====== NAVEGACIÓN INTERNA: PANTANOS DEL NORTE ======
document.querySelector('.btn-pantanos').onclick = function () {
  navegar(pManada, pPantanos);
};

document.getElementById('btn-malla-pantanos').onclick = function () {
  navegar(pPantanos, pMallaPantanos);
};

document.getElementById('btn-insignias-pantanos').onclick = function () {
  navegar(pPantanos, pInsigniasPantanos);
};

// Retornos de Pantanos
document.getElementById('btn-volver-pantanos').onclick = function () {
  navegar(pMallaPantanos, pPantanos);
};

document.getElementById('btn-volver-pantanos-insignias').onclick = function () {
  navegar(pInsigniasPantanos, pPantanos);
};

document.getElementById('btn-volver-manada-pantanos').onclick = function () {
  navegar(pPantanos, pManada);
};

// ====== NAVEGACIÓN INTERNA: DEKKAN ======
document.querySelector('.btn-dekkan').onclick = function () {
  navegar(pManada, pDekkan);
};

document.getElementById('btn-malla-dekkan').onclick = function () {
  navegar(pDekkan, pMallaDekkan);
};

document.getElementById('btn-insignias-dekkan').onclick = function () {
  navegar(pDekkan, pInsigniasDekkan);
};

// Retornos de Dekkan (Usando clase si hay varios, o ID único)
document.querySelectorAll('#btn-volver-dekkan').forEach((btn) => {
  btn.onclick = function () {
    navegar(pMallaDekkan, pDekkan);
  };
});

document.getElementById('btn-volver-dekkan-insignias').onclick = function () {
  navegar(pInsigniasDekkan, pDekkan);
};

document.getElementById('btn-volver-manada-dekkan').onclick = function () {
  navegar(pDekkan, pManada);
};

// ====== NAVEGACIÓN INTERNA: COLINAS DEL SEEONE ======
document.querySelector('.btn-colinas').onclick = function () {
  navegar(pManada, pColinas);
};

document.getElementById('btn-malla-colinas').onclick = function () {
  navegar(pColinas, pMallaColinas);
};

document.getElementById('btn-insignias-colinas').onclick = function () {
  navegar(pColinas, pInsigniasColinas);
};

// Retornos de Colinas
document.getElementById('btn-volver-colinas').onclick = function () {
  navegar(pMallaColinas, pColinas);
};

document.getElementById('btn-volver-colinas-insignias').onclick = function () {
  navegar(pInsigniasColinas, pColinas);
};

document.getElementById('btn-volver-manada-colinas').onclick = function () {
  navegar(pColinas, pManada);
};

// ====== NAVEGACIÓN INTERNA: CUBIL ======
document.querySelector('.btn-cubil').onclick = function () {
  navegar(pManada, pCubil);
};

document.getElementById('btn-malla-cubil').onclick = function () {
  navegar(pCubil, pMallaCubil);
};

document.getElementById('btn-insignias-cubil').onclick = function () {
  navegar(pCubil, pInsigniasCubil);
};

// Retornos de Cubil
document.getElementById('btn-volver-cubil').onclick = function () {
  navegar(pMallaCubil, pCubil);
};

document.getElementById('btn-volver-cubil-insignias').onclick = function () {
  navegar(pInsigniasCubil, pCubil);
};

document.getElementById('btn-volver-manada-cubil').onclick = function () {
  navegar(pCubil, pManada);
};

//NAVEGACION ENLACE
document.querySelector('.btn-enlace').onclick = function () {
  navegar(pManada, pEnlace);
};

// Botón de regreso
document.getElementById('btn-volver-manada-enlace').onclick = function () {
  navegar(pEnlace, pManada);

};

//NAVEGACION INTERNA JUEGO
document.querySelector('.btn-juego').onclick = function () {
  navegar(pManada, pJuego);
};

// Botón de regreso
document.getElementById('btn-volver-manada-juego').onclick = function () {
  navegar(pJuego, pManada);
};
// --- LÓGICA DE ARRASTRE GLOBAL (Funciona para cualquier juego) ---
document.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('pieza-insignia')) {
        e.dataTransfer.setData('idPieza', e.target.id);
    }
});

document.addEventListener('dragover', (e) => {
    if (e.target.closest('.zona-drop')) {
        e.preventDefault();
    }
});

document.addEventListener('drop', (e) => {
    const zona = e.target.closest('.zona-drop');
    if (zona) {
        e.preventDefault();
        const id = e.dataTransfer.getData('idPieza');
        const pieza = document.getElementById(id);
        if (pieza) {
            zona.appendChild(pieza);
            // Ajuste visual para que se vea bien en la camisola
            pieza.style.width = "100%";
            pieza.style.height = "100%";
        }
    }
});

// --- VALIDACIÓN MEJORADA (Evita confusiones entre juegos) ---
function ejecutarValidacionJuego() {
    // BUSCAMOS SOLO DENTRO DE LA PANTALLA QUE NO ESTÁ OCULTA
    const pantallaActiva = document.querySelector('.bienvenida-container:not(.contenido-oculto)');
    if (!pantallaActiva) return;

    const slots = pantallaActiva.querySelectorAll('.slot-juego');
    let aciertosTotales = 0;

    slots.forEach((slot) => {
        const categoriaCorrecta = slot.dataset.categoria;
        const objetivo = parseInt(slot.dataset.objetivo) || 1;
        const piezasEnZona = slot.querySelectorAll('.pieza-insignia');
        const palomita = slot.querySelector('.check-victoria');

        let aciertosEnEsteSlot = 0;
        piezasEnZona.forEach((p) => {
            if (p.dataset.correcta === categoriaCorrecta) {
                aciertosEnEsteSlot++;
            }
        });

        if (aciertosEnEsteSlot === objetivo && piezasEnZona.length === objetivo) {
            if (palomita) palomita.style.display = 'block';
            aciertosTotales++;
        } else {
            if (palomita) palomita.style.display = 'none';
        }
    });

    // Validamos solo contra los slots de la pantalla actual
    if (aciertosTotales === slots.length && slots.length > 0) {
        const btnTerminar = pantallaActiva.querySelector('#btn-terminar-juego');
        const opcionesFinales = pantallaActiva.querySelector('#opciones-finales');

        if (btnTerminar) btnTerminar.style.display = 'none';
        if (opcionesFinales) {
            opcionesFinales.classList.remove('contenido-oculto');
            opcionesFinales.style.display = 'block';
        }
    } else {
        alert("¡Cuidado Lobo! Revisa que todas las insignias estén en su lugar correcto.");
    }
}

// --- REINICIO ADAPTADO ---
function reiniciarTablero() {
    const pantallaActiva = document.querySelector('.bienvenida-container:not(.contenido-oculto)');
    const banco = pantallaActiva.querySelector('.piezas-flex');
    const piezas = pantallaActiva.querySelectorAll('.pieza-insignia');
    const palomitas = pantallaActiva.querySelectorAll('.check-victoria');
    const btnTerminar = pantallaActiva.querySelector('#btn-terminar-juego');
    const opcionesFinales = pantallaActiva.querySelector('#opciones-finales');

    if (banco && piezas.length > 0) {
        piezas.forEach(p => banco.appendChild(p));
    }
    palomitas.forEach(p => p.style.display = 'none');
    if (btnTerminar) btnTerminar.style.display = 'inline-block';
    if (opcionesFinales) {
        opcionesFinales.classList.add('contenido-oculto');
        opcionesFinales.style.display = 'none';
    }
}

// Listener de Clics (Se mantiene igual)
document.addEventListener('click', function (e) {
    if (e.target.closest('#btn-terminar-juego')) ejecutarValidacionJuego();
    if (e.target.closest('#btn-reintentar-juego')) reiniciarTablero();
});

document.querySelector('.btn-uniforme').onclick = function () {
  navegar(pJuego, pUniforme);
};

// Botón de regreso
document.getElementById('btn-volver-manada-uniforme').onclick = function () {
  navegar(pUniforme, pManada);
};


//NAVEGACION INTERNA BIBLIOGRAFIA
document.querySelector('.btn-bibliografia').onclick = function () {
  navegar(pManada, pBibliografia);
};

// Botón de regreso
document.getElementById('btn-volver-manada-bibliografia').onclick = function () {
  navegar(pBibliografia, pManada);
};