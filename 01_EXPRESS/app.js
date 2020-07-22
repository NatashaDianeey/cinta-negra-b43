const express = require('express') //Llamamos express
const app = express() //Inicializamos express
const port = 3000
// El backend siempre recibe peticiones y envia respuestas.

// Metodo de espress para configurar y traer formatos JSON
// Se le esta diciendo al servidor que estamos utilizando un middleware y tomara la info, hara calgo con ella(transformarla en json) para regresarla al cliente
app.use(express.json()) // Permite el backene entienda formato json
app.use(express.urlencoded({extended: true})) // Permite el backene entienda archivos media


// Se crea el primer endpoint, escuchando la ruta inicial '/'
// Recibe dos parametros: ruta y funcion anonima(request, response)
// REQUEST - recibe la información más los datos del cliente y apartir de ahi RESPONDEMOS y manejamos la info
// CRUD - Read
app.get('/', (request, response) => response.send('Hello World!'))

// CRUD - Create
app.post('/users', function (request, response){
    // Recibir la info en el cuerpo de la info
    response.status(201).send(request.body.email)
});

// CRUD - Update
app.put('/users', function (request, response){
    // Recibir la info en el cuerpo de la info
    response.status(200).send(request.body.email)
});

// CRUD - Update
app.patch('/users', function (request, response){
    // Recibir la info en el cuerpo de la info
    response.status(200).send(request.body.email)
});

// CRUD - Delete
app.delete('/users', function (request, response){
    // Recibir la info en el cuerpo de la info
    response.status(200).send(request.body.email)
});


// ENVIO DE QUERIES
// Podemos recibir queries a traves de la url y el signo ? ---- ejemplo: localhost:3000/cats?name=Natasha&last_name=Lopez
app.get('/cats', function(req, resp) {
    resp.send(req.query.name);
})

// RECIBIR PARAMS
// Podemos recibir parametros a traves de la url
app.get('/cats/:id', function(req, res){
    res.send(req.params)
})


// Levantamos el servidor con el método listen
app.listen(port, function(error){
    if(!error) {
        console.info('Server on port 3000')
    } else {
        console.info(error)
    }
});
