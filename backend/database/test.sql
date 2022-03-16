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