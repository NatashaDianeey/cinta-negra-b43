const express = require('express');
const app = express();

// Levantar proceso en mi computador y buscara a las variables de enviroment (puerto activo) y si no hay puerto activo tomara el puerto 3000
const PORT = process.env.PORT || 3000; //variable de entorno 
// const { User } = require('./models/index') Es lo mismo que el de abajo, agarra por default el archivo index solo agregando la carpeta (solo funciona con el nombre index)
const { User } = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=> res.status(200).send({ message: 'Server on'}));

app.post('/api/v1/users', async (req, res) => { // Funcion asincron
    const newUser = new User(req.body) //Instancia de user

    try {
        const user = await newUser.save() //Permite guardar en la DB -  this is a PROMESS
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
    }
})

app.listen(PORT, (err)=> err ? console.error(err) :console.info(`Server on port ${PORT}`));

