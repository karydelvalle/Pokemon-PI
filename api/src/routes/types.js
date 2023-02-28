const { Router } = require('express');
const { getTypes } = require('../controllers/types.controllers')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/', getTypes)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;