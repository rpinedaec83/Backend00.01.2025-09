-- CREAR BASE DE DATOS
CREATE DATABASE IF NOT EXISTS codigo_alumno;
USE codigo_alumno;

-- PROVEEDORES
CREATE TABLE proveedores (
    id_proveedor INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    telefono VARCHAR(20)
);

-- MATERIA PRIMA
CREATE TABLE materia_prima (
    id_materia INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    stock INT,
    costo DECIMAL(10,2)
);

-- INSUMOS
CREATE TABLE insumos (
    id_insumo INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    stock INT,
    costo DECIMAL(10,2)
);

-- COMPRAS
CREATE TABLE compras (
    id_compra INT AUTO_INCREMENT PRIMARY KEY,
    id_proveedor INT,
    fecha DATE,
    tipo ENUM('Materia Prima','Insumo'),
    total DECIMAL(10,2),
    FOREIGN KEY (id_proveedor) REFERENCES proveedores(id_proveedor)
);

-- PERSONAL
CREATE TABLE personal (
    id_personal INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    cargo VARCHAR(50),
    salario DECIMAL(10,2)
);

-- PRODUCCIÓN
CREATE TABLE produccion (
    id_produccion INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE,
    cantidad INT,
    responsable INT,
    FOREIGN KEY (responsable) REFERENCES personal(id_personal)
);








DELIMITER $$

CREATE PROCEDURE crud_materia_prima (
    IN opcion INT,
    IN pid INT,
    IN pnombre VARCHAR(100),
    IN pstock INT,
    IN pcosto DECIMAL(10,2)
)
BEGIN
    IF opcion = 1 THEN
        INSERT INTO materia_prima(nombre, stock, costo)
        VALUES (pnombre, pstock, pcosto);
    ELSEIF opcion = 2 THEN
        SELECT * FROM materia_prima;
    ELSEIF opcion = 3 THEN
        UPDATE materia_prima
        SET nombre = pnombre, stock = pstock, costo = pcosto
        WHERE id_materia = pid;
    ELSEIF opcion = 4 THEN
        DELETE FROM materia_prima WHERE id_materia = pid;
    END IF;
END $$

DELIMITER ;





