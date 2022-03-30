-- Reporte 1
SELECT u.id_usuario AS id, u.first_name AS name, u.last_name AS lastname,
    p.nicename AS nationality, u.photo FROM Usuario u
    INNER JOIN Pais p ON u.id_pais = p.id_pais
    INNER JOIN Usuario_Equipo ue ON ue.id_usuario = u.id_usuario
        WHERE ue.id_equipo = 2
        GROUP BY u.id_usuario
;
-- Reporte 2
SELECT u.id_usuario AS id, u.first_name AS name, u.last_name AS lastname,
    p.nicename AS nationality, u.photo AS photo FROM Usuario u
        INNER JOIN Pais p ON u.id_pais = p.id_pais
        WHERE membership = '${membership}';