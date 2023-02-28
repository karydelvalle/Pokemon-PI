const { Router } = require('express');
const { createPokemon } = require ('../controllers/create.controllers')
const { PokemonByName  } = require('../controllers/pokemons.controllers')
const { searchPokemonId  } = require('../controllers/pokemon.controllers')



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/', PokemonByName)
router.get('/:id', searchPokemonId)
router.post('/', createPokemon)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
