import React from 'react';
import './surprise.css'
import Petunia from '../image/petunia.png'
import Son from '../image/Happy.mp3'

const Surprise = ({personnage}) =>{
    
    console.log(`surprise ${personnage}`)

    return(
      <div className='surprise'>
    {personnage === 'petunia'}
        <div>
            <img src={Petunia} alt='hélas'/>
        </div> 
     {personnage === 'lumpy'}
            <div>
            <audio src={Son} controls></audio>
            </div>
     {personnage === 'flippy'}  
        <div>
            <p>Courrez Vous n'avez plus aucune chance de vous en Sortir!</p>
            </div>

        <p> Vous n'avez rien choisi</p>
        </div> 
  )
    
}

export default Surprise;