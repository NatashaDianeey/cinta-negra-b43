const express = require('express');
const router = express.Router();
const catRoutes = require('./catRoutes')

router.get('/', (req, res) => res.status(200).send({ message:"Server on" }));

router.use(catRoutes); //Aqui se guardan más rutas

module.exports = router