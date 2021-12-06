import React, {Component} from 'react';
import './fomulaire.css'

const Formuleaire =()=> {
    
    function isSelect (event){
        event.preventDefault()
        let valeur = document.querySelector('input[name=qui]:checked');
        alert(`tu préfères : ${valeur.value}`)
        return(valeur)
    }
        
    return(<form onSubmit={isSelect}  className="formulaire">
        <fieldset>
        
           <legend> Quel Happy tree friend vous préférez?</legend>

            <div>
            <input type= "radio"  name="qui" value ="Lumpy l'élan le plus lent " />
            <label>Lumpy</label>
            
            <input type= "radio"  name="qui" value="Flippy le tueur sanguinaire" />
            <label>Flippy</label>
            
            <input type= "radio"  name="qui"  value="Petunia le putois le plus maniaque au monde"/>
            <label>Petunia</label>
            </div>

            

            <div className="child3">
            <button type="submit" >Tadada</button>
            </div>
        </fieldset>
    </form>
    )
}

export default Formuleaire;