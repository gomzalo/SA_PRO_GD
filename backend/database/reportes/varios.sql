
select 
t1.id_tecnico as id,
t1.nombre as name,
t1.apellido as lastname,
t1.fecha_nac as birth_date,
t1.id_pais as id_country,
t2.name as country,
t1.id_status as status,
t3.id_equipo as id_team,
t4.nombre as name_team,
t1.foto as photo,
max(t3.fecha_fin)
from Asignacion_Tecnico_Equipo t3
right join Tecnico t1 on t1.id_tecnico= t3.id_tecnico
inner join Pais t2 on t1.id_pais = t2.id_pais
left join Equipo t4 on t4.id_equipo = t3.id_equipo 
where t1.id_estado = 1 
group by id;

select id_tecnico, max(fecha_fin) from Asignacion_Tecnico_Equipo
group by id_tecnico;

select id_jugador, max(fecha_fin) from Asignacion_Jugador_Equipo
group by id_jugador;

select * from Jugador;
select * from Equipo;
select * from Asignacion_Jugador_Equipo t1
right join Jugador t2 on t1.id_jugador = t2.id_jugador;

insert into Asignacion_Tecnico_Equipo values(3,3,date(now()),null);
select * from Asignacion_Tecnico_Equipo;
select * from Tecnico;
update Asignacion_Tecnico_Equipo
set fecha_fin = date(now())
where id_tecnico = 3;

select * from Tecnico


select 
t1.id_tecnico as id,
t1.nombre as name,
t1.apellido as lastname,
t1.fecha_nac as birth_date,
t1.id_pais as id_country,
t2.name as country,
t1.id_status as status,
t3.id_equipo as id_team,
t4.nombre as name_team,
t1.foto as photo
from Asignacion_Tecnico_Equipo t3
right join Tecnico t1 on t1.id_tecnico= t3.id_tecnico
inner join Pais t2 on t1.id_pais = t2.id_pais
left join Equipo t4 on t4.id_equipo = t3.id_equipo 
where t1.id_estado = 1 and t1.id_tecnico in (
select id_tecnico, max(fecha_fin) from Asignacion_Tecnico_Equipo
group by id_tecnico)



select 
t1.id_jugador as id,
t1.nombre as name,
t1.apellido as lastname,
t1.fecha_nac as birth_date,
t1.pais_nacionalidad as id_nationality,
t2.name as nationality,
t1.id_posicion as position,
t1.id_status as status,
t1.foto as photo
,"" as id_equipo, "" as id_team from Jugador t1
inner join Pais t2 on t1.pais_nacionalidad = t2.id_pais
where id_jugador not in (select distinct id_jugador from Asignacion_Jugador_Equipo)
and id_estado = 1 and id_jugador = 6
union
(select
t1.id_jugador as id,
t1.nombre as name,
t1.apellido as lastname,
t1.fecha_nac as birth_date,
t1.pais_nacionalidad as id_nationality,
t2.name as nationality,
t1.id_posicion as position,
t1.id_status as status,
t1.foto as photo,
t3.id_equipo as id_team,
t4.nombre as name_team
from Asignacion_Jugador_Equipo t3
right join Jugador t1 on t1.id_jugador = t3.id_jugador
inner join Pais t2 on t1.pais_nacionalidad = t2.id_pais
left join Equipo t4 on t4.id_equipo = t3.id_equipo 
where t1.id_estado = 1 and t3.actual = 1 and t1.id_jugador = 6);


