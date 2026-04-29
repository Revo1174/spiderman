// --- LÓGICA 1: IF / ELSE (Temperatura > 30) ---
let peligroActivo = false;

function activarSentidoAracnido() {
    peligroActivo = !peligroActivo; 

    const panel = document.querySelector(".dangerous-panel");
    const burbuja = document.getElementById("burbuja-sentido");
    
    if (peligroActivo) { 
        burbuja.innerHTML = "¡Mi sentido aracnido! <br>¡Algo no está bien!";
        panel.classList.add("active-sense"); 
    } else { 
        burbuja.innerHTML = "Todo tranquilo... <br>Queens está a salvo, estoy bastante chill.";
        panel.classList.remove("active-sense"); 
    }
}

// --- LÓGICA 2: FOR (for i=0; i<5) ---
function dispararRedes() {
    const contenedor = document.getElementById("contenedor-redes");
    contenedor.innerHTML = ""; // Limpiamos redes anteriores

    const numeroDeRedes = 5; 

    for (let i = 0; i < numeroDeRedes; i++) {
        // SOLUCIÓN: Usamos la etiqueta <span> para meter un emoji en texto
        let nuevaRed = document.createElement("span");
        
        nuevaRed.innerHTML = "🕸️"; // Emoji de telaraña
        nuevaRed.style.fontSize = "45px"; // Hacemos el emoji grande
        nuevaRed.style.animation = "aparecer 0.2s ease";
        
        contenedor.appendChild(nuevaRed);
    }
}

// --- LÓGICA 3: SWITCH (switch fruta) ---
let idVillano = 0; 

function ciclarVillano() {
    idVillano = (idVillano + 1) % 3; 

    const imagen = document.getElementById("img-villano");
    const texto = document.getElementById("txt-villano");

    switch (idVillano) {
        case 0:
            // CORRECCIÓN: Rutas exactas igual a como están en tu carpeta
            imagen.src = "img/duende.png"; 
            texto.innerHTML = "OBJETIVO: Duende Verde";
            break;
        case 1:
            imagen.src = "img/venom.png"; 
            texto.innerHTML = "OBJETIVO: Venom";
            break;
        case 2:
            imagen.src = "img/doc.png"; 
            texto.innerHTML = "OBJETIVO: Doc Ock";
            break;
    }
}