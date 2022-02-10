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
## Diagrama de Entidad Relacion
![Entidad Relacion](/assets/img/ER.png "ER")
## Diagrama de casos de uso
### Diagrama de casos de uso - Generalizado
![Diagrama de casos de uso - generalizado](/assets/img/use-case-gen.png "use cases gen")
### Diagrama de casos de uso - Detallado
![Diagrama de casos de uso - detallado](/assets/img/use-case-det.png "use cases det")
## Diagrama de actividades
!["Diagramas Actividades](/assets/img/Diagramas_actividades.png "Diagramas Actividades")
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

| ID             | CDU01                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Login  |
|  Actores       | Cliente, Administrador,Empleado         |
|  Clasificación | Primario               |
|  Descripción   | El cliente,Administrador o Empleado ingresa las credenciales para acceder a la aplicación, 
<br/> si los datos estan correctos accede a la funcionalidad de la aplicación    |

| ID             | CDU02                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Registro           |
|  Actores       | Cliente                        |
|  Clasificación | Primario                |
|  Descripción   | Un cliente accede a la pantalla de registro y ingresa sus datos de usuario y selecciona la opcion de registrarse <br/> para tener un usuario para logearse a la aplicación.     |

| ID             | CDU03                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Gestionar Partido             |
|  Actores       | Empleado, Administrador        |
|  Clasificación | Primario                |
|  Descripción   | El administrador y empleado pueden registrar los datos de un nuevo partido y cambiar su estado     |

| ID             | CDU04                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Consultar partido         |
|  Actores       | Cliente                        |
|  Clasificación | Primario                |
|  Descripción   | Un cliente puede listar los partidos por su estado y un cliente con membresia puede filtrar por equipos favoritos   |

| ID             | CDU05                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Confirmar Registro            |
|  Actores       | Cliente        |
|  Clasificación | Primario             |
|  Descripción   | Un cliente previo a llenar sus datos de registro confirmara su correo eléctronico <br/> y que si es el la persona que se registro a a la aplicación.    |


| ID             | CDU011                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Gestionar membresía            |
|  Actores       | Cliente, Administrador         |
|  Clasificación | Primario             |
|  Descripción   | El cliente puede adquirir o canjear una membresia.<br /> El administrador confirma una membresia para un cliente, también puede darle de baja a esta.     |

| ID             | CDU012                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Suscribirse a equipo           |
|  Actores       | Cliente                        |
|  Descripción   | Un cliente con membresía puede suscribirse a un equipo, recibir noticias y notificaciones del mismo.     |
|  Clasificación | Primario                |
|  Descripción   | Un cliente con membresía puede suscribirse a un equipo y recibir noticias y notificaciones del mismo.     |

| ID             | CDU013                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Descargar reportes             |
|  Actores       | Empleado, Administrador        |
|  Clasificación | Primario               |
|  Descripción   | Un administrador, como un empleado, pueden descargar en PDF el reporte que deseen.     |

| ID             | CDU014                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Participar en quiniela         |
|  Actores       | Cliente                        |
|  Clasificación | Primario                |
|  Descripción   | Un cliente con membresía, puede participar en una quiniela, antes de que el partido de inicio.     |

| ID             | CDU015                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Transferir técnico             |
|  Actores       | Empleado, Administrador        |
|  Clasificación | Primario             |
|  Descripción   | Un administrador o un empleado, pueden cambiar el equipo al que un entrenador pertenece.     |
