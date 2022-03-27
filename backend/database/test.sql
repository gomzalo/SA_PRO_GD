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