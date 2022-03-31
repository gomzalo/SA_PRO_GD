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

-- Contraseña temporal

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

-- Actualizar membresia
CREATE PROCEDURE Update_Membership (IN id INT, status INT)
BEGIN
    UPDATE Usuario
        SET membership = status
        WHERE id_usuario = id;
    INSERT INTO Usuario_Membresia (id_usuario, fecha, estado)
    VALUES (id, NOW(), status);
END;

SET @id := 2;
SET @status := 1;
CALL Update_Membership(@id, @status);

-- Insert partido y competicion
CREATE PROCEDURE Insert_Partido_Proc (
    IN fecha DATETIME,
    IN publico INT,
    IN result_local INT,
    IN result_visiting INT,
    IN id_estadio INT,
    IN id_visitante INT,
    IN id_local INT,
    IN id_competencia INT,
    IN id_estado INT
    )
BEGIN
    INSERT INTO Partido ( 
        fecha,
        publico,
        result_local,
        result_visiting,
        id_estadio,
        id_visitante,
        id_local,
        id_competencia,
        id_estado
        )
    VALUES (
        fecha,
        publico,
        result_local,
        result_visiting,
        id_estadio,
        id_visitante,
        id_local,
        id_competencia,
        id_estado
        );

    INSERT INTO Equipo_Competencia (id_competencia, id_equipo)
    VALUES (id_local, id_competencia);
    INSERT INTO Equipo_Competencia (id_competencia, id_equipo)
    VALUES (id_visitante, id_competencia);
END;