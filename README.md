# Software de Telemetría

## Resumen

Este repositorio contiene el código de las aplicaciones necesarias para poder recibir y procesar la información de telemetría
remitida por el satélite.

## Contenido del repositorio

#### Directorio [arduino](./arduino/)

Esta carpeta contine el código del programa desarrollado para ser instalado en un Arduino UNO o Duemilanove.

A este Arduino se le conectará un receptor de radio de 433MHz, de manera que haga de interfaz entre el satélite y el equipo
informático encargado de procesar la inforación recibida.

#### Directorio [processing](./processing/)

Esta carpeta contine el código del programa desarrollado para interpretar y mostrar los datos transmitidos por el satélite.

Para su ejecución, será necesario disponer del software [Processing](https://processing.org/) en el equipo informático que está
recibiendo los datos.

## Licencia

[![Creaive Commons 4.0 logo](img/cc40.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
