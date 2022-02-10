# SA_PRO_GD <!-- omit in toc -->

- Universidad de San Carlos de Guatemala
- Facultad de Ingenieria
- Escuela de Ciencias y Sistemas
- Laboratorio de Software Avanzado "B"
- Ing. Marco Aldana
- Aux. Mario Morales

## Proyecto del laboratorio del curso Software Avanzado "B". <!-- omit in toc -->

# **SOCCER STATS** <!-- omit in toc -->

## **Grupo D** <!-- omit in toc -->
### Integrantes <!-- omit in toc -->

| No. | Nombre                         | Carnet    |
| --- | ------------------------------ | --------- |
|  1. | Gonzalo Antonio Garcia Solares | 201318652 |
|  2. | Walter Josué Paredes Sol       | 201503392 |
|  3. | Juan José Hernández Rodríguez  | 201612378 |
|  4. | Steven Aaron Sis Hernández     | 201706357 |

## **Tabla de contenido** <!-- omit in toc -->

- [**Descripción**](#descripción)
- [**Diagramas**](#diagramas)
  - [Diagrama de clases](#diagrama-de-clases)
  - [Diagrama de esquema relacional](#diagrama-de-esquema-relacional)
  - [Diagrama de casos de uso](#diagrama-de-casos-de-uso)
    - [Diagrama de casos de uso - Generalizado](#diagrama-de-casos-de-uso---generalizado)
    - [Diagrama de casos de uso - Detallado](#diagrama-de-casos-de-uso---detallado)
  - [Diagrama de actividades](#diagrama-de-actividades)
  - [Diagrama de despliegue](#diagrama-de-despliegue)
  - [Diagrama de componentes](#diagrama-de-componentes)
  - [Diagrama de la arquitectura](#diagrama-de-la-arquitectura)
- [**Documentación**](#documentación)
  - [Stakeholders](#stakeholders)
  - [Mockups](#mockups)
  - [Historias de usuario](#historias-de-usuario)
  - [Casos de uso](#casos-de-uso)

# **Descripción**

# **Diagramas**
## Diagrama de clases
![Diagrama de clases](/assets/img/clases.png "clases")
## Diagrama de esquema relacional
## Diagrama de casos de uso
### Diagrama de casos de uso - Generalizado
![Diagrama de casos de uso - generalizado](/assets/img/use-case-gen.png "use cases gen")
### Diagrama de casos de uso - Detallado
![Diagrama de casos de uso - detallado](/assets/img/use-case-det.png "use cases det")
## Diagrama de actividades
## Diagrama de despliegue
## Diagrama de componentes
## Diagrama de la arquitectura
# **Documentación**
## Stakeholders
## Mockups
## Historias de usuario

| ID      | Historia de usuario             |
| ------- | ------------------------------- |
| 11.1    | Como cliente deseo poder suscribirme a una nueva membresía, para poder suscribirme a un equipo.           |
| 11.2    | Como cliente deseo poder cancelar una membresía, para poder suscribirme a un equipo.           |
| 11.3    | Como administrador deseo poder dar de alta nueva membresía, para poder suscribirme a un equipo.           |
| 11.4    | Como administrador deseo poder dar de baja nueva membresía, para poder suscribirme a un equipo.           |
| 12.1    | Como cliente deseo poder suscribirme a un equipo, para recibir noticias y notificaciones de este.           |
| 13.1    | Como administrador deseo poder descargar en PDF un reporte consultado, para poder tener una copia local.           |
| 13.2    | Como empleado deseo poder descargar en PDF un reporte consultado, para poder tener una copia local.           |
| 14.1    | Como cliente deseo poder participar en una quiniela, para poder optar a obtener una membresía por 2 meses.           |
| 15.1    | Como administrador deseo poder transferir un tecnico a otro equipo, para poder mantener la base de datos actualizada.           |
| 15.2    | Como empleado deseo poder transferir un tecnico a otro equipo, para poder mantener la base de datos actualizada.           |

## Casos de uso
| ID             | CDU011                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Gestionar membresía            |
|  Actores       | Cliente, Administrador         |
|  Clasificación | Primario, Real                 |
|  Descripción   | El cliente puede adquirir o canjear una membresia.<br />El administrador confirma una membresia para un cliente, también puede darle de baja a esta.     |

| ID             | CDU012                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Suscribirse a equipo           |
|  Actores       | Cliente                        |
|  Clasificación | Primario, Real                 |
|  Descripción   | Un cliente con membresía puede suscribirse a un equipo, recibir noticias y notificaciones del mismo.     |

| ID             | CDU013                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Descargar reportes             |
|  Actores       | Empleado, Administrador        |
|  Clasificación | Primario, Real                 |
|  Descripción   | Un administrador, como un empleado, pueden descargar en PDF el reporte que deseen.     |

| ID             | CDU014                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Participar en quiniela         |
|  Actores       | Cliente                        |
|  Clasificación | Primario, Real                 |
|  Descripción   | Un cliente con membresía, puede participar en una quiniela, antes de que el partido de inicio.     |

| ID             | CDU015                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Transferir técnico             |
|  Actores       | Empleado, Administrador        |
|  Clasificación | Primario, Real                 |
|  Descripción   | Un administrador o un empleado, pueden cambiar el equipo al que un entrenador pertenece.     |
