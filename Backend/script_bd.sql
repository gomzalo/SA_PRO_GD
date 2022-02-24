CREATE TABLE Pais (
    id_pais int NOT NULL AUTO_INCREMENT primary key,
    nombre_pais varchar(100) not null,
    nombre_nacionalidad varchar(100) not null
);


CREATE TABLE Equipo (
    id_equipo int NOT NULL AUTO_INCREMENT primary key,
    nombre varchar(100) not null,
    abreviado VARCHAR(5) ,
    id_pais int not null,
    isclub boolean not null,
    CONSTRAINT fk_id_pais FOREIGN KEY (id_pais)
    REFERENCES Pais(id_pais)
);


CREATE TABLE Tecnico (
    id_tecnico int NOT NULL AUTO_INCREMENT primary key,
    nombre varchar(100) not null,
    apellido VARCHAR(100) not null ,
    fecha_nac date not null,
    titulo varchar(100) not null,
	pais_nacionalidad  int not null,
    foto  varchar(300) not null,
    id_estado  int not null
);


create table posicion(
id_posicion int not null auto_increment primary key,
nombre varchar(100)

);
CREATE TABLE Jugador (
    id_jugador int NOT NULL AUTO_INCREMENT primary key,
    nombre varchar(100) not null,
    apellido VARCHAR(100) not null ,
    fecha_nac date not null,
	pais_nacionalidad  int not null,
    id_posicion int not null,
    foto  varchar(300) not null,
    id_estado  int not null,
	CONSTRAINT FK_Posicion FOREIGN KEY (id_posicion)
	REFERENCES Posicion(id_posicion)
);

CREATE TABLE asignacion_jugador_equipo (
    id_jugador int NOT NULL AUTO_INCREMENT primary key,
    id_equipo varchar(100) not null,
    fecha_inicio date not null,
    fecha_fin date,
    CONSTRAINT FK_id_jugador FOREIGN KEY (id_jugador)
        REFERENCES Jugador(id_jugador),
    CONSTRAINT FK_id_equipo FOREIGN KEY (id_equipo)
        REFERENCES Equipo(id_equipo)
);

CREATE TABLE asignacion_tecnico_equipo (
    id_tecnico int NOT NULL AUTO_INCREMENT primary key,
    id_equipo varchar(100) not null,
    fecha_inicio date not null,
    fecha_fin date,
    CONSTRAINT FK_id_tecnico FOREIGN KEY (id_tecnico)
        REFERENCES Tecnico(id_tecnico),
    CONSTRAINT FK_id_equipo FOREIGN KEY (id_equipo)
        REFERENCES Equipo(id_equipo)
);


CREATE TABLE tipo_gol (
    id_gool int NOT NULL AUTO_INCREMENT primary key,
	descripcion varchar(100)
);


CREATE TABLE Incidencia (
    id_incidencia int NOT NULL AUTO_INCREMENT primary key,
    descripcion varchar(300) not null,
    id_tipo_gol int not null ,
    distancia int null,
	CONSTRAINT FK_gol FOREIGN KEY (id_tipo_gol)
	REFERENCES tipo_gol(id_gol)
);




