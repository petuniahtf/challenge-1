import React from 'react';
import './surprise.css'
import Petunia from '../image/petunia.png'
import Son from '../image/Happy.mp3'

const Surprise = ({personnage}) =>{
  
    console.log(`surprise ${personnage}`)

    

    if(personnage === 'petunia'){
      return <div >
            <img src={Petunia} alt='hélas' width='250px'/>
        </div> 

    } else if(personnage === 'lumpy'){
      return <div >
            <audio src={Son} controls></audio>
            </div>

    } else if(personnage === 'flippy'){
      return <div >
      <p>Courrez Vous n'avez plus aucune chance de vous en Sortir!</p>
      </div>

    } else {
      return <div >
      <p> Vous n'avez rien choisi</p>
      </div>

    }

}

export default Surprise;