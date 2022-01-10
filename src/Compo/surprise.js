import React from 'react';
import './surprise.css'
import Petunia from '../image/petunia.png'
import Son from '../image/Happy.mp3'

const Surprise = ({personnage}) =>{
    const [perso, setPerso] = React.useState()
    console.log(`surprise ${personnage}`)
    const persoChange = () => {
      setPerso(!personnage)
    }


    return(
      <div className='surprise' onChange={persoChange}>
    {perso === 'petunia'}
        <div>
            <img src={Petunia} alt='hélas' width='250px'/>
        </div> 
    {perso === 'lumpy'}
            <div>
            <audio src={Son} controls></audio>
            </div>
     {perso === 'flippy'}  
        <div>
            <p>Courrez Vous n'avez plus aucune chance de vous en Sortir!</p>
            </div>

        <p> Vous n'avez rien choisi</p>
        </div> 
  )
    
}

export default Surprise;