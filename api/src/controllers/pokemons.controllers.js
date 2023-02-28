const axios = require('axios')
const {Pokemon, Types} = require('../db.js')
const {PokemonsDb, getPokemons, getPokemonName  } = require('./data.controllers')


const PokemonByName = async (req, res) => {
const name = req.query.name
if(!name) {
    const frontPokemons = await getPokemons()
    frontPokemons? res.status(200).send(frontPokemons): res.status(404).json('The pokemon does not exist, please try again')
}else{
    
    try{
        const searchPokemon = await getPokemonName(name.toLowerCase().trim())
        const dataNameDb = await PokemonsDb()
        if(searchPokemon){
            res.status(200).send([searchPokemon])
        }else{
            const filterNameDb =  await dataNameDb.filter(
                el => el.name.toLowerCase().trim() === name.toLowerCase().trim())
            filterNameDb.length > 0 ? res.status(200).send([filterNameDb])
            :res.json(404).json({msg: 'The pokemon does not exist, please try again'});
        }
        
    }catch(err){
        console.log(err, 'error')
    }
}

}

module.exports = {
    PokemonByName


}





