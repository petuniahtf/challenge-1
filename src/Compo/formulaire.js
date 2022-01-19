import React from 'react';
import './fomulaire.css'

const Formuleaire = ({onPersonnageChange, onSurnameChange, onCastorChange}) => {

    const [ personnage, setPersonnage] = React.useState('');
    const [surname, setSurname] = React.useState('')
    const [castor, setCastor] = React.useState('')

    function isSelect(event) {
        event.preventDefault()
        //alert(`tu préfères : ${personnage}`) 
        onPersonnageChange(personnage)
    }

    const handleChange = event => {
        //console.log(event.target.value)
        setPersonnage(event.target.value)
    }

    const handleSurnameChange = event =>{
        event.preventDefault()
        //console.log(event.target.value)
        setSurname(event.target.value)
        onSurnameChange(surname)
    }

    // const handleCastorChange = event => {
    //     event.preventDefault()
    //     setCastor(event.target.value)
    //     onCastorChange(castor)
    // }

    return (<>
        <form onSubmit={isSelect} className="formulaire">
        <fieldset>

            <legend> Quel Happy tree friend vous préférez?</legend>

            <div>
                <input type="radio" name="qui" value="lumpy" checked={ personnage === 'lumpy'} onChange={handleChange} />
                <label>Lumpy</label>

                <input type="radio" name="qui" value="flippy" checked={personnage === 'flippy'} onChange={handleChange} />
                <label>Flippy</label>

                <input type="radio" name="qui" value="petunia" checked={personnage === 'petunia'} onChange={handleChange} />
                <label>Petunia</label>
            </div>

            <div className="child3">
                <button type="submit"  >Tadada</button>
            </div>
            
        </fieldset>

        <input type='text' placeholder='entrez votre surnom' onChange={handleSurnameChange} ></input>
  
    </form>
    </>
    )
}

export default Formuleaire;