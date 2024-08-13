const boton_preparar = document.getElementById('boton_chilaquiles');
const boton_verde = document.getElementById('boton_salsa_verde');
const boton_rojo = document.getElementById('boton_salsa_roja');

boton_preparar.onclick = () => {
    const imagen = document.getElementById('imagen_chilaquiles');
    imagen.alt = "Imagen de plato con totopos";
    imagen.src = "https://tse3.mm.bing.net/th?id=OIP.5uXhN-RPP0SsaKA2_hqZZAHaEK&pid=Api&P=0&h=100";
    boton_preparar.style = "display:none";
    boton_verde.style = "display:inline";
    boton_rojo.style = "display:inline";
}

boton_verde.onclick = () => {
    const imagen = document.getElementById('imagen_chilaquiles');
    imagen.alt = "Chilaquiles en salsa verde";
    imagen.src = "https://cdn7.kiwilimon.com/recetaimagen/1626/960x640/3018.jpg.jpg";
    boton_verde.style = "display:none";
    boton_rojo.style = "display:none";
}

boton_rojo.onclick = () => {
    const imagen = document.getElementById('imagen_chilaquiles');
    imagen.alt = "Chilaquiles en salsa roja";
    imagen.src = "https://tse1.mm.bing.net/th?id=OIP.zJcG6SrXwgYRermppNlwJAHaFA&pid=Api&P=0&h=180";
    boton_verde.style = "display:none";
    boton_rojo.style = "display:none";
}