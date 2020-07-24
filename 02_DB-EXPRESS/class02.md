# BASE DE DATOS

Conjunto de datos organizados y relacionado entre sí. Se guardan datos que despues vamos a utilizar

Propiedades
------------------
1. Independencia logica y física(pedazo en la memoria del serve) de los datos
2. Redundancia mínima (evitemos guardar los mismos datos de forma separada)
3. Acceso concurrente por parte de múltiples usuarios
4. Integridad de los datos
5. Consultas conplejas y optimizadas (una función que realmente haga esa función)
6. Seguridad de acceso y auditoría
7. Respaldo y recuperación


## Sistemas de Gestión de Base de Datos (SGBD)
Nos muestran los datos en una interfaz

## Tipos de datos SQL


### Bases de datos Relacionales
Conexión entre cada uno de los datos

#### 0RM 
Nos permite mapear los datos de una DB relacional de manera más simple


### Bases de datos NO Relacionales (colecciones)
Evitamos crear más de una tabla para los datos

#### ODM (Object Data Model)
Se utiliza para bases de datos no relacional, que permite mapear los datos para las DB No relaciones



Pasos para MongoDB
-----------------
1. Log in **www.mongodb.com**
2. Agregar usuario - Databases Access
3. Configurar el acceso - Network Acces (allow acces from anywhere)
4. En Clusters, esperar a que concluya la creacion del cluster
5. En collections, Agregar mis propios datos - Add my own Data
6. Configurar mi DB y crear
7. En mi IDE crear proyecto con: npm init -y
8. Descargar express y mongoose con: npm i express moongose
9. Descargar Nodemon (actualiza nuestro serve cada que hay cambios) con: npm i nodemon -D 
10. Agregar archivo **.gitignore**
11. Configurar archivo (index.js) para lanzar serve con express
12. 
13. Regresar a MongoDB y dar click en "Connect your aplication"
14. Elegir Node JS y copiar el link proporcionado que se usara como DB_URI en la conexion del file Model > index.js
15. Remplazar <pasword> por la contraseña que elegi en el paso 2
16. Remplazar <dbname> por la contraseña que elegi en el paso 5 
17. Crear nuestros modelos en la carpeta con el mismo nombre