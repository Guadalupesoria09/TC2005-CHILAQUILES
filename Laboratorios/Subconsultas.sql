CREATE DATABASE Subconsultas;
USE Subconsultas;

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

-- 1. Actrices de “Las brujas de Salem”

-- Con subconsulta
SELECT 
    e.nombre AS Nombre_Actriz
FROM 
    Elenco e
JOIN 
    Actor a ON e.nombre = a.nombre
WHERE 
    e.título = 'Las brujas de Salem'
    AND a.sexo = 'F';

-- Sin subconsulta
SELECT 
    e.nombre AS Nombre_Actriz
FROM 
    Elenco e
JOIN 
    Actor a ON e.nombre = a.nombre
WHERE 
    e.título = 'Las brujas de Salem'
    AND a.sexo = 'F';

-- 2. Nombres de los actores que aparecen en películas producidas por MGM en 1995

-- Con subconsulta
SELECT 
    e.nombre AS Nombre_Actor
FROM 
    Elenco e
WHERE 
    e.título IN (
        SELECT 
            p.título 
        FROM 
            Película p
        WHERE 
            p.nomestudio = 'MGM' AND p.año = 1995
    );

-- Sin subconsulta
SELECT 
    e.nombre AS Nombre_Actor
FROM 
    Elenco e
JOIN 
    Película p ON e.título = p.título AND e.año = p.año
WHERE 
    p.nomestudio = 'MGM' AND p.año = 1995;

-- 3. Películas que duran más que “Lo que el viento se llevó” (de 1939)

-- Con subconsulta
SELECT 
    p1.título AS Titulo_Pelicula, 
    p1.duración AS Duración
FROM 
    Película p1
WHERE 
    p1.duración > (
        SELECT 
            p2.duración
        FROM 
            Película p2
        WHERE 
            p2.título = 'Lo que el viento se llevó' AND p2.año = 1939
    );

-- Sin subconsulta
SELECT 
    p1.título AS Titulo_Pelicula, 
    p1.duración AS Duración
FROM 
    Película p1
JOIN 
    Película p2 ON p2.título = 'Lo que el viento se llevó' AND p2.año = 1939
WHERE 
    p1.duración > p2.duración;

-- 4. Productores que han hecho más películas que George Lucas

-- Con subconsulta
SELECT 
    p1.nombre AS Nombre_Productor
FROM 
    Productor p1
WHERE 
    (SELECT COUNT(*)
     FROM Película p
     WHERE p.idproductor = p1.idproductor) > (
        SELECT COUNT(*)
        FROM Película p
        JOIN Productor p2 ON p.idproductor = p2.idproductor
        WHERE p2.nombre = 'George Lucas'
    );

-- Sin subconsulta
SELECT 
    p1.nombre AS Nombre_Productor
FROM 
    Productor p1
JOIN 
    Película p1a ON p1.idproductor = p1a.idproductor
JOIN 
    Película p2 ON p2.idproductor = (
        SELECT idproductor
        FROM Productor
        WHERE nombre = 'George Lucas'
    )
GROUP BY 
    p1.idproductor, p1.nombre
HAVING 
    COUNT(p1a.título) > COUNT(p2.título);

-- 5. Nombres de los productores de las películas en las que ha aparecido Sharon Stone

-- Con subconsulta
SELECT 
    p.nombre AS Nombre_Productor
FROM 
    Productor p
WHERE 
    p.idproductor IN (
        SELECT 
            p2.idproductor
        FROM 
            Película p2
        JOIN 
            Elenco e ON p2.título = e.título AND p2.año = e.año
        WHERE 
            e.nombre = 'Sharon Stone'
    );

-- Sin subconsulta
SELECT DISTINCT
    p.nombre AS Nombre_Productor
FROM 
    Productor p
JOIN 
    Película p2 ON p.idproductor = p2.idproductor
JOIN 
    Elenco e ON p2.título = e.título AND p2.año = e.año
WHERE 
    e.nombre = 'Sharon Stone';

-- 6. Título de las películas que han sido filmadas más de una vez

-- Con subconsulta
SELECT 
    p.título AS Titulo_Pelicula
FROM 
    Película p
WHERE 
    (SELECT COUNT(*)
     FROM Película p2
     WHERE p.título = p2.título) > 1;

-- Sin subconsulta
SELECT 
    p.título AS Titulo_Pelicula
FROM 
    Película p
GROUP BY 
    p.título
HAVING 
    COUNT(*) > 1;
