SELECT * FROM `soccer_stats_db`.`Equipo` LIMIT 1000;
INSERT INTO Equipo (nombre, abreviado, id_pais, is_club) VALUES ('Heredia FC', 'HFC', 21, true);

INSERT INTO Tipo_Competencia (nombre) VALUES ('Liga');
INSERT INTO Tipo_Competencia (nombre) VALUES ('Eliminatoria');
INSERT INTO Tipo_Competencia (nombre) VALUES ('Copa');
INSERT INTO Tipo_Competencia (nombre) VALUES ('Super Copa');
INSERT INTO Tipo_Competencia (nombre) VALUES ('Cuadrangular');
INSERT INTO Tipo_Competencia (nombre) VALUES ('Triangular');

SELECT * FROM Tipo_Competencia;

SELECT * FROM `soccer_stats_db`.`Competencia` LIMIT 1000;

-- Procedures

DROP PROCEDURE Set_Temp_Pass;

CREATE PROCEDURE Set_Temp_Pass (IN temp_pass VARCHAR(50), id INT, OUT original_pass VARCHAR(50))
BEGIN
    SELECT
        pass INTO original_pass
    FROM Usuario
        WHERE id_usuario = id;
    
    UPDATE Usuario
    SET
        pass = temp_pass
        WHERE id_usuario = id;

    REPLACE INTO Temp_Pass (id_usuario, original_pass, temporal_pass, hora)
    VALUES (id, original_pass, temp_pass, NOW());
END;

SET @temp_pass := 'sdasdfasd';
SET @original_pass := '';
SET @id := 2;
CALL Set_Temp_Pass(@temp_pass, @id, @original_pass);

SELECT * FROM Usuario
WHERE id_usuario = 2;

SELECT * FROM Temp_Pass;

-- Reportes

SELECT t1.id_usuario as id, t1.first_name as name, t1.last_name as lastname, t1.photo as photo
    t2.name as nationality FROM Usuario t1
    INNER JOIN Pais t2 ON t1.id_pais = t2.id_pais
    INNER JOIN Equipo t2 ON 1
    WHERE t1.id_usuario = Usuario_Empleado.id_usuario
    AND t2.id_pais = Usuario_Empleado.id_pais