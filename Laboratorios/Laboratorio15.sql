CREATE DATABASE laboratorio15;

USE laboratorio15;

CREATE TABLE Materiales (
    Clave VARCHAR(50),
    Descripcion VARCHAR (300),
    Costo DECIMAL(10, 2),
    PRIMARY KEY (Clave)
);

CREATE TABLE Proveedores (
    RFC VARCHAR(13),
    RazonSocial VARCHAR(300),
    PRIMARY KEY (RFC)
);

CREATE TABLE Proyectos (
    Numero INT,
    Denominacion VARCHAR(300),
    PRIMARY KEY(Numero)
);

CREATE TABLE Entregan (
    Clave VARCHAR(50),
    RFC VARCHAR(13),
    Numero INT,
    Fecha DATE,
    Cantidad INT,
    PRIMARY KEY (Clave, RFC, Numero, Fecha),
    FOREIGN KEY (Clave) REFERENCES Materiales(Clave),
    FOREIGN KEY (RFC) REFERENCES Proveedores(RFC),
    FOREIGN KEY (Numero) REFERENCES Proyectos(Numero)
);
