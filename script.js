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
const pManada = document.getElementById('pantalla-manada');

//Pantalla Juego
const pJuego = document.getElementById('pantalla-juego');

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

// ====== NAVEGACIÓN FLUJO INICIAL ======
document.getElementById('btn-inicio').onclick = function () {
  navegar(pBienvenida, pRamas);
};

document.getElementById('btn-regresar-bienvenida').onclick = function () {
  navegar(pRamas, pBienvenida);
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
      boton.style.display = 'none';
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

//JUEGO
document.querySelector('.btn-juego').onclick = function () {
  navegar(pManada, pJuego);
};

// Botón de regreso
document.getElementById('btn-volver-manada-juego').onclick = function () {
  navegar(pJuego, pManada);
};
  // --- LÓGICA JUEGO ---
  const piezas = document.querySelectorAll('.pieza-insignia');
  const zonas = document.querySelectorAll('.zona-drop');

  piezas.forEach((p) => {
    p.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('idPieza', e.target.id);
    });
  });

  zonas.forEach((z) => {
    z.addEventListener('dragover', (e) => e.preventDefault());
    z.addEventListener('drop', (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData('idPieza');
      const pieza = document.getElementById(id);
      z.appendChild(pieza);
    });
  });

// ====== SECCIÓN: VALIDACIÓN DEL JUEGO ======

// Creamos la función por separado para que el código sea limpio
function ejecutarValidacionJuego() {
    const slots = document.querySelectorAll('.slot-juego');
    let totalSlots = slots.length;
    let aciertosTotales = 0;

    slots.forEach((slot) => {
        const categoriaCorrecta = slot.dataset.categoria;
        // Si no pusiste objetivo en el HTML, por defecto busca 2
        const objetivo = parseInt(slot.dataset.objetivo) || 2; 
        
        const piezasEnZona = slot.querySelectorAll('.pieza-insignia');
        const palomita = slot.querySelector('.check-victoria');

        let aciertosEnEsteSlot = 0;
        piezasEnZona.forEach((p) => {
            if (p.dataset.correcta === categoriaCorrecta) {
                aciertosEnEsteSlot++;
            }
        });

        // VALIDACIÓN: ¿Aciertos coinciden con el objetivo Y no hay basura extra?
        if (aciertosEnEsteSlot === objetivo && piezasEnZona.length === objetivo) {
            if (palomita) palomita.style.display = 'block';
            aciertosTotales++;
        } else {
            if (palomita) palomita.style.display = 'none';
        }
    });

    // --- ACCIONES FINALES ---
    const btnTerminar = document.getElementById('btn-terminar-juego');
    const opcionesFinales = document.getElementById('opciones-finales');

    // Ocultamos el botón que acabamos de presionar
    if (btnTerminar) btnTerminar.style.display = 'none';

    // Mostramos el menú de "Reintentar / Siguiente"
    if (opcionesFinales) {
        opcionesFinales.classList.remove('contenido-oculto');
        opcionesFinales.style.display = 'block'; // Asegura visibilidad
    }
}

// --- ESCUCHA DE CLIC SEGURA ---
// En lugar de btn.onclick, usamos esto para que funcione siempre:
document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'btn-terminar-juego') {
        ejecutarValidacionJuego();
    }
});

// ====== FUNCIÓN PARA REINICIAR EL TABLERO ======
function reiniciarTablero() {
    const banco = document.querySelector('.piezas-flex');
    const piezas = document.querySelectorAll('.pieza-insignia');
    const palomitas = document.querySelectorAll('.check-victoria');
    const btnTerminar = document.getElementById('btn-terminar-juego');
    const opcionesFinales = document.getElementById('opciones-finales');

    // 1. Validar que el banco existe
    if (!banco) {
        console.error("No se encontró el contenedor .piezas-flex");
        return;
    }

    // 2. Mover todas las piezas de vuelta al banco
    piezas.forEach(pieza => {
        banco.appendChild(pieza);
    });

    // 3. Limpiar palomitas y botones
    palomitas.forEach(p => p.style.display = 'none');
    
    if (btnTerminar) btnTerminar.style.display = 'inline-block';
    if (opcionesFinales) {
        opcionesFinales.classList.add('contenido-oculto');
        opcionesFinales.style.display = 'none';
    }
}

// ====== ESCUCHA DE CLICS GLOBAL (PARA AMBOS BOTONES) ======
document.addEventListener('click', function (e) {
    // Si hace clic en TERMINAR
    if (e.target && e.target.id === 'btn-terminar-juego') {
        ejecutarValidacionJuego();
    }
    
    // Si hace clic en REINTENTAR
    if (e.target && e.target.id === 'btn-reintentar-juego') {
        reiniciarTablero();
    }
});