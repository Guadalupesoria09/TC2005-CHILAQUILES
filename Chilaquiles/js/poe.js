const boton_preparar = document.getElementById('boton_chilaquiles');
const boton_verde = document.getElementById('boton_salsa_verde');
const boton_rojo = document.getElementById('boton_salsa_roja');
const boton_suerte = document.getElementById('boton_suerte');

const chilaquiles = [
    {
        descripcion: "Chilaquiles en salsa verde", 
        imagen: "https://cdn7.kiwilimon.com/recetaimagen/1626/3018.jpg",
    },
    {
        descripcion: "Chilaquiles en salsa roja", 
        imagen: "https://tse1.mm.bing.net/th?id=OIP.zJcG6SrXwgYRermppNlwJAHaFA&pid=Api&P=0&h=180",
    },
    {
        descripcion: "Chilaquiles con salsa roja y verde", 
        imagen: "https://cdn2.actitudfem.com/media/files/styles/big_img/public/images/2013/09/chilaquiles1.jpg",
    },
    {
        descripcion: "Chilaquiles con mole", 
        imagen: "https://cdn7.kiwilimon.com/recetaimagen/14501/960x640/6890.jpg.jpg",
    },
]

boton_preparar.onclick = () => {
    const imagen = document.getElementById('imagen_chilaquiles');
    imagen.alt = "Imagen de plato con totopos";
    imagen.src = "https://tse3.mm.bing.net/th?id=OIP.5uXhN-RPP0SsaKA2_hqZZAHaEK&pid=Api&P=0&h=100";
    boton_preparar.style = "display:none";
    boton_verde.style = "display:inline";
    boton_rojo.style = "display:inline";
    boton_suerte.style = "display:inline";
}

boton_verde.onclick = () => {
    const imagen = document.getElementById('imagen_chilaquiles');
    imagen.alt = chilaquiles[0].descripcion;
    imagen.src = chilaquiles[0].imagen;
    boton_verde.style = "display:none";
    boton_rojo.style = "display:none";
    boton_suerte.style = "display:none";
}

boton_rojo.onclick = () => {
    const imagen = document.getElementById('imagen_chilaquiles');
    imagen.alt = chilaquiles[1].descripcion;
    imagen.src = chilaquiles[1].imagen;
    boton_verde.style = "display:none";
    boton_rojo.style = "display:none";
    boton_suerte.style = "display:none";
}
boton_suerte.onclick = () => {
    const imagen = document.getElementById('imagen_chilaquiles');
    const num_chilaquiles = Math.floor(Math.random() * 3);
    imagen.alt = chilaquiles[num_chilaquiles].descripcion;
    imagen.src = chilaquiles[num_chilaquiles].imagen;
    boton_verde.style = "display:none";
    boton_rojo.style = "display:none";
}