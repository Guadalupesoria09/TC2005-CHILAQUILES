CREATE DATABASE FunAgre;
USE FunAgre;

CREATE TABLE Película (
    título VARCHAR(100),
    año INT,
    duración INT,
    encolor BOOLEAN,
    presupuesto DECIMAL(15, 2),
    nomestudio VARCHAR(150),
    idproductor INT,
    PRIMARY KEY (título, año)
);

CREATE TABLE Elenco (
    título VARCHAR(100),
    año INT,
    nombre VARCHAR(100),
    sueldo DECIMAL(15, 2),
    PRIMARY KEY (título, año, nombre),
    FOREIGN KEY (título, año) REFERENCES Película(título, año)
);

CREATE TABLE Actor (
    nombre VARCHAR(100),
    dirección VARCHAR(250),
    telefono VARCHAR(12),
    fechanacimiento DATE,
    sexo CHAR(1),
    PRIMARY KEY (nombre)
);

CREATE TABLE Productor (
    idproductor INT,
    nombre VARCHAR(100),
    dirección VARCHAR(150),
    teléfono VARCHAR(12),
    PRIMARY KEY (idproductor)
);

CREATE TABLE Estudio (
    nomestudio VARCHAR(150),
    dirección VARCHAR(200),
    PRIMARY KEY (nomestudio)
);

-- Consultas

-- 1. Ingreso total recibido por cada actor, sin importar en cuántas películas haya participado
SELECT 
    a.nombre AS Nombre_Actor, 
    SUM(e.sueldo) AS Ingreso_Total
FROM 
    Actor a
JOIN 
    Elenco e ON a.nombre = e.nombre
GROUP BY 
    a.nombre;

-- 2. Monto total destinado a películas por cada Estudio Cinematográfico, durante la década de los 80's
SELECT 
    es.nomestudio AS Nombre_Estudio, 
    SUM(p.presupuesto) AS Monto_Total_Peliculas
FROM 
    Estudio es
JOIN 
    Película p ON es.nomestudio = p.nomestudio
WHERE 
    p.año BETWEEN 1980 AND 1989
GROUP BY 
    es.nomestudio;

-- 3. Nombre y sueldo promedio de los actores (sólo hombres) que reciben en promedio un pago superior a 5 millones de dólares por película
SELECT 
    a.nombre AS Nombre_Actor, 
    AVG(e.sueldo) AS Sueldo_Promedio
FROM 
    Actor a
JOIN 
    Elenco e ON a.nombre = e.nombre
WHERE 
    a.sexo = 'M'
GROUP BY 
    a.nombre
HAVING 
    AVG(e.sueldo) > 5000000;

-- 4. Título y año de producción de las películas con menor presupuesto
SELECT 
    p.título AS Titulo_Pelicula, 
    p.año AS Año_Producción
FROM 
    Película p
WHERE 
    p.presupuesto = (SELECT MIN(p2.presupuesto) FROM Película p2);

-- 5. Mostrar el sueldo de la actriz mejor pagada
SELECT 
    e.nombre AS Nombre_Actriz, 
    MAX(e.sueldo) AS Sueldo
FROM 
    Elenco e
JOIN 
    Actor a ON e.nombre = a.nombre
WHERE 
    a.sexo = 'F'
GROUP BY 
    e.nombre
ORDER BY 
    Sueldo DESC
LIMIT 1;
