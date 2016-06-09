# BSAT Telemetry

## Resumen

Este directorio contiene el código necesario para ejecutar la aplicación `BSAT Telemetry`
cuya funcionalidad principal es la de obtener los datos proporcionados por la electrónica
de abordo del satélite Boscovery SAT, procesarla y mostrarla en un dashboard.

Para el diseño de dicha aplicación, se han empleado tecnologías web siguiente HTML5,
CSS3 y Javascript (ES6). Con estas herramientas se ha diseñado e implementado la
interfaz gráficas así como la lógica de negocio.

Por otro lado, para su ejecución como aplicación residente en equipos informáticos, se
ha empleado [Electron](http://electron.atom.io/), para que se encargue de encapsular
todo el código.

El desarrollo de esta aplicación se ha iniciado para sustituir la herramienta realizada
previamente con `Processing` dado que de este modo, evitamos la utilización de Flash
y potenciamos la utilización de herramientas web multiplataforma.

## Paquetes destacados

#### [serialport](https://www.npmjs.com/package/serialport)
Este paquete nos permitirá capturar las lecturas proporcionadas por el Boscovery SAT,
obtenidas a través del puerto USB donde esté conectado el Arduino que hace de interfaz
entre el equipo informático y el satélite.

## Configuración del entorno de desarrollo

Dada la naturaleza de las herramientas empleadas para la creación de esta aplicación,
el equipo informático donde se ejecuten las tareas de desarrollo de la misma, deberá
contar con el software NodeJS instalado, así como un conjunto de herramientas adicionales.

A continuación se expone el proceso de configuración del entorno de desarrollo.

#### Instalación de NodeJS -- Pendiente

#### Instalación de dependencias de NodeJS -- Pendiente

```sh
$ npm install
```

#### Proceso de instalación -- Pendiente

### Licencia

[![Creaive Commons 4.0 logo](../img/cc40.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
