const { Types } = require('../db.js')
const axios = require ('axios')
const { url_type } = process.env


const loadTypes = async () =>{
const URL_Types = url_type
try{
    const types = await axios(URL_Types)
    const data_Types = types.data.results.map(type => type.name )
    return data_Types

}catch(err){
    console.log(err)
}
}

const load_Types_Db = async () => {
    try{
    const db_Types = await loadTypes()
            db_Types.forEach(el => {
                Types.findOrCreate({
                    where: { name: el}
                })
            })
    }catch(err){
        console.log(err)
    }
}

const getTypes = async (req, res) => {
    try{
        const allTypes = await loadTypes()
        res.send(allTypes)
    }catch(err){
        res.send('error loading types')
    }}

module.exports = {
    getTypes,
    load_Types_Db
}