select 
t1.id_tecnico as id,
t1.nombre as name,
t1.apellido as lastname,
t1.fecha_nac as birth_date,
t1.id_pais as id_nationality,
t2.name as nationality,
t1.id_status as status,
t1.foto as photo
,"" as id_equipo, "" as id_team from Tecnico t1
inner join Pais t2 on t1.id_pais = t2.id_pais
where id_tecnico not in (select distinct id_tecnico from Asignacion_Tecnico_Equipo)
and id_estado = 1
union
(select
t1.id_tecnico as id,
t1.nombre as name,
t1.apellido as lastname,
t1.fecha_nac as birth_date,
t1.id_pais as id_nationality,
t2.name as nationality,
t1.id_status as status,
t1.foto as photo,
t3.id_equipo as id_team,
t4.nombre as name_team
from Asignacion_Tecnico_Equipo t3
right join Tecnico t1 on t1.id_tecnico = t3.id_tecnico
inner join Pais t2 on t1.id_pais = t2.id_pais
left join Equipo t4 on t4.id_equipo = t3.id_equipo 
where t1.id_estado = 1 and t3.actual = 1);

select * from Tecnico

--      -----------------------------------------------------------------------------------------------
-- usuarios de X genero
	Select * from Usuario where gender = 'F'
	and id_rol = 3;

-- Usuarios con al menos X años de edad
Select * from Usuario where age >= 25
and id_rol = 3;

-- Empleados que mas/menos noticias han publicado
Select t1.id_usuario as id, t1.first_name as name, t1.last_name as lastname, 
t3.name as nationality,t1.photo, count(*) as count from Usuario t1
inner join Noticia t2 on t1.id_usuario = t2.id_user
inner join Pais t3 on t1.id_pais = t3.id_pais
where id_rol < 3
group by id_usuario
order by count desc
limit 5;


-- Empleados que mas noticias han publicado de X equipo
Select t1.id_usuario as id, t1.first_name as name, t1.last_name as lastname, 
t3.name as nationality,t1.photo, count(*) as count from Usuario t1
inner join Noticia t2 on t1.id_usuario = t2.id_user
inner join Pais t3 on t1.id_pais = t3.id_pais
where id_rol < 3 and t2.id_equipo = 1
group by id_usuario
order by count desc
limit 5;

-- bitacoras de los admins
Select * from Bitacora;
Select * from Estado;
select  * from Usuario;

select 
t1.id_usuario as id,
t1.first_name as name,
t1.last_name as lastname,
t1.email,phone,photo,gender,
t1.fecha_nac as birth_date,
t1.direccion as address,
t1.age, id_rol,
t1.id_estado as id_status,
t1.id_pais as id_country,
t2.name as country
from Usuario t1 inner join Pais t2 on t1.id_pais = t2.id_pais
where t1.id_usuario = 2;

select *from Rol;

-- ----------------------------------------------------------------------------
SELECT * FROM soccer_stats_db.Rol;

select * from Equipo;
update Equipo set id_estado = 1 where id_equipo >0;


select 
t1.id_jugador as id,
t1.nombre as name,
t1.apellido as lastname,
t1.fecha_nac as birth_date,
t1.pais_nacionalidad as id_nationality,
t2.name as nationality,
t1.id_posicion as position,
t1.id_status as status,
t1.foto as photo
,0 as id_equipo, "Ninguno" as id_team from Jugador t1
inner join Pais t2 on t1.pais_nacionalidad = t2.id_pais
where id_jugador not in (select distinct id_jugador from Asignacion_Jugador_Equipo)
and id_estado = 1
union
(select
t1.id_jugador as id,
t1.nombre as name,
t1.apellido as lastname,
t1.fecha_nac as birth_date,
t1.pais_nacionalidad as id_nationality,
t2.name as nationality,
t1.id_posicion as position,
t1.id_status as status,
t1.foto as photo,
t3.id_equipo as id_team,
t4.nombre as name_team
from Asignacion_Jugador_Equipo t3
right join Jugador t1 on t1.id_jugador = t3.id_jugador
inner join Pais t2 on t1.pais_nacionalidad = t2.id_pais
left join Equipo t4 on t4.id_equipo = t3.id_equipo 
where t1.id_estado = 1 and t3.actual = 1);

insert into Jugador (nombre,apellido,fecha_nac,pais_nacionalidad,id_posicion,foto,id_estado,id_status)
values ("Kylian","Mbappe","1998-12-20",73,3,"",1,1);
        
