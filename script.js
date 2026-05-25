// ====== CONSTANTES DE PANTALLAS ======
const pBienvenida = document.getElementById('pantalla-bienvenida');
const pRamas = document.getElementById('pantalla-ramas');
const pManada = document.getElementById('pantalla-manada');

// Pantallas Primer Rastro 
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

//Pantallas del Eje Cubil (Azul)
const pCubil = document.getElementById('pantalla-cubil');
const pMallaCubil = document.getElementById('pantalla-malla-cubil');
const pInsigniasCubil = document.getElementById('pantalla-insignias-cubil');

// ====== NAVEGACIÓN FLUJO INICIAL ======
document.getElementById('btn-inicio').onclick = function () {
  pBienvenida.classList.add('contenido-oculto');
  pRamas.classList.remove('contenido-oculto');
};

document.getElementById('btn-regresar-bienvenida').onclick = function () {
  pRamas.classList.add('contenido-oculto');
  pBienvenida.classList.remove('contenido-oculto');
};

document.getElementById('btn-ir-manada').onclick = function () {
  pRamas.classList.add('contenido-oculto');
  pManada.classList.remove('contenido-oculto');
};

function avisoDesarrollo() {
  alert("Sección en desarrollo:)) ");
}

document.getElementById('btn-regresar-ramas').onclick = function () {
  pManada.classList.add('contenido-oculto');
  pRamas.classList.remove('contenido-oculto');
};

// ====== NAVEGACIÓN INTERNA: RASTRO ======
document.querySelector('.btn-rastro').onclick = function () {
  pManada.classList.add('contenido-oculto');
  pRastro.classList.remove('contenido-oculto');
};

document.getElementById('btn-volver-manada-rastro').onclick = function () {
  pRastro.classList.add('contenido-oculto');
  pManada.classList.remove('contenido-oculto');
};

// ====== NAVEGACIÓN INTERNA: PANTANOS DEL NORTE ======
document.querySelector('.btn-pantanos').onclick = function () {
  pManada.classList.add('contenido-oculto');
  pPantanos.classList.remove('contenido-oculto');
};

document.getElementById('btn-malla-pantanos').onclick = function () {
  pPantanos.classList.add('contenido-oculto');
  pMallaPantanos.classList.remove('contenido-oculto');
};

document.getElementById('btn-insignias-pantanos').onclick = function () {
  pPantanos.classList.add('contenido-oculto');
  pInsigniasPantanos.classList.remove('contenido-oculto');
};

// Retornos de Pantanos
document.getElementById('btn-volver-pantanos').onclick = function () {
  pMallaPantanos.classList.add('contenido-oculto');
  pPantanos.classList.remove('contenido-oculto');
};

document.getElementById('btn-volver-pantanos-insignias').onclick = function () {
  pInsigniasPantanos.classList.add('contenido-oculto');
  pPantanos.classList.remove('contenido-oculto');
};

document.getElementById('btn-volver-manada-pantanos').onclick = function () {
  pPantanos.classList.add('contenido-oculto');
  pManada.classList.remove('contenido-oculto');
};

// ====== NAVEGACIÓN INTERNA: DEKKAN ======
document.querySelector('.btn-dekkan').onclick = function () {
  pManada.classList.add('contenido-oculto');
  pDekkan.classList.remove('contenido-oculto');
};

document.getElementById('btn-malla-dekkan').onclick = function () {
  pDekkan.classList.add('contenido-oculto');
  pMallaDekkan.classList.remove('contenido-oculto');
};

document.getElementById('btn-insignias-dekkan').onclick = function () {
  pDekkan.classList.add('contenido-oculto');
  pInsigniasDekkan.classList.remove('contenido-oculto');
};

// Retornos de Dekkan
document.querySelectorAll('#btn-volver-dekkan').forEach((btn) => {
  btn.onclick = function () {
    pMallaDekkan.classList.add('contenido-oculto');
    pDekkan.classList.remove('contenido-oculto');
  };
});

document.getElementById('btn-volver-dekkan-insignias').onclick = function () {
  pInsigniasDekkan.classList.add('contenido-oculto');
  pDekkan.classList.remove('contenido-oculto');
};

document.getElementById('btn-volver-manada-dekkan').onclick = function () {
  pDekkan.classList.add('contenido-oculto');
  pManada.classList.remove('contenido-oculto');
};

// ====== NAVEGACIÓN INTERNA: COLINAS DEL SEEONE ======
document.querySelector('.btn-colinas').onclick = function () {
  pManada.classList.add('contenido-oculto');
  pColinas.classList.remove('contenido-oculto');
};

document.getElementById('btn-malla-colinas').onclick = function () {
  pColinas.classList.add('contenido-oculto');
  pMallaColinas.classList.remove('contenido-oculto');
};

document.getElementById('btn-insignias-colinas').onclick = function () {
  pColinas.classList.add('contenido-oculto');
  pInsigniasColinas.classList.remove('contenido-oculto');
};

// Retornos de Colinas
document.getElementById('btn-volver-colinas').onclick = function () {
  pMallaColinas.classList.add('contenido-oculto');
  pColinas.classList.remove('contenido-oculto');
};

document.getElementById('btn-volver-colinas-insignias').onclick = function () {
  pInsigniasColinas.classList.add('contenido-oculto');
  pColinas.classList.remove('contenido-oculto');
};

document.getElementById('btn-volver-manada-colinas').onclick = function () {
  pColinas.classList.add('contenido-oculto');
  pManada.classList.remove('contenido-oculto');
};

// ====== NAVEGACIÓN INTERNA: CUBIL ======
document.querySelector('.btn-cubil').onclick = function () {
  pManada.classList.add('contenido-oculto');
  pCubil.classList.remove('contenido-oculto');
};

document.getElementById('btn-malla-cubil').onclick = function () {
  pCubil.classList.add('contenido-oculto');
  pMallaCubil.classList.remove('contenido-oculto');
};

document.getElementById('btn-insignias-cubil').onclick = function () {
  pCubil.classList.add('contenido-oculto');
  pInsigniasCubil.classList.remove('contenido-oculto');
};

// Retornos de Cubil
document.getElementById('btn-volver-cubil').onclick = function () {
  pMallaCubil.classList.add('contenido-oculto');
  pCubil.classList.remove('contenido-oculto');
};

document.getElementById('btn-volver-cubil-insignias').onclick = function () {
  pInsigniasCubil.classList.add('contenido-oculto');
  pCubil.classList.remove('contenido-oculto');
};

document.getElementById('btn-volver-manada-cubil').onclick = function () {
  pCubil.classList.add('contenido-oculto');
  pManada.classList.remove('contenido-oculto');
};
