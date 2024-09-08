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
];

module.exports = class Chilaquiles {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_descripcion, mi_imagen) {
        this.descripcion = mi_descripcion;
        this.imagen = mi_imagen;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        chilaquiles.push(this);
    }
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return chilaquiles;
    }
}