select * from Pais;
select * from Asignacion_Jugador_Equipo;
        -- and t1.id_jugador = ${id};
        update Asignacion_Jugador_Equipo set
        actual = 1 where id_jugador = 3 and id_equipo = 8
        select * from Asignacion_Jugador_Equipo;

--  ----------------------------------------------------------------------------------------
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

select * from Tecnico;
select * from Equipo;
select * from Asignacion_Tecnico_Equipo;
update Asignacion_Tecnico_Equipo set
actual = 1 where id_tecnico = 3 and id_equipo = 3;

call transfer_tecnico(7,2,3,'2022-02-11','2025-11-21','Tecnico comprado');

Update Asignacion_Tecnico_Equipo set fecha_fin = date(now()), actual = 0;

select* from  Asignacion_Tecnico_Equipo   where id_tecnico = id_tecnico and actual = 1;

SET SQL_SAFE_UPDATES = 0;

delete from Asignacion_Tecnico_Equipo
where id_tecnico = 3 and id_equipo = 3;
select t1.*, 
      t2.nombre as coach_name, 
      t2.apellido as coach_lastname,
      t3.nombre as team_origin,
      t4.nombre as team_destination
      from Bitacora_Tecnico t1
      inner join Tecnico t2 on t2.id_tecnico = t1.id_coach
      inner join Equipo t3 on t3.id_equipo = t1.id_team_origin
      inner join Equipo t4 on t4.id_equipo = t1.id_team_destination
      -- where t2.id_jugador = ${id};
      
select * from Asignacion_Tecnico_Equipo;

-- ----------------------------------------------------------------------
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

call transfer_player(5,0,5,"2021-08-24","2022-01-01","Prestamo del jugador");
select * from Jugador;
select * from Equipo;
select * from Pais;
insert into Pais values(0,"Ninguno","Ninguno","NC","NAC",0,0);
insert into Equipo values(0,"Ninguno","NAC",240,0,"2022-03-31","",1);
update Equipo set id_equipo = 0 where id_equipo = 9;

select * from Bitacora_Jugador;
select t1.*, 
t2.nombre as player_name, 
t2.apellido as player_lastname,
t3.nombre as team_origin,
t4.nombre as team_destination
from Bitacora_Jugador t1
inner join Jugador t2 on t2.id_jugador = t1.id_jugador
inner join Equipo t3 on t3.id_equipo = t1.id_team_origin
inner join Equipo t4 on t4.id_equipo = t1.id_team_destination
where t2.id_jugador = 6;

-- --------------------------------------------------------------------------
-- Equipos con X años de antigüedad
select 
t1.id_equipo as id_team,
t1.nombre as team,
t1.photo, t1.foundation_date,
t2.name as country from Equipo t1
inner join Pais t2 on t1.id_pais = t2.id_pais
where (2022-year(t1.foundation_date)) = 54;

-- Estadios en X país
select 
t1.id_estadio as id_stadium,
t1.nombre as stadium,
t1.foto as photo,
t1.id_pais as id_country,
t2.name as country
from Estadio t1 inner join Pais t2 on t1.id_pais = t2.id_pais
where t1.id_pais = 1;

-- Estadios con capacidad menor o igual a X
select
t1.id_estadio as id_stadium,
t1.nombre as stadium,
t1.foto as photo,
t2.name as country,
capacidad as capacity
from Estadio t1 inner join Pais t2 on t1.id_pais = t2.id_pais
where t1.capacidad <= 50000;

