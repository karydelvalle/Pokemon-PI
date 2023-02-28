import React from 'react'
import styles from './css/Created.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getTypes, postCreated } from '../redux/action'


export const Created = () => {

  const dispatch = useDispatch()
  const types = useSelector(state => state.types)
  const [input, setInput] = useState({  //estado para seter los inputs

    name: '',
    hp: '',
    attack: '',
    defense:'',
    speed:'',
    height:'',
    weight:'',
    types:[],
    image:''
})

//---------------------------------------------------------------------------------------//

const [error, setError] = useState({
  name: '',
  image: '',
  height: '',
  weight: '',
  hp: '',
  attack: '',
  defense: '',
  speed: '',
  types:''
});

//-----------------------------------------------------------------------------------//

useEffect(() => {
  dispatch(getTypes())

 }, [])


 const handledInputChange = (e) => {
  setInput({
    ...input,
    [e.target.name] : e.target.value
  })

  setError (
    validation({
      ...input,
      [e.target.name] : e.target.value
    })
  )
}

const handledInputCheckbox = (e) => {

   if(input.types.includes(e.target.value)){ 
    
    setInput({
      ...input,
      types: input.types.filter(el => el !== e.target.value)
    })
   }else{
    setInput({
      ...input,
      types: [...input.types, e.target.value]
    })
   }
}

const handledSubmit = (e) => {
    e.preventDefault()
    let error = validation(input)
    if(Object.entries(error).length > 0){
      alert('Enter the data correctly')
    }else{
      dispatch(postCreated( ))
      setInput({
            name: "",
            hp:0,
            attack:0,
            defense:0,
            speed:0,
            height:0,
            weight:0,
            types:[],
      })
      alert('Your Pokemon was created')
    }
}







return (
    <div  className = {styles.containercreated}>
       <div className = {styles.navlinks}>
        <Link  className = {styles.linkhome}to='/home'>
        <p className = {styles.linkshome}>HoMe</p>
        </Link>
        <p className = {styles.linksdetails}>CrEaTeD</p>
        <Link  className = {styles.linkhome}to='/'>
        <p className = {styles.linkscreate}>InCiO</p>
        </Link>

      </div>

      
      <form onSubmit={e => handledSubmit(e)}>

      <div className= {styles.infodetails}>

      <div className = {styles.name} >
      <input 
      className= {styles.inputname } 
      placeholder = 'Pokemons Name'
      type="text"
      value={input.name} 
      name = 'name'
      onChange = { e => handledInputChange(e)}
      />
      {error.name ? <p className = {styles.inputerrornameview}>{error.name}</p> : <></>}
      </div>
      

      <div>
      <input 
      className= {styles.inputhp} 
      placeholder = 'Hp'
      label = 'Hp'
      type="number" 
      onChange = { e => handledInputChange(e)}
      value = {input.hp}
      name = 'hp'
      />
      {error.hp ? <p className = {styles.inputerrorhpview}>{error.hp}</p> : <></>}
      </div>

      <div>
      <input 
      className= {styles.inputattack} 
      placeholder = 'Attack'
      type="number" 
      onChange = { e => handledInputChange(e)}
      value = {input.attack}
      name = 'attack'
      />
      {error.attack ? <p className = {styles.inputerrorattackview}>{error.attack}</p> : <></>}
      </div>



      <div>
      <input 
      className= {styles.inputdefense} 
      placeholder = 'Defense'
      type="number" 
      onChange = { e => handledInputChange(e)}
      value = {input.defense}
      name = 'defense'
      />
      {error.defense ? <p className = {styles.inputerrordefenseview}>{error.defense}</p> : <></>}
      </div> 

      <div>
      <input 
      className= {styles.inputspeed} 
      placeholder = 'Speed'
      type="number" 
      onChange = { e => handledInputChange(e)}
      value = {input.speed}
      name = 'speed'
      />
      {error.speed ? <p className = {styles.inputerrorspeedview}>{error.speed}</p> : <></>}
      </div>

      <div>
      <input 
      className= {styles.inputheight} 
      placeholder = 'Height'
      type="number" 
      onChange = { e => handledInputChange(e)}
      value = {input.height}
      name = 'height'
      />
      {error.height ? <p className = {styles.inputerrorheightview}>{error.height}</p> : <></>}
      </div>

      <div>
      <input 
      className= {styles.inputweight} 
      placeholder = 'Weight'
      type="number" 
      onChange = { e => handledInputChange(e)}
      value = {input.weight}
      name = 'weight'
      />
      {error.weight? <p className = {styles.inputerrorweightview}>{error.weight}</p> : <></>}
      </div>

      <div>
        <input 
          className= {styles.inputimage} 
          placeholder = 'Load Image'
          type="text" 
          onChange = { e => handledInputChange(e)}
          value = {input.image}
          name = 'image'
          />
        </div>

        <div className={styles.typessadd}>
        <h3 className = {styles.title}>Select Types</h3>
        <div className= {styles.selecttypes}>
        {types?.map((type) => (
            <div className={styles.types} key={type}>
            <input type="checkbo" name="types"  value={type}  onChange=  { e => handledInputCheckbox(e)}/>
            <label htmlFor={type}>{type}</label>
                                    </div>
                                ))}
          {validation(input).types ? (<p className={styles.typesview}>{validation(input).types}</p>) : (<></>)}
        </div>
        

        </div>

        <div>
        <button className={styles.btnform} 
        type = 'submit'
        onSubmit = {e => handledSubmit(e)}
        disabled = {Object.keys(validation(input)).length !== 0 ? true : false}
        
        
        >EnViAr</button>
        </div>

        </div>

        </form> 

    </div>
  )
}


const validation = (input) => {
  let error ={}
    
    const onlyLetter = new RegExp('^[A-Z]+$', 'i');
    if (!input.name) error.name = 'Name is required'
    
    
    else if(input.name.length>15) error.name = "Max 15 Characters"
    else if(!onlyLetter.test(input.name)) error.name = "Only Letters" 

  if(input.hp<0 || input.hp>100) error.hp = 'Number between 0 and 100'

  if(input.attack<0 || input.attack>100) error.attack = 'Number between 0 and 100'

  if(input.attack<0 || input.attack>100) error.attack = 'Number between 0 and 100'

  if(input.defense<0 || input.defense>100) error.defense = 'Number between 0 and 100'

  if(input.speed<0 || input.speed>100) error.speed = 'Number between 0 and 100'

  if(input.height<0 || input.height>100) error.height = 'Number between 0 and 100'

  if(input.weight<0 || input.weight>100) error.weight = 'Number between 0 and 100'

  if(input.types.length < 2 || input.types.length >2) error.types = "Select at least 1 type max 2"

  
  return error




}
