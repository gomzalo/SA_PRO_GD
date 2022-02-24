CREATE TABLE Pais (
    id_pais INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_pais VARCHAR(100) NOT NULL,
    nombre_nacionalidad VARCHAR(100) NOT NULL
);


CREATE TABLE Equipo (
    id_equipo INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    abreviado VARCHAR(5),
    id_pais INTEGER NOT NULL,
    is_club BOOLEAN NOT NULL,
    CONSTRAINT FK_Equipo_Pais FOREIGN KEY (id_pais)
        REFERENCES Pais(id_pais)
);


CREATE TABLE Tecnico (
    id_tecnico INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL ,
    fecha_nac DATE NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    foto VARCHAR(300) NOT NULL,
	id_pais INTEGER NOT NULL,
    id_estado INTEGER NOT NULL,
    CONSTRAINT FK_Tecnico_Pais FOREIGN KEY (id_pais)
        REFERENCES Pais(id_pais),
    CONSTRAINT FK_Tecnico_Estado FOREIGN KEY (id_estado)
        REFERENCES Estado(id_estado)
);


CREATE TABLE Posicion (
    id_posicion INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE Jugador (
    id_jugador INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL ,
    fecha_nac DATE NOT NULL,
	pais_nacionalidad INTEGER NOT NULL,
    id_posicion INTEGER NOT NULL,
    foto VARCHAR(300) NOT NULL,
    id_estado INTEGER NOT NULL,
	CONSTRAINT FK_Jugador_Posicion FOREIGN KEY (id_posicion)
        REFERENCES Posicion(id_posicion)
);

CREATE TABLE Asignacion_Jugador_Equipo (
    id_jugador INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_equipo VARCHAR(100) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE,
    CONSTRAINT FK_Jugador_Equipo_id_jugador FOREIGN KEY (id_jugador)
        REFERENCES Jugador(id_jugador),
    CONSTRAINT FK_Jugador_Equipo_id_equipo FOREIGN KEY (id_equipo)
        REFERENCES Equipo(id_equipo)
);

CREATE TABLE Asignacion_Tecnico_Equipo (
    id_tecnico INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_equipo VARCHAR(100) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE,
    CONSTRAINT FK_Tecnico_Equipo_id_tecnico FOREIGN KEY (id_tecnico)
        REFERENCES Tecnico(id_tecnico),
    CONSTRAINT FK_Tecnico_Equipo_id_equipo FOREIGN KEY (id_equipo)
        REFERENCES Equipo(id_equipo)
);


CREATE TABLE Tipo_Gol (
    id_gol INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	descripcion VARCHAR(100)
);


CREATE TABLE Incidencia (
    id_incidencia INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(300) NOT NULL,
    id_tipo_gol INTEGER NOT NULL ,
    distancia INTEGER NULL,
	CONSTRAINT FK_Incidencia_Gol FOREIGN KEY (id_tipo_gol)
        REFERENCES Tipo_Gol(id_gol)
);

CREATE TABLE Tipo_Competencia (
    id_tipo_competencia INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL
);

CREATE TABLE Competencia (
    id_competencia INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    anio INTEGER NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    id_tipo_competencia INTEGER NOT NULL,
    id_campeon INTEGER NOT NULL,
    CONSTRAINT FK_Competencia_Tipo_Competencia FOREIGN KEY (id_tipo_competencia)
        REFERENCES Tipo_Competencia(id_tipo_competencia),
    CONSTRAINT FK_Competencia_Equipo FOREIGN KEY (id_campeon)
        REFERENCES Equipo(id_equipo)
);

CREATE TABLE Estado (
    id_estado INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(300)
);

CREATE TABLE Estadio (
    id_estadio INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    fecha_inaguracion DATE NOT NULL,
    capacidad INTEGER NOT NULL,
    direccion VARCHAR(300) NOT NULL,
    foto VARCHAR(300) NOT NULL,
    id_pais INTEGER NOT NULL,
    id_estado INTEGER NOT NULL,
    CONSTRAINT FK_Estadio_Pais FOREIGN KEY (id_pais)
        REFERENCES Pais(id_pais),
    CONSTRAINT FK_Estadio_Estado FOREIGN KEY (id_estado)
        REFERENCES Estado(id_estado)
);

CREATE TABLE Arbitro (
    id_arbitro INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    apellido VARCHAR(150) NOT NULL,
    fecha_nac DATE NOT NULL,
    id_pais INTEGER NOT NULL,
    id_estado INTEGER NOT NULL,
    CONSTRAINT FK_Arbitro_Pais FOREIGN KEY (id_pais)
        REFERENCES Pais(id_pais),
    CONSTRAINT FK_Arbitro_Estado FOREIGN KEY (id_estado)
        REFERENCES Estado(id_estado)
);

CREATE TABLE Partido (
    id_partido INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    hora VARCHAR(100) NOT NULL,
    publico INTEGER NOT NULL,
    id_estadio INTEGER NOT NULL,
    id_visitante INTEGER NOT NULL,
    id_local INTEGER NOT NULL,
    id_competencia INTEGER NOT NULL,
    id_estado INTEGER NOT NULL,
    CONSTRAINT FK_Partido_Estadio FOREIGN KEY (id_estadio)
        REFERENCES Estado(id_estadio),
    CONSTRAINT FK_Partido_Equipo_Visitante FOREIGN KEY (id_visitante)
        REFERENCES Equipo(id_equipo),
    CONSTRAINT FK_Partido_Equipo_Local FOREIGN KEY (id_local)
        REFERENCES Equipo(id_equipo),
    CONSTRAINT FK_Partido_Competencia FOREIGN KEY (id_competencia)
        REFERENCES Competencia(id_competencia),
    CONSTRAINT FK_Partido_Estado FOREIGN KEY (id_estado)
        REFERENCES Estado(id_estado)
);

CREATE TABLE Arbitro_Partido (
    id_arbitro INTEGER NOT NULL PRIMARY KEY,
    id_partido INTEGER NOT NULL,
    tipo_arbitro VARCHAR(100) NOT NULL,
    CONSTRAINT FK_Arbitro_Partido_id_arbitro FOREIGN KEY (id_arbitro)
        REFERENCES Arbitro(id_arbitro),
    CONSTRAINT FK_Arbitro_Partido_id_partido FOREIGN KEY (id_partido)
        REFERENCES Partido(id_partido)
);

CREATE TABLE Jugador_Partido (
    id_jugador INTEGER NOT NULL PRIMARY KEY,
    id_partido INTEGER NOT NULL PRIMARY KEY,
    minutos INTEGER NOT NULL,
    CONSTRAINT FK_Jugador_Partido_id_jugador FOREIGN KEY (id_jugador)
        REFERENCES Jugador(id_jugador),
    CONSTRAINT FK_Jugador_Partido_id_partido FOREIGN KEY (id_partido)
        REFERENCES Partido(id_partido)
);

CREATE TABLE Incidencia (
    id_incidencia INTEGER NOT NULL PRIMARY KEY,
    id_partido INTEGER NOT NULL PRIMARY KEY,
    minuto INTEGER NOT NULL PRIMARY KEY,
    segundo INTEGER NOT NULL PRIMARY KEY,
    CONSTRAINT FK_Incidencia_Tipo_Incidencia FOREIGN KEY (id_incidencia)
        REFERENCES Tipo_Incidencia(id_incidencia),
    CONSTRAINT FK_Incidencia_Partido FOREIGN KEY (id_partido)
        REFERENCES Partido(id_partido)
);