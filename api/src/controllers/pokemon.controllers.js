const axios = require('axios')
const {Pokemon, Types} = require('../db.js')
const { getPokemonId, PokemonsDb} = require ('./data.controllers')



const searchPokemonId = async (req, res) => {
    const id = req.params.id
    
        try{
            const searchByIdApi = await getPokemonId(id)
            const searchByIdDb = await PokemonsDb()
            console.log(searchByIdApi, 'api')
            console.log(searchByIdDb, 'db')

            if(searchByIdApi){
                res.status(200).send(searchByIdApi)
            }else{
                const filterById = await searchByIdDb.filter(el => el.id === id)
                filterById.length > 0  ? res.status(200).send(filterById)
                :res.status(404).send('The pokemon does not exist, please try again')
            }

        }catch(err){
            console.log(err, 'error')
        }
   }


module.exports = {
    searchPokemonId,


}