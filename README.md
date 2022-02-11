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
  - [Algoritmo de predicción](#algoritmo-de-predicción)
- [**Diagramas**](#diagramas)
  - [Diagrama de clases](#diagrama-de-clases)
  - [Diagrama de Entidad Relacion](#diagrama-de-entidad-relacion)
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
    - [Singin](#singin)
    - [Singout](#singout)
    - [Principal](#principal)
    - [Profileuser](#profileuser)
    - [Agregar usuario](#agregar-usuario)
    - [Reportes](#reportes)
    - [Adquirir Membresia](#adquirir-membresia)
    - [Cliente Membresia](#cliente-membresia)
    - [Cliente Sin Membresia](#cliente-sin-membresia)
    - [Modulo Competencia](#modulo-competencia)
    - [Modulo Director Tecnico](#modulo-director-tecnico)
    - [Modulo Equipo](#modulo-equipo)
    - [Modulo Estadio](#modulo-estadio)
    - [Modulo Jugador](#modulo-jugador)
    - [Modulo Partido](#modulo-partido)
    - [Ppciones Empleo](#ppciones-empleo)
  - [Casos de uso](#casos-de-uso)
  - [Historias de usuario](#historias-de-usuario)

# **Descripción**
Soccer Stats es un sistema web y móvil en la cual se tendra centralizada información de partidos de futbol, se tendra disponible datos estadisticos de los equipos, y los resultados en sus partidos, en distintas compentencias, además se contará con predicciones y quinielas sobre los resultados de los partidos.

Los usuarios podrán adquirir una membresía para poder suscribirse a equipos y poder filtrar los partidos y resultados de sus distintos equipos.

## Lenguaje de programación

Los lenguajes a utilizar son:

- **Backend:** NodeJS y Python
- **Frontend:** AngularJS

## Herramientas de desarrollo a utilizar

- **Docker:** Para contenerizar los microservicios.
- **Jenkins:** Utilizado para las fases de construcción, testing y despliegue continuo.
- **NGTest:** Para las pruebas en el frontend.
- **JUnit:** Implementado para las pruebas unitarias
- **Terraform:** Utilizado para implementar la fase de IaC.

## Herramientas de metodología a utilizar

- **SCRUM:** Metodología elegida para el desarrollo del proyecto, elegida por su facilidad de colaboración y la familiaridad que se tiene con la misma.
- **Trello:** Herramienta para tener un control de las tareas por realizar, las que estan en proceso y las que ya estan terminadas.
- **Planning Pocker:** Utilizada para determinar la prioridad de las historias de usuario definidas.

## Herramientas de control de tiempo de trabajo

- **Trello:** Mediante la definición de fechas de entrega y recordatorios, cuando estas estan proximas a vencer, se hace muy útil su uso.

## Pruebas a implementar

- **Unitarias:** Llevadas a cabo para comprobar partes o fragmentos del código, asegurandose de que funcione correctamente.
- **Manuales:** Realizado por los desarrolladores involucrados, en el proyecto, para asegurar la calidad del sistema.

## Arquitectura a implementar

- **SOA (Software Oriented Architecture):** Arquitectura que permite tener distintas funcionalidades distribuidas, a modo de garantizar el funcionamiento del sistema, incluso si un microservicio dejase de funcionar.

## Algoritmo de predicción
Para realizar la predicción se utilizará la librería, de Python, Scikit-Learn y para generar graficas y manipulación de los datos Pandas.

![algoritmo](/assets/img/algoritmo.png "algoritmo")

- **Obtener resultados**
  
  Se le enviará un historial de los resultados, de ultimos encuentros entre los dos equipos que estan por disputar un partido.

- **Limpiar datos de resultados**

  Se verifica que los datos de los resultados sean válidos, de lo contrario se descartan.

- **Parametrizar datos de resultados, para definir ejes**
  
  En esta parte, se definen los datos que se ingresaran en un eje *"x"* que contendrán los resultados, ademas el eje *"y"* contendra las fechas de los encuentros.

- **Definir el grado del polinomio**
  
  El grado del polinomio se definirá dependiendo del valor de chi-cuadrado.

- **Transformar el polinomio con el grado y los datos ya definidos**
  
  Se procede a transformar los datos para ingresarlos en nuestro polinomio definido anteriormente.

- **Predecir resultado**
  
  Ya teniendo todo listo, se procede a realizar la predicción.

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
!["Diagrama Despliegue](/assets/img/Despliegue.png "Diagrama Despliegue")
## Diagrama de componentes
## Diagrama de la arquitectura
# **Documentación**
## Stakeholders
## Mockups
### Singin
!["Diagrama singin](/assets/img/singin.png "Diagrama singin")
### Singout
!["Diagrama singup](/assets/img/singup.png "Diagrama singup")

### Principal
!["Diagrama principal](/assets/img/principal.png "Diagrama principal")

### Profileuser
!["Diagrama profileuser](/assets/img/profileuser.png "Diagrama profileuser")

### Agregar usuario
!["Diagrama agregar_usuario](/assets/img/agregar_usuario.png "Diagrama singuagregar_usuariop")

### Reportes
!["Diagrama reportes](/assets/img/reportes.png "Diagrama reportes")

### Adquirir Membresia
!["Diagrama adquirirmembresia](/assets/img/adquirirmembresia.png "Diagrama adquirirmembresia")

### Cliente Membresia
!["Diagrama clientemembresia](/assets/img/clientemembresia.png "Diagrama clientemembresia")

### Cliente Sin Membresia
!["Diagrama clientesinmembresia](/assets/img/clientesinmembresia.png "Diagrama clientesinmembresia")

### Modulo Competencia
!["Diagrama modulocompetencia](/assets/img/modulocompetencia.png "Diagrama modulocompetencia")

### Modulo Director Tecnico
!["Diagrama modulodirectortecnico](/assets/img/modulodirectortecnico.png "Diagrama modulodirectortecnico")

### Modulo Equipo
!["Diagrama moduloequipo](/assets/img/moduloequipo.png "Diagrama moduloequipo")

### Modulo Estadio
!["Diagrama moduloestadio](/assets/img/moduloestadio.png "Diagrama moduloestadio")

### Modulo Jugador
!["Diagrama modulojugador](/assets/img/modulojugador.png "Diagrama modulojugador")  

### Modulo Partido
!["Diagrama modulopartido](/assets/img/modulopartido.png "Diagrama modulopartido")  

### Ppciones Empleo
!["Diagrama opcionesempleo](/assets/img/opcionesempleo.png "Diagrama opcionesempleo")  






## Casos de uso

| ID             | CDU01                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Login  |
|  Actores       | Cliente, Administrador, Empleado         |
|  Clasificación | Primario               |
|  Descripción   | El Cliente, Administrador o Empleado ingresa las credenciales para acceder a la aplicación,<br/> si los datos están correctos accede a la funcionalidad de la aplicación    |

| ID             | CDU02                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Registro           |
|  Actores       | Cliente                        |
|  Clasificación | Primario                |
|  Descripción   | Un cliente accede a la pantalla de registro y ingresa sus datos de usuario y selecciona la opcion de registrarse<br/> para tener un usuario para logearse a la aplicación.     |

| ID             | CDU03                         |
| -------------- | ------------------------------ |
|  Caso de uso   | Gestionar partido             |
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
|  Caso de uso   | Confirmar registro            |
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


## Historias de usuario

| ID   | Historia de usuario                                                                                                   |
| ---- | --------------------------------------------------------------------------------------------------------------------- |
| 1.1 | Yo como usuario quiero poder iniciar sesion en la aplicacione con mis credenciales previamente registradas             |
| 1.2 | Yo como usuario quiero que se muestre un mensaje de error si mis credenciales son invalidas                       |
| 2 | Yo como usuario quiero poder registrarme en la aplicacion para poder inicar sesion posteriormente     |
| 2.1 | Yo como usuario quiero que al registrarme se envie un correo de confirmacion al correo electrónico ingresado para confirmar el registro     |
| 3.1 | Yo como Administrador,Empleado quiero poder registrar un nuevo partido                      |
| 3.2 | Yo como Administrador,Empleado quiero poder cambiar el estado de un partido                   |
| 4.1 | Yo como cliente quiero poder consultar un partido filtrando por su estado  para reducir los resultados mostrados|
| 4.2 | Yo como cliente con mebresia quiero poder filtrar por equipos favoritos los partidos para reducir los resultados mostrados |
| 4.3 | Yo como Administrador,Empleado quiero poder cambiar el estado de un partido                   |
| 5 | Yo como usuario quiero que en el correo de confirmacion haya un link o boton para confirmar mi registro y mi identidad     |
| 11.1 | Como cliente deseo poder suscribirme a una nueva membresía, para poder suscribirme a un equipo.                       |
| 11.2 | Como cliente deseo poder cancelar una membresía, para poder suscribirme a un equipo.                                  |
| 11.3 | Como administrador deseo poder dar de alta nueva membresía, para poder suscribirme a un equipo.                       |
| 11.4 | Como administrador deseo poder dar de baja nueva membresía, para poder suscribirme a un equipo.                       |
| 12.1 | Como cliente deseo poder suscribirme a un equipo, para recibir noticias y notificaciones de este.                     |
| 13.1 | Como administrador deseo poder descargar en PDF un reporte consultado, para poder tener una copia local.              |
| 13.2 | Como empleado deseo poder descargar en PDF un reporte consultado, para poder tener una copia local.                   |
| 14.1 | Como cliente deseo poder participar en una quiniela, para poder optar a obtener una membresía por 2 meses.            |
| 15.1 | Como administrador deseo poder transferir un tecnico a otro equipo, para poder mantener la base de datos actualizada. |
| 15.2 | Como empleado deseo poder transferir un tecnico a otro equipo, para poder mantener la base de datos actualizada.      |
