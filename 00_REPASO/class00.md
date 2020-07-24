# REST API

Conceptos Básicos
---------------
* TCP/IP: Transfer control protocol/Internet Protocol. Este modelo es un protocolo para comunicación en redes que permite que un equipo pueda comunicarse dentro de una red.
* API: Application Programming Interface. Es un conjunto de reglas (código) y especificaciones que las aplicaciones pueden seguir para comunicarse entre ellas.
* HTTP: Se encarga de la comunicación entre un servidor web y un navegador web. HTTP se utiliza para enviar las peticiones de un cliente web (navegador) a un servidor web, volviendo contenido web (páginas web) desde el servidor al cliente..
* HTTPS: Lo mismo pero más seguro. La información viaja de manera segura y encriptada mediante un certificado SSL/TLS.
* Métodos HTTP: Los métodos HTTP permiten comunicar al servidor lo que se                      quiere realizar con un resource bajo una URL.  
* URL: Uniform Resource Locator (Localizador Uniforme de Recursos) que se utiliza              para identificar un recurso, y es un subconjunto de URI.
* URN: Uniform Resource Name, o Nombre Uniforme de Recursos. Son unas cadenas de texto que se usan para nombrar recursos en Internet para su identificación.   
* URI: (Uniform Resource Identifier) ofrece una manera más simple y extensible de      identificar un recurso.  Las URI engloban URL y URN

Otros Protocolos Web
---------------
* FTP: File transfer protocol, como su nombre lo indica es un protocolo para transferencia de archivos
* SMTP: Simple Mail Transfer Protocol.
* IMAP: Internet Message Access Protocol.
* POP: Post Office Protocol.
* SSL: Secure Sockets Layer.
* TLS: Transport Layer Security
* SMTP: Simple Mail Transfer Protocol.
* IMAP: Internet Message Access Protocol.
* POP: Post Office Protocol. 

#### Filtrado y otras operaciones

## CRUD 
*CREATE - READ - UPDATE - DELETE

## Status Codes
* HTTP status ranges in a nutshell:
1xx: hold on
2xx: here you go (todo bien)
3xx: go away (camino incorrrecto)
4xx: you fucked up
5xx: i fucked up

## Best Practices
*REST siempre debe enviar y aceptar JSON como Content-Type
*Usar codigo en ingles
*Usa sustantitivos en las rutas en vez de verbos
    /employes/22134
*Usa sustativos en plural en vez de singular
    /cars
*Utilizar subrecursos para relaciones
    /employees/711/addresses #Obtinen todas las direcciones del empleado 711.
    /employees/711/addresses/2 #Obtinen la dirección 2 del empleado 711.
*Siempre utiliza el Header Content-Type para especificar el tipo de contenido del request y response.
*Provee Filtrado, Sorting, Field Selection y Pagination para las colecciones y gran cumulo de datos.
*Versiona tu API.
*Usa Status Codes de HTTP para capturar errores.
*Usa mensajes de error descriptivos.
