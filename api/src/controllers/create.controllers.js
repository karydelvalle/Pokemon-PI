const { Pokemon, Types } = require('../db')

const createPokemon = async (req, res) => {
const { name, hp, attack, defense, speed, image, height, weight, createdDb, types } = req.body
try{
    if(!name ){
        res.status(202).send('name is required')
    } else{
        const newPokemon = await Pokemon.create({
            name,
            hp,
            attack, 
            defense, 
            speed, 
            image, 
            height, 
            weight, 
            createdDb,
        })
        
        const types_Db = await Types.findAll({
            where:{
                name: types
            }})
      
        const pokemons_Types = await newPokemon.addTypes(types_Db)
        res.send(newPokemon)
        
    }

}catch(err) {
    console.log(err)
}

}

module.exports= {
    createPokemon
}