-- Histórico de partidos de X equipo
select
t1.id_partido as id,
t1.fecha as game_date,
t1.publico as attendees,
t1.result_local,t1.result_visiting,
t1.id_estado as status,
t1.id_estadio as id_stadium,
t2.nombre as stadium,
t1.id_local as id_team_local,
t3.nombre as team_local,
t3.photo as photo_local,
t1.id_visitante as id_team_visiting,
t4.nombre as team_visiting,
t4.photo as photo_visiting,
t1.id_competencia as id_competition,
t5.nombre as competition
from Partido t1 
inner join Estadio t2 on t1.id_estadio = t2.id_estadio
inner join Equipo t3 on t1.id_local = t3.id_equipo
inner join Equipo t4 on t1.id_visitante = t4.id_equipo
inner join Competencia t5 on t1.id_competencia = t5.id_competencia
where t1.id_local = 3 or t1.id_visitante = 3;

-- Equipos en los que ha estado o dirigido X técnico o jugador.
select
t1.id_equipo as id_team,
t2.nombre as team,
t2.photo as photo,
t3.name as country
from Asignacion_Jugador_Equipo t1
inner join Equipo t2 on t1.id_equipo = t2.id_equipo
inner join Pais t3 on t2.id_pais = t3.id_pais
where t1.id_jugador = 3;

select * from Asignacion_Jugador_Equipo

-- Partidos donde hubo al menos X goles
select
t1.id_partido as id,
t1.fecha as game_date,
t1.publico as attendees,
t1.result_local,t1.result_visiting,
t1.id_estado as status,
t1.id_estadio as id_stadium,
t2.nombre as stadium,
t1.id_local as id_team_local,
t3.nombre as team_local,
t3.photo as photo_local,
t1.id_visitante as id_team_visiting,
t4.nombre as team_visiting,
t4.photo as photo_visiting,
t1.id_competencia as id_competition,
t5.nombre as competition
from Partido t1 
inner join Estadio t2 on t1.id_estadio = t2.id_estadio
inner join Equipo t3 on t1.id_local = t3.id_equipo
inner join Equipo t4 on t1.id_visitante = t4.id_equipo
inner join Competencia t5 on t1.id_competencia = t5.id_competencia
where t1.result_local + t1.result_visiting >= 5;

-- Jugadores con más X incidencias en Y competición
select
t4.id_jugador as id,
t1.nombre as name,
t1.apellido as lastname,
t2.name as nationality,
t1.foto as photo,
t3.nombre as position,
count(*) as "count"
from Incidencia t4
inner join Jugador t1 on t1.id_jugador = t4.id_jugador
inner join Pais t2 on t1.pais_nacionalidad = t2.id_pais
inner join Posicion t3 on t1.id_posicion = t3.id_posicion
where t4.id_incidencia and t4.id_partido = 1;

-- Jugadores con más X incidencias y Y competiciones de Z año
select
t4.id_jugador as id,
t1.nombre as name,
t1.apellido as lastname,
t2.name as nationality,
t1.foto as photo,
t3.nombre as position,
count(*) as "count"
from Incidencia t4
inner join Jugador t1 on t1.id_jugador = t4.id_jugador
inner join Pais t2 on t1.pais_nacionalidad = t2.id_pais
inner join Posicion t3 on t1.id_posicion = t3.id_posicion
where "count" = 1 and t4.id_partido in
(select t1.id_partido from Partido_Competencia t1
inner join Competencia t2 on t1.id_competencia = t2.id_competencia
where t1.id_competencia = 1 and t2.anio = 2022);


-- Cantidad de X competiciones que ha ganado Y equipo
select
t1.nombre as "type",
t2.id_campeon as id_team,
t3.nombre as team,
t3.photo as photo,
t2.id_competencia as id_competition,
t2.nombre as competition,
 count(*) as "count"
from Competencia t2
inner join Tipo_Competencia t1 on t1.id_tipo_competencia = t2.id_tipo_competencia
inner join Equipo t3 on t3.id_equipo = t2.id_campeon
where t2.id_campeon = 3 and ( t2.id_tipo_competencia = 1)
 group by t2.id_campeon;
 
 -- Listado de partidos en X año
