-- Procedure tecnico
DROP PROCEDURE IF EXISTS transfer_tecnico;

DELIMITER $$
CREATE PROCEDURE `transfer_tecnico` (
in id_tecnico_e int,
in id_team_o int,
in id_team_d int,
in start_date varchar(10),
in end_date varchar(10),
in descripcion varchar(100)
)
DETERMINISTIC
SQL SECURITY DEFINER
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN
	GET DIAGNOSTICS CONDITION 1
	@p1 = RETURNED_SQLSTATE, @p2 = MESSAGE_TEXT;
	SELECT @p1 as RETURNED_SQLSTATE  , @p2 as MESSAGE_TEXT;
	ROLLBACK;
 END;
START TRANSACTION;
	-- update contrato actual
    Update Asignacion_Tecnico_Equipo set fecha_fin = date(now()), actual = 0
    where id_tecnico = id_tecnico_e and actual = 1;
    -- nuevo registro
	INSERT INTO Asignacion_Tecnico_Equipo (id_tecnico, id_equipo, fecha_inicio, fecha_fin, actual)
    values(id_tecnico_e,id_team_d,start_date,end_date,1);
    -- bitacora
    insert into Bitacora_Tecnico (id_coach,id_team_origin,
    id_team_destination,start_date,end_date,description,fecha) 
    values(id_tecnico_e,id_team_o,id_team_d,start_date,end_date,descripcion,now());
COMMIT;
END$$
DELIMITER ;

-- Procedure jugador
DROP PROCEDURE IF EXISTS transfer_player;

delimiter  $$
CREATE DEFINER=`admin`@`%` PROCEDURE `transfer_player`(
in id_player int,
in id_team_o int,
in id_team_d int,
in start_date varchar(10),
in end_date varchar(10),
in descripcion varchar(100)
)
    DETERMINISTIC
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN
	GET DIAGNOSTICS CONDITION 1
	@p1 = RETURNED_SQLSTATE, @p2 = MESSAGE_TEXT;
	SELECT @p1 as RETURNED_SQLSTATE  , @p2 as MESSAGE_TEXT;
	ROLLBACK;
 END;
START TRANSACTION;
	-- update contrato actual
    Update Asignacion_Jugador_Equipo set fecha_fin = date(now()), actual = 0
    where id_jugador = id_player and actual = 1;
    -- nuevo registro
	INSERT INTO Asignacion_Jugador_Equipo (id_jugador, id_equipo, fecha_inicio, fecha_fin, actual)
    values(id_player,id_team_d,start_date,end_date,1);
    -- bitacora
    insert into Bitacora_Jugador (id_jugador,id_team_origin,
    id_team_destination,start_date,end_date,description,fecha) 
    values(id_player,id_team_o,id_team_d,start_date,end_date,descripcion,now());
COMMIT;
END$$
delimiter ;
