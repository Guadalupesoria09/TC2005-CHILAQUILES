const db = require('../util/database');

module.exports = class Chilaquiles {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_descripcion, mi_imagen) {
        this.descripcion = mi_descripcion;
        this.imagen = mi_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO chilaquiles(descripcion, imagen) VALUES(?, ?)', 
            [this.descripcion, this.imagen]);
        }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return chilaquiles;
        return db.execute('SELECT * FROM chilaquiles');
    }

    static fetchOne(id) {
    return db.execute('SELECT * FROM chilaquiles WHERE id = ?', [id]);
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }
}