const {Pokemon, Types} = require('../db')
const axios = require('axios')
const {url} = process.env


async function Pokemons() {
    try{
        let pokemones = []
        for(  i = 0; i <= 3; i++){
        const pokemonsAll = await axios(`https://pokeapi.co/api/v2/pokemon?offset=${i}0&limit=10`)  
        const result = await axios.all(pokemonsAll.data.results.map(async (el) => {
            const resp = await axios(el.url)
                return {
                id:resp.data.id,
                name: resp.data.name,
                hp : resp.data.stats[0].base_stat,
                attack: resp.data.stats[1].base_stat,
                defense: resp.data.stats[2].base_stat,
                speed: resp.data.stats[5].base_stat,
                image: resp.data.sprites.other.dream_world.front_default,
                height: resp.data.height,
                weight: resp.data.weight,
                types: resp.data.types?.map(el => el.type.name)
            }
        }))
        pokemones  = [...pokemones, ...result ]
        
        } return pokemones
        

    }catch(err){
        console.log(err)
    }
    }


    async function PokemonsDb () {
    try{
        const pokemonsDb = await Pokemon.findAll({
            include: {
                model: Types,
                attributes: ['name']
                
            }})
        
        const typesMap = pokemonsDb.map(el => {
            return{
                id: el.id,
                name: el.name,
                hp: el.hp,
                attack: el.attack,
                defense: el.defense,
                speed: el.speed,
                image: el.image,
                height: el.height,
                weight: el.weight,
                createdDb: true,
                types: el.types.map(el => el.name)
            }
        })
        return typesMap

    }catch(err){
        console.log(err)
    }

}


const getPokemons = async (req, res) => {
    try{
 
        const pokemons_Db = await PokemonsDb()
        const pokemonsApi = await Pokemons()
        const all_Pokemons =  [...pokemonsApi, ...pokemons_Db]
        return all_Pokemons
    }catch(err){
        console.log(err)
    }
    }


const getPokemonName = async (name) => {
    try{

        const nameApi = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const nameData = nameApi.data
            const dataApi = {
                id:nameData.id,
                name: nameData.name,
                hp : nameData.stats[0].base_stat,
                attack: nameData.stats[1].base_stat,
                defense: nameData.stats[2].base_stat,
                speed: nameData.stats[5].base_stat,
                image: nameData.sprites.other['official-artwork'].front_default,
                height: nameData.height,
                weight: nameData.weight,
                types: nameData.types?.map(el => el.type.name)
            }
            return dataApi
        }catch(err){
            console.log(err)
        }
    }

const getPokemonId = async (id) => {
    try{
        const pokemonIdApi = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const idData = pokemonIdApi.data
        const dataApiId = {
                id: idData.id,
                name: idData.name,
                hp : idData.stats[0].base_stat,
                attack: idData.stats[1].base_stat,
                defense: idData.stats[2].base_stat,
                speed: idData.stats[5].base_stat,
                image: idData.sprites.other['official-artwork'].front_default,
                height: idData.height,
                weight: idData.weight,
                types: idData.types?.map(el => el.type.name)

        } 
        console.log(dataApiId, 'dataid')
        return dataApiId

    }catch(err){
        console.log(err)
    }
}



module.exports = {
    PokemonsDb,
    getPokemons,
    getPokemonName,
    getPokemonId,
}