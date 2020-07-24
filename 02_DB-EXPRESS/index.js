const express = require('express');
const app = express();

// Levantar proceso en mi computador y buscara a las variables de enviroment (puerto activo) y si no hay puerto activo tomara el puerto 3000
const PORT = process.env.PORT || 3000; //variable de entorno 
// const { User } = require('./models/index') Es lo mismo que el de abajo, agarra por default el archivo index solo agregando la carpeta (solo funciona con el nombre index)
const { User } = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=> res.status(200).send({ message: 'Server on'}));


//  ----------   C R U D  -----------

// C r e a t e 
app.post('/api/v1/users', async (req, res) => { // Funcion asincron
    const newUser = new User(req.body); //Instancia de user
    //Las promesas pueden tener 3 estados: Resuelto, Pendiente y rechazada
    try {
        const user = await newUser.save(); //Permite guardar en la DB -  this is a PROMESS
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
    }
})

// R e a d
app.get('/api/v1/users', async(req, res) => {
    try {
        // const users = await User.find({is_active:true}); // solo traa los usuarios con is_active: true
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        console.error(error);
    }
})

app.get('/api/v1/users/:userid', async(req, res) => {
    try {
      const userId = await User.findById(req.params.userid);
      res.status(200).send(userId);
    } catch (error) {
        console.error(error);
    }
})


// U P D A T E
// Put   -  Actualizar cualquier tipo de datos o varios a la vez
app.put('/api/v1/users/:userid', async(req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.userid, req.body, {new:true}); // Sin {new:true}, no actualiza en postman, pero si en MONGODB
      res.status(200).send(user);
    } catch (error) {
        console.error(error)
    }
})

// Patch   -  Actualizar especificamente UN dato que se pasa por el {$set:THIS}
app.patch('/api/v1/users/:userid', async(req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.userid, {$set:{email:req.body.email}}, {new:true}); // Sin {new:true}, no actualiza en postman, pero si en MONGODB
      res.status(200).send(user);
    } catch (error) {
        console.error(error)
    }
})


// D E L E T E
app.delete('/api/v1/users/:userid', async(req, res) => {
    try {
        // Se utiliza findByIdAndUpdate para cambiar la propierdad de is_active, es la buena practica ante eliminar completamente el usuario
        await User.findByIdAndUpdate(req.params.userid, {$set:{is_active: false}}, {new: true});
        res.status(200).send({message: "Usuario eliminado"});
    } catch (error) {
        console.error(error)
    }
})



app.listen(PORT, (err)=> err ? console.error(err) :console.info(`Server on port ${PORT}`));

