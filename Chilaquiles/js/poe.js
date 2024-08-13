const boton = document.getElementById('boton_chilaquiles');
boton.onclick = () => {
    const imagen = document.getElementById('imagen_chilaquiles');
    imagen.alt = "Imagen de plato con totopos";
    imagen.src = "https://tse3.mm.bing.net/th?id=OIP.5uXhN-RPP0SsaKA2_hqZZAHaEK&pid=Api&P=0&h=100";
}