select
t1.id_partido as id,
t1.fecha as game_date,
t1.publico as attendees,
t1.result_local,t1.result_visiting,
t1.id_estado as status,
t1.id_estadio as id_stadium,
t2.nombre as stadium,
t1.id_local as id_team_local,
t3.nombre as team_local,
t3.photo as photo_local,
t1.id_visitante as id_team_visiting,
t4.nombre as team_visiting,
t4.photo as photo_visiting,
t1.id_competencia as id_competition,
t5.nombre as competition
from Partido t1 
inner join Estadio t2 on t1.id_estadio = t2.id_estadio
inner join Equipo t3 on t1.id_local = t3.id_equipo
inner join Equipo t4 on t1.id_visitante = t4.id_equipo
inner join Competencia t5 on t1.id_competencia = t5.id_competencia
where year(t1.fecha) = 2022;

-- Listado de partidos entre X equipo contra Y equipo
select
t1.id_partido as id,
t1.fecha as game_date,
t1.publico as attendees,
t1.result_local,t1.result_visiting,
t1.id_estado as status,
t1.id_estadio as id_stadium,
t2.nombre as stadium,
t1.id_local as id_team_local,
t3.nombre as team_local,
t3.photo as photo_local,
t1.id_visitante as id_team_visiting,
t4.nombre as team_visiting,
t4.photo as photo_visiting,
t1.id_competencia as id_competition,
t5.nombre as competition
from Partido t1 
inner join Estadio t2 on t1.id_estadio = t2.id_estadio
inner join Equipo t3 on t1.id_local = t3.id_equipo
inner join Equipo t4 on t1.id_visitante = t4.id_equipo
inner join Competencia t5 on t1.id_competencia = t5.id_competencia
where (t1.id_visitante = 8 and t1.id_local = 2 ) or (t1.id_visitante = 2 and t1.id_local = 8) ;

-- Listado de partidos de X equipo
select
t1.id_partido as id,
t1.fecha as game_date,
t1.publico as attendees,
t1.result_local,t1.result_visiting,
t1.id_estado as status,
t1.id_estadio as id_stadium,
t2.nombre as stadium,
t1.id_local as id_team_local,
t3.nombre as team_local,
t3.photo as photo_local,
t1.id_visitante as id_team_visiting,
t4.nombre as team_visiting,
t4.photo as photo_visiting,
t1.id_competencia as id_competition,
t5.nombre as competition
from Partido t1 
inner join Estadio t2 on t1.id_estadio = t2.id_estadio
inner join Equipo t3 on t1.id_local = t3.id_equipo
inner join Equipo t4 on t1.id_visitante = t4.id_equipo
inner join Competencia t5 on t1.id_competencia = t5.id_competencia
where t1.id_visitante = 3 or id_local = 3;

-- ----------------------------------------------------------------------------
Select* from Partido;



"id": number,
      "id_team": number,
      "team": "string",
      "id_user": number,
      "title": "string",
      "description": "string",
      "date": "string"
      
select
t1.id_noticia as id,
t1.id_equipo as id_team,
t2.nombre as team,
t1.id_user,
t1.titulo as title,
t1.descripcion as description,
t1.fecha as date from Noticia t1
inner join Equipo t2 on t2.id_equipo = t1.id_equipo
where t1.id_noticia = 2

-- ----------------------------------------------------------------------
select
t4.id_jugador as id,
t1.nombre as name,
t1.apellido as lastname,
t2.name as nationality,
t1.foto as photo,
t3.nombre as position,
count(*) as "count"
from Incidencia t4
inner join Jugador t1 on t1.id_jugador = t4.id_jugador
inner join Pais t2 on t1.pais_nacionalidad = t2.id_pais
inner join Posicion t3 on t1.id_posicion = t3.id_posicion
where "count" = 1 and t4.id_partido in
(select id_partido from Partido_Competencia
where t1.id_competencia = 1 OR t1.id_competencia = 2 OR t1.id_competencia = 3 OR t1.id_competencia = 4 OR t1.id_competencia = 5);

-- -----------------------------------------------------------------